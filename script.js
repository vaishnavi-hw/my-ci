let p = document.getElementById("principal");
const r = document.getElementById("rate");
const t = document.getElementById("time");
const btn = document.getElementById("btn");
let output = document.getElementById("output")
let ci;
let tci = 0;

const work = ()=>{
    for(let n = 1; n<=t.value;n++){
        ci = parseInt((p.value*1*r.value)/100);
        tci = tci + ci;
        p.value = parseInt(p.value) + ci
    }
    console.log(ci)
    output.style.display="block"
    let pr = p.value / ((1+r.value/100)**t.value)
    output.innerHTML = `
    <p>Principal Amount : ₹${Math.ceil(pr)}</p>
      <p>Annual Rate of Interest : ${r.value}%</p>
      <p>Time : ${t.value}yrs</p>
      <h3>Compound Interest = <span>₹${tci}</span></h3>
      <h3>Amount = <span>₹${p.value}</span></h3>
    `
    p.value = Math.ceil(pr);
    
}
btn.addEventListener("click",()=>{
    if(p.value == "" || t.value == "" || r.value == ""){
       warning.style.display="block"
    }
    else{
        warning.style.display="none"
        work();

    }
})

