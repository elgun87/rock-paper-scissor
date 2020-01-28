let variantlar = ['r','p','s'];
let userScore = 0;
let compScore = 0;
let secim = 0;
let beraber = 0;

function getRandomInteger(min,max) {
    let rand = Math.random();
    let rand_integer = rand * (max - min) + min;
    rand_integer = Math.round(rand_integer);
    return rand_integer;
}

function IstifadeciSecimEt (e) {
    let userChoise = e.key;

    if(userChoise != 'r' && userChoise != 's' && userChoise != 'p') {
        secim ++;
        document.getElementById('current-result').innerHTML = "Sizin seciminiz dogru deyil" + " " + secim;
        return false;
    }
    let i = getRandomInteger(0,variantlar.length-1);
    let compChoise = variantlar[i];

    if(compChoise == userChoise){
        beraber ++;
        document.getElementById('beraber-secim').innerHTML = 'Secimler beraberdir :' + compChoise + " " + userChoise + " " + beraber;
    } 
    else if (compChoise == 'r' && userChoise == 's'){
        compScore ++;
        document.getElementById('comp-choise').innerHTML = 'Computer Won';
        document.getElementById('comp-score').innerHTML = 'Computer score is : ' + " " + compScore;
    } 
    else if (compChoise == 's' && userChoise == 'r'){
        userScore ++;
        document.getElementById('user-choise').innerHTML = 'User Won';
        document.getElementById('user-score').innerHTML = 'User Score is : ' + " " + userScore;
    } 
    else if (compChoise == 'p' && userChoise == 's'){
        userScore ++;
        document.getElementById('user-choise').innerHTML = 'User Won';
        document.getElementById('user-score').innerHTML = 'User Score is : ' + " " + userScore;
    } 
    else if (compChoise == 's' && userChoise == 'p'){
        compScore ++;
        document.getElementById('comp-choise').innerHTML = 'Computer Won';
        document.getElementById('comp-score').innerHTML = 'Computer score is : ' + " " + compScore;
    } 
    else if (compChoise == 'r' && userChoise == 'p'){
        userScore ++;
        document.getElementById('user-choise').innerHTML = 'User Won';
        document.getElementById('user-score').innerHTML = 'User Score is : ' + " " + userScore;
    } 
    else if (compChoise == 'p' && userChoise == 'r'){
        compScore ++;
        document.getElementById('comp-choise').innerHTML = 'Computer Won';
        document.getElementById('comp-score').innerHTML = 'Computer score is : ' + " " + compScore;
    }

    document.getElementById('current-score').innerHTML = "total scores: \nUser - " + userScore + ": Comp - " + compScore;

}
window.onkeypress = IstifadeciSecimEt;