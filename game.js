// var colors=["red","blue","pink","yellow","black","brown"]
var colors = generateRandomColor(5)
var pikpik = document.querySelector("body")
var squares = document.querySelectorAll(".square")
var pickColor = pickColors()
var colordisplays = document.querySelector("#colordisplay")
var hrm = document.querySelector(".great")
var wrong = document.querySelector("#massage")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
})
hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
})
resetButton.addEventListener("click", function () {
    colors = generateRandomColor(6)
    pickColor = pickColors()
    colordisplays.textContent = pickColor
    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        hrm.style.background = "burlywood"

    }
})
colordisplays.textContent = pickColor
for (i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
    squares[i].addEventListener("click", function () {
        clickColor = this.style.background
        if (clickColor === pickColor) {
            // squares[i].style.background=pickColor
            changeColor(clickColor)
            resetButton.textContent = "play again"
            wrong.textContent = "correct"

        } else {
            this.style.background = "burlywood";
            wrong.textContent = "wrong"
        }
    })
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
        hrm.style.background = color
    }
}


function pickColors() {
    var random = Math.floor(Math.random() * 6 + 1)
    return (random)
}

function pickColors() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())


    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}