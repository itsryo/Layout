
// import{$g} from "/Buildschool/JS/Day06/Modules/helpers"
let pdBlack = document.getElementById("pdBlock");
let xhr = new XMLHttpRequest();
// let msg = getElementById("#msg")
let buttonGroup = document.querySelectorAll(".nav-item")
const url = "https://raw.githubusercontent.com/itsryo/FileStorage/master/Pizza.json";
let datalist;
console.log(buttonGroup);
window.onload = function() {
    getDataByAJAX();
}
function getDataByAJAX(){
    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            datalist=data;
            setBtnValueAndEvent(Object.keys(datalist));
            renderData(datalist.pizzaProduct);
        })
        .catch((error)=>{
            alert(console.error())
        })
}
// debugger
function setBtnValueAndEvent(dataKeysArray){
    dataKeysArray.forEach((item,index) =>{
        buttonGroup[index].setAttribute('id', item);
        buttonGroup[index].addEventListener('click',function(){
            renderData(Object.values(datalist)[index]);
        })
    })
}

// debugger
function renderData(dataArray){
    clearAllData();
    let card = document.getElementById("cardPizza");
    dataArray.forEach(item => {
        let cloneContent = card.content.cloneNode(true);
        cloneContent.querySelector('h5').innerText=item.pdName;
        cloneContent.querySelector('p').innerText=item.pdEnName;
        cloneContent.querySelector('img').src='img/'+item.pdImage;
        cloneContent.querySelector('.btn').addEventListener('click',function(){
            // $('#exampleModal').modal('show')
            this.setAttribute("data-toggle","modal");
            this.setAttribute("data-target","#exampleModal");
            console.log(123);
            let modal = document.getElementById('exampleModal')
            modal.querySelector('h5').innerText=item.pdName;
            modal.querySelector('p').innerText=item.pdEnName;
            modal.querySelector('#pizzaImage').src='/Pizza/IMG/'+ item.pdImage;
            modal.querySelector('#stuffing').innerText=item.stuffing;
            modal.querySelector('#description').innerText=item.description;
            modal.querySelector('#price').innerText=item.price;
        })
        pdBlack.append(cloneContent)

    })
}
function clearAllData(){
    pdBlack.innerHTML='';
}