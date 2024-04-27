let Arrange = 0 
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
  Area.innerHTML = Math.round(parseFloat(H)*parseFloat(W))
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
  TotalPrice.innerHTML = Math.round(parseFloat(TotalPrice.innerHTML)+(parseFloat(H)*parseFloat(W)*parseFloat(P)))
}

let MyForm = document.getElementById("MyForm")
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
    Arrange++
    AddNewItem(Arrange,Spec,Height,Width,Number,Price)
    document.getElementById("ClientName").innerHTML = Client
});

let Hide = document.getElementById("Hide")
Hide.addEventListener("click",()=>{
  Hide.style.display = "none"
  MyForm.style.display = "none"
})