var json = "";
var map = "";
var iconImg =
    "/MaskMap/新增資料夾/facemask_virus_covid_corona_mask_icon_141690.png";
var iconImgSoldOut = "/MaskMap/新增資料夾/32pxCloseout_cierre_259 (1).png";
// var titleArr = [];
// var dataArr = [];
// var myposition = event.feature.getProperty("coordinates[0]");
// var myposition02 = event.feature.getProperty("coordinates[1]");
// var myHTML = json.features.properties;
// let xhr = new XMLHttpRequest();
// const url =
//     "https://raw.githubusercontent.com/itsryo/FileStorage/master/Mask_Map.json";
// function requestJSON() {
//     xhr.onload = function () {
//         let jsonObect = JSON.parse(this.responseText);

//         var titleArr = Object.keys(jsonObect.features[0]);
//         var dataArr = Object.values(jsonObect.features[0]);
//         //console.log(titleArr);
//         //console.log(dataArr);
//     };
//     xhr.open("GET", url);
//     xhr.send();
// }
// requestJSON();
// console.log(json);
function initMap() {
    // The location of 藥局地址
    var TaiwanLocation = { lat: 23.9106872, lng: 121.5812639 };
    // The map, centered at ZOOM-IN 跟位置
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: TaiwanLocation,
    });
    map.data.loadGeoJson(
        "https://raw.githubusercontent.com/itsryo/FileStorage/master/Mask_Map.json"
    );
    map.data.setStyle({
        icon: iconImg,
    });
    console.log(map.data);
    map.data.setStyle(function (feature) {
        var myHTML01 = feature.getProperty("masksLeft");
        if (myHTML01 == 0) {
            return { icon: iconImgSoldOut };
        } else {
            return { icon: iconImg };
        }
    });

       // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: TaiwanLocation,
        map: map,
        icon: iconImg,
        title: "Click to zoom ",
    });
    var infowindow = new google.maps.InfoWindow({
        content: "",
        pixelOffset: new google.maps.Size(0, -30),
    });
    map.data.addListener("click", function (event) {
        var myHTML = event.feature.getProperty("name");
        var myHTML01 = event.feature.getProperty("masksLeft");
        var myHTML02 = event.feature.getProperty("childMasksLeft");
        // var myMaskLeft = event.feature.getProperty("maskLeft");
        infowindow.setContent(
            "<div style='width:150px;text-align:center'>" +
                myHTML +
                "</div><div style='width:150px;text-align:center'>成人口罩:" +
                myHTML01 +
                "</div><div style='width:150px;text-align:center'>兒童口罩:" +
                myHTML02 +
                "</div>"
        );
        // position the infowindow on the marker
        infowindow.setPosition(event.feature.getGeometry().get());
        // anchor the infowindow on the marker
        infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
        infowindow.open(map);
    });

    // map.data.addListener("click", function () {
    //     map.setZoom(10);
    //     map.setCenter(marker.getPosition());
    // });

    // map.addListener("center_changed", function () {
    //     // 10 seconds after the center of the map has changed, pan back to the
    //     // marker.
    //     // window.setTimeout(function () {
    //     //     map.panTo( TaiwanLocation.getPosition());
    //     // }, 3000);
    // });
}
