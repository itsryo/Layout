let map;
let maskdata; //口罩JSON資料;
let markers = []; //標示點集合;
let stepMarkers = []; //導航標示點集合;
let infoWindows = [];
let stepinfoWindows = [];
let userpos;
//載入路線服務與路線顯示圖層
let directionService = new google.maps.DirectionsService();
let directionDisplay = new google.maps.DirectionsRenderer();
//抓取JSON資料
window.onload = function () {
    const url =
        "https://raw.githubusercontent.com/itsryo/FileStorage/master/_GMap.Json";
    fetch(url)
        .then((response) => response.json()) //抓json
        .then((data) => {
            maskdata = data; //data=抓到的資料把它放在maskdata中
            initMap(); //成功抓取後可以呼叫function 可以將你想要呼叫的function,
            addCountryList(); //加入在第二個.then之中;第一個then等於首先
            //第二個then等於然後
        })
        .catch((error) => {
            //catch = 要是沒有達到我想要的報錯讓我知道
            alert(error);
        });
};

//google Function :

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 25.0415956,
            lng: 121.5341098,
        },
        zoom: 12,
    });
    for (let i = 0; i < maskdata.features.length; i++) {
        //呼叫JSON資料:
        /* 變數 = {剛剛透過fetch方法後放置抓到JOSON資料的變數}.{JSON檔內物件陣列的名稱[i](備註:因為要抓物件陣列中的元素所以得戴上[i])}.{物件陣列元素名稱}.{你要的名稱}*/
        let masksLeft = maskdata.features[i].properties.mask_adult;
        let childMasksLeft = maskdata.features[i].properties.mask_child;
        let name = maskdata.features[i].properties.name;
        let myLatLng = new google.maps.LatLng({
            lat: maskdata.features[i].geometry.coordinates[0],
            lng: maskdata.features[i].geometry.coordinates[1],
        });
        let idNum = maskdata.features[i].properties.id;
        let countryName = maskdata.features[i].properties.country;
        let TownName = maskdata.features[i].properties.town;
        let address = maskdata.features[i].properties.address;
        let phone = maskdata.features[i].properties.phone;
        let note = maskdata.features[i].properties.note;
        let updata = maskdata.features[i].properties.updated;
        //計算口罩數量的總和
        let count = masksLeft + childMasksLeft;
        /*三元運算子: "?"" = if "; 
        ":"" = else*/

        let iconPic =
            count < 1000
                ? "/MaskMap/IMG/shock_face.png"
                : count < 2000
                ? "/MaskMap/IMG/happy_face.png"
                : "/MaskMap/IMG/angryface.png";
        //加入標示點群組
        markers[i] = new google.maps.Marker({
            position: myLatLng,
            icon: iconPic,
            map: map,
            id: idNum,
            country: countryName,
            town: TownName,
        });
        let contentString = `
        <div id="content">
            <h2 class="info-titile">${name}</h2>
            <div id="bodyContent">
                <p class="pop-adult"><b>成人口罩數量:</b>${masksLeft}</p>
                <p class="pop-child"><b>兒童口罩數量:</b>${childMasksLeft}</p>
                <p class="pop-address">${"/MaskMap/IMG/address.png"}${address}</p>
                <p class="pop-phone">${"/MaskMap/IMG/phone.png"}${phone}</p>
                <p class="pop-note">${"/MaskMap/IMG/time.png"}${note}</p>
                <p class="pop-update">${"/MaskMap/IMG/update.png"}${updata}}</p>
            </div>
        </div>`;
        //加入點擊標示彈跳視窗事件
        let infoWindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 450,
        });
        //標示點 點擊事件
        markers[i].addListener("click", () => {
            let county = document.querySelector(".selectCountry");
            let town = document.querySelector(".selectTown");
            //打開info視窗
            infoWindow.open(map, narkers[i]);
            //點擊標示 切換成是 鄉鎮選單 並強制觸發change事件
            county.value = markers[i].county;
            let even = new Event("change");
            county.dispatchEvent(event);
            town.value = markers[i].town;
            town.dispatchEvent(event);
            //列表滾動到標示點相同的藥局card位置
            document.getElementById(markers[i].id).scrollIntoView();
        });
    }
    //群組話
    let markerCluster = new MarkerCluster(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javacript/examples/markerclusterer/m",
        gridSize: 130, //集體網格內的像素數
        maxZoom: 16,
    });
    getUserLocation();
}

//兩地點導航
function directionGuide(originPos, destinationPos) {
    let stepinfoWindows = [];
    //清除上次的路線 放置路線圖層
    directionDisplay.setMap(null);
    directionDisplay.setMap(map);
    //路線相關設定
    let request = {
        orgin: originPos,
        destination: destinationPos,
        travelMode: "DRIVING",
    };
    directionService.route(request, function (result, status) {
        if (stepMarkers.length !== 0) {
            for (let i = 0; i < stepMarkers.length; i++) {
                stepMarkers[i].setMap(null);
            }
            stepMarkers = [];
        }
        if (status == "OK") {
            //回傳路線上每個步驟的細節
            let step = result.route[0].legs[0].step;
            stepMarkers.forEach((e, i) => {
                stepMarkers[i] = new google.maps.Marker({
                    position: {
                        lat: e.start_location.lat(),
                        lng: e.start_location.lng(),
                    },
                    map: map,
                    label: { text: i + "", color: "#fff" },
                });
                //加入資訊視窗
                stepinfoWindows[i] = new google.maps.InfoWindow({
                    content: e.instructions,
                });
                //加入地圖標記點擊事件
                stepMarkers[i].addListener("click", function () {
                    if (stepinfoWindows[i].anchor) {
                        stepinfoWindows[i].close();
                    } else {
                        stepinfoWindows[i].open(map, stepMarkers[i]);
                    }
                });
            });
            directionDisplay.setDirections(result);
        } else {
            console.log(status);
        }
    });
}
//取得使用者位置
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                userPos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                let marker = new google.maps.Marker({
                    position: userPos,
                    icon:
                        "http://maps.google.com/mapfiles/kml/paddle/red-circle.png",
                    map: map,
                });
                map.setCenter(userPos);
            },
            function () {
                console.log("無法取得位置");
                //handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        console.log("未支援定位功能");
        //Browser doesnt support Geolocation
        //handleLocationError(false, infoWindow , map.getCenter());
    }
}
//縣市選單
let countySelector = document.querySelector(".selectCounty");
let townSelector = document.querySelector(".selectTown");

//縣市選單變換監聽事件
document.querySelector(".selectCounty").addEventListener("change", addTownList);
document.querySelector(".selectTown").addEventListener("change", changeTown);

function changeTown(e) {
    renderList(countySelector.value, e.target.value);
}
//加入縣市選單
function addCountryList() {
    let allCountry = [];
    for (let i = 0; i < maskdata.features.length; i++) {
        var countryName = maskdata.features[i].properties.country;
        //和陣列內不重複的才放進陣列並添加到下拉選單
        if (allCountry.indexOf(countryName) == -1 && countryName !== "") {
            allCountry.push(countryName);
            countySelector.DOCUMENT_POSITION_DISCONNECTED.add(
                new Option(countryName, countryName)
            );
        }
    }
}
