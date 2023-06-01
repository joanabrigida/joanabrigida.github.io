/*alert("bibopbupbibbopbbup");

console.log(js);

for (var 1 = 1; i < 30; i++) {

    console.log('Exercício 1 Repetição' + 1 + 'O')
}*/


var anchor = document.querySelector("#main-navigation").querySelectorAll("a");

for (var i = 0; i < anchor.length; i++) {
    if (window.location.href === anchor[i].href) {
        anchor[i].classList.add("active");
    }

    if (window.location.href.indexOf("portfolio") > -1) {
        document.body.classList.add("portfolio");
    } else if (window.location.href.indexOf("Contacts") > -1) {
        document.body.classList.add("Contacts");
    } else {
        document.body.classList.add("home");
    }

}

