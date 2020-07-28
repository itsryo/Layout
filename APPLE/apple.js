//物件們:
//顏色(照片 儲存裝置 Wifi)
const color = {
    gold: {
        img: "/APPLE/IpadImg/ipad-Gold.png",
        storage: storage,
        mode: mode,
    },
    silver: {
        img: "/APPLE/IpadImg/Ipad-Sliver.png",
        storage: storage,
        mode: mode,
    },
    gray: {
        img: "/APPLE/IpadImg/Ipad-Space-Gray.png",
        storage: storage,
        mode: mode,
    },
};

//儲存裝置(ver01=32G;ver02=128GB)
var storage = {
    version01: {
        storage: `32<small>GB</small><sup>1</sup>`,
        price: 10900,
        priceTag: "NT$10,900元起",
    },
    version02: {
        storage: `128<small>GB</small><sup>1</sup>`,
        price: 13900,
        priceTag: "NT$13,900元起",
    },
};

//WIFI裝置(mode01(wifi版本)
//wifi01=32G;wifi02=128GB)
//mode02(wifi+版本)
//wifi+01=32gb版本
//wifi+02=128gb版本
var mode = {
    mode01: {
        wifi: {
            wifititle: "Wi-Fi",
            wifi01: ` ${storage.version01.price + 0}`,
            wifi02: `${storage.version02.price + 0}`,
        },
    },
    mode02: {
        wifiplus: {
            wifititle: "Wi-Fi+行動網路",
            wifiplus01: `${storage.version01.price + 4500}`,
            wifiplus02: `${storage.version02.price + 4500}`,
        },
    },
};
//wifi價格
var wifiPriceTag = {
    wifimode: {
        //32gbwifi+ 15400
        wifi32gbplus: `${mode.mode02.wifiplus.wifiplus01}`,
        //128gb wifi+ 18400
        wifi128gbplus: `${mode.mode02.wifiplus.wifiplus02}`,
    },
    wifiogmode: {
        //wifi 32gb 10900
        wifi32gb: `${mode.mode01.wifi.wifi01}`,
        //wifi 128gb 13900
        wifi128gb: `${mode.mode01.wifi.wifi02}`,
    },
};
//對應html路徑
//金色
let goldObject = document.querySelector("#Display-area");
//銀色
let silverObject = document.querySelector("#Display-area");
//太空灰色
let grayObject = document.querySelector("#Display-area");
//儲存裝置
let storageGroup = document.querySelector("#storage-group");
//儲存裝置-32GB
let gigabyte32 = document.querySelector(".ipad-storage01");
//儲存裝置-128GB
let gigabyte128 = document.querySelector(".ipad-storage02");
//wifi-32/128GB
let wifiog = document.querySelector(".ipad-wifi");
//wifiplus-32/128GB
let wifinetwork = document.querySelector(".ipad-wifi-plus");

//input
let inputStorage32 = document.querySelector("#storagebtn32");
let inputStorage128 = document.querySelector("#storagebtn128");
let inputWifi = document.querySelector("#wifibtn");
//價格試算
let pricecalculator = document.querySelector(".total-price-calculation");

//測試console.log們:

console.log(mode.mode01.wifi.wifi01); //10900(wifi32g)
console.log(mode.mode01.wifi.wifi02); //13900(wifi+128g)
console.log(wifiPriceTag.wifimode.wifi32gbplus); //15400 (wifi32g)
console.log(wifiPriceTag.wifimode.wifi128gbplus); //15400 (wifi32g)
console.log(wifiPriceTag.wifiogmode.wifi128gb); //15400 (wifi32g)
console.log(); //18400(wifi+128g)
//ipag金色照片
function glodImg() {
    let pathFile = color.gold.img;
    let goldIpadImg = `<img style="width:100%" src='${pathFile}' />`;
    console.log(goldIpadImg);
    goldObject.innerHTML = goldIpadImg;
    functionstoragegb32();
    functionstoragegb128();
    functionwifiog32();
    functionwifinetwork128();
}
//ipag銀色照片
function silverImg() {
    let pathFile = color.silver.img;
    let silverIpadImg = `<img style="width:100%" src='${pathFile}' />`;
    console.log(silverIpadImg);
    silverObject.innerHTML = silverIpadImg;
    functionstoragegb32();
    functionstoragegb128();
    functionwifiog32();
    functionwifinetwork128();
}
//ipad灰色照片
function grayImg() {
    let pathFile = color.gray.img;
    let grayIpadImg = `<img style="width:100%" src='${pathFile}' />`;
    console.log(grayIpadImg);
    grayObject.innerHTML = grayIpadImg;
    functionstoragegb32();
    functionstoragegb128();
    functionwifiog32();
    functionwifinetwork128();
}
//儲存裝置-32GB價格
function functionstoragegb32() {
    let Gb32 = `<h6 style="margin-top:24px;margin-bottom:8px">${storage.version01.storage}</h6><p>${storage.version01.priceTag}</p>`;
    gigabyte32.innerHTML = Gb32;
    functionwifiog32();
    functionwifiog128();
    displayPriceTag32gbwifiOG();
}
//儲存裝置-128GB價格
function functionstoragegb128() {
    let Gb128 = `<h6 style="margin-top:24px;margin-bottom:8px">${storage.version02.storage}</h6><p>${storage.version02.priceTag}</p>`;
    gigabyte128.innerHTML = Gb128;
    functionwifiplus128();
    functionwifinetwork128();
    displayPriceTag128gbwifiOG();
}

//wifi-32gb的價格  -10900
function functionwifiog32() {
    let wifi32og = `<h6 style="margin-top:24px;margin-bottom:8px">${mode.mode01.wifi.wifititle}<h6><p class="wifipluspricetag">${wifiPriceTag.wifiogmode.wifi32gb}</p>`;
    wifiog.innerHTML = wifi32og;
    displayPriceTag32gbwifiOG();
}
//wifi-128gb的價格 -13900
function functionwifinetwork128() {
    let wifi128 = `<h6 style="margin-top:24px;margin-bottom:8px">${mode.mode01.wifi.wifititle}</h6><p class="wifipluspricetag">${wifiPriceTag.wifiogmode.wifi128gb}</p>`;
    wifiog.innerHTML = wifi128;
    displayPriceTag128gbwifiOG();
}

//wifi+32gb的價格 -15400
function functionwifiog128() {
    let wifi32og = `<h6 style="margin-top:24px;margin-bottom:8px">${mode.mode02.wifiplus.wifititle}<h6><p class="wifipluspricetag" >${wifiPriceTag.wifimode.wifi32gbplus}</p>`;
    wifinetwork.innerHTML = wifi32og;
    displayPriceTag32gbwifiplus();
}

//wifi+128gb的價格 18400
function functionwifiplus128() {
    let wifi128 = `<h6 style="margin-top:24px;margin-bottom:8px">${mode.mode02.wifiplus.wifititle}</h6><p class="wifipluspricetag">${wifiPriceTag.wifimode.wifi128gbplus}</p>`;
    wifinetwork.innerHTML = wifi128;
    displayPriceTag128gbwifiplus();
}

//價格試算
//wifi32G 10900
function displayPriceTag32gbwifiOG() {
    let gb32Price = `<h4>${wifiPriceTag.wifiogmode.wifi32gb}</h4>`;
    pricecalculator.innerHTML = gb32Price;
}
//wifi128G 13900
function displayPriceTag128gbwifiOG() {
    let gb128Price = `<h4>${wifiPriceTag.wifiogmode.wifi128gb}</h4>`;
    pricecalculator.innerHTML = gb128Price;
}
//wifiplus32G 15400
function displayPriceTag32gbwifiplus() {
    let gb32Price = `<h4>${wifiPriceTag.wifimode.wifi32gbplus}</h4>`;
    pricecalculator.innerHTML = gb32Price;
}
//wifiplus128G 18400
function displayPriceTag128gbwifiplus() {
    let gb128Price = `<h4>${wifiPriceTag.wifimode.wifi128gbplus}</h4>`;
    pricecalculator.innerHTML = gb128Price;
}

storageGroup.addEventListener("change", function() {
    let storage32 = document.getElementById("storagebtn32");
    let storage128 = document.getElementById("storagebtn128");
    if(storage32.checked = true){
        storage128.checked = false;
    }
    else if(storage128.checked = true){
        storage32.checked = false;
    }
});
