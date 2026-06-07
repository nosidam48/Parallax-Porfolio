const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

function getDocumentFromIndexHtml() {
  const dom = new JSDOM(indexHtml);
  return dom.window.document;
}

function textContent(id, document) {
  return document.getElementById(id).textContent.trim();
}

describe('language switch', () => {
  let $;
  let pageDocument;

  beforeEach(async () => {
    ({ $, document: pageDocument } = await loadPortfolioPage());
  });

  test('loads the page in English by default', () => {
    expect(textContent('about', pageDocument)).toBe('About Me');
    expect(textContent('professional-title', pageDocument)).toBe('Professional Projects');
    expect(textContent('personal-title', pageDocument)).toBe('Just for Fun (Personal Projects)');
    expect(textContent('contact-title', pageDocument)).toBe('Contact');
    expect(textContent('nav-resume', pageDocument)).toBe('Resume');
    expect(textContent('resume', pageDocument)).toBe('Link to Resume');
    expect(textContent('bio', pageDocument)).toMatch(/^Full stack web developer based in Hamburg/);
  });

  test('switches to German when the German flag is clicked', () => {
    pageDocument.getElementById('GER').click();

    expect(textContent('about', pageDocument)).toBe('Über mich');
    expect(textContent('professional-title', pageDocument)).toBe('Berufliche Projekte');
    expect(textContent('personal-title', pageDocument)).toBe('Zum Spaß (Persönliche Projekte)');
    expect(textContent('contact-title', pageDocument)).toBe('Kontakt');
    expect(textContent('nav-resume', pageDocument)).toBe('Lebenslauf');
    expect(textContent('resume', pageDocument)).toBe('Link zum Lebenslauf');
    expect(textContent('bio', pageDocument)).toMatch(/^Full-Stack-Webentwickler mit Sitz in Hamburg/);
  });

  test('switches back to English when the US flag is clicked', () => {
    pageDocument.getElementById('GER').click();
    pageDocument.getElementById('USA').click();

    expect(textContent('about', pageDocument)).toBe('About Me');
    expect(textContent('professional-title', pageDocument)).toBe('Professional Projects');
    expect(textContent('personal-title', pageDocument)).toBe('Just for Fun (Personal Projects)');
    expect(textContent('contact-title', pageDocument)).toBe('Contact');
    expect(textContent('nav-resume', pageDocument)).toBe('Resume');
    expect(textContent('resume', pageDocument)).toBe('Link to Resume');
    expect(textContent('bio', pageDocument)).toMatch(/^Full stack web developer based in Hamburg/);
  });
});

describe('links', () => {
  let document;

  beforeEach(() => {
    document = getDocumentFromIndexHtml();
  });

  test('resume links point to the local PDF', () => {
    const navResume = document.getElementById('nav-resume');
    const footerResume = document.getElementById('resume').closest('a');

    expect(navResume.getAttribute('href')).toBe('assets/Resume.pdf');
    expect(footerResume.getAttribute('href')).toBe('assets/Resume.pdf');
    expect(navResume.getAttribute('target')).toBe('_blank');
    expect(footerResume.getAttribute('target')).toBe('_blank');
  });

  test('social links are present and open in a new tab', () => {
    const github = document.querySelector('a[href="https://github.com/nosidam48"]');
    const linkedin = document.querySelector('a[href="https://www.linkedin.com/in/madison-tift-281843170/"]');

    expect(github).not.toBeNull();
    expect(linkedin).not.toBeNull();
    expect(github.getAttribute('target')).toBe('_blank');
    expect(linkedin.getAttribute('target')).toBe('_blank');
  });

  test('professional project links are present', () => {
    expect(document.querySelector('a[href="http://www.taxdoo.com/de"]')).not.toBeNull();
    expect(document.querySelector('a[href="https://lokalportal.de"]')).not.toBeNull();
  });

  test('personal project demo and GitHub links are present', () => {
    const expectedLinks = [
      'https://firefly-scramble.herokuapp.com/',
      'https://github.com/nosidam48/Firefly-Scramble',
      'https://nosidam48.github.io/Simpsons-Trivia-Time/',
      'https://github.com/nosidam48/Simpsons-Trivia-Time',
      'https://nosidam48.github.io/NBA-GIFS-ALL-DAY/',
      'https://github.com/nosidam48/NBA-GIFS-ALL-DAY',
      'https://nosidam48.github.io/DBZ-Battle-Zone/',
      'https://github.com/nosidam48/DBZ-Battle-Zone',
    ];

    expectedLinks.forEach((href) => {
      const link = document.querySelector(`a[href="${href}"]`);
      expect(link).not.toBeNull();
      expect(link.getAttribute('target')).toBe('_blank');
    });
  });
});
