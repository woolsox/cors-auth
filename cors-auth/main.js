let url = "https://api.linkedin.com/v1/people/~?format=json";

// let handler;
// var xhr = new XMLHttpRequest();
// var url = 'https://api.linkedin.com/v1/people/~?format=json';
//
// xhr.open('GET', url, true);
// xhr.onreadystatechange = handler;
// xhr.send();

fetch(url, {mode:"no-cors"})
 .then(
  function(response) {
   if (response.status !== 200) {
    console.log('Error: ' + response.status);
    return;
   }

   response.json().then(function(data){
    console.log(data);

  });
 }
)
