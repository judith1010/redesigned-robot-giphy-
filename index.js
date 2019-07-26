var giphy_api = "Put Giphy Key Here";
function apiRequest(){
  var input = document.getElementById('input').value;
  // console.log(input);
  // var newChild = document.createElement("div")
  // newChild.innerText = input;
  // document.body.appendChild(newChild)
  var api_url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphy_api}`;
  console.log(api_url);
  fetch(api_url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // console.log(json);
      // console.log(json["data"][0]["images"]["fixed_height"]["url"])
      var img = document.createElement("img");
      img.src=json["data"][0]["images"]["fixed_height"]["url"];
      document.body.appendChild(img)
    })

  }
