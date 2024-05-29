// Asynchronous Programming
// AJAX = Asynchronous JavaScript And XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object (Xml Http Request)
    let xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function() {
        console.log(xhr.readyState);
    }

    xhr.onload = function () {
        // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`
        }
    }

    //xhr.onreadystatechange = function () {
    //     // readyState Values
    //     // 0: request not initialized
    //     // 1: server connection established
    //     // 2: request received
    //     // 3: processing request
    //     // 4: request finished and response is ready
    //     //console.log(this.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

    //console.log(xhr);
}

// https://api.api-ninjas.com/v1/jokes
// API
// RESTful API

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes(e) {
  let number = document.getElementById('number').value;
  //console.log(number);
  let xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.api-ninjas.com/v1/jokes?limit=${number}`, true);
  xhr.setRequestHeader('X-Api-Key', 'tdSI+SyBA+WwiH6ks2Sgsg==kFNInEG3v01rOLTk');

  xhr.onloadstart = function () {
    document.getElementById('output').innerHTML = '<h3>Loading......</h3>';
  };

  xhr.onload = function () {
    console.log('loaded');
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      let jokes = data;
      let output = '<ol>';

      jokes.forEach(function (item) {
        //console.log(item.joke);
        output += `<li>${item.joke}</li>`;
      });
      output += '</ol>';

      document.getElementById('output').innerHTML = output;
    }
  };

  xhr.send();
}