const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const bg = document.getElementById("bg");
let jalan = 0;
var spa = "0.6s";
let count = 0;
let guin;
function kanan(){
	count+=1;
	jalan+=30;
	document.getElementById("posisi").innerHTML=count;
	player.style.transform="translateX("+jalan+"px)";
	player.style.animation="gfd "+spa+" steps(8) infinite";
	if(jalan >= 416){
		guin=-143;
		jalan=guin;
		hore();
		bg.style.background="url('bg0.jpg')";
		}
    else if(count == 942){
		jalan=-143;
		bg.style.background="red";
        }
}
function kiri(){
    jalan-=20;
    count-=1;
    document.getElementById("posisi").innerHTML=count;
	player.style.transform="translateX("+jalan+"px)";
	player.style.animation="jkg "+spa+" steps(8) infinite";
	if(jalan<= 0){
		guin=405;
		jalan=guin;
		bg.style.background="url('bg.jpg')0 -130px";
		player.style.transform="translateX("+jalan+"px)";
	}
		
}

function gun(){
	//var Mus = new Audio;
	//Mus.src = "gun.mp3"
	//Mus.play();
	player.style.animationPlayState="paused";
}

function qwa(){
	const audio = new Audio;
	audio.src = "audio.mp3"
	audio.play();
	}

function hore(){
	const ans = new Audio;
	ans.src = "Finis.mp3"
	ans.play();
	}


//AUTHOR AHMAD DEV GAME JAVASCRIPT

/*
margin properti singkat untuk mengatur seluruh sudut elemen dalam satu deklarasi
margin-top untuk mengatur margin bagian atas
margin-bottom untuk mengatur margin bagian bawah
margin-left untuk mengatur margin bagian kiri
margin-right untuk mengatur margin bagian kanan
*/