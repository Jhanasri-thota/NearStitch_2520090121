const tailors=[
{name:"Anita Sharma",rating:4.8,spec:"Ethnic Wear",price:"₹₹",loc:"Downtown"},
{name:"Robert Miller",rating:4.9,spec:"Men's Suits",price:"₹₹₹",loc:"Uptown"},
{name:"Elena Gilbert",rating:4.7,spec:"Wedding Wear",price:"₹₹₹",loc:"Suburbs"},
{name:"Marco Rossi",rating:4.5,spec:"Casual Wear",price:"₹",loc:"Central"}
];

function displayTailors(data){

const container=document.getElementById("tailorGrid");
const select=document.getElementById("tailorSelect");

container.innerHTML="";
select.innerHTML="";

data.forEach(tailor=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${tailor.name}</h3>
<p>⭐ ${tailor.rating}</p>
<p><b>Specialty:</b> ${tailor.spec}</p>
<p><b>Price:</b> ${tailor.price}</p>
<p>📍 ${tailor.loc}</p>
`;

container.appendChild(card);

let opt=document.createElement("option");
opt.value=tailor.name;
opt.innerHTML=tailor.name;
select.appendChild(opt);

});

}

function filterTailors(){

const term=document.getElementById("tailorSearch").value.toLowerCase();

const filtered=tailors.filter(t=>
t.spec.toLowerCase().includes(term)
);

displayTailors(filtered);

}

const orderForm=document.getElementById("orderForm");

orderForm.addEventListener("submit",function(e){

e.preventDefault();

const summary=`Thank you for choosing NearStitch! We will pick up your ${document.getElementById("clothType").value} clothing soon.`;

document.getElementById("orderSummary").innerText=summary;

document.getElementById("modal").style.display="block";

});

function closeModal(){
document.getElementById("modal").style.display="none";
orderForm.reset();
}

function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

window.onload=()=>displayTailors(tailors);