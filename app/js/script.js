const emailInput = document.querySelector(".email")
const getButton = document.querySelector(".get")
let errorText = document.querySelector(".error")

getButton.addEventListener("click", () => {
    let value = emailInput.value
    let com = value.substr(-4)

    if(com != ".com") {
        errorText.classList.add("there-is")()
    } else {
        errorText.classList.remove("there-is")
    }
})