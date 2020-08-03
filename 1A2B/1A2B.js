//路徑選取
let submitInput = document.getElementById("submit");
let numberInput = document.getElementById("numberInput");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let showAnswerBtn = document.getElementById("showAnswer");
// let numberInput = document.getElementById("numberInput");
let result="";
startBtn.innerText = "START";
//點擊事件
startBtn.addEventListener("click", get1A2BNumBer); //產生亂數
resetBtn.addEventListener("click", resetFunction); //清除數字
showAnswerBtn.addEventListener("click", showAnswerFunction); //觀看產生的亂數
submitInput.addEventListener("click", checkAnswer); //比較輸入的答案跟產生的亂數是否正確

function getRandom(x) {
    return Math.floor(Math.random() * x + 1);
}
function get1A2BNumBer() {
    // document.getElementById("numberInput")=display;
    var status = "";
    var n = 0;
    for (i = 0; i < 4; i++) {
        n = getRandom(9);
        if (status.indexOf(n) > 0) {
            i -= 1;
            continue;
        } else {
            let result = (status += n + "");
            // display.innerText = result;
        }
    }
}
console.log(get1A2BNumBer) 

function resetFunction() {}

function showAnswerFunction() {}

function checkAnswer() {}
