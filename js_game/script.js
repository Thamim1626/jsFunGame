let light_red = document.getElementById("red_light")
let light_yellow = document.getElementById("yellow_light")
let light_green = document.getElementById("green_light")
let red_btn = document.getElementById("red_btn")
let yellow_btn = document.getElementById("yellow_btn")
let green_btn = document.getElementById("green_btn")

function stopBtn() {
    light_red.style.backgroundColor = "red";
    red_btn.style.backgroundColor = "red";

    light_green.style.backgroundColor = "#4b5069";
    green_btn.style.backgroundColor = "#1f1d41";

    light_yellow.style.backgroundColor = "#4b5069";
    yellow_btn.style.backgroundColor = "#1f1d41";


}

function readyBtn() {
    light_yellow.style.backgroundColor = "yellow";
    yellow_btn.style.backgroundColor = "yellow";

    light_red.style.backgroundColor = "#4b5069";
    red_btn.style.backgroundColor = "#1f1d41";

    light_green.style.backgroundColor = "#4b5069";
    green_btn.style.backgroundColor = "#1f1d41";

}

function goBtn() {
    light_green.style.backgroundColor = "green";
    green_btn.style.backgroundColor = "green";

    light_red.style.backgroundColor = "#4b5069";
    red_btn.style.backgroundColor = "#1f1d41";

    light_yellow.style.backgroundColor = "#4b5069";
    yellow_btn.style.backgroundColor = "#1f1d41";

}

let container = document.getElementById("colorPickerContainer");
let text = document.getElementById("bgColor")

function grey() {
    container.style.background = "#e0e0e0";
    text.textContent = "#e0e0e0"
    text.style.color = "#e0e0e0"
    text.style.backgroundColor = "black"
}

function green() {
    container.style.background = "#6fcf97";
    text.textContent = "#6fcf97"
    text.style.color = "#6fcf97"
    text.style.backgroundColor = "black"
}

function blue() {
    container.style.background = "#56ccf2";
    text.textContent = "#56ccf2"
    text.style.color = "#56ccf2"
    text.style.backgroundColor = "black"
}

function purple() {
    container.style.background = "#bb6bd9"
    text.textContent = "#bb6bd9"
    text.style.color = "#bb6bd9"
    text.style.backgroundColor = "black"
}

let image_area = document.getElementById('imaSection')
let image_area_lg = document.getElementById('imaSectionlg')

function spring_season() {
    image_area.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    image_area_lg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";

}

function summer_season() {
    image_area.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    image_area_lg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

}

function autumn_season() {
    image_area.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    image_area_lg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
}

function winter_season() {
    image_area.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    image_area_lg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
}





let billAmount = document.getElementById("billAmount");
let percentageAmount = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");

let errorMessage = document.getElementById("errorMessage");


function calculate() {
    if (billAmount.value == "") {
        errorMessage.textContent = "please Enter a Valid Input";
    } else if (percentageAmount.value == "") {
        errorMessage.textContent = "please Enter a Valid Input";
    } else {
        errorMessage.textContent = "";
        let tipValue = (billAmount.value / 100) * percentageAmount.value
        tipAmount.value = tipValue
        totalAmount.value = parseInt(tipValue) + parseInt(billAmount.value);


    }
}

let bgColorInput = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColor");
let fontSize = document.getElementById("fontSize");
let fontWeight = document.getElementById("fontWeight");
let padding = document.getElementById("padding");
let border = document.getElementById("border");

let customButton = document.getElementById("customButton");

function applyfunc() {
    customButton.style.backgroundColor = bgColorInput.value;
    customButton.style.color = fontColor.value;
    customButton.style.fontSize = fontSize.value;
    customButton.style.fontWeight = fontWeight.value;
    customButton.style.padding = padding.value;
    customButton.style.borderRadius = border.value;

}
let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

function btn() {
    let randomBg = bgColorsArray[Math.floor((Math.random() * bgColorsArray.length))]

    let boxcoloring = document.getElementById("boxcoloring");
    boxcoloring.style.backgroundColor = randomBg;
}

let firstNumber = document.getElementById("firstNumber");
let seccondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

let randomFirstNumber = Math.ceil(Math.random() * 100);
let randomSecondNumber = Math.ceil(Math.random() * 100);

firstNumber.textContent = randomFirstNumber;
seccondNumber.textContent = randomSecondNumber;

let finalRandom = randomFirstNumber + randomSecondNumber;

function checkButtonfunction() {
    if (finalRandom == userInput.value) {
        gameResult.textContent = "correct";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "wrong";
        gameResult.style.backgroundColor = "red";
    }
}

function restartButton() {
    userInput.value = "";
    gameResult.textContent = "";
}
let imageElement = document.getElementById("image");
let sizeChange = document.getElementById("sizeChange");
let warningMsg = document.getElementById('warningMsg');

let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;

sizeChange.textContent = originalImageWidth;
let startOriginalImageWidth = originalImageWidth.slice(0, 3);
let endOriginalImageWidth = originalImageWidth.slice(3, );

function decrementfun() {
    if (startOriginalImageWidth == 100) {
        warningMsg.textContent = "Image size is very small , so increase your size";
    } else {
        startOriginalImageWidth = parseInt(startOriginalImageWidth) - 5;
        originalImageWidth = startOriginalImageWidth + endOriginalImageWidth;
        imageElement.style.width = originalImageWidth;

        sizeChange.textContent = originalImageWidth;
    }
}

function incrementfun() {
    if (startOriginalImageWidth == 400) {
        warningMsg.textContent = "Image size is very big, so decrease your size"
    } else {
        startOriginalImageWidth = parseInt(startOriginalImageWidth) + 5;
        originalImageWidth = startOriginalImageWidth + endOriginalImageWidth;
        imageElement.style.width = originalImageWidth;
        sizeChange.textContent = originalImageWidth;
    }
}
let puppyImg = document.getElementById("puppyImage");
let likeIcon = document.getElementById("likeIcon");
let likeBtn = document.getElementById("likeBtn");
let imgLike = false;

function onClickLikeButton() {
    if (imgLike === false) {
        puppyImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        imgLike = true;

        likeBtn.style.color = "#9aa5b1";
        likeBtn.style.backgroundColor = "#cbd2d9";
        likeIcon.style.color = "#cbd2d9"



    } else {
        puppyImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        imgLike = false;
        likeBtn.style.color = "#ffffff";
        likeBtn.style.backgroundColor = "#0967d2";
        likeIcon.style.color = "#0967d2"
    }
}