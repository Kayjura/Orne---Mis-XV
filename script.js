const music =
document.getElementById("bgMusic");

function abrirInvitacion(){

document.getElementById("welcome-screen")
.style.display = "none";

document.getElementById("invitation-content")
.style.display = "block";

music.play().catch(() => {});

iniciarAnimaciones();

iniciarCountdown();

}

function toggleMusic(){

const btn =
document.getElementById("music-btn");

if(music.paused){

    music.play();

    btn.innerHTML = "🔊";

}else{

    music.pause();

    btn.innerHTML = "🔇";
}

}

function copiarDatos(){

const texto =

`Leandro Ariel Randazzo
CUIL/CUIT: 24-25189062-1
CBU: 0290063610000541891261
ALIAS: POTE.MARMOL.PUERTO
Banco Ciudad`;

navigator.clipboard.writeText(texto);

alert("Datos copiados correctamente");

}

function iniciarCountdown(){

const targetDate =
new Date("2026-08-22T21:30:00");

function actualizar(){

    const now = new Date();

    const diff =
    targetDate - now;

    const days =
    Math.floor(diff / (1000*60*60*24));

    const hours =
    Math.floor(
    (diff%(1000*60*60*24))
    /(1000*60*60));

    const minutes =
    Math.floor(
    (diff%(1000*60*60))
    /(1000*60));

    const seconds =
    Math.floor(
    (diff%(1000*60))
    /1000);

    document.getElementById("countdown")
    .innerHTML =

    `<div class="time-box">
        <div class="time-number">${days}</div>
        <div>Días</div>
    </div>

    <div class="time-box">
        <div class="time-number">${hours}</div>
        <div>Horas</div>
    </div>

    <div class="time-box">
        <div class="time-number">${minutes}</div>
        <div>Min</div>
    </div>

    <div class="time-box">
        <div class="time-number">${seconds}</div>
        <div>Seg</div>
    </div>`;
}

actualizar();

setInterval(actualizar,1000);

}

function iniciarAnimaciones(){

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList
            .add("show");
        }

    });

});

document
.querySelectorAll(".fade")
.forEach(el =>
observer.observe(el));

}
