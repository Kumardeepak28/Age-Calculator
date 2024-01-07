const div = document.getElementById("cont");

div.style.backgroundColor="white"
div.style.boxShadow="box-shadow: 0 0 10px rgba(0, 0, 0, 0.9)";
div.style.marginLeft="450px";
div.style.height="auto";
div.style.width="43vw";
div.style.textAlign="center";
div.style.marginTop="80px";
div.style.borderRadius = "5px";

const h1 = document.getElementById("mnln");
h1.style.fontSize="36px";
h1.style.paddingTop="10px";
h1.style.marginBottom="20px";

const p = document.getElementById("para");

p.style.fontweight="bold"
p.style.fontSize="24px";

// input section//

const input = document.getElementById("inptdt");

input.style.marginBottom="20px";
input.style.width="55%";
input.style.height="45px"
input.style.borderRadius="3px";
input.style.border = "0.25px solid lightgray";



const pp = document.getElementById("res");
pp.style.paddingBottom="10px";
pp.style.fontSize="24px";

// butn section

const butn = document.getElementById("btn");


butn.addEventListener("click",(e)=>{

    const curntdate = new Date(input.value) 

    const bdydate = new Date()
    let diff = bdydate.getTime()- curntdate.getTime();

    let year = diff/(1000*60*60*24*365);
    console.log(Math.floor(year));

    pp.innerText=`your age is ${Math.floor(year)} Years old`



})