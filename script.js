const imageFileInput = document.querySelector('#imageFileInput');
const canvas = document.querySelector('#meme');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextinput = document.querySelector('#bottomTextInput');

let image;

imageFileInput.addEventListener("change", (e) => {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);
    console.log(imageDataUrl);

    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", () => {
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextinput.value)
    }, {once: true});
});

function updateMemeCanvas (canvas, image, topText, bottomText) {
    const context = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;

    //Update Canvas Background
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0);

    //Prepare Text
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.lineWidth = Math.floor(fontSize / 4);
    context.textAlign = "center";
    context.lineJoin = "round";
    context.font = `${fontSize}px sans-serif`;

    //Top Text
    context.textBaseline = "top";
    context.strokeText(topText, width / 2, yOffset);
    context.fillText(topText, width / 2, yOffset);

    //Bottom Text
    context.textBaseline = "bottom";
    context.strokeText(bottomText, width / 2, height - yOffset);
    context.fillText(bottomText, width / 2, height - yOffset);
}