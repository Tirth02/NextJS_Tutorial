
console.log("location file loaded");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function success(position) {
    console.log(position);
    
  }
  
  function error() {
    alert("Sorry, no position available.");
  }

  getLocation();