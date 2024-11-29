//location settings
var inputlocationdata = {name:"",lat:"",lon:"",state:""}, mainlocationdata = {displayname:"",name:"",lat:"",lon:"",state:""}, extralocsdata = [], city8slidedata = [], cctickerdata = [], settingstype;
function autocomplete(inp, option) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  var typingTimer;                //timer identifier
  var doneTypingInterval = 1000;  //time in ms, 5 second for example
  var val, weatherdata;
  inp.addEventListener("input", function(e) {
    val = e.target.value
    inputlocationdata = {name:"",lat:"",lon:""}
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function() {doneTyping(e)}, doneTypingInterval);
  });
  function doneTyping(e) {
    var a, b, i;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    arr = [];
    $.getJSON("https://api.weather.com/v3/location/search?query="+val+"&language=en-US&format=json&apiKey=" + api_key, function(data) {
      weatherdata = data
      data.location.address.forEach((locaddress, i) => {
        arr.push(locaddress)
      });
        inputInfo();
    });
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    e.target.parentNode.appendChild(a);
    function inputInfo() {
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(f) {
            /*insert the value for the autocomplete text field:*/
            e.target.value = this.getElementsByTagName("input")[0].value;
            wi = weatherdata.location.address.indexOf(this.getElementsByTagName("input")[0].value);
            inputlocationdata.name = weatherdata.location.displayName[wi]
            inputlocationdata.lat = weatherdata.location.latitude[wi]
            inputlocationdata.lon = weatherdata.location.longitude[wi]
            inputlocationdata.state = weatherdata.location.adminDistrict[wi];
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
        });
        a.appendChild(b);
      }
      }
    }
  };
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
//runs when ajax is finished
function initLocSettings() {
  mainlocationdata.name = maincitycoords.name
  mainlocationdata.lat = maincitycoords.lat
  mainlocationdata.lon = maincitycoords.lon
  mainlocationdata.displayname = maincitycoords.name
  mainlocationdata.state = state
  updateonResetMainLoc()
  extralocsdata = locList
  city8slidedata = citySlideList
  cctickerdata = ccTickerCitiesList
  updateLocs("extralocation")
  updateLocs("8slide")
  updateLocs("cctickerloc")
}
function saveLocSettings() {
  maincitycoords = mainlocationdata
  locList = extralocsdata
  citySlideList = city8slidedata
  ccTickerCitiesList = cctickerdata
  grabAlamanacSlidesData()
  grabSideandLowerBarData()
  grabCitySlidesData()
  grabHealthData()
  pullCCTickerData()
  buildHeaderGlobal()
  grabTrafficData ()
}
//runs when weatherman returns info
function updateonResetMainLoc() {
  $("#mainlocation #locationname").text("name: "+mainlocationdata.name)
  $("#mainlocation #locationdisplayname").text("display name: "+mainlocationdata.displayname)
  $("#mainlocation #coords").text("coordinates: "+mainlocationdata.lat+","+mainlocationdata.lon)
}
function updateonResetCCTickerLoc() {
  mainlocationdata.name = mainlocationsettingsobj.name
  mainlocationdata.lat = mainlocationsettingsobj.lat
  mainlocationdata.lon = mainlocationsettingsobj.lon
  mainlocationdata.displayname = mainlocationsettingsobj.displayname
  mainlocationdata.state = mainlocationsettingsobj.state
  $("#mainlocation #locationname").text("name: "+mainlocationsettingsobj.name)
  $("#mainlocation #locationdisplayname").text("display name: "+mainlocationsettingsobj.displayname)
  $("#mainlocation #coords").text("coordinates: "+mainlocationsettingsobj.lat+","+mainlocationsettingsobj.lon)
}

//Displays all updates for location arrays
function updateLocs(id) {
  if (id=="extralocation") {
    extralocsdata.forEach((eloc, i) => {
      di = i + 1
      $(`#extralocation${di} #locationname`).text("name: "+eloc.name)
      $(`#extralocation${di} #locationdisplayname`).text("displayname: "+eloc.displayname)
      $(`#extralocation${di} #coords`).text("coordinates: "+eloc.lat+","+eloc.lon)
    });
    if (extralocsdata.length<=3) {
      var mi = 3
      for (var i = 0; i < (mi-extralocsdata.length); i++) {
        $("#extralocation"+(mi-i)).fadeOut(0);
      }
      for (var i = 1; i < (extralocsdata.length + 1); i++) {
        $("#extralocation"+(i)).fadeIn(0);
      }
    }
  } else if (id=="8slide") {
    city8slidedata.forEach((c8loc, i) => {
      di = i + 1
      $(`#eightslideloc${di} #locationname`).text("name: "+c8loc.name)
      $(`#eightslideloc${di} #locationdisplayname`).text("displayname: "+c8loc.displayname)
      $(`#eightslideloc${di} #coords`).text("coordinates: "+c8loc.lat+","+c8loc.lon)
    });
    if (city8slidedata.length<=8) {
      var mi = 8
      for (var i = 0; i < (mi-city8slidedata.length); i++) {
        $("#eightslideloc"+(mi-i)).fadeOut(0);
      }
      for (var i = 1; i < (city8slidedata.length + 1); i++) {
        $("#eightslideloc"+(i)).fadeIn(0);
      }
    }
  } else if (id=="cctickerloc") {
    cctickerdata.forEach((eloc, i) => {
      di = i + 1
      $(`#cctickerloc${di} #locationname`).text("name: "+eloc.name)
      $(`#cctickerloc${di} #locationdisplayname`).text("displayname: "+eloc.displayname)
      $(`#cctickerloc${di} #coords`).text("coordinates: "+eloc.lat+","+eloc.lon)
    });
    if (cctickerdata.length<=10) {
      var mi = 10
      for (var i = 0; i < (mi-cctickerdata.length); i++) {
        $("#cctickerloc"+(mi-i)).fadeOut(0);
      }
      for (var i = 1; i < (cctickerdata.length + 1); i++) {
        $("#cctickerloc"+(i)).fadeIn(0);
      }
    }
  }
};
//button listeners
$(function(){

  //init locationsettings
  autocomplete(document.getElementById("searchbar"), 'option');
  //button listeners
  $("#setmainloc").click(function() {
    if (inputlocationdata.name) {
      mainlocationdata.name = inputlocationdata.name
      mainlocationdata.lat = inputlocationdata.lat
      mainlocationdata.lon = inputlocationdata.lon
      mainlocationdata.displayname = ($("#locdisplayname").val()) ? $("#locdisplayname").val() : inputlocationdata.name
      $("#mainlocation #locationname").text("name: "+inputlocationdata.name)
      $("#mainlocation #locationdisplayname").text("display name: "+mainlocationdata.displayname)
      $("#mainlocation #coords").text("coordinates: "+inputlocationdata.lat+","+inputlocationdata.lon)
    }
    });
  $("#addlocbutton").click(function() {
      if (extralocsdata.length < 3 && inputlocationdata.name) {
        extralocsdata.push(
        {
          name:inputlocationdata.name,
          lat:inputlocationdata.lat,
          lon:inputlocationdata.lon,
          displayname: (($("#locdisplayname").val()) ? $("#locdisplayname").val() : inputlocationdata.name)
        })
        updateLocs("extralocation")
      }
  });
  $("#addloc8slide").click(function() {
      if (city8slidedata.length < 8 && inputlocationdata.name) {
        city8slidedata.push(
        {
          name:inputlocationdata.name,
          lat:inputlocationdata.lat,
          lon:inputlocationdata.lon,
          displayname: (($("#locdisplayname").val()) ? $("#locdisplayname").val() : inputlocationdata.name)
        })
        updateLocs("8slide")
      }
  });
  $("#addlocticker").click(function() {
      if (cctickerdata.length < 10 && inputlocationdata.name) {
        cctickerdata.push(
        {
          name:inputlocationdata.name,
          lat:inputlocationdata.lat,
          lon:inputlocationdata.lon,
          displayname: (($("#locdisplayname").val()) ? $("#locdisplayname").val() : inputlocationdata.name)
        })
        updateLocs("cctickerloc")
      }
  });
  $(".removelocbutton").click(function(button) {
      var arraytype = ((button.target.parentNode.className == "extralocation") ? extralocsdata : ((button.target.parentNode.className == "eightslideloc") ? city8slidedata : ((button.target.parentNode.className == "cctickerloc") ? cctickerdata : "")))
      var locnum = (button.target.parentNode.id).replace( /^\D+/g, '')
      arraytype.splice((button.target.parentNode.id).replace( /^\D+/g, '') -1, 1);
      updateLocs((button.target.parentNode.className == "extralocation") ? "extralocation" : ((button.target.parentNode.className == "eightslideloc") ? "8slide" : ((button.target.parentNode.className == "cctickerloc") ? "cctickerloc" : "")))
  });
  $(".clearalllocs").click(function(button) {
      var arraytype = ((button.target.parentNode.id == "extralocheader") ? extralocsdata : ((button.target.parentNode.id == "city8slide") ? city8slidedata : ((button.target.parentNode.id == "cctickerheader") ? cctickerdata : "")))
      arraytype.length = 0;
      updateLocs((button.target.parentNode.id == "extralocheader") ? "extralocation" : ((button.target.parentNode.id == "city8slide") ? "8slide" : ((button.target.parentNode.id == "cctickerheader") ? "cctickerloc" : "")))
  });
  $("#resetmainloc").click(function(button) {
      getMainLoc()
  });
  $(".resetotherlocs").click(function(button) {
      if (button.target.id == "extralocation") {
        extralocsdata.length = 0
      } else if (button.target.id == "8slide") {
        city8slidedata.length = 0
      }
      getExtraLocs(mainlocationdata.lat,mainlocationdata.lon, false, button.target.id)
  });
  $("#resetcctickerlocs").click(function(button) {
      getStatePopularCities(mainlocationdata.state, false)
  });
})
//settings button listeners
$(function(){
  $("#locationsettings").click(function(button) {
    settingstype = "locationsettings"
    $("#apperancesettings").text("appearance settings")
    $("#locationsettings").text("▶ location settings")
    $("#weathersettings").text("weather settings")
    $("#apperancesettingspane").fadeOut(0)
    $("#locationsettingspane").fadeIn(0)
    $("#weathersettingspane").fadeOut(0)
  })
  /*$("#weathersettings").click(function(button) {
    settingstype = "weathersettings"
    $("#apperancesettings").text("appearance settings")
    $("#locationsettings").text("location settings")
    $("#weathersettings").text("▶ weather settings")
    $("#apperancesettingspane").fadeOut(0)
    $("#locationsettingspane").fadeOut(0)
    $("#weathersettingspane").fadeIn(0)
  })*/
  $("#savebutton").click(function(button) {
    if (settingstype == "locationsettings"){
      saveLocSettings();
    }
  })
});
//weather settings
/*function updateWeatherSettings(settingspage, loc) {
  var page = $('currentconditionspage').
}*/
// enable/disable settingspane
$(document).on('keydown',function(e) {
    if(e.which == 27) {
      if($('.blackbar #settings').is(':hidden')) {
        $("#introdetails").fadeOut(0)
        $(".blackbar #settings").fadeIn(0)
        $(".intellistarlogo").fadeOut(0)
        $("#startup").fadeIn(0)
        mainlocationdata = maincitycoords
        updateonResetMainLoc()
        extralocsdata = locList
        updateLocs("extralocation")
        city8slidedata = citySlideList
        updateLocs("8slide")
        cctickerdata = ccTickerCitiesList
        updateLocs("cctickerloc")

      } else {
        $("#startup").fadeOut(0)
      }
    }
});
