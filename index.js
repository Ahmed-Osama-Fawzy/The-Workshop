function isFloat(value) {
  var floatValue = parseFloat(value);
  return !isNaN(floatValue) && value.trim() !== '' && value.includes('.');
}

function isInteger(value) {
  var intValue = parseInt(value, 10);
  return !isNaN(intValue) && isFinite(value) && value.trim() !== '' && intValue.toString() === parseFloat(value).toString();
}
function isText(value) {
  return /^[A-Za-z\s]+$/.test(value);
}

// Date Making 
const CurrentDate = new Date(Date.now())
document.getElementById("Date").innerHTML = `${CurrentDate.getDay()}/${CurrentDate.getMonth()}/${CurrentDate.getFullYear()} - ${CurrentDate.getHours()}:${CurrentDate.getMinutes()}`

// Expired Date Making
document.getElementById("ExpiredDate").innerHTML = ` ${CurrentDate.getDay()+2}/${CurrentDate.getMonth()}/${CurrentDate.getFullYear()}`

// The Number Counter
let Arrange = 0 

// Add New Item To The File 
function AddNewItem(A,S,H,W,N,P,M,PA){
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
    
    let Ar = parseFloat(PA)>0?(parseFloat((parseFloat(H)*parseFloat(W))*parseFloat(PA)).toFixed(2)):(parseFloat((parseFloat(H)*parseFloat(W))).toFixed(2))
    
    Area.innerHTML = parseFloat(Ar)<1.0?1.0:Ar
    Total.innerHTML = Math.round(parseFloat(Area.innerHTML)*parseFloat(P)*parseInt(N))

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
    let TPrice = Math.round(parseFloat(TotalPrice.innerHTML)+parseFloat(Total.innerHTML))
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
    let Panda = document.getElementById("ThePanda").value
    if(isText(Spec) && isText(Client) && isFloat(Height) && isFloat(Width) && isInteger(Number) && isInteger(Price) && (isFloat(Panda) || !Panda)){
      document.getElementById("Client").value = ""
      document.getElementById("ClientM").value = ""
      document.getElementById("TheSpec").value = ""
      document.getElementById("TheHeight").value = ""
      document.getElementById("TheWidth").value = ""
      document.getElementById("TheNumber").value = ""
      document.getElementById("ThePrice").value = ""
      document.getElementById("ThePanda").value = ""
      Arrange++// Counter Increasing
      AddNewItem(Arrange,Spec,Height,Width,Number,Price,Measurement,Panda)// Adding he Item   
      // Setting Client Data
      let Cl = document.getElementById("ClientName").innerHTML
      Cl != ""?console.log("Full"):document.getElementById("ClientName").innerHTML=Client
      let ClM = document.getElementById("ClientMobile").innerHTML
      ClM != ""?console.log("Full"):document.getElementById("ClientMobile").innerHTML=ClientM
    }
    else{
      alert("عفوت لا يمكن اضافة العنصر يجب ادخال جميع القيم صحيحة")
    }
});

let Hide = document.getElementById("Hide")
Hide.addEventListener("click",()=>{
    document.getElementsByClassName("Container")[0].style.display = "none"
    MyForm.style.display = "none"
    document.getElementById("List").style.display = "none"
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
    document.getElementById("TotalPrice").innerHTML = parseInt(document.getElementById("TotalPrice").innerHTML)-parseInt(Items.item((SelectedNumber.value)-1).lastChild.innerHTML)
    document.getElementById("TheSpec").value = Items.item(SelectedNumber.value-1).childNodes[1].innerHTML
    document.getElementById("TheHeight").value = Items.item(SelectedNumber.value-1).childNodes[2].innerHTML
    document.getElementById("TheWidth").value = Items.item(SelectedNumber.value-1).childNodes[3].innerHTML
    document.getElementById("TheNumber").value = Items.item(SelectedNumber.value-1).childNodes[6].innerHTML
    document.getElementById("ThePrice").value = Items.item(SelectedNumber.value-1).childNodes[7].innerHTML
    Arrange--
    Items.item((SelectedNumber.value)-1).remove()
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
    let ch = document.createElement("li")
    ch.innerHTML = TheRule.value
    document.getElementById("ListOfRules").appendChild(ch)
  }else{
    TheRule.style.boxShadow = "15px 15px 15px red"
  }
})

// Add The Rule for the oreded list to print it 
var AllRules = document.getElementsByName("Rules")
AllRules.forEach((e)=>{
  e.addEventListener("change",()=>{
    let num = e.getAttribute("id")
    console.log(num)
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

window.addEventListener("beforeunload",()=>{
   event.preventDefault()
   event.returnValue = ""
   return ""
})

// inputs Validation
let Inputs = Array.from(document.getElementsByTagName("input"))

Inputs.forEach((e)=>{
  let value = e.getAttribute("data-type")
  if(value){
      if(value === "Float"){

        e.addEventListener("blur",()=>{
          let val = e.value
          if(isFloat(val)){
            e.style.borderBottom = "5px solid green"
          }else{
            e.style.borderBottom = "5px solid red"
          }
        })
      }else if (value === "Integer"){

        e.addEventListener("blur",()=>{
          let val = e.value
          if(isInteger(val)){
            e.style.borderBottom = "5px solid green"
          }else{
            e.style.borderBottom = "5px solid red"
          }
        })

      }else if (value === "Text"){
        
        e.addEventListener("blur",()=>{
          let val = e.value
          if(isText(val)){
            e.style.borderBottom = "5px solid green"
          }else{
            e.style.borderBottom = "5px solid red"
          }
        })

      }
  }
})