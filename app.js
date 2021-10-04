let days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log(days);
let  ranDom = Math.random()*6;
console.log(Math.ceil(ranDom));
let color = ['Black','Yellow','Blue','Orange','Green','Voilet','Pink','Purple'];
let colorrandom =Math.ceil(Math.random()*7);
console.log(color[colorrandom]);
document.write(`<h1 class="heading" style="color:${color[colorrandom]}">${ days[Math.ceil(ranDom)]}</h1>`);
