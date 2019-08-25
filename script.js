const navButton = document.querySelector('.nav-button');


navButton.addEventListener('click', toggleClose);

function toggleClose() {
    navButton.classList.toggle('close');
}



const screenOne = document.querySelector('.screen1');
const screenTwo = document.querySelector('.screen2');
const screenThree = document.querySelector('.screen3');
// console.log(screenOne, screenTwo, screenThree);

screenOne.style.animation = "resize 3.2s ease .01s alternate";


screenOne.addEventListener('animationend', () => {
    screenTwo.style.animation = "resize 3.2s ease .001s alternate";
    screenOne.style.animation = "none";
});
screenTwo.addEventListener('animationend', () => {
    screenThree.style.animation = "resize 3.2s ease .001s alternate";
    screenTwo.style.animation = "none";
});
screenThree.addEventListener('animationend', () => {
    screenOne.style.animation = "resize 3.2s ease .001s alternate";
    screenThree.style.animation = "none";
});


//---------------------------------------------------------------
const opinionOne = document.querySelector('.opinion1');
const opinionTwo = document.querySelector('.opinion2');
const opinionThree = document.querySelector('.opinion3');
const opinionFour = document.querySelector('.opinion4');

const opinionAll = document.querySelector('.opinion__container');


const bulletOne = document.querySelector('.bullet.bullet1');
const bulletTwo = document.querySelector('.bullet.bullet2');
const bulletThree = document.querySelector('.bullet.bullet3');
const bulletFour = document.querySelector('.bullet.bullet4');

bulletOne.addEventListener('click', changeBulletOneToFilled);
bulletTwo.addEventListener('click', changeBulletTwoToFilled);
bulletThree.addEventListener('click', changeBulletThreeToFilled);
bulletFour.addEventListener('click', changeBulletFourToFilled);


function changeBulletOneToFilled() {
    bulletOne.style.background = "var(--secondary-blue-color)";
    // console.log('clicked');
    bulletTwo.style.background = "none";
    bulletThree.style.background = "none";
    bulletFour.style.background = "none";

    opinionAll.style.animation = "moveToLeftOne 0.5s ease forwards";
}

function changeBulletTwoToFilled() {
    bulletTwo.style.background = "var(--secondary-blue-color)";
    // console.log('clicked');
    bulletOne.style.background = "none";
    bulletThree.style.background = "none";
    bulletFour.style.background = "none";

    opinionAll.style.animation = "moveToLeftTwo 0.5s ease forwards";
}

function changeBulletThreeToFilled() {
    bulletThree.style.backgroundColor = "var(--secondary-blue-color)";
    // console.log('clicked');
    bulletOne.style.background = "none";
    bulletTwo.style.background = "none";
    bulletFour.style.background = "none";
    opinionAll.style.transform = "translateX(-50%)";

    opinionAll.style.animation = "moveToLeftThree 0.5s ease forwards";

}

function changeBulletFourToFilled() {
    bulletFour.style.background = "var(--secondary-blue-color)";
    // console.log('clicked');
    bulletOne.style.background = "none";
    bulletTwo.style.background = "none";
    bulletThree.style.background = "none";

    opinionAll.style.animation = "moveToLeftFour 0.5s ease forwards";
}