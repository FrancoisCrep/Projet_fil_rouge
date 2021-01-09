const gauche = document.getElementById("gauche");
const droite = document.getElementById("droite");
const hiddenClassLeft = gauche.querySelectorAll(".hidden");
const hiddenClassRight = droite.querySelectorAll(".hidden");


/**
 * Quand je rentre ma souris sur la div, tous les elements de gauche
 * ".hidden" deviennent visibles
 * */

gauche.addEventListener('mouseover', function(){
    for (let i = 0; i < hiddenClassLeft.length; i++) {
        hiddenClassLeft[i].style.visibility = "visible";
        hiddenClassLeft[i].style.opacity = "1"; 
    }
});

/**
 * Quand je sors ma souris de la div, tous les elements de gauche
 * ".hidden" redeviennent cachés
 * */

gauche.addEventListener('mouseout', function(){
    for (let i = 0; i < hiddenClassLeft.length; i++) {
        hiddenClassLeft[i].style.visibility = "hidden";
        hiddenClassLeft[i].style.opacity = "0";
    }
})


droite.addEventListener('mouseover', function(){
    for (let i = 0; i < hiddenClassRight.length; i++) {
        hiddenClassRight[i].style.visibility = "visible";
        hiddenClassRight[i].style.opacity = "1"; 
    }
});

droite.addEventListener('mouseout', function(){
    for (let i = 0; i < hiddenClassRight.length; i++) {
        hiddenClassRight[i].style.visibility = "hidden";
        hiddenClassRight[i].style.opacity = "0";
    }
})