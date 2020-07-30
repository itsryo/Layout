//路徑選取
let submitBtn = document.getElementById("submit");
let numberInput = document.getElementById("numberInput");
let showAnswerInput = document.getElementById("showAnswerInput");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let showAnswerBtn = document.getElementById("showAnswer");
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

//產生亂數
function get1A2BNumBer() {
    var n = new Array(4);
    do {
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
    } while (rpt);

    showAnswerInput.value = n[0] + n[1] + n[2] + n[3];
}

console.log(get1A2BNumBer());
//確認答案;按下按鈕後出現答案在視窗內
function checkAnswer() {
    var userKeyIn= numberInput.value;//使用者輸入數字
    //檢查重複
    var rpt = false;
    for(var i = 0;i<4;i++){
        for(var j = 0;j<4;j++){
            if(i !=j && userKeyIn.charAt(i)==userKeyIn.charAt(j)){
                rpt = true;
            }
        }
    }
    if(rpt)
        alert("不可重複數字");
        return;
}

function resetFunction() {}

//當點擊"SHOW ANSWER時可以顯示亂碼;"
function showAnswerFunction() {}
