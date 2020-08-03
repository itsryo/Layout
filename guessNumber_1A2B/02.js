//路徑選取
let submitBtn = document.getElementById("submit");
let numberInput = document.getElementById("numberInput");
let showAnswerInput = document.getElementById("showAnswerInput");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let showAnswerBtn = document.getElementById("showAnswer");
let displayhistory = document.getElementById("displayHistory")
// let numberInput = document.getElementById("numberInput");
startBtn.innerText = "START";
resetBtn.innerText = "Reset";
showAnswerBtn.innerText = "SHOW ANSWER";
submitBtn.innerText = "Submit";
//點擊事件
startBtn.addEventListener("click", get1A2BNumBer); //產生亂數
resetBtn.addEventListener("click", resetFunction); //清除數字
showAnswerBtn.addEventListener("click", showAnswerFunction); //觀看產生的亂數
submitBtn.addEventListener("click", checkAnswer); //送出;比較輸入的答案跟產生的亂數是否正確
//開始之前不可以使用
//產生四位數亂數答案
function get1A2BNumBer() {
    var n = new Array(4); //宣告字元陣列(4個成員)
    do {
        //產生四個數字組成的字串
        for (var i = 0; i < 4; i++) {
            n[i] = parseInt(Math.random() * 10).toString();
        }
        //check NUM
        var rpt = false;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (i != j && n[i] == n[j]) {
                    rpt = true;
                }
            }
        }
    } while (rpt){
        showAnswerInput.value = n[0] + n[1] + n[2] + n[3];
    }
    alert("Game Start!")
}

//送出答案;按下按鈕後出現答案在視窗內
function checkAnswer() {
    var userKeyIn = numberInput.value; //使用者輸入數字
    //檢查重複
    var rpt = false;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (i != j && userKeyIn.charAt(i) == userKeyIn.charAt(j)) {
                rpt = true;
            }
        }
    }
    if (rpt){
        alert("請輸入4位不可重複數字");
        numberInput.value = ""
        return;
    } 
    var A = 0,
        B = 0; //建立提示變數
    var C = showAnswerInput.value;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (C.charAt(i) == userKeyIn.charAt(j)) {
                if (i == j) {
                    {
                        A += 1;
                    }
                } else {
                    B += 1;
                }
            }
        }
    }
    displayhistory.innerHTML += numberInput.value + "->" + A + "A" + B + "B<br/>";
}

function resetFunction() {
    if(rpt = true){
        numberInput.value = ""//清除猜測數字
    // get1A2BNumBer()
    alert("哎呀!太可惜了! 還有點時間按下START再重來一次吧!")
    }
    
}

//當點擊"SHOW ANSWER時可以顯示答案;
function showAnswerFunction() {
    alert(showAnswerInput.value)
    }
