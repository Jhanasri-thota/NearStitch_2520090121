/* ================================================= */
/* CO3 – JavaScript Fundamentals */
/* ================================================= */

let shops=[
{name:"Elite Stitch Studio",rating:4.8,delivery:3},
{name:"Classic Cuts Tailors",rating:4.6,delivery:2},
{name:"Royal Tailors",rating:4.7,delivery:4}
]

function toggleTheme(){
document.body.classList.toggle("dark")
}

/* ================================================= */
/* CO4 – DOM Manipulation */
/* ================================================= */

function searchTailors(){

let location=document.getElementById("location").value

if(location===""){
alert("Enter location")
return
}

document.getElementById("results").classList.remove("hidden")

let html=""

shops.forEach((s,i)=>{

html+=`

<div class="card">

<h3>${s.name}</h3>

<p>⭐ ${s.rating}</p>

<p>Delivery ${s.delivery} days</p>

<button onclick="viewShop(${i})">View Details</button>

</div>

`

})

document.getElementById("shopList").innerHTML=html

}

/* Tailor profile */

function viewShop(i){

let shop=shops[i]

document.getElementById("profile").classList.remove("hidden")

document.getElementById("profile").innerHTML=`

<h2>${shop.name}</h2>

<p>Rating ⭐${shop.rating}</p>

<p>Delivery ${shop.delivery} days</p>

<h3>Services</h3>

<ul>
<li>Blouse ₹500</li>
<li>Kurti ₹700</li>
<li>Suit ₹1200</li>
</ul>

<h3>Portfolio</h3>

<div class="gallery">
<img src="https://images.unsplash.com/photo-1593032465171-8b7e8f2d1c3f">
<img src="https://images.unsplash.com/photo-1593032465171-8b7e8f2d1c3f">
</div>

<button onclick="renderCustomer()">Book Now</button>

`

}

/* ================================================= */
/* AUTHENTICATION */
/* ================================================= */

function showAuth(){
document.getElementById("auth").classList.remove("hidden")
}

function login(){

let role=document.getElementById("role").value

localStorage.setItem("currentUser",role)

loadDashboard(role)

}

function logout(){
localStorage.clear()
location.reload()
}

/* ================================================= */
/* CUSTOMER DASHBOARD */
/* ================================================= */

function renderCustomer(){

document.getElementById("dashboard").classList.remove("hidden")

document.getElementById("dashboard").innerHTML=`

<h2>Customer Dashboard</h2>

<div class="dashboard-list">

<div class="dashboard-item">

<h3>Select Service</h3>

<select id="service">
<option value="500">Blouse ₹500</option>
<option value="700">Kurti ₹700</option>
<option value="1200">Suit ₹1200</option>
</select>

</div>

<div class="dashboard-item">
<label>Urgent Delivery (+200)</label>
<input type="checkbox" id="urgent">
</div>

<div class="dashboard-item">
<label>Pickup Date</label>
<input type="date">
</div>

<div class="dashboard-item">
<label>Pickup Time</label>
<select>
<option>10 AM</option>
<option>2 PM</option>
<option>6 PM</option>
</select>
</div>

<div class="dashboard-item">
<label>Upload Measurement</label>
<input type="file">
</div>

<div class="dashboard-item">

<h3>Total ₹<span id="total">500</span></h3>

<button onclick="book()">Book Now</button>

</div>

</div>

`

updatePrice()

document.getElementById("service").onchange=updatePrice
document.getElementById("urgent").onchange=updatePrice

}

/* Price calculator */

function updatePrice(){

let base=parseInt(document.getElementById("service").value)
let urgent=document.getElementById("urgent").checked?200:0

document.getElementById("total").innerText=base+urgent

}

/* Booking */

function book(){

let toast=document.getElementById("toast")

toast.style.display="block"

setTimeout(()=>toast.style.display="none",3000)

}

/* ================================================= */
/* TAILOR DASHBOARD */
/* ================================================= */

function renderTailor(){

document.getElementById("dashboard").classList.remove("hidden")

document.getElementById("dashboard").innerHTML=`

<h2>Tailor Dashboard</h2>

<div class="dashboard-list">

<div class="dashboard-item">Pending Orders: 5</div>

<div class="dashboard-item">Update Order Status</div>

<div class="dashboard-item">Manage Services</div>

<div class="dashboard-item">View Earnings</div>

</div>

`

}

/* ================================================= */
/* ADMIN PANEL */
/* ================================================= */

function renderAdmin(){

document.getElementById("dashboard").classList.remove("hidden")

document.getElementById("dashboard").innerHTML=`

<h2>Admin Panel</h2>

<div class="dashboard-list">

<div class="dashboard-item">Total Users: 120</div>

<div class="dashboard-item">Total Orders: 340</div>

<div class="dashboard-item">
<canvas id="chart"></canvas>
</div>

</div>

`

new Chart(document.getElementById("chart"),{
type:'bar',
data:{
labels:['Users','Orders'],
datasets:[{data:[120,340]}]
}
})

}

/* Router */

function loadDashboard(role){

if(role==="customer")renderCustomer()
if(role==="tailor")renderTailor()
if(role==="admin")renderAdmin()

}

window.onload=function(){

let user=localStorage.getItem("currentUser")

if(user){
loadDashboard(user)
}

}
