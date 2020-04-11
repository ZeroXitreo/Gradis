//var testsite = "test";
console.log("background script is running");



fetch('https://example.com/')
    .then(response => response.text())
    .then(response => console.log(response))
    .catch((error) => console.error('Error:', error));