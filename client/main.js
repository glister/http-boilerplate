console.log('Hello World!')


document.getElementById('classify-button').addEventListener('click', async () => {
    console.log('Button clicked!');
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (!file) {
        console.error('No file selected');
        return;
    }

    console.dir(file);
    // use the fetch api to send a POST request to the server with your file in a FormData object
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //https://developer.mozilla.org/en-US/docs/Web/API/FormData
});