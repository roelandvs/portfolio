/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

//variabelen voor afbeeldingen, klik en terugkeer naar normaal hoofd
var hamburger = document.querySelector('#burger');
var spruitjes = document.querySelector('#spruitjes');
var xtc = document.querySelector('#xtc');
var thee = document.querySelector('#thee');
var pokeball = document.querySelector('#pokeball');
var klik = 1;

//healthbar opbouw
var healthBar = document.querySelector('#health');
var health = 100;
//zodat de daling herhaald wordt
var herhaalDaling = setInterval(healthDaalt, 50);

//gebruik Xtc
var pillen = 0;

//zodat hij weer terug naar 0 pillen gaat na feedXtc feedThee
function xtcGebruik() {
    pillen = 0;
}

//normaal hoofd
function normaalHoofd() {
    document.querySelector('#hoofd').src = 'img/normaal.png';
}

// functies health er bij, hoofd reactie en hoofd terug
function feedHamburger() {
    if (health >= 70) {
        health = 100;
        document.querySelector('#hoofd').src = 'img/blij.png';
        window.setTimeout(normaalHoofd, 2000);
    } else if ((health < 70) && (health > 0)) {
        health = health + 30;
        document.querySelector('#hoofd').src = 'img/blij.png';
        window.setTimeout(normaalHoofd, 2000);
    }
}

function feedSpruitjes() {
    if ((health < 100) && (health > 0)){
        health = health - 5;
        document.querySelector('#hoofd').src = 'img/boos.png';
        window.setTimeout(normaalHoofd, 2000);
        //geen else, omdat hij als hij dood (health = 0) is niet boos moet kijken
    }
}

function feedXtc() {
    if (health > 0) {
        pillen = 1;
        document.querySelector('#hoofd').src = 'img/verward.png';
        //pillen terug naar 0
        window.setTimeout(xtcGebruik, 2000);
        window.setTimeout(normaalHoofd, 2000);
    }
}

function feedThee() {
    if (health > 0) {
        //pillen is niet logisch, maar komt in de functie healthDaalt goed uit
        pillen = 3;
        document.querySelector('#hoofd').src = 'img/tevreden.png';
        //pillen terug naar 0
        window.setTimeout(xtcGebruik, 4000);
        window.setTimeout(normaalHoofd, 4000);
    }
}

//functie pokeball in
function verdwijn() {
    if (klik === 1) {
        document.querySelector('#hoofd').style.display = 'none';
        document.querySelector('#lichaam').style.display = 'none';
        healthBar.style.display = 'none';
        document.querySelector('#grijzeBalk').style.display = 'none';
        klik = 2;
    } else {
        normaalHoofd();
        document.querySelector('#hoofd').style.display = 'inline';
        document.querySelector('#lichaam').style.display = 'inline';
        document.querySelector('#health').style.display = 'inline';
        document.querySelector('#grijzeBalk').style.display = 'inline';
        health = 100;
        klik = 1;
    }
}

//klik event listeners
hamburger.addEventListener('click', feedHamburger);
spruitjes.addEventListener('click', feedSpruitjes);
xtc.addEventListener('click', feedXtc);
thee.addEventListener('click', feedThee);
pokeball.addEventListener('click', verdwijn);

function healthDaalt() {
    //gelijk aan health stellen zodat je niet met de pixels van width moet werken, maar met health(100)
    healthBar.style.width = health * 5 + 'px';

    if (pillen === 0) {
        health = health - 0.5;
        if ((health < 100) && (health > 70)) {
            healthBar.style.backgroundColor = "green";
        } else if ((health <= 70) && (health > 20)) {
            healthBar.style.backgroundColor = "#F5D834";
        } else if ((health <= 20) && (health > 0)) {
            healthBar.style.backgroundColor = "red";
        } else {
            document.querySelector('#hoofd').src = 'img/dood.png';
            healthBar.style.display = "none";
        }
    } else if (pillen === 3) {
        health = health - 0.2;
        if ((health < 100) && (health > 70)) {
            healthBar.style.backgroundColor = "green";
        } else if ((health <= 70) && (health > 20)) {
            healthBar.style.backgroundColor = "#F5D834";
        } else if ((health <= 20) && (health > 0)) {
            healthBar.style.backgroundColor = "red";
        } else {
            document.querySelector('#hoofd').src = 'img/dood.png';
            healthBar.style.display = "none";
        }
    }
}
//
//var meta = ['Roeland van Stee, ', '500807435, ', 'M&I, ', '10-06-19'];
//
//for (var i = 0; i < meta.length; i++) {
//    document.querySelector('#metadata').textContent += meta[i];
//}

