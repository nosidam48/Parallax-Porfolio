const fs = require('fs');
const path = require('path');
const { TextDecoder, TextEncoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');
const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const jquerySource = fs.readFileSync(require.resolve('jquery/dist/jquery.js'), 'utf8');

function injectScript(window, source) {
  const script = window.document.createElement('script');
  script.textContent = source;
  window.document.head.appendChild(script);
}

function waitForDocumentReady(window) {
  return new Promise((resolve) => {
    window.jQuery(window.document).ready(resolve);
  });
}

global.loadPortfolioPage = async function loadPortfolioPage() {
  const parsed = new JSDOM(indexHtml);
  const bodyHtml = parsed.window.document.body.innerHTML;

  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', {
    url: 'http://localhost/',
    runScripts: 'dangerously',
  });
  const { window } = dom;

  injectScript(window, jquerySource);
  window.document.body.innerHTML = bodyHtml;

  const $ = window.jQuery;
  window.$ = window.jQuery = $;
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
  global.$ = global.jQuery = $;

  $.fn.sidenav = jest.fn(function sidenav() {
    return this;
  });
  $.fn.parallax = jest.fn(function parallax() {
    return this;
  });

  jest.resetModules();
  require('../portfolio.js');
  await waitForDocumentReady(window);

  return { $, document: window.document };
};
