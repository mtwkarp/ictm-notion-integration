const button = document.getElementById('custom-button');

button.addEventListener('click', (e) => {
    onCustomButtonClick();
})

function onCustomButtonClick() {
    sendRequestToNotion();
}

function sendRequestToNotion() {
    console.log('sendRequestToNotion');
}