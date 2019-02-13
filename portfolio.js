$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $("#GER").on("click", function(){
        $("#about").text("Über mich")
        $("#bio").text("Full Stack Webentwickler, spezialisiert auf Javascript, Node.js und React with a Leidenschaft für das Programmieren Logik. Teilnahme am UCF Full-Stack-Bootcamp, um Talente zu verbessern. Genießt Verwendung einzigartiger Fähigkeiten erworben durch eine liberale Kunstausbildung sowie verschiedene Jobs im Kundenservice, einschließlich Management Rollen, um Probleme effizient lösen und nahtlos integrieren zu können kollaborative Rollen. Begeistern Sie sich dafür, verschiedene Wege zu finden, Probleme anzugreifen und mit ihnen zusammenzuarbeiten andere um Lernen Sie schnell und optimieren Sie die Ausgabe.")
    })

    $("#USA").on("click", function(){
        $("#about").text("About Me")
        $("#bio").text("Full stack web developer specializing in Javascript, Node.js and React with a passion for programming logic. Participated in the UCF Full-Stack bootcamp to hone talents. Enjoys utilizing unique skill-set gained from a liberal arts education as well as various jobs in customer service, including management roles, in order to problem solve efficiently and integrate seamlessly into collaborative roles. Passionate about finding different ways to attack problems and collaborating with others in order to learn quickly and optimize output")
    })
});
