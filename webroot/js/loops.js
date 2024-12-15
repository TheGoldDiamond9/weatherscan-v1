var loopssevereweathermode = false;
var displayingAtmospheric = false;
var miniMap;
function Loops() {

	// init the display loops

	refreshObservationDisplay()
	//setInterval(refreshObservationDisplay,60000);
}
function refreshObservationDisplay() {
	if (weatherInfo.currentCond.sidebar.noReport == true) {
		$('#current-ticker-container').fadeOut(0)
	} else {
		displayAtmospheric(0)
		$('#current-ticker-container').fadeIn(0)
	}
}
	function displayAtmospheric(idx) {
		if (weatherInfo.currentCond.sidebar.noReport == false){
		displayingAtmospheric = true;
		var displays = {
			currently() {
				if (weatherInfo.currentCond.sidebar.noReport == false) {
					return 'Currently at <b>' + weatherInfo.currentCond.weatherLocs[1].displayname + '<b>'
				} else {
					return ''
				}
			},
			conditions() {
				if (weatherInfo.currentCond.sidebar.noReport == false) {
					return 'Currently <b>' + weatherInfo.currentCond.weatherLocs[1].cond + '<b>'
				} else {
					return ''
				}
			},
			temp(){ 
				if (weatherInfo.currentCond.sidebar.noReport == false) {
					return 'Currently <b>' + weatherInfo.currentCond.weatherLocs[1].temp + '°<b>'
				} else {
					return ''
				}
			},
			heatindex(){
				if (weatherInfo.currentCond.sidebar.noReport == false) {
					if (weatherInfo.currentCond.weatherLocs[1].feelslike.type != "dontdisplay") {
						return 'Current ' + weatherInfo.currentCond.weatherLocs[1].feelslike.type + ' <b>' + weatherInfo.currentCond.weatherLocs[1].feelslike.val + '°<b>'
					}
				} else {
					return ''
				}
			},

			forecastcity() {
				if (weatherInfo.currentCond.sidebar.noReport == false) {
					var loopshour = dateFns.getHours(new Date());
					if (loopshour > 11) {
						return 'Forecast for <b>' + weatherInfo.currentCond.weatherLocs[0].displayname + '<br>'
					}
				} else {
					return ''
				}
			},
			forecastcond() {
				if (weatherInfo.currentCond.sidebar.noReport == false) {
					var loopshour = dateFns.getHours(new Date());
					if (loopshour > 11) {
						return 'Tomorrow <b>' + weatherInfo.currentTicker.forecast.tmrcond + '<br>'
					}
				} else {
					return ''
				}
			},
			forecasttemp() {
				if (weatherInfo.currentCond.sidebar.noReport == false) {
					var loopshour = dateFns.getHours(new Date());
					if (loopshour > 11) {
						return 'Tomorrow <b>' + weatherInfo.currentTicker.forecast.tmrhigh + '°<br>'
					}
				} else {
					return ''
				}
			},
			forecastuv() {
				if (weatherInfo.currentCond.sidebar.noReport == false) {
					var loopshour = dateFns.getHours(new Date());
					if (loopshour > 11) {
						return 'Tomorrow\'s UV Index <b>' + weatherInfo.currentTicker.forecast.tmrUVnum + ' ' + weatherInfo.currentTicker.forecast.tmrUVdesc + '<br>'
					}
				} else {
					return ''
				}
			},

		},
		keys = Object.keys(displays),
		text = displays[ keys[idx] ]();

		// increment the pointer
		if (weatherInfo.reboot == true) {
			$('#forecast-shadow').hide()
			return;
		}
		if (loopssevereweathermode == false) {
			idx = (++idx===keys.length ? 0 : idx);

			if (text) {
				$('#current-ticker').html(text);
				setTimeout(function(){ displayAtmospheric(idx) }, 6000); // 6 second increment loop
			} else {
				// nothing to display - skip to the next one
				setTimeout(function(){ displayAtmospheric(idx) }, 0);
			}
		}
	} else {displayingAtmospheric = false}
	}  // end function

	function displaySevereAtmospheric(idx) {
		if (weatherInfo.currentCond.sidebar.noReport == false) {
		displayingAtmospheric = true
		$('#current-info-severe').text((weatherInfo.currentCond.sidebar.cond).toLowerCase());
		var displays = {
			display1() {
				return 'wind ' + weatherInfo.currentCond.sidebar.wind + '<br>' + ((weatherInfo.currentCond.sidebar.gust!="none") ? 'gusts ' +  weatherInfo.currentCond.sidebar.gust + '<br>' : '' ) + 'humidity ' + weatherInfo.currentCond.sidebar.humid + '%' + '<br>' + 'dew point ' + weatherInfo.currentCond.sidebar.dewpt + '&deg;'
			},
			display2() {
				return (((weatherInfo.currentCond.sidebar.feelslike.type != "dontdisplay") ?  weatherInfo.currentCond.sidebar.feelslike.type + " " + weatherInfo.currentCond.sidebar.feelslike.val +  '&deg;' + '<br>' : '' ) + 'pressure ' + weatherInfo.currentCond.sidebar.pressure + weatherInfo.currentCond.sidebar.pressureTrend + '<br>' + 'visibility ' + weatherInfo.currentCond.sidebar.visibility + ((weatherInfo.currentCond.sidebar.visibility != 1 ) ? ' miles' : ' mile') + '<br>' + 'ceiling ' + ((weatherInfo.currentCond.sidebar.ceiling != null) ? ((weatherInfo.currentCond.sidebar.ceiling).toString() + ' ft') : ''))
			}
		},
		keys = Object.keys(displays),
		text = displays[ keys[idx] ]();

		idx = (++idx===keys.length ? 0 : idx);
		if (weatherInfo.reboot == true) {
			$('#forecast-shadow').hide()
			return;
		}
		if (loopssevereweathermode == true) {
			if (text) {
				$('#current-info-details').html(text);
				setTimeout(function(){ displaySevereAtmospheric(idx) }, 6000); // 6 second increment loop
			} else {
				// nothing to display - skip to the next one
				setTimeout(function(){ displaySevereAtmospheric(idx) }, 0);
			}
		}
		} else {displayingAtmospheric = false}
	} //end function


	function resizeText(text){
		var s = 41,
		$test = $('<div style="position:absolute;padding:0 .75% 0 11.5%;top:100%;font-family:Interstate"></div>') .appendTo('#forecast-text') .css('font-size', s + 'px') .html(text);
		$test.css('width',$('#forecast-text').width());
		//setTimeout(function() {
		i = 0
			while ($test.height() >= ($('#forecast-text').height()) && i < 10 ) {
				s -= 1;
				$test.css('font-size', s + 'px');
				i += 1
			}
			$('#forecast-text div') .text(text) .css('font-size', s + 'px');
			$test.remove();
			$('.forecast-tiles').hide();
		//},100);  // delay is a workaround for Interstate font not updating display
	}




 // end Loops class


/*function buildHourlyHeaderTitle(time) {
	var today = new Date(),
		tomorrow = dateFns.addDays(today, 1),
		sforecast = "'s Forecast";

	// title based on the first hour reported
	switch (dateFns.getHours(time)) {

	case 6: // 6 - Nextday's Forecast / Today's Forecast
		// if 6am today
		if (dateFns.isToday(time)) {
			return dateFns.format(today, 'dddd') + sforecast;
		}
	case 0: // 0 - Nextday's Forecast
		return dateFns.format(tomorrow, 'dddd') + sforecast;

	case 12:
		return 'This Afternoon';

	case 15:
		return "Today's Forecast";

	case 17:
		return "Tonight's Forecast";

	case 20:
		return dateFns.format(today, 'ddd') + ' Night/' + dateFns.format(tomorrow, 'ddd');

	}

}


function buildHourlyTimeTitle(time){
	var hour=dateFns.getHours(time);

	if (hour===0) {
		return 'midnight';
	} else if (hour===12){
		return 'noon';
	}

	return dateFns.format(time,'h a');
}


// finds the intervals to report on the hourly forecast
function calcHourlyReport(data) {
	var ret = [],
		targets = [0, 6, 12, 15, 17, 20],   // hours that we report
		current = dateFns.getHours(new Date()),
		now = new Date(),
		//firsthour = targets[ getNextHighestIndex(targets, current) ],
		start,
		hour, i=0;

	switch (true) {
		case (current < 3):
			start = 6;
		case (current < 9):
			start = 12; break;
		case (current < 12):
			start = 15; break;
		case (current < 15):
			start = 17; break;
		case (current < 17):
			start = 20; break;
		case (current < 20):
			start = 0; break;
		default:
			start = 6;
	}

	while(ret.length<4){

		// hour must be equal or greater than current
		hour = dateFns.getHours( data.validTimeLocal[i] );
		if ( dateFns.isAfter(data.validTimeLocal[i], now) && (hour==start || ret.length>0) )  {

			if ( targets.indexOf(hour)>=0 ) { // it is in our target list so record its index
				ret.push(i);
			}

		}
		i++;
	}
	return ret;
}
*/

/*

wind E 14
gusts 17 mph
humidity 58%
dew point 72(degree symbol)
heat index 95(degree symbol) / wind chill
pressure 30.02 S
visibility 10 miles
uv index High
partly cloudy

*/
