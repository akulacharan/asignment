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

console.log(leap);
