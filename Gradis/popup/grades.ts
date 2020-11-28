async function onGot(page)
{
    await page.fetching();

    var gradesTbl = page.gradisGrades;

    var grades = document.getElementById('grades');

    for (var i = 0; i < gradesTbl.length; i++)
    {
        let gradeTbl = gradesTbl[i].children;

        var grade = document.createElement('div');
        grade.classList.add('box');
        grade.classList.add('grade');
        grades.appendChild(grade);

        var header = document.createElement('div');
        header.classList.add('box');
        header.classList.add('header');
        grade.appendChild(header);

        var description = document.createElement('div');
        description.classList.add('description');
        description.innerText = gradeTbl[1].innerText.trim();
        header.appendChild(description);

        var weight = document.createElement('div');
        weight.classList.add('weight');
        weight.innerText = gradeTbl[6].innerText + "ECTS";
        header.appendChild(weight);

        var results = document.createElement('div');
        results.classList.add('results');
        grade.appendChild(results);

        var result = document.createElement('div');
        result.classList.add('row');
        result.classList.add('result');
        results.appendChild(result);

        var fill = document.createElement('div');
        fill.classList.add('fill');
        fill.innerText = 'Grade';
        result.appendChild(fill);

        var value = document.createElement('div');
        value.classList.add('value');
        result.appendChild(value);





        let valueGr = gradeTbl[4].innerText.trim();
        if (valueGr == "B")
        {
            value.classList.add('pass');
            value.innerText = 'Pass';
        }
        else if (valueGr == "IB")
        {
            value.classList.add('fail');
            value.innerText = 'Fail';
        }
        else
        {
            valueGr = parseInt(valueGr);
            if (valueGr >= 2)
            {
                value.classList.add('pass');
                value.innerText = 'Pass';
            }
            else
            {
                value.classList.add('fail');
                value.innerText = 'Fail';
            }
        }
        //value.innerText = valueGr;
    }
}

function onError(error)
{
    console.log(`Error: ${error}`);
}

var getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);
