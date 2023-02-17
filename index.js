`use strict`;


hrUI = document.querySelector('.hr');
mnUI = document.querySelector('.mn');
scUI = document.querySelector('.sc');
console.log(scUI);
setInterval(() => {
    d = new Date();

    hrtime = d.getHours();
    mntime = d.getMinutes();
    sctime = d.getSeconds();

    // hrotation = 30*hrtime + mntime/2;
    hrotation = 0;

    mrotation = 6*mntime;
    srotation = 6*sctime;

    hrUI.style.transform = `rotate(${hrotation}deg)`;
    mnUI.style.transform = `rotate(${mrotation}deg)`;
    scUI.style.transform = `rotate(${srotation}deg)`;
}, 1000)
