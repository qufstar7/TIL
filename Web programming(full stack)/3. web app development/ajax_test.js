var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function () {
  var jsonObj = JSON.parse(this.responseText);

  console.log(typeof this.responseText);
  console.log(this.responseText);

  var fruit = jsonObj.favorites[1];
  var outside = document.querySelector(".outside");
  outside.innerHTML += "<span> " + fruit + "</span>";
});

oReq.open("GET", "./ajax_json.txt");
oReq.send();
