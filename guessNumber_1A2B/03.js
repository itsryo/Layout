//路徑
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let showAnswerBtn = document.getElementById("showAnswer");
let submitBtn = document.getElementById("submit");
let numberInput = document.getElementById("numberInput");
let showAnswerInput = document.getElementById("showAnswerInput");
let displayhistory = document.getElementById("displayHistory");
//塞字
startBtn.innerText = "START";
resetBtn.innerText = "RESET";
showAnswerBtn.innerText = "SHOW ANSWER";
submitBtn.innerText = "SUBMIT";
//點擊事件
startBtn.addEventListener("click", get1A2BNumBer); //產生亂數
resetBtn.addEventListener("click", resetFunction); //清除數字
showAnswerBtn.addEventListener("click", showAnswerFunction); //觀看產生的亂數
submitBtn.addEventListener("click", checkAnswer); //送出;比較輸入的答案跟產生的亂數是否正確

//Functions
//START:
//1.按下START既開始遊戲在此之前按鈕不會有反應
//2.按下START隨機產生四個整數亂數
function get1A2BNumBer() {
    document.getElementById("start").disabled = true;
    document.getElementById("showAnswer").disabled = false;
    document.getElementById("displayHistory").disabled = false;
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
//Clear Functions:
//1.猜測紀錄區
function clearDisplayHistory(){
    displayhistory.innerHTML=""
}
//2.輸入區
function clearNumberInput(){
    numberInput.value = ""
}
//3.亂數答案放置區
function clearShowAnswerInput(){
    showAnswerInput.value = ""
}
//4.Reset 按鍵
function resetFunction(){
    clearDisplayHistory();
    clearNumberInput();
    clearShowAnswerInput();
    document.getElementById("start").disabled = false;
    document.getElementById("showAnswer").disabled = true;
    document.getElementById("displayHistory").disabled = true;
}

//當點擊"SHOW ANSWER時可以顯示答案;
function showAnswerFunction() {
    alert(showAnswerInput.value)
    }

function checkAnswer(){
    var userInput = numberInput.value; //使用者輸入數字
    var rpt = false;
    let A = 0;
    let B = 0;
    let C = showAnswerInput.value;
    if(userInput==""){
        alert("請輸入4位不可重複數字")
        clearNumberInput()
    }else if (userInput.length != 4){
        alert("請輸入4位不可重複數字")
        clearNumberInput()
    }else{
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (C.charAt(i) == userInput.charAt(j)) {
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
        clearNumberInput()
    }
    if(A == 4){
        alert("GOAL !!!!!!!!!!!!!!!!")
    }
    
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (i != j && userInput.charAt(i) == userInput.charAt(j)) {
                rpt = true;
            }
        }
    }
    if (rpt){
        alert("請輸入4位不可重複數字");
        clearNumberInput()
        return;
    } 
    
}

//不給輸入特殊符號
function showKeyPress(evt) {
    evt = (evt) ? evt : window.event
    return checkSpecificKey(evt.keyCode);
    }
    function checkSpecificKey(keyCode) {
    var specialKey = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";//Specific Key list
    var realkey = String.fromCharCode(keyCode);
    var flg = false;
    flg = (specialKey.indexOf(realkey) >= 0);
    if (flg) {
    // alert('請勿輸入特殊字元: '   realkey);
    return false;
    }
    return true;
    }
    document.onkeypress = showKeyPress;



