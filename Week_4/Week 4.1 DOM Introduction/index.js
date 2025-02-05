// debouncing, throtlling
let timeout;
function debouncePopulateDiv() {
    // delay the call to populateDiv until i have not been called for 100ms
    // and I've been called atleast once

    // how to cancel a clock?
    // clearTimeout
    clearTimeout(timeout);

    timeout = setTimeout(function() {
        populateDiv()
    }, 100);

}

function populateDiv() {
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;
    // const element = document.getElementById("finalSum")
    // element.innerHTML = parseInt(a) + parseInt(b);

    fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
    .then(function(response) {
        response.text()
            .then(function(ans) {
                document.getElementById("finalSum").innerHTML = ans;
            })
    })
}