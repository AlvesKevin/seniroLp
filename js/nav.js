// Récupération des éléments HTML à modifier
const body = document.querySelector('body');
const title = document.querySelector('.title');
const cards = document.querySelectorAll('.card');

function logement(){
    // Modification des couleurs des éléments HTML
    document.getElementById("titleLogement").style.backgroundColor = "blue";
    title.style.backgroundColor = 'blue';
    title.style.color = 'white';
    cards.forEach(card => {
        card.style.backgroundColor = 'blue';
        card.style.color = 'white';
    });
}