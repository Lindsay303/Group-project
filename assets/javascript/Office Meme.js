



}    
var APIKey = "8Ykbk0xjP3DLoOmjiO3XiGKYxMbn3q82"

 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +type+ "&api_key=8Ykbk0xjP3DLoOmjiO3XiGKYxMbn3q82&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {
    console.log(queryURL);
  }

  
  