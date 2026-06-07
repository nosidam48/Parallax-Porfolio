$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $("#GER").on("click", function(){
        $("#about").text("Über mich");
        $("#bio").text("Full-Stack-Webentwickler mit Sitz in Hamburg, spezialisiert auf React, TypeScript, Node.js und AWS. Mehrjährige Berufserfahrung in der Entwicklung komplexer Webprodukte — von der Migration von Legacy-PHP-Anwendungen zu modernen React/TypeScript-Stacks über die Erstellung von Component Libraries bis hin zur Bereitstellung zuverlässiger Full-Stack-Systeme mit automatisierten Workflows auf AWS. Erfahren mit Jest, Cypress, Chakra UI und Next.js im Frontend sowie Backend-Entwicklung mit Node.js, Java und Go. Absolvent des UCF Full Stack Bootcamps, gewohnt an agile Scrum-Teams und bereichsübergreifende Zusammenarbeit. Mit Leidenschaft für kontinuierliches Lernen und die Entwicklung gut getesteter, wartbarer Software.");
        $("#professional-title").text("Berufliche Projekte");
        $("#personal-title").text("Zum Spaß (Persönliche Projekte)");
        $("#contact-title").text("Kontakt");
        $("#nav-resume").text("Lebenslauf");
        $("#resume").text("Link zum Lebenslauf");
    });

    $("#USA").on("click", function(){
        $("#about").text("About Me");
        $("#bio").text("Full stack web developer based in Hamburg, Germany specializing in React, TypeScript, Node.js, and AWS. Several years of professional experience building complex web products — migrating legacy PHP to modern React/TypeScript stacks, creating component libraries, and deploying reliable full-stack systems with automated workflows on AWS. Proficient with Jest, Cypress, Chakra UI, and Next.js on the frontend, with backend work spanning Node.js, Java, and Go. UCF Full Stack Bootcamp graduate accustomed to agile scrum teams and cross-functional collaboration. Passionate about continuous learning and shipping well-tested, maintainable code.");
        $("#professional-title").text("Professional Projects");
        $("#personal-title").text("Just for Fun (Personal Projects)");
        $("#contact-title").text("Contact");
        $("#nav-resume").text("Resume");
        $("#resume").text("Link to Resume");
    });
});
