const emailInput = document.querySelector(".email")
const submitButton = document.querySelector(".get")
let errorText = document.querySelector(".error")

submitButton.addEventListener("click", () => {
    let value = emailInput.value
    let com = value.substr(-4)

    if(com != ".com") {
        errorText.classList.add("there-is")()
    } else {
        errorText.classList.remove("there-is")
    }
})