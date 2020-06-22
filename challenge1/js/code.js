// challenge1: hnow your age
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


// challenge2:Cat Generator
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
    }

//Rock,paper,scissors game....Challenge-3
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
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return {'message':'You lost!','color':'red'};
    } else if(yourScore===0.5){
        return {'message':'You tied!','color':'yellow'};
    } else {
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
