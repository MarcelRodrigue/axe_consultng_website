const countdown = ()=>{
const countDate = new Date("October 20,2022 00:00:00").getTime();
const now = new Date().getTime();
const gap = countDate - now;


const secs = 1000;
const min = secs*60;
const hr = min*60;
const day = hr*24;

const Tday = Math.floor(gap/day);
const thr = Math.floor((gap % day)/hr);
const tmin = Math.floor((gap % hr)/min);
const tsec = Math.floor((gap % min)/secs);

document.querySelector(".mydays").innerText=Tday;
document.querySelector(".myhr").innerText = thr;
document.querySelector(".mymins").innerText = tmin;
document.querySelector(".mysecs").innerText = tsec;


};
setInterval(countdown, 1000);

