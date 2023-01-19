const imageFileInput = document.querySelector('#imageFileInput');
const canvas = document.querySelector('#meme');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextinput = document.querySelector('#bottomTextInput');

let image;

imageFileInput.addEventListener("change", (e) => {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);
})