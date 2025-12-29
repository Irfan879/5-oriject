let btn = document.getElementById("button")
let result = document.getElementById("result");

btn.addEventListener("click", () => {

    result.innerHTML="Loading...Please wait";

    let timeout = setInterval(() => {
        let input = document.getElementById("userInput").value;
        let reversed = input.split("").reverse().join("");
        if(reversed == input) {
            result.innerHTML = "Yes, It's palindrome";
            result.style.color = "#56d814ff"
        } else {
            result.innerHTML = "No, not a palindrome";
             result.style.color = "#ff0000ff"
        }
    }, 900);
})
