let menuOuvert = false

document.querySelector("#menu").addEventListener("click", function () {

    document.querySelector("#NavMain").classList.toggle("show");

    if (menuOuvert == false) {
        console.log("coucou");
        menuOuvert = true;
        document.querySelector("#menuImg").src = "./Ressources/fleche_menu_ouvert.png";

    } else {
        console.log("byebye");
        menuOuvert = false;
        document.querySelector("#menuImg").src = "./Ressources/fleche_menu_fermé.png";

    }
})