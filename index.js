
// Date Making 
const CurrentDate = new Date(Date.now())
document.getElementById("Date").innerHTML = ` ${CurrentDate.getDay()}/${CurrentDate.getMonth()}/${CurrentDate.getFullYear()} - ${CurrentDate.getHours()}:${CurrentDate.getMinutes()}`

// Expired Date Making
document.getElementById("ExpiredDate").innerHTML = ` ${CurrentDate.getDay()+2}/${CurrentDate.getMonth()}/${CurrentDate.getFullYear()}`

// The Number Counter
let Arrange = 0 

// Add New Item To The File 
function AddNewItem(A,S,H,W,N,P){
    let Main = document.getElementById("TheLast")
    let Cont = document.createElement("div")
    let NN = document.createElement("h3")
    let Spec = document.createElement("h3")
    let Height = document.createElement("h3")
    let Width = document.createElement("h3")
    let Area = document.createElement("h3")
    let Number = document.createElement("h3")
    let Price = document.createElement("h3")
    let Total = document.createElement("h3")

    NN.innerHTML = A
    Spec.innerHTML = S
    Height.innerHTML = H
    Width.innerHTML = W
    Number.innerHTML = N
    Price.innerHTML = P
    Area.innerHTML = parseFloat((parseFloat(H)*parseFloat(W))).toFixed(2)
    Total.innerHTML = Math.round(parseFloat(H)*parseFloat(W)*parseFloat(P))

    Cont.appendChild(NN)
    Cont.appendChild(Spec)
    Cont.appendChild(Height)
    Cont.appendChild(Width)
    Cont.appendChild(Area)
    Cont.appendChild(Number)
    Cont.appendChild(Price)
    Cont.appendChild(Total)

    Main.before(Cont)

    let TotalPrice = document.getElementById("TotalPrice")
    let TPrice = Math.round(parseFloat(TotalPrice.innerHTML)+(parseFloat(H)*parseFloat(W)*parseFloat(P)))
    TotalPrice.innerHTML = TPrice
    document.getElementById("FirstOfTotal").innerHTML = parseInt(TPrice*0.5)
    document.getElementById("MidOfTotal").innerHTML = parseInt(TPrice*0.25)
    document.getElementById("LastOfTotal").innerHTML = parseInt(TPrice*0.25)
    document.getElementById("FLastOfTotal").innerHTML = parseInt(TPrice*0.225)
    document.getElementById("LLastOfTotal").innerHTML = parseInt(TPrice*0.025)
}

// Form Calling
let MyForm = document.getElementById("MyForm")
// Submit Function
MyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let Spec = document.getElementById("TheSpec").value
    let Client = document.getElementById("Client").value
    let Height = document.getElementById("TheHeight").value
    let Width = document.getElementById("TheWidth").value
    let Number = document.getElementById("TheNumber").value
    let Price = document.getElementById("ThePrice").value
    document.getElementById("Client").value = ""
    document.getElementById("TheSpec").value = ""
    document.getElementById("TheHeight").value = ""
    document.getElementById("TheWidth").value = ""
    document.getElementById("TheNumber").value = ""
    document.getElementById("ThePrice").value = ""
    Arrange++// Counter Increasing
    AddNewItem(Arrange,Spec,Height,Width,Number,Price)// Adding he Item 
    // Setting Client Name
    let Cl = document.getElementById("ClientName").innerHTML
    Cl != ""?console.log("Full"):document.getElementById("ClientName").innerHTML=Client
});

let Hide = document.getElementById("Hide")
Hide.addEventListener("click",()=>{
    document.getElementsByClassName("Container")[0].style.display = "none"
    MyForm.style.display = "none"
})
