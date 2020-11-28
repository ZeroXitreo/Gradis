//var testsite = "test";
console.log("background script is running");
var gradisGrades;
function processData(data) {
    var document = new DOMParser().parseFromString(data, "text/html");
    var resultTable = document.getElementById('resultTableGrup');
    var tbody = resultTable.getElementsByTagName('tbody')[0];
    var gradesTBody = tbody.getElementsByTagName('tr');
    gradisGrades = gradesTBody;
}
async function fetching() {
    await fetch('https://selvbprod.sdu.dk/prod/sb/resultater/studresultater.jsp')
        .then(response => response.text())
        .then(response => processData(response))
        .catch((error) => console.error('Error:', error));
}
fetching();
//# sourceMappingURL=background.js.map