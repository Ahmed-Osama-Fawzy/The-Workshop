// Date Making 
const CurrentDate = new Date(Date.now())
document.getElementById("Date").innerHTML = ` ${CurrentDate.getDay()}/${CurrentDate.getMonth()}/${CurrentDate.getFullYear()} - ${CurrentDate.getHours()}:${CurrentDate.getMinutes()}`

// Expired Date Making
document.getElementById("ExpiredDate").innerHTML = ` ${CurrentDate.getDay()+2}/${CurrentDate.getMonth()}/${CurrentDate.getFullYear()}`

// The Number Counter
let Arrange = 0 

// Add New Item To The File 
function AddNewItem(A,S,H,W,N,P,M){
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
    let Measure = document.createElement("h3")

    NN.innerHTML = A
    Spec.innerHTML = S
    Height.innerHTML = H
    Width.innerHTML = W
    Number.innerHTML = N
    Price.innerHTML = P
    Measure.innerHTML = M
    Area.innerHTML = parseFloat((parseFloat(H)*parseFloat(W))).toFixed(2)
    Total.innerHTML = Math.round(parseFloat(H)*parseFloat(W)*parseFloat(P))
    Cont.setAttribute("class","Item")

    Cont.appendChild(NN)
    Cont.appendChild(Spec)
    Cont.appendChild(Height)
    Cont.appendChild(Width)
    Cont.appendChild(Area)
    Cont.appendChild(Measure)
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
    let ClientM = document.getElementById("ClientM").value
    let Height = document.getElementById("TheHeight").value
    let Width = document.getElementById("TheWidth").value
    let Number = document.getElementById("TheNumber").value
    let Price = document.getElementById("ThePrice").value
    let Measurement = document.getElementById("Measurement").value
    document.getElementById("Client").value = ""
    document.getElementById("TheSpec").value = ""
    document.getElementById("TheHeight").value = ""
    document.getElementById("TheWidth").value = ""
    document.getElementById("TheNumber").value = ""
    document.getElementById("ThePrice").value = ""
    Arrange++// Counter Increasing
    AddNewItem(Arrange,Spec,Height,Width,Number,Price,Measurement)// Adding he Item 
    // Setting Client Data
    let Cl = document.getElementById("ClientName").innerHTML
    Cl != ""?console.log("Full"):document.getElementById("ClientName").innerHTML=Client

    let ClM = document.getElementById("ClientMobile").innerHTML
    ClM != ""?console.log("Full"):document.getElementById("ClientMobile").innerHTML=ClientM
});

let Hide = document.getElementById("Hide")
Hide.addEventListener("click",()=>{
    document.getElementsByClassName("Container")[0].style.display = "none"
    MyForm.style.display = "none"
    window.print()
})

// Remove & Edit Item Function 
let SelectedNumber = document.getElementsByClassName("SelectedNumber")[0]
let Modfiy = document.getElementsByClassName("Modfiy")[0]
let Remove = document.getElementsByClassName("Remove")[0]


Modfiy.addEventListener("click",()=>{
  if(SelectedNumber.value > 0){
    var Items = document.getElementsByClassName("Item")
    for(i = SelectedNumber.value-1 ; i < Items.length; i++){
      Items.item(i).firstChild.innerHTML = parseInt(Items.item(i).firstChild.innerHTML)-1
    }
    document.getElementById("TotalPrice").innerHTML = parseInt(document.getElementById("TotalPrice").innerHTML)-parseInt(Items.item(SelectedNumber.value-1).lastChild.innerHTML)
    document.getElementById("TheSpec").value = Items.item(SelectedNumber.value-1).childNodes[1].innerHTML
    document.getElementById("TheHeight").value = Items.item(SelectedNumber.value-1).childNodes[2].innerHTML
    document.getElementById("TheWidth").value = Items.item(SelectedNumber.value-1).childNodes[3].innerHTML
    document.getElementById("TheNumber").value = Items.item(SelectedNumber.value-1).childNodes[5].innerHTML
    document.getElementById("ThePrice").value = Items.item(SelectedNumber.value-1).childNodes[6].innerHTML
    Arrange--
    Items.item(SelectedNumber.value-1).remove()
  }else{
    SelectedNumber.style.boxShadow = "15px 15px 15px red"
  }
})

Remove.addEventListener("click",()=>{
  if(SelectedNumber.value > 0){
    var Items = document.getElementsByClassName("Item")
    for(i = SelectedNumber.value-1 ; i < Items.length; i++){
      Items.item(i).firstChild.innerHTML = parseInt(Items.item(i).firstChild.innerHTML)-1
    }
    document.getElementById("TotalPrice").innerHTML = parseInt(document.getElementById("TotalPrice").innerHTML)-parseInt(Items.item(SelectedNumber.value-1).lastChild.innerHTML)
    Arrange--
    Items.item(SelectedNumber.value-1).remove()
  }else{
    SelectedNumber.style.boxShadow = "15px 15px 15px red"
  }
})

// Prevent the right click
window.addEventListener('contextmenu', function(event) {
    event.preventDefault();
}, false);


// Add New Rule TO list of Rules
document.getElementById("Add").addEventListener("click",()=>{
  let TheRule = document.getElementById("TheRule")
  if(TheRule.value != ""){
    let Number = document.getElementsByName("Rules").length
    
    let ch = document.createElement("input")
    ch.setAttribute("name","Rules")
    ch.setAttribute("type","checkbox")
    ch.setAttribute("id",`R${Number+1}`)
    
    let la = document.createElement("label")
    la.setAttribute("for",`R${Number+1}`)
    la.innerHTML = TheRule.value

    let Cont = document.createElement("div")
    Cont.appendChild(ch)
    Cont.appendChild(la)

    document.getElementById("AddnewRule").before(Cont)
    
  }else{
    TheRule.style.boxShadow = "15px 15px 15px red"
  }
})


// Add The Rule for the oreded list to print it 
let AllRules = document.getElementsByName("Rules")
AllRules.forEach((e)=>{
  e.addEventListener("change",()=>{
    let num = e.getAttribute("id")
    if(e.checked){
      let item = document.createElement("li")
      item.setAttribute("id",`R${num}`)
      item.innerHTML = e.nextElementSibling.innerHTML
      document.getElementById("ListOfRules").appendChild(item)
    }else{
      document.getElementById(`R${num}`).remove()
    }
  })
})