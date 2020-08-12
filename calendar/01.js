//Brfore Start:
//PreSTart THINKIN
//1.要先創建出一個月曆
//Q:月曆元素有哪些;需要那些格是有哪些

let today = new Date(); //今天時間
let currentYear = today.getFullYear(); //今年是幾年
let currentMonth = today.getMonth(); //今天是幾月
let monthDate = today.getDate(); //今日星期幾
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
            //  0     1     2    3      4    5     6      7      8     9    10     11
//h3 titile
let yearDisplay = document.getElementById("yearDisplay");
//按鈕點擊事件方法
let btnPre=document.getElementById("btnPre")
let btnNxt=document.getElementById("btnNxt")
function lastMonth(){
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0 ) ? 11 :  currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}
function nextMonth(){
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}







//頁面開始便執行方法
showCalendar(currentMonth, currentYear);
function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay(); //每個月的第一天是從星期幾開始
    let daysInMonth = 32 - new Date(year, month, 32).getDate(); // 這個月有幾天
    let tbody = document.querySelector("tbody");
    // console.log(firstDay);
    yearDisplay.innerHTML = months[month] + " " + year; //h3 顯示 月份 以及年份
    tbody.innerHTML=" "
    //Tbody加入六列
    let date = 1;//日期從1開始
    for (let i = 0; i < 6; i++) {
        let trow = document.createElement("tr");
        //在每一個tr中加入7個格子td
        for (let j = 0; j < 7; j++) {
            //處裡第一列將小於每月初起始的星期前的格子給予空白內容
            if (i === 0 && j < firstDay) {
                let tdis = document.createElement("td");
                let tdistxt = document.createTextNode(" ");
                trow.appendChild(tdis);
                tdis.appendChild(tdistxt);
            }else if (date > daysInMonth){
                //當日期格子大於每個月最大天數時
                let tdis = document.createElement("td");
                let tdistxt = document.createTextNode(" ");
                trow.appendChild(tdis);
                tdis.appendChild(tdistxt);
            }
            //其餘的
            else{
                //讓 變數 代表html<td>標籤
                let tdis = document.createElement("td");
                //讓 變數 指派 DOM 創造文字節點(節點內容為欲加入的參數或字串)
                let tdistxt = document.createTextNode(date);
                if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ){
                    tdis.classList.add("bg-light")
                    //假如日期等於今天的年月日更改其背景色,顯眼表示
                }
                trow.appendChild(tdis);
                tdis.appendChild(tdistxt);
                date++ //在日期格中添加;從1加到當月最大天數
                
            }
        }
        tbody.appendChild(trow);//tbody加入tr
    }
}
