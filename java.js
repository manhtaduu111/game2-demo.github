// KHU VỰC CAI DAT
function star(){let xp=0;
let health=100;
let gold=900;
let dragonhealdth;
let back;
let attackgiant;
let dame;
let dameinms=0;
var hp2;
var fighting;
var fighting2;

const button1= document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const xptext= document.querySelector(".Xptext")
const healthtext=document.querySelector(".HeadthText");
const goldtext= document.querySelector(".GoldText");
const text=document.querySelector("#text");
const monstername=document.querySelector(".monstername")
const headthmonster=document.querySelector('.headthmonster')
const weapon=[
    {name:"stick",dame:5},
    {name:"knife",dame:30},
    {name:"sword",dame:100}
];
let monster=[
    {name:"smile",hp:40,dame:20},
    {name:"shadow",hp:100,dame:35},
    {name:"dragon",hp:1000,dame:60}
];
let monster2=[
    {name:"smile",hp:40,dame:20},
    {name:"shadow",hp:100,dame:35},
    {name:"dragon",hp:1000,dame:60}
];
const locations=[
    {name:"grasslands","button text":["Go to store","Go to cave","Fight dragon"],"button function":[store,cave,fightingdragon],text:"Thông vào đít bọn monster đi"},
    {name:"store","button text":["buy headth(10 gold)","buy the weapon","go back"],"button function":[buyhealth,buyweapon,goback],text:"You in the store now"},
    {name:"cave","button text":["attack smile","attack shadow","go back"],"button function":[attacksmile,attackshadow,goback],text:"you in the cave now"},
    {name:"dragoncave","button text":["fuck ass","Speendrun","Run"],"button function":[attack,speend,goback],text:"You meet the boss oh shit!!!"},
    {name:"monster","button text":["attack","runflash","run"],"button function":[attack,runflash,goback],text:"YOU FOUND THE MONSTER NOW"},
    {name:"died","button text":["go back","go back","go back"],"button function":[goback,goback,goback],text:"You was died by monster"}
]
console.log(locations[4]["button text"])
button1.onclick=store;
button2.onclick=cave;
button3.onclick=fightingdragon;
// THUẬT TOÁN BÊN NGOÀI
function randoms(x,y){
    return Math.floor(Math.random()*(x-y+1)-y);
}
function goback(){
    background(locations[0]);
}
function background(location)
{
    monsterState.style.display="none";
    button1.innerText=location["button text"][0];
    button2.innerText=location["button text"][1];
    button3.innerText=location["button text"][2];
    button1.onclick=location["button function"][0];
    button2.onclick=location["button function"][1];
    button3.onclick=location["button function"][2];
    text.innerText=location.text;
}
function monsterfighting(location)
{
    monsterState.style.display="block";
    button1.innerText=location["button text"][0];
    button2.innerText=location["button text"][1];
    button3.innerText=location["button text"][2];
    button1.onclick=location["button function"][0];
    button2.onclick=location["button function"][1];
    button3.onclick=location["button function"][2];
    text.innerText=location.text;
}

function backgroundfont()
{
    background(locations[0]);
}
function store(){background(locations[1]);}
function cave(){
    if(dameinms==0)
    {
        background(locations[0])
        text.innerText="PLEASE BUY SOME WEAPON";
    }
    else{
    background(locations[2]);}}
function buyhealth()
{
    if (gold>=10){health+=10;gold-=10;goldtext.innerText=gold;healthtext.innerText=health;}
    else{text.innerText="You not enought money";}
}
function buyweapon(){
    if(gold>30)
    {dame=randoms(2,0);
    text.innerText=weapon[dame].name;
    gold-=30;goldtext.innerText=gold;
    dameinms=weapon[dame].dame;}
    else{text.innerText="You not enought money";}

}
function attacksmile(){
    fighting=0;
    gofight();
}
function attackshadow()
{
    fighting=1;
    gofight();
}
function fightingdragon()
{
    if(dameinms==0)
    {
        background(locations[0]);
        text.innerText="PLEASE BUY SOME WEAPON";
    }
    else{
        background(locations[3]);
        fighting=2;
        gofight()
    }
}
function goback(){
    background(locations[0]);
}
function gofight()
{
    if(fighting==2)
    {
    monsterfighting(locations[3]);
    monstername.innerText=monster[fighting].name;
    headthmonster.innerText=monster[fighting].hp;
    fighting2=fighting;
    }
    else{
            monsterfighting(locations[4]);
            monstername.innerText=monster[fighting].name;
            headthmonster.innerText=monster[fighting].hp;
            fighting2=fighting;
    }

}
function attack(){
    headthmonster.innerText=monster[fighting2].hp;
    monster[fighting2].hp=monster[fighting2].hp-dameinms;
    health=health-monster[fighting2].dame;
    if(monster[fighting2].hp)
    {
        healthtext.innerText=health;
        headthmonster.innerText=0;
        text.innerText="Monster was dead ";
        monster[fighting2].hp=0;
        monster[fighting2].hp+=monster2[fighting2].hp;
        goback();
    }
    if(health<=0)
    {
        background(locations[5]);
        health=100;
        gold=900;
        goldtext.innerText=gold;
        healthtext.innerText=health;
        monster[fighting2].hp=0;
        monster[fighting2].hp+=monster2[fighting2].hp;
        monster2[fighting2].hp=hp2;
        star()
    }

    else{
        healthtext.innerText=health;
        headthmonster.innerText=monster[fighting2].hp;
        text.innerText="COME ON"}
}
function runflash(){}
function speend(){}
}
star()