const inputDob = document.querySelector("#input-dob");
const inputLuckyNumber = document.querySelector("#input-lucky-number");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

checkButton.addEventListener("click", btnEventHandler)

function btnEventHandler() {
    // var dob = parseInt(inputDob.value.replaceAll("-", ""), 10);
    let dob = inputDob.value.replaceAll("-", "");

    let sum = 0;
    for (let num of dob) {
        let numP = parseInt(num);
        sum = sum + numP;
    }

    if (inputLuckyNumber.valueAsNumber % sum === 0) {
        output.innerText = "lucky-ass motherfucker";
    } else {
        output.innerText = "work hard motherfucker, you ain't lucky, fuck luck with you hard ass work, what you looking at get your ass off and work";
    }
}