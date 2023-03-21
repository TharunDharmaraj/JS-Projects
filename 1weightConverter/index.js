const inputNo = document.getElementById("inputWeight");
const resultTxt = document.getElementById("result");
const errorTxt = document.getElementById("error");

let errorTime,resultTime;

function updateWeight(){
    if(inputNo.value < 0 || isNaN(inputNo.value)){
        errorTxt.innerHTML ="Enter Valid Input";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            resultTxt.innerHTML = "";
            errorTxt.innerHTML = "";
        },3000);
    }else{
        resultTxt.innerHTML = (inputNo.value / 2.2).toFixed(2) ;
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            resultTxt.innerHTML = "";
            inputNo.value = "";
        },10000);
    }
}

inputNo.addEventListener("input",updateWeight);
