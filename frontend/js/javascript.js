/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var menu = document.querySelectorAll('header ul li');
var toonKnop = document.querySelector('#toonMenu');
var verbergKnop = document.querySelector('#verbergMenu');

function toonMenu() {
    toonKnop.classList.add('onzichtbaarId1');
    toonKnop.classList.remove('zichtbaarId1');
    verbergKnop.classList.add('zichtbaarId2');
    verbergKnop.classList.remove('onzichtbaarId2');
    
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.add('zichtbaar');
        menu[i].classList.remove('onzichtbaar');
    }
}

function verbergMenu() {
    toonKnop.classList.remove('onzichtbaarId1');
    toonKnop.classList.add('zichtbaarId1');
    verbergKnop.classList.remove('zichtbaarId2');
    verbergKnop.classList.add('onzichtbaarId2');
    
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.add('onzichtbaar');
        menu[i].classList.remove('zichtbaar');
    }
}

toonKnop.addEventListener('click', toonMenu);
verbergKnop.addEventListener('click', verbergMenu);
