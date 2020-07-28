const IPAD = [
    { title: "金色", value: "gold", img: "/APPLE/IpadImg/ipad-Gold.png" },
    { title: "銀色", value: "silver", img: "/APPLE/IpadImg/Ipad-Sliver.png" },
    {
        title: "太空灰色",
        value: "gray",
        img: "/APPLE/IpadImg/Ipad-Space-Gray.png",
    },
];
let displayArea = document.getElementById("Display-area");
let colorOption = document.querySelectorAll(".color");
IPAD.forEach((item, index) => {
    colorOption[index].setAttribute("id", item.value);
    colorOption[index].innerText = item.title;
});
colorOption.forEach((x) => {
    x.addEventListener("click", displayImg);
});
function displayImg() {
    let imgValue = this.id;
    let filterAry = IPAD.filter((x) => x.value == imgValue);
    displayArea.innerHTML = `<img style="width:100%" src='${filterAry[0].img}'/>`;
}
let pricecalculator = document.querySelector(".total-price-calculation");
let lowPrice = document.querySelectorAll(".low-price");
let highPrice = document.querySelectorAll(".high-price");
let lowWifi = document.getElementById("wifiLow");
let highWifi = document.getElementById("WifiHigh");

function displayStorage(num) {
    let lowPriceArea = document.getElementById("low-price");
    let highPriceArea = document.getElementById("high-price");
    var result = 0;
    var lowPrice,
        highPrice = 0;
    if (num == 32) {
        lowPrice = "10,900";
        highPrice = "15,400";
        lowPriceArea.innerText = `NT$${lowPrice}元`;
        lowWifi.innerText = `NT$${lowPrice}元`
        highPriceArea.innerText = `NT$${highPrice}元`;
        highWifi.innerText = `NT$${highPrice}元`;
        pricecalculator.innerText = "NT$10,900元";
    } else if (num == 128) {
        lowPrice128 = "13,900";
        highPrice = "18,400";
        lowPriceArea.innerText = `NT$${lowPrice128}元`;
        lowWifi.innerText = `NT$${lowPrice128}元`
        highPriceArea.innerText = `NT$${highPrice}元`;
        highWifi.innerText = `NT$${highPrice}元`;
        pricecalculator.innerText = "NT$13,900元";
    }
}
function WifilowPrice() {
    var result = "";
    result = document.getElementById("low-price").innerText;
    pricecalculator.innerText = result;
}
function WifihighPrice() {
    var result = "";
    result = document.getElementById("high-price").innerText;
    pricecalculator.innerText = result;
}
