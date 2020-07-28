//物件們:
//顏色(照片 儲存裝置 Wifi)
const color = [
    {
        title: "金色",
        value: "gold",
        img: "/APPLE/IpadImg/ipad-Gold.png",
    },
    {
        title: "銀色",
        value: "silver",
        img: "/APPLE/IpadImg/Ipad-Sliver.png",
    },
    {
        title: "太空灰色",
        value: "gray",
        img: "/APPLE/IpadImg/Ipad-Space-Gray.png",
    },
];

//儲存裝置(ver01=32G;ver02=128GB)
var storageDevice = [
    {
        title: `32<small>GB</small><sup>1</sup><br>NT$10,900元起`,
        value: "GB32",
        price: "NT$10,900元起",
    },
    {
        title: `128<small>GB</small><sup>1</sup><br>NT$13,900元起`,
        value: "GB128",
        price: "NT$13,900元起",
    },
];
//WIFI-VERSION
var wifi = [
    { title: `<h6>WIFI</h6>`, value: "gb32wifi", price: "NT$10,900元" },
    { title: `<h6>WIFI</h6>`, value: "gb128wifi", price: "NT$13,900元" },
    {
        title: `<h6>WIFI+連線能力</h6><p>NT$15,400元</p>`,
        value: "gb32wifiplus",
        price: "NT$15,400元",
    },
    {
        title: `<h6>WIFI+連線能力</h6><p>NT$18,900元</p>`,
        value: "gb128wifiplus",
        price: "NT$18,900元",
    },
];

//對應html路徑
//ImgBlock
let displayArea = document.querySelector("#Display-area");
//儲存裝置-32GB
let storageAreaGb32 = document.querySelector(".ipad-storage01");
//儲存裝置-128GB
let storageAreaGb128 = document.querySelector(".ipad-storage02");
//wifi-32/128GB
let wifiOriginal = document.querySelector(".ipad-wifi");
//wifiplus-32/128GB
let wifiPlus = document.querySelector(".ipad-wifi-plus");
//價格試算
let pricecalculator = document.querySelector(".total-price-calculation");
//區域總選取
let colorOptions = document.querySelectorAll(".color");
let storageOptions = document.querySelectorAll(".storage");
let storagePriceOptions = document.querySelectorAll(".storage-price");
let wifiOptions = document.querySelectorAll(".wifi");

color.forEach((item, index) => {
    colorOptions[index].setAttribute("id", item.value);
    colorOptions[index].innerText = item.title;
});
storageDevice.forEach((item, index)=>{
    storageOptions[index].setAttribute("id",item.value);
    storageOptions[index].innerHTML=item.title;//32GB
})
wifi.forEach((item,index)=>{
    wifiOptions[index].setAttribute("id",item.value);
    wifiOptions[index].innerHTML=item.title;

})


colorOptions.forEach((x) => {
    x.addEventListener("click", displayImg);
});
storageOptions.forEach((x) => {
    x.addEventListener("click", displayStorage);
});
wifiOptions.forEach((x) => {
    x.addEventListener("click", displayWiFi);
});

function displayImg() {
    let currentValue = this.id; //取得value
    let filterAry = color.filter((x) => x.value == currentValue); //取得對應的資料
    displayArea.innerHTML = `<img style="width:100%" src='${filterAry[0].img}' />`; //呈現圖片
}
function displayStorage() {
    let storagevalue = this.id; 
    let storageAry = storageDevice.filter(x=>x.value==storagevalue);
    pricecalculator.innerText = storageAry[0].price;
}
function displayWiFi() {
    let wifivalue = this.id;
    let wifiAry = wifiOriginal.filter(x=>x.value==wifivalue);
    pricecalculator.innerText = wifiAry[0].price;
}
// p.display(123)
// var price = 123
// function display(img) {
//     let text = `<h4>${img}</h4>`;
//     pricecalculator.innerHTML = text;
// }

// wifiog.addEventListener("click", function () {
//     let price = document.querySelector(".wifiprice");
//     let totalarea = document.querySelector(".total-price-calculation");
//     if ((storage32.checked = true)) {
//         storage128.checked = false;
//     } else if ((storage128.checked = true)) {
//         storage32.checked = false;
//     }
// });
//廢物CODE
//ipag金色照片
// function glodImg() {
//     let pathFile = color.gold.img;
//     let goldIpadImg = `<img style="width:100%" src='${pathFile}' />`;
//     console.log(goldIpadImg);
//     goldObject.innerHTML = goldIpadImg;
//     functionstoragegb32();
//     functionstoragegb128();
//     functionwifiog32();
//     functionwifinetwork128();
// }
//ipag銀色照片
// function silverImg() {
//     let pathFile = color.silver.img;
//     let silverIpadImg = `<img style="width:100%" src='${pathFile}' />`;
//     console.log(silverIpadImg);
//     silverObject.innerHTML = silverIpadImg;
//     functionstoragegb32();
//     functionstoragegb128();
//     functionwifiog32();
//     functionwifinetwork128();
// }
//ipad灰色照片
// function grayImg() {
//     let pathFile = color.gray.img;
//     let grayIpadImg = `<img style="width:100%" src='${pathFile}' />`;
//     console.log(grayIpadImg);
//     grayObject.innerHTML = grayIpadImg;
// }

// function displayStorage(storage,price) {
//     let storage = `<h6 style="margin-top:24px;margin-bottom:8px">${storage}</h6><p>${price}</p>`;
//     gigabyte32.innerHTML = storage;
//     displayPrice(price);
// }
//儲存裝置-32GB價格
// function functionstoragegb32() {
//     let Gb32 = `<h6 style="margin-top:24px;margin-bottom:8px">${storage.version01.storage}</h6><p>${storage.version01.priceTag}</p>`;
//     gigabyte32.innerHTML = Gb32;
//     // functionwifiog32();
//     // functionwifiog128();
//     // displayPriceTag32gbwifiOG();
// }
//儲存裝置-128GB價格
// function functionstoragegb128() {
//     let Gb128 = `<h6 style="margin-top:24px;margin-bottom:8px">${storage.version02.storage}</h6><p>${storage.version02.priceTag}</p>`;
//     gigabyte128.innerHTML = Gb128;
//     // functionwifiplus128();
//     // functionwifinetwork128();
//     // displayPriceTag128gbwifiOG();
// }
// var storage = {
//     version01: {
//         storage: `32<small>GB</small><sup>1</sup>`,
//         price: 10900,
//         priceTag: "NT$10,900元起",
//     },
//     version02: {
//         storage: `128<small>GB</small><sup>1</sup>`,
//         price: 13900,
//         priceTag: "NT$13,900元起",
//     },
// };
//WIFI裝置(mode01(wifi版本)
//wifi01=32G;wifi02=128GB)
//mode02(wifi+版本)
//wifi+01=32gb版本
//wifi+02=128gb版本
// var mode = {
//     mode01: {
//         wifi: {
//             wifititle: "Wi-Fi",
//             wifi01: ` ${storage.version01.price + 0}`,
//             wifi02: `${storage.version02.price + 0}`,
//         },
//     },
//     mode02: {
//         wifiplus: {
//             wifititle: "Wi-Fi+行動網路",
//             wifiplus01: `${storage.version01.price + 4500}`,
//             wifiplus02: `${storage.version02.price + 4500}`,
//         },
//     },
// };
//wifi價格
// var wifiPriceTag = {
//     wifimode: {
//         //32gbwifi+ 15400
//         wifi32gbplus: `${mode.mode02.wifiplus.wifiplus01}`,
//         //128gb wifi+ 18400
//         wifi128gbplus: `${mode.mode02.wifiplus.wifiplus02}`,
//     },
//     wifiogmode: {
//         //wifi 32gb 10900
//         wifi32gb: `${mode.mode01.wifi.wifi01}`,
//         //wifi 128gb 13900
//         wifi128gb: `${mode.mode01.wifi.wifi02}`,
//     },
// };
//wifi-32gb的價格  -10900
// function functionwifiog32() {
//     let wifi32og = `<h6 style="margin-top:24px;margin-bottom:8px">${mode.mode01.wifi.wifititle}<h6><p class="wifipluspricetag">${wifiPriceTag.wifiogmode.wifi32gb}</p>`;
//     wifiog.innerHTML = wifi32og;
//     displayPriceTag32gbwifiOG();
// }
// //wifi-128gb的價格 -13900
// function functionwifinetwork128() {
//     let wifi128 = `<h6 style="margin-top:24px;margin-bottom:8px">${mode.mode01.wifi.wifititle}</h6><p class="wifipluspricetag">${wifiPriceTag.wifiogmode.wifi128gb}</p>`;
//     wifiog.innerHTML = wifi128;
//     displayPriceTag128gbwifiOG();
// }

// //wifi+32gb的價格 -15400
// function functionwifiog128() {
//     let wifi32og = `<h6 style="margin-top:24px;margin-bottom:8px">${mode.mode02.wifiplus.wifititle}<h6><p class="wifipluspricetag" >${wifiPriceTag.wifimode.wifi32gbplus}</p>`;
//     wifinetwork.innerHTML = wifi32og;
//     displayPriceTag32gbwifiplus();
// }

// //wifi+128gb的價格 18400
// function functionwifiplus128() {
//     let wifi128 = `<h6 style="margin-top:24px;margin-bottom:8px">${mode.mode02.wifiplus.wifititle}</h6><p class="wifipluspricetag">${wifiPriceTag.wifimode.wifi128gbplus}</p>`;
//     wifinetwork.innerHTML = wifi128;
//     displayPriceTag128gbwifiplus();
// }

// //價格試算
// //wifi32G 10900
// function displayPriceTag32gbwifiOG() {
//     let gb32Price = `<h4>${wifiPriceTag.wifiogmode.wifi32gb}</h4>`;
//     pricecalculator.innerHTML = gb32Price;
//     let gb128Price = `<h4>${wifiPriceTag.wifiogmode.wifi128gb}</h4>`;
//     pricecalculator.innerHTML = gb128Price;
// }
// //wifi128G 13900
// function displayPriceTag128gbwifiOG() {
//     let gb128Price = `<h4>${wifiPriceTag.wifiogmode.wifi128gb}</h4>`;
//     pricecalculator.innerHTML = gb128Price;
// }
// //wifiplus32G 15400
// function displayPriceTag32gbwifiplus() {
//     let gb32Price = `<h4>${wifiPriceTag.wifimode.wifi32gbplus}</h4>`;
//     pricecalculator.innerHTML = gb32Price;
// }
// //wifiplus128G 18400
// function displayPriceTag128gbwifiplus() {
//     let gb128Price = `<h4>${wifiPriceTag.wifimode.wifi128gbplus}</h4>`;
//     pricecalculator.innerHTML = gb128Price;
// }