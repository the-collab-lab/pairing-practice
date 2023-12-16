////////////////////////////////////////////////////////////////////////////////
// pair 1
function printEvenNumbers(name) {
    ////////////////////////////////////////////////////////////////////////////
    // pair 1, do your work here!
    let result = 1;

    // calculate your result, then pass it in here
    showResult(name, result);
}

////////////////////////////////////////////////////////////////////////////////
// pair 2
function printSum(name) {
    ////////////////////////////////////////////////////////////////////////////
    // pair 2, do your work here!
    let result = 2;

    // calculate your result, then pass it in here
    showResult(name, result);
}

////////////////////////////////////////////////////////////////////////////////
// you shouldn't need to change anything below this line

function routeSubmission(event) {
    // keep the form submission from reloading the page
    event.preventDefault();
    const form = event.target;
    const name = form.dataset.inputName;
    if ('print-even-numbers' === name) {
        printEvenNumbers(name);
    }
    // 'print-sum' === name
    else {
        printSum(name);
    }
}

function showResult(name, result) {
    document.querySelector(`textarea[name="${name}"]`).value = result;
}

function addEventListeners() {
    // use event delegation to listen for any form submissions
    document.addEventListener('submit', routeSubmission);
}

// once the page has loaded, allow for form submissions
document.addEventListener('DOMContentLoaded', addEventListeners);
