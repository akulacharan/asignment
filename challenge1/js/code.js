// Challenge-->1: know your age
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yy = today.getFullYear();
var day=today.getDay();
var hrs=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();

today = mm + '--' + dd + '--' + yy + '--' + day + '--'+hrs+'--' + min + '--' +sec;
//document.write(today);
console.log(today);



function ageInDays(){
    var birthyear=prompt("Which is your birth year.....Good-friend!");
    var birthmonth=prompt("Which is your birth month(1-12).....Good-friend!");
    var birthday=prompt("Which is your birth day(date).....Good-friend!");

    var ageInDays=(yy-birthyear)*365;
    var ldiv=(yy-birthyear)/4;
    var leap=Math.floor(ldiv);


    if(birthmonth >= mm){
        var mdays=(mm-birthmonth)*30;
    }else{
        var mdays=(birthmonth-mm)*30;
        }


    if(birthday >= dd){
        var Ddays=(birthday-dd);
    }else{
         var Ddays=(dd-birthday);
         }

    hours=(leap+ageInDays+mdays+Ddays)*24;
    minutes=hours*60;
    secs=minutes*60;

    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode(' You are  '+(leap+ageInDays+mdays+Ddays)+' days.\n '+(hours)+'Hours.\n '+(minutes)+'Minutes '+(secs)+' Seconds old Approximately.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    }

function reset(){
    document.getElementById('ageInDays').remove();
    }

// Cat Generator----Challenge-->2
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
    }

//Rock,paper,scissors game....Challenge-3
const hit = new Audio('static/sounds/swish.m4a');
const win = new Audio('static/sounds/cash.mp3');
const loss = new Audio('static/sounds/aww.mp3');

function rpsGame(yourChoice){
    //console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randTorpsInt());
    console.log('computerChoice:',botChoice);
    results=decideWinner(humanChoice,botChoice);//[0,1] human lost| bot Won
    console.log(results);
    message=finalMessage(results); //{'message':'You Won','color':'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randTorpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock':{'paper':1,'rock':0.5,'scissors':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'rock':1,'scissors':0.5,'paper':0}
    };
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        loss.play();
        return {'message':'You lost!','color':'red'};
    } else if(yourScore===0.5){
        hit.play();
        return {'message':'You tied!','color':'yellow'};
    } else {
        win.play();
        return {'message':'You Won!','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase ={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    };

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,223,1);'>"
    messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" +finalMessage['message']+ "</h1>"
    botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Change the color of all buttons

var all_buttons=document.getElementsByTagName('button');


var copyAllButtons=[];
for(let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    }else if(buttonThingy.value === 'green'){
        buttonsGreen();
    }else if(buttonThingy.value === 'reset'){
        buttonsColorReset();
    }else if(buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonsRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
        }
}

function buttonsGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
        }
}
function buttonsColorReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
        }
}

function randomColors(){
    let choices=['btn-primary','btn-danger','btn-success','btn-warning']
    for(let i=0;i<all_buttons.length;i++){
        let randomNumber=Math.floor(Math.random()*4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//Blackjack game
let blackjackGame={
    'you': {'scoreSpan': '#your-blackjack-result','div': '#your-box','score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result','div': '#dealer-box','score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStand' : false,
    'turnsOver' : false,
};
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        console.log(card);
        showCard(card,YOU);
        updateScore(card,YOU);
        console.log(YOU['score']);
        showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer) {
    if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function updateScore(card,activePlayer) {
    if (card === 'A') {
        // If adding 11 keeps me below 21, add 11 .Otherwise, add 1.
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <=21) {
             activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
             activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}


function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for(i=0;i<yourImages.length;i++){
            yourImages[i].remove();
        }
         for(i=0;i<dealerImages.length;i++){
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').textContent=0;

        document.querySelector('#your-blackjack-result').style.color='white';
        document.querySelector('#dealer-blackjack-result').style.color='white';

        document.querySelector('#blackjack-result').textContent="Let's play";
        document.querySelector('#blackjack-result').style.color='black';

        blackjackGame['turnsOver'] = true;
    }
}

//sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
        let card=randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    if(DEALER['score'] > 15) {
        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
        console.log(blackjackGame['turnsOver']);
    }
}

// compute winner and return who just won
//update wins,draws,& losses
function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {
      // condition : higher score than the dealer or when dealer busts but you're not bust
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21 ) {
            blackjackGame['wins']++;
            console.log('you won');
            winner =YOU;

        } else if (YOU['score'] < DEALER['score']) {
            console.log('You lost!');
            blackjackGame['losses']++;
            winner=DEALER;
        } else if (YOU['score'] === DEALER['score']) {
            console.log('You Drew!');
            blackjackGame['draws']++;
        }
    // condition : when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        console.log('you lost!');
        blackjackGame['losses']++;
        winner=DEALER;

     // condition: when you and dealer both busts
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        console.log('you drew!');
        blackjackGame['draws']++;
    }

    console.log('winner is',winner);
    console.log(blackjackGame);
    return winner;


}

function showResult(winner) {
    let message,messageColor;

    if (blackjackGame['turnsOver'] === true) {



        if (winner === YOU) {
            message = 'you won!';
            messageColor = 'green';
            winSound.play();
            document.querySelector('#wins').textContent=blackjackGame['wins'];

        } else if (winner === DEALER) {
            message = 'you lost!';
            messageColor = 'red';
            lossSound.play();
            document.querySelector('#losses').textContent=blackjackGame['losses'];

        } else {
            message = 'you drew!';
            messageColor = 'yellow';
            document.querySelector('#draws').textContent=blackjackGame['draws'];
        }


        document.querySelector('#blackjack-result').textContent=message;

        document.querySelector('#blackjack-result').style.color=messageColor;

    }
}

/*
// AJAX & API'S with Javascript

const url = 'https://randomuser.me/api/?results=10'; //Get 10 random users
fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let authors = data.results;
        console.log(authors);
        for(i=0; i<authors.length; i++) {
            let div = document.createElement('div');
            let image = document.createElement('img');
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(`${title(authors[i].name.first)} ${title(authors[i].name.last)}`));
            image.src = authors[i].picture.large;
            div.appendChild(image);
            div.appendChild(p);
            document.querySelector('.container-6 .flex-ajax-row-1').appendChild(div);
        }

    });


    let title =str => str[0] .toUpperCase() + str.slice(1);


*/
