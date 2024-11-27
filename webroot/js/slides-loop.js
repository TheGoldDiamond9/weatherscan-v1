/*

headings:
RADAR < MAIN CITY < CITY 1 < CITY 2
*/
var buildHeaderGlobal;

var maindiv = {
	"localDoppler":".radar-slide",
	"regionalSatellite":".radar-slide",
	"bulletin":".bulletin",
	//City Info
	"cityIntro":".city-slide-intro",
	"upNext":".next-slide-intro",
	"currentConditions":".city-info-slide",
	"city8Slides":".city-info-slide",
	"dayPart":".city-info-slide",
	"dayDesc":".city-info-slide",
	"extendedForecast":".city-info-slide",
	"almanac":".city-info-slide",
	//Severe City Info
	"severeCityIntro":".city-slide-intro",
	"severeLocalDoppler":".radar-slide",
	"severeRegionalSatellite":".radar-slide",
	"severeMessage":".severe-city-info-slide",
	"severeCurrentConditions":".severe-city-info-slide",
	"severeCity8Slides":".severe-city-info-slide",
	"severeDayPart":".severe-city-info-slide",
	"severeDayDesc":".severe-city-info-slide",
	"severeExtendedForecast":".severe-city-info-slide",
	"severeAlmanac":".severe-city-info-slide",
	//Airport
	"airportIntro":".airport-slide-intro",
	"airportConditions":".airport-slide",
	"otherAirportConds":".airport-slide",
	//Travel
	"travelIntro":".travel-slide-intro",
	"travelWeather":".destinationmap-slide",
	"regionalTravel":".regionaldest-slide",
	"destinationForecast":".travel",
	//International
	"internationalIntro":".international-slide-intro",
	"internationalForecast":".international",
	//Beach
	"beachIntro":".beach-slide-intro",
	"beachConditions":".beach-slide",
	"costalWatersAlerts":".beach-slide",
	"costalWatersForecast":".beach-slide",
	//Traffic
	"trafficIntro":".traffic-slide-intro",
	"trafficOverview":".traffic",
	"trafficReport":".traffic",
	//Health
	"healthIntro":".health-slide-intro",
	"healthForecast":".health",
	"pollen":".health",
	"achesBreath":".health",
	"airQuality":".health",
	"uvIndex":".health",
	"healthTip":".health",
	"moreInfoImage":".health",
	//MainInfoSlides
	"city":".city-info-slide",
	"severe":".severe-city-info-slide",
	"radar":".radar-slide",
	"airport":".airport-slide",
	"beach":".beach-slide",
	"healthh":".health",
	"travell":".travel",
	"internationall":".international",
	"trafficc":".traffic",
}

var mainDivHeaders = {
	"localDoppler":"Local Doppler Radar",
	"regionalSatellite":"Radar/Satellite",
	"bulletin":"",
	//City Info
	"cityIntro":"",
	"upNext":"",
	"currentConditions":"Currently",
	"city8Slides":"Currently",
	"dayPart":"*daytitle*",
	"dayDesc":"Local Forecast",
	"extendedForecast":"Extended Forecast",
	"almanac":"Almanac",
	//Severe City Info
	"severeCityIntro":"",
	"severeLocalDoppler":"Local Doppler Radar",
	"severeRegionalSatellite":"Radar/Satellite",
	"severeMessage":"Severe Weather Message",
	"severeCurrentConditions":"Currently",
	"severeCity8Slides":"Currently",
	"severeDayPart":"*daytitle*",
	"severeDayDesc":"Local Forecast",
	"severeExtendedForecast":"Extended Forecast",
	"severeAlmanac":"Almanac",
	//Airport
	"airportIntro":"",
	"airportConditions":"",
	"otherAirportConds":"",
	//Travel
	"travelIntro":"",
	"travelWeather":"Travel Weather",
	"regionalTravel":"Forecast",
	"destinationForecast":"",
	//International
	"internationalIntro":"",
	"internationalForecast":"",
	//Beach
	"beachIntro":"",
	"beachConditions":"Surf Report",
	"costalWatersAlerts":"Marine Forecast",
	"costalWatersForecast":"Marine Forecast",
	//Traffic
	"trafficIntro":"",
	"trafficOverview":"Traffic Overview",
	"trafficReport":"Traffic Report",
	//Health
	"healthIntro":"",
	"healthForecast":"Outdoor Activity",
	"pollen":"Allergy Report",
	"achesBreath":"Health Forecast",
	"airQuality":"Air Quality Forecast",
	"uvIndex":"Ultraviolet Index",
	"healthTip":"Weather Safety Tips",
	"moreInfoImage":"*none*",
	//MainInfoSlides
}
var mainDivCityHeaders = {
	"localDoppler":"Local Doppler Radar",
	"regionalSatellite":"Radar/Satellite",
	"bulletin":"",
	//City Info
	"cityIntro":"",
	"upNext":"",
	"currentConditions":"*currentConditionsLocation* *currentConditionsEnding*",
	"city8Slides":"*none*",
	"dayPart":"*dayPartLocation* *dayPartEnding*",
	"dayDesc":"*dayDescLocation* *dayDescEnding*",
	"extendedForecast":"*extendedForecastLocation* *extendedForecastEnding*",
	"almanac":"*almanacLocation* *almanacEnding*",
	//Severe City Info
	"severeCityIntro":"",
	"severeLocalDoppler":"Local Doppler Radar",
	"severeRegionalSatellite":"Radar/Satellite",
	"severeMessage":"",
	"severeCurrentConditions":"*currentConditionsLocation* *currentConditionsEnding*",
	"severeCity8Slides":"*none*",
	"severeDayPart":"*dayPartLocation* *dayPartEnding*",
	"severeDayDesc":"*dayDescLocation* *dayDescEnding*",
	"severeExtendedForecast":"*extendedForecastLocation* *extendedForecastEnding*",
	"severeAlmanac":"*almanacLocation* *almanacEnding*",
	//Airport
	"airportIntro":"",
	"airportConditions":"*none*",
	"otherAirportConds":"*none*",
	//Travel
	"travelIntro":"",
	"travelWeather":"Travel Weather",
	"regionalTravel":"*none*",
	"destinationForecast":"*none*",
	//International
	"internationalIntro":"",
	"internationalForecast":"*none*",
	//Beach
	"beachIntro":"",
	"beachConditions":"",
	"costalWatersAlerts":"",
	"costalWatersForecast":"",
	//Traffic
	"trafficIntro":"",
	"trafficOverview":"*trafficarea*",
	"trafficReport":"*trafficarea*",
	//Health
	"healthIntro":"",
	"healthForecast":"*healthlocation*",
	"pollen":"*healthlocation*",
	"achesBreath":"*healthlocation*",
	"airQuality":"*healthlocation*",
	"uvIndex":"*healthlocation*",
	"healthTip":"*healthlocation*",
	"moreInfoImage":"*none*",
	//MainInfoSlides
}
var mainMap
	// load slide data
	function Slides() {
		function alignRegMap() {
			if (maincitycoords.state === "ME" || maincitycoords.state === "NH" || maincitycoords.state === "VT" || maincitycoords.state === "MA" || maincitycoords.state === "NY") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "400px", 'right': '1240px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '12%', 'top': '20%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '53%', 'top': '30%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '56%', 'top': '70%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '30%', 'top': '10%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '28%', 'top': '61%'});
			} else if (maincitycoords.state === "NJ" || maincitycoords.state === "PA" || maincitycoords.state === "DE" || maincitycoords.state === "CT" || maincitycoords.state === "RI" || maincitycoords.state === "WV" || maincitycoords.state === "OH" || maincitycoords.state === "VA" || maincitycoords.state === "DC" || maincitycoords.state === "MD" || maincitycoords.state === "KY") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "115px",'right': '1240px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '16%', 'top': '1%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '35%', 'top': '29%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '59%','top': '23%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '66%','top': '58%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '48%','top': '58%'});
			} else if (maincitycoords.state === "NC" || maincitycoords.state === "SC" ||maincitycoords.state ===  "GA" || maincitycoords.state === "TN" || maincitycoords.state === "AL" || maincitycoords.state === "MS" || maincitycoords.state === "LA" || maincitycoords.state === "AR") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "-450px",'right': '620px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '20%', 'top': '10%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '48%','top': '3%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '38%', 'top': '31%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '51%','top':'50%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '67%','top':'52%'});
			} else if (maincitycoords.state === "FL") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "-900px",'right':'600px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '18%','top':'60%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '30%',"top":'37%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '25%','top':'5%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '50%','top':'2%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '69%','top':'10%'});
			} else if (maincitycoords.state === "IN" || maincitycoords.state === "IL" || maincitycoords.state === "MO" || maincitycoords.state === "IA" || maincitycoords.state === "KS" || maincitycoords.state === "NE") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "-100px",'right':'-100px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '18%','top':'16%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '49%','top':'11%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '68%','top':'27%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '53%','top':'61%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '73%','top':'64%'});
			} else if (maincitycoords.state === "AZ" || maincitycoords.state === "NM" || maincitycoords.state === "TX" || maincitycoords.state === "OK") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "-430px",'right':'-700px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '13%','top':'8%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right':'11%','top':'50%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '53%','top':'56%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '55%','top':'16%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '80%','top':'34%'}); 
			} else if (maincitycoords.state === "NV" || maincitycoords.state === "CO" || maincitycoords.state === "UT" || maincitycoords.state === "WY") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "90px",'right':'-1300px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '4%','top':'5%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '7%','top':'33%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '10%','top':'62%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '41%','top':'11%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '60%','top':'70%'});
			} else if (maincitycoords.state === "MT" || maincitycoords.state === "WA" || maincitycoords.state === "OR" || maincitycoords.state === "ID") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "650px",'right':'-1500px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '80%','top':'4%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '56%','top':'4%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '48%','top':'68%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '82%','top':'34%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '13%','top':'27%'}); 
			} else if (maincitycoords.state === "CA") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "-200px",'right':'-1680px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '65%','top':'8%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '22%','top':'15%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '17%','top':'68%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '45%','top':'61%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '29%','top':'39%'});  
			} else if (maincitycoords.state === "ND" || maincitycoords.state === "SD" || maincitycoords.state === "WI" || maincitycoords.state === "MI" || maincitycoords.state === "MN") {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "700px",'right':'0px'});
			  $('.regionaldest-content .clusters .cluster.one').css({'right': '56%','top':'17%'});
			  $('.regionaldest-content .clusters .cluster.two').css({'right': '41%','top':'45%'});
			  $('.regionaldest-content .clusters .cluster.three').css({'right': '55%','top':'68%'});
			  $('.regionaldest-content .clusters .cluster.four').css({'right': '82%','top':'61%'});
			  $('.regionaldest-content .clusters .cluster.five').css({'right': '21%','top':'69%'});
			} else {
			  $('.info-slides-content.regionaldest-content .travel-map img').css({'top': "-2041px",'right':'-3900px', 'scale':'500%'});
			  $('.regionaldest-content .clusters .cluster.one').fadeOut(0)
			  $('.regionaldest-content .clusters .cluster.two').fadeOut(0)
			  $('.regionaldest-content .clusters .cluster.three').fadeOut(0)
			  $('.regionaldest-content .clusters .cluster.four').fadeOut(0)
			  $('.regionaldest-content .clusters .cluster.five').fadeOut(0)
			}
		  }
		  alignRegMap();
		var idx = 0;
		severemode = false;
		var radarSlideDuration = 60000,
			slideDelay = 10000;
						// for later
		var header = '#slides-header', severepreload = false, tipidx = 0;

		buildHeader();
		gbuildHeader();
		setTimeout(function() {
			showSlides(0)
		}, 2000);
		// loop cities
		function hideExtraInfo() {
			$('#date-time').fadeOut(0);
			$('#current-ticker-container').fadeOut(0);
			$('.marqueewhole').fadeOut(0);
		}
		function showExtraInfo() {
			$('#date-time').fadeIn(0);
			$('#current-ticker-container').fadeIn(0);
			$('.marqueewhole').fadeIn(0);
		}
		function transitionSevereWeatherMode(enterexit) {
			if (enterexit == 'enter') {
				$('#marquee2').fadeOut(0);
				$('#marquee2-shadow').fadeOut(0);
				$('#brand').fadeOut(0);
				$('#brand-severe').fadeIn(0);
				$('#marqueeSevere').fadeIn(0);
				$('.marqueeheadersevere').fadeIn(0);
				$('.marqueeheadersevere-background').fadeIn(0);
				severemode = true
				loopssevereweathermode = true
				header = '#severe-header'
				displaySevereAtmospheric(0)
				$('.city-slide-intro .segment').text(location.city);
				$('#current-info').fadeOut(0)
				$('#current-info-severe').fadeIn(0)
				$('#current-info-details').fadeIn(0)
				$('#minimap').fadeOut(0)
				$('#minimap-title').fadeOut(0)
				$('#severe-header-weathermessage').fadeIn(0)
				$('#severe-header').fadeIn(0)
				$('#slides-header').fadeOut(0)
			} else {
				$('#marquee2').fadeIn(0);
				$('#marquee2-shadow').fadeIn(0);
				$('#brand').fadeIn(0);
				$('#brand-severe').fadeOut(0);
				$('#marqueeSevere').fadeOut(0);
				$('.marqueeheadersevere').fadeOut(0);
				$('.marqueeheadersevere-background').fadeOut(0);
				header = '#slides-header'
				loopssevereweathermode = false
				severemode = false
				displayAtmospheric(0);
				buildHeader();
				gbuildHeader();
				$('#minimap').fadeIn(0);
				$('#minimap-title').fadeIn(0);
				$('#current-info').fadeIn(0)
				$('#current-info-severe').fadeOut(0)
				$('#current-info-details').fadeOut(0)
				$('#slides-header').fadeIn(0)
				$('#severe-header').fadeOut(0)
				$('#severe-header-weathermessage').fadeOut(0)
			}
		}
	function showSlides() {
		var currentDisplay, location
			displays = {
				bulletin() {
					showExtraInfo();
					$('.subheaderarrow').fadeIn(0);
					$('.subheaderarrow').css('border-left', '38px solid #a71c0d');
					$('.bulletin .frost-pane .cityname').text(weatherInfo.bulletin.weatherLocs[location].displayname + " Area");
					//fade in
					$('.bulletin').fadeIn(0);
					$('.bulletin .frost-pane').fadeIn(500);

					$('#subhead-noaa').fadeIn(500);
					pages = weatherInfo.bulletin.weatherLocs[location].pages
					makewarningPage(0)
					function makewarningPage(warningpagenum) {
						if (warningpagenum > 0) {
							$('.bulletin .frost-pane').fadeOut(500).promise().done(function(){
								$('.bulletin .frost-pane .warnings').html(pages[warningpagenum])
								$('.bulletin .frost-pane').fadeIn(500);
							});
						} else {
							$('.bulletin .frost-pane .warnings').html(pages[warningpagenum])
							$('.bulletin .frost-pane').fadeIn(500);
						}
						setTimeout(function() {
							if (warningpagenum < (pages.length - 1)) {
								makewarningPage(warningpagenum + 1)
							} else {
								$('.bulletin').fadeIn(0);
								$('.bulletin .frost-pane').fadeOut(500);
								$('#subhead-noaa').fadeOut(500).promise().done(function(){
									$('.bulletin').fadeOut(0);
									wait(0)
								});
							}
						}, slideDelay);
					}
				}
				,localDoppler() {
					map.on('load', function() {
						loadRadarImages('radar-1')
					});
					satellitemap.on('load', function() {
						loadRadarImages('satrad-1')
					});
					showExtraInfo();
					$('.subheaderarrow').fadeIn(0);
					$('.subheaderarrow').css('border-left', '38px solid #d8c422');
					var locthing = (location == 0) ? maincitycoords : locList[location - 1]
					var zoom = 7.7, maxloop = Math.ceil((slideDelay)*(11/60000)), lat = locthing.lat, lon = locthing.lon
					weatherAudio.playLocalRadar();
					$('.radar-overlay').fadeIn(0);
					$('.severe-radar-overlay').fadeOut(0);
					$('.radar-slide').fadeIn(0);
					$('.radar-content').fadeIn(0);
					$('.info-slide.radar-slide .info-slide-content.radar-content .blackmaplayer').fadeOut(500);
					recenterMap('radar-1', lat, lon, zoom)
					fadeMap('radar-1', true, zoom)
					animateRadar('radar-1', 1, maxloop)
					if (weatherInfo.radarTempUnavialable == true) {
						$('.radar-slide .tempunavailable').fadeIn(500);
						$('#radar-2').fadeOut(0);
						$('#radar-3').fadeOut(0);
					}
					if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeIn(500)} else {$('.radar-color-legend').fadeIn(500)}
					setTimeout(function() {
						fadeMap('radar-1', false, zoom)
						if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeOut(500)} else {$('.radar-color-legend').fadeOut(500)}
						if (weatherInfo.radarTempUnavialable == true) {
							$('.radar-slide .tempunavailable').fadeOut(500);
						}
						$('.info-slide.radar-slide .info-slide-content.radar-content .blackmaplayer').fadeIn(500);
						setTimeout( function() {
							$('.radar-content').fadeOut(0);
							wait(0)
						}, 500)
					}, slideDelay);
				}
				,severeLocalDoppler() {
					map.on('load', function() {
						loadRadarImages('radar-1')
					});
					satellitemap.on('load', function() {
						loadRadarImages('satrad-1')
					});
					showExtraInfo();
					$('.subheaderarrow').fadeIn(0);
					$('.subheaderarrow').css('border-left', '38px solid #961b13');
					var locthing = (location == 0) ? maincitycoords : locList[location - 1]
					var zoom = 7.7, maxloop = Math.ceil((slideDelay)*(11/60000)), lat = locthing.lat, lon = locthing.lon
					weatherAudio.playLocalRadar();
					$('.radar-overlay').fadeOut(0);
					$('.severe-radar-overlay').fadeIn(0);
					$('.radar-slide').fadeIn(0);
					$('.radar-content').fadeIn(0);
					$('.info-slide.radar-slide .info-slide-content.radar-content .blackmaplayer').fadeOut(500);
					recenterMap('radar-1', lat, lon, zoom)
					fadeMap('radar-1', true, zoom)
					animateRadar('radar-1', 1, maxloop)
					if (weatherInfo.radarTempUnavialable == true) {
						$('.radar-slide .tempunavailable').fadeIn(500);
						$('#radar-2').fadeOut(0);
						$('#radar-3').fadeOut(0);
					}
					if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeIn(500)} else {$('.radar-color-legend').fadeIn(500)}
					setTimeout(function() {
						fadeMap('radar-1', false, zoom)
						if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeOut(500)} else {$('.radar-color-legend').fadeOut(500)}
						if (weatherInfo.radarTempUnavialable == true) {
							$('.radar-slide .tempunavailable').fadeOut(500);
						}
						$('.info-slide.radar-slide .info-slide-content.radar-content .blackmaplayer').fadeIn(500);
						setTimeout( function() {
							$('.radar-content').fadeOut(0);
							wait(0)
						}, 500)
					}, slideDelay);
				}
				,regionalSatellite() {
					map.on('load', function() {
						loadRadarImages('radar-1')
					});
					satellitemap.on('load', function() {
						loadRadarImages('satrad-1')
					});
					showExtraInfo();
					$('.subheaderarrow').fadeIn(0);
					$('.subheaderarrow').css('border-left', '38px solid #d8c422');
					var locthing = (location == 0) ? maincitycoords : locList[location - 1]
					var zoom = 4.5, maxloop = Math.ceil((slideDelay)*(11/60000)), lat = locthing.lat, lon = locthing.lon
					$('.radar-slide .radar-legends .pastlegend').text('Past 5 Hours')
					$('.radar-overlay').fadeIn(0);
					$('.severe-radar-overlay').fadeOut(0);
					$('.radar-slide').fadeIn(0);
					$('.radar-content').fadeIn(0);
					$('.info-slide.radar-slide .info-slide-content.radar-content .blackmaplayer').fadeOut(500);
					fadeMap('satrad-1', true, zoom)
					animateRadar('satrad-1', 1, maxloop)
					if (weatherInfo.radarTempUnavialable == true) {
						$('.radar-slide .tempunavailable').fadeIn(500);
						$('#satrad-1').fadeOut(0);
					}
					if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeIn(500)} else {$('.radar-color-legend').fadeIn(500)}
					setTimeout(function() {
						fadeMap('satrad-1', false, zoom)
						if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeOut(500)} else {$('.radar-color-legend').fadeOut(500)}
						if (weatherInfo.radarTempUnavialable == true) {
							$('.radar-slide .tempunavailable').fadeOut(500);
						}
						$('.info-slide.radar-slide .info-slide-content.radar-content .blackmaplayer').fadeIn(500);
						setTimeout( function() {
							$('.radar-content').fadeOut(0);
							$('.radar-slide .radar-legends .pastlegend').text('Past 3 Hours')
							wait(0)
						}, 500)
					}, slideDelay);
				},
				severeRegionalSatellite() {
					map.on('load', function() {
						loadRadarImages('radar-1')
					});
					satellitemap.on('load', function() {
						loadRadarImages('satrad-1')
					});
					showExtraInfo();
					$('.subheaderarrow').fadeIn(0);
					$('.subheaderarrow').css('border-left', '38px solid #961b13');
					var locthing = (location == 0) ? maincitycoords : locList[location - 1]
					var zoom = 4.5, maxloop = Math.ceil((slideDelay)*(11/60000)), lat = locthing.lat, lon = locthing.lon
					$('.radar-slide .radar-legends .pastlegend').text('Past 5 Hours')
					$('.radar-overlay').fadeOut(0);
					$('.severe-radar-overlay').fadeIn(0);
					$('.radar-slide').fadeIn(0);
					$('.radar-content').fadeIn(0);
					$('.info-slide.radar-slide .info-slide-content.radar-content .blackmaplayer').fadeOut(500);
					fadeMap('satrad-1', true, zoom)
					animateRadar('satrad-1', 1, maxloop)
					if (weatherInfo.radarTempUnavialable == true) {
						$('.radar-slide .tempunavailable').fadeIn(500);
						$('#satrad-1').fadeOut(0);
					}
					if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeIn(500)} else {$('.radar-color-legend').fadeIn(500)}
					setTimeout(function() {
						fadeMap('satrad-1', false, zoom)
						if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeOut(500)} else {$('.radar-color-legend').fadeOut(500)}
						if (weatherInfo.radarTempUnavialable == true) {
							$('.radar-slide .tempunavailable').fadeOut(500);
						}
						$('.info-slide.radar-slide .info-slide-content.radar-content .blackmaplayer').fadeIn(500);
						setTimeout( function() {
							$('.radar-content').fadeOut(0);
							$('.radar-slide .radar-legends .pastlegend').text('Past 3 Hours')
							wait(0)
						}, 500)
					}, slideDelay);
				}
				//city slides
				,cityIntro() {
					if (location == 0) {
					$('#brand-container').fadeOut(0);
					hideExtraInfo();
					if (apperanceSettings.copyrightAvoidance == true) {
						$('.city-slide-intro .weatherscancopyright .copyrighttext').text("Weatherscan is only available on Internet")
					} else {
						$('.city-slide-intro .weatherscancopyright .copyrighttext').text("Weatherscan is only available on " + apperanceSettings.affilateName)
					}
					$('.city-slide-intro .segment').text(weatherInfo.currentCond.weatherLocs[location].displayname);
					$('.city-slide-intro').fadeIn(0);
					$('.city-slide-intro .weatherscancopyright').fadeIn(500);
					$('.city-slide-intro .cityintrobottom').fadeIn(500);
					$('.city-slide-intro .cityaccent').fadeIn(500);
					$('.city-slide-intro .cityweatherscanmarquee').fadeIn(500);
					setTimeout(function() {
						$('.city-slide-intro .segment').fadeIn(500);
						$('.city-slide-intro .cityintrobottomwebsite').fadeIn(500);
					}, 2000);
					setTimeout(function() {
						$('.city-slide-intro .weatherscancopyright .copyrighttext').fadeOut(500).promise().done(function(){
							$('.city-slide-intro .weatherscancopyright .copyrighttext').css('font-size','20px')
							$('.city-slide-intro .weatherscancopyright .copyrighttext').css('padding-top','15px')
							if (apperanceSettings.copyrightAvoidance == true) {
								$('.city-slide-intro .weatherscancopyright .copyrighttext').text(`Thank you for using this emulator.`)
							} else {
								$('.city-slide-intro .weatherscancopyright .copyrighttext').text(`© ${new Date().getFullYear()} The Weather Channel, Inc. All Rights Reserved`)
							}
							$('.city-slide-intro .weatherscancopyright .copyrighttext').fadeIn(500);
						});
					}, 5000);
					setTimeout(function() {
						$('.city-slide-intro .segment').fadeOut(500)
						$('.city-slide-intro .weatherscancopyright').fadeOut(500);
						$('.city-slide-intro .cityintrobottom').fadeOut(500);
						$('.city-slide-intro .cityintrobottomwebsite').fadeOut(500);
						$('.city-slide-intro .cityaccent').fadeOut(500);
						$('.city-slide-intro .cityweatherscanmarquee').fadeOut(500).promise().done(function(){
							$('.city-slide-intro').fadeOut(0);
							$('#brand-container').fadeIn(0);
							$('.city-slide-intro .weatherscancopyright .copyrighttext').css('font-size','43px')
							$('.city-slide-intro .weatherscancopyright .copyrighttext').css('padding-top','0px')
							$('.city-slide-intro .weatherscancopyright .copyrighttext').text("Weatherscan is only available on " + apperanceSettings.affilateName)
							wait(0);
						});
					}, 10000);
				} else {wait(0)}
			}
			,upNext() {
				function ubuildHeader(){
					//$('.next-slide-intro .nextsegments').empty();
					var arrow ='<span class="divider-arrow" style="font-family: Zemestro Std "></span>';
					var city, first, dname
			
						var li = 1
						function grabDiv(divTypeVal, locIdxVal, slideVal, repeatVal, slideDelayVal, slideOrderVal, loopComplete) {
							var divType = {
							  "severe-cities":'<span class="city severe" data-slide="severe" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>` + ((locIdxVal == 0) ? maincitycoords.displayname : locList[locIdxVal-1].displayname)+ ` Forecast<br></span>`,
							  "cities":'<span class="city" data-slide="city" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>` + ((locIdxVal == 0) ? maincitycoords.displayname : locList[locIdxVal-1].displayname)+ ` Forecast<br></span>`,
							  "radar":'<span class="city radar" data-slide="radar" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Your Local Radar<br></span>`,
							  "golf":'<span class="city golf" data-slide="golf" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>UGolf Forecast<br></span>`,
							  "beach":'<span class="city beach" data-slide="beach" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Boat & Beach Forecast<br></span>`,
							  "traffic":'<span class="city trafficc" data-slide="trafficc" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Traffic Report<br></span>`,
							  "health":'<span class="city healthh" data-slide="healthh" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Weather & Your Health<br></span>`,
							  "airport":'<span class="city airport" data-slide="airport" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Airport Conditions<br></span>`,
							  "travel":'<span class="city travell" data-slide="travell" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Travel Forecast<br></span>`,
							  "international":'<span class="city internationall" data-slide="internationall" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>International Forecast<br></span>`,
							}
							return divType[divTypeVal];
						}
			
					var totalSlides = 0;
					for (var slide = 0; slide < slideLoopSettings.order.length; slide++) {
						var locIdxOrder = []
						if (String(slideLoopSettings.order[slide].locidx).includes('extra')) {
							for (var i = 1; i <= locList.length; i++) {
								locIdxOrder.push(i)
							}
						} else if (String(slideLoopSettings.order[slide].locidx).includes('all')) {
							for (var i = 0; i <= locList.length; i++) {
								locIdxOrder.push(i)
							}
						} else {
							$('.next-slide-intro .nextsegments').append(((totalSlides > 0) ? arrow : "") + grabDiv(slideLoopSettings.order[slide].type, slideLoopSettings.order[slide].locidx, totalSlides, slideLoopSettings.order[slide].repeat, slideLoopSettings.order[slide].slideDelay, (JSON.stringify(slideLoopSettings.order[slide].slideOrder)).replaceAll('replaceLocIdx', slideLoopSettings.order[slide].locidx), slideLoopSettings.order[slide].loopComplete));
							totalSlides += 1
							continue
						}
						if (slideLoopSettings.order[slide].locidx.includes('reverse')) locIdxOrder.reverse();
						if (slideLoopSettings.order[slide].locidx.includes('random')) shuffle(locIdxOrder);
						
						for (var loc = 0; loc < locIdxOrder.length; loc++) {
							$('.next-slide-intro .nextsegments').append(((totalSlides > 0) ? arrow : "") + grabDiv(slideLoopSettings.order[slide].type, locIdxOrder[loc], totalSlides, ((slideLoopSettings.order[slide].repeat.length) ? slideLoopSettings.order[slide].repeat[loc % slideLoopSettings.order[slide].repeat.length] : slideLoopSettings.order[slide].repeat), ((slideLoopSettings.order[slide].slideDelay.length) ? slideLoopSettings.order[slide].slideDelay[loc % slideLoopSettings.order[slide].slideDelay.length] : slideLoopSettings.order[slide].slideDelay), ((slideLoopSettings.order[slide].slideOrders) ? JSON.stringify(slideLoopSettings.order[slide].slideOrders[loc % slideLoopSettings.order[slide].slideOrders.length]) : JSON.stringify(slideLoopSettings.order[slide].slideOrder)).replaceAll('replaceLocIdx',locIdxOrder[loc]), slideLoopSettings.order[slide].loopComplete));
							totalSlides += 1
						}
					}
					$('.next-slide-intro .nextsegments .city')[0].classList.add('current')
					}
				ubuildHeader()
				$('.next-slide-intro .cityaccent').fadeIn(500);
				$('.next-slide-intro .nextsegments').fadeIn(500);
				$('.next-slide-intro .next').fadeIn(500);
				$('.next-slide-intro .weatherscanmarquee').fadeIn(500);
				$('.next-slide-intro .weatherscanmarquee').css('animation', 'marqueeweatherscan 5.5s linear normal forwards');
				hideExtraInfo()
				setTimeout(function() {
					$('.next-slide-intro .cityaccent').fadeOut(500);
					$('.next-slide-intro .nextsegments').fadeOut(500);
					$('.next-slide-intro .next').fadeOut(500);
					setTimeout(function() {
						if ($('.next-slide-intro .nextsegments')[0].dataset.repeat == true || $('.next-slide-intro .nextsegments')[0].dataset.repeat == 'true') {
							$('.next-slide-intro .nextsegments').append('<span class="divider-arrow" style="font-family: Zemestro Std "></span>')
							$($('.next-slide-intro .nextsegments')[0]).appendTo($('.next-slide-intro .nextsegments'));
						} else if (parseInt($('.next-slide-intro .nextsegments .city')[0].dataset.repeat) > 0) {
							$('.next-slide-intro .nextsegments').append('<span class="divider-arrow" style="font-family: Zemestro Std "></span>')
							$($('.next-slide-intro .nextsegments')[0]).appendTo($('.next-slide-intro .nextsegments'));
							$('.next-slide-intro .nextsegments')[0].dataset.repeat = parseInt($('.next-slide-intro .nextsegments')[0].dataset.repeat) - 1
						} else {
							$('.next-slide-intro .nextsegments span').first().remove();
					}
					$('.next-slide-intro .nextsegments .divider-arrow').first().remove();
					}, 501)
					$('.next-slide-intro .weatherscanmarquee').fadeOut(500).promise().done(function(){
						wait(0);
					});
				}, 5000);
			}
			,currentConditions() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #d8c422');
				if (weatherInfo.currentCond.weatherLocs[location].noReport == true) {
					$('.city-info-slide .noreport').fadeIn(500)
					setTimeout(function() {
						$('.city-info-slide .noreport').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
				var	strLabels =	'Humidity<br>Dew Point<br>Pressure<Br>Wind<br>',
					strData = weatherInfo.currentCond.weatherLocs[location].humid + '%<br>' + weatherInfo.currentCond.weatherLocs[location].dewpt + '<br>' + weatherInfo.currentCond.weatherLocs[location].pressure + " " + weatherInfo.currentCond.weatherLocs[location].pressureTrend + '<br>' + weatherInfo.currentCond.weatherLocs[location].wind + '<br>';
					strLabels+='Gusts<Br>';
					strData+=weatherInfo.currentCond.weatherLocs[location].gust +	'<br>';
				if (weatherInfo.currentCond.weatherLocs[location].feelslike.type != "dontdisplay") {
					strLabels+=weatherInfo.currentCond.weatherLocs[location].feelslike.type
					strData+=weatherInfo.currentCond.weatherLocs[location].feelslike.val
				}

				$('.city-info .frost-pane .labels').html(strLabels);
				$('.city-info .frost-pane .data').html(strData);

				// right pane
				getCCicon('.city-info .icon', weatherInfo.currentCond.weatherLocs[location].icon, weatherInfo.currentCond.weatherLocs[location].windspeed)
				$('.city-info .conditions').text(weatherInfo.currentCond.weatherLocs[location].cond);
				$('.city-info .temp').text(weatherInfo.currentCond.weatherLocs[location].temp);
				weatherAudio.playCurrentConditions();

				//fadein
				$('.city-info').fadeIn(500);
				//fadeout and switch

				setTimeout(function() {
					$('.city-info').fadeOut(500).promise().done(function(){
						wait(0);
					});
				}, slideDelay);
				}

			}
			,city8Slides(pidx){
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #d8c422');
				var pages = Math.ceil(citySlideList.length/4);
				if (weatherInfo.currentCond.city8slides.noReport == true) {
					$('.city-info-slide .tempunavailable').fadeIn(500)
					setTimeout(function() {
						$('.info-slide-content.aroundcityinfo').fadeOut(500);
						$('.city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							$('.city-info-slide').fadeOut(0)
							$('.city-info-slide #subhead-city').fadeIn(0);
							wait(0);
					});
					}, slideDelay);
				} else {
					function fillinfo() {

						pidx = (pidx===undefined ? 1 : pidx);

						//replace tomorrow
						var di = 0;
						for (var i = (pidx == 1) ? 0 : 4; i < 4*pidx || i < citySlideList.length; i++) {
							if (weatherInfo.currentCond.city8slides.cities[i]) {
								var divnumbers = ['i','ii','iii','iv']
								$('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .cityname').text(weatherInfo.currentCond.city8slides.cities[i].displayname);
								$('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .temp').text(weatherInfo.currentCond.city8slides.cities[i].temp);
								//$('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .icon').css('background-image', 'url("' + getCCicon(+weatherInfo.currentCond.city8slides.cities[i].icon, weatherInfo.currentCond.city8slides.cities[i].windspeed) + '")');
								getCCicon('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .icon', weatherInfo.currentCond.city8slides.cities[i].icon, weatherInfo.currentCond.city8slides.cities[i].windspeed)
								$('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .wind').text(weatherInfo.currentCond.city8slides.cities[i].wind);
							} else {
								var divnumbers = ['i','ii','iii','iv']
								$('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .cityname').text("");
								$('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .temp').text("");
								$('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .icon').css('background-image', 'url("")');
								$('.info-slide-content.aroundcityinfo .city.' + divnumbers[di] + ' .wind').text("")
							}
							di = di + 1
						}
				}
				fillinfo();
				$('.info-slide-content.aroundcityinfo').fadeIn(500);

					setTimeout( function() {

						if (pidx<pages) {
							$('.info-slide-content.aroundcityinfo').fadeOut(500).promise().done(function(){
								currentDisplay(pidx+1);
								//fillinfo();
							});
						} else {
							$('.info-slide-content.aroundcityinfo').fadeOut(500).promise().done(function(){
								//$('.city-info-slide #subhead-city').fadeIn(0);
								wait(0);
							});
						}

					}, slideDelay)
				}
			}
			,dayPart(fidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #d8c422');
				if (weatherInfo.dayPart.weatherLocs[location].noReport == true) {
					$('.city-info-slide').fadeIn(0);
					$('.city-info-slide .tempunavailable').fadeIn(500)
					setTimeout(function() {
						$('.city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
				$('.info-slide-content.daypart .hour').each(function(){
						$('.info-slide-content.daypart .hour .tempbar').css("height", "0px")
						$('.info-slide-content.daypart .hour .tempbar .temp').css("opacity", "0%");
						$('.info-slide-content.daypart .hour .tempbar .wind').css("opacity", "0%");
					i = i + 1
				});
				//hour title
				$('.info-slide-content.daypart .hour.i .thing .thingtext').text(weatherInfo.dayPart.weatherLocs[location].hour[0].time);
				$('.info-slide-content.daypart .hour.ii .thing .thingtext').text(weatherInfo.dayPart.weatherLocs[location].hour[1].time);
				$('.info-slide-content.daypart .hour.iii .thing .thingtext').text(weatherInfo.dayPart.weatherLocs[location].hour[2].time);
				$('.info-slide-content.daypart .hour.iv .thing .thingtext').text(weatherInfo.dayPart.weatherLocs[location].hour[3].time);

				//temp
				$('.info-slide-content.daypart .hour.i .tempbar .temp').text(weatherInfo.dayPart.weatherLocs[location].hour[0].temp);
				$('.info-slide-content.daypart .hour.ii .tempbar .temp').text(weatherInfo.dayPart.weatherLocs[location].hour[1].temp);
				$('.info-slide-content.daypart .hour.iii .tempbar .temp').text(weatherInfo.dayPart.weatherLocs[location].hour[2].temp);
				$('.info-slide-content.daypart .hour.iv .tempbar .temp').text(weatherInfo.dayPart.weatherLocs[location].hour[3].temp);

				//wind
				$('.info-slide-content.daypart .hour.i .tempbar .wind').text(weatherInfo.dayPart.weatherLocs[location].hour[0].wind);
				$('.info-slide-content.daypart .hour.ii .tempbar .wind').text(weatherInfo.dayPart.weatherLocs[location].hour[1].wind);
				$('.info-slide-content.daypart .hour.iii .tempbar .wind').text(weatherInfo.dayPart.weatherLocs[location].hour[2].wind);
				$('.info-slide-content.daypart .hour.iv .tempbar .wind').text(weatherInfo.dayPart.weatherLocs[location].hour[3].wind);

				$('.info-slide-content.daypart .hour.i .condition').text(weatherInfo.dayPart.weatherLocs[location].hour[0].cond);
				$('.info-slide-content.daypart .hour.ii .condition').text(weatherInfo.dayPart.weatherLocs[location].hour[1].cond);
				$('.info-slide-content.daypart .hour.iii .condition').text(weatherInfo.dayPart.weatherLocs[location].hour[2].cond);
				$('.info-slide-content.daypart .hour.iv .condition').text(weatherInfo.dayPart.weatherLocs[location].hour[3].cond);

				//icon
				getCCicon('.info-slide-content.daypart .hour.i .icon',weatherInfo.dayPart.weatherLocs[location].hour[0].icon, weatherInfo.dayPart.weatherLocs[location].hour[0].windspeed)
				getCCicon('.info-slide-content.daypart .hour.ii .icon',weatherInfo.dayPart.weatherLocs[location].hour[1].icon, weatherInfo.dayPart.weatherLocs[location].hour[1].windspeed)
				getCCicon('.info-slide-content.daypart .hour.iii .icon',weatherInfo.dayPart.weatherLocs[location].hour[2].icon, weatherInfo.dayPart.weatherLocs[location].hour[2].windspeed)
				getCCicon('.info-slide-content.daypart .hour.iv .icon',weatherInfo.dayPart.weatherLocs[location].hour[3].icon, weatherInfo.dayPart.weatherLocs[location].hour[3].windspeed)

				// calculate height of tempbars
				var temps = [];
				for (var i = 0; i < 4; i++) {
					temps.push(weatherInfo.dayPart.weatherLocs[location].hour[i].temp);
				}
				var min = Math.min(...temps),  // 54
					max = Math.max(...temps),  // 73
					range = ((max-min) != 0) ? (max-min) : .001,
					prange = (100-78), // percent range for bar height
					hourlable = ['i', 'ii', 'iii', 'iv'],
					temp, value, i = 0;
				$('.info-slide-content.daypart .hour').each(function(){
					temp = weatherInfo.dayPart.weatherLocs[location].hour[i].temp
					value = ((temp-min)/range) * prange + 78; // find percentage of range and translate to percent and add that to the starting css % height number
					valueii = (value/100) * 250 // multiply percentage by max height
					$('.info-slide-content.daypart .hour.' + hourlable[i] + ' .tempbar').animate({height:valueii+"px"}, 1500,function(){
						$('.info-slide-content.daypart .hour .tempbar .temp').fadeTo('slow', 1);
						$('.info-slide-content.daypart .hour .tempbar .wind').fadeTo('slow', 1);
					});
					i = i + 1
				})
				//fade in
				$('.info-slide-content.daypart').fadeIn(500);

				//fadeout
				setTimeout(function() {
					$('.info-slide-content.daypart').fadeOut(500).promise().done(function(){
						wait(0)
					});
				}, slideDelay);
				}
			}
			,dayDesc(fidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #d8c422');
				// Local Forecast -Today (10 sec)
				var div = '.info-slide-content.forecast '
				if (weatherInfo.dayDesc.weatherLocs[location].noReport == true) {
					$('.city-info-slide .tempunavailable').fadeIn(500)
					$('.info-slide-content.forecast').fadeIn(500);
					$(div + '.title').empty()
					$(div + '.content .innercont').empty()
					setTimeout(function() {
						$('.info-slide-content.forecast').fadeOut(500);
						$('.city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
					function fillinfo() {

						fidx = (fidx===undefined ? 0 : fidx);

						//replace tomorrow
						$(div + '.title').text(weatherInfo.dayDesc.weatherLocs[location].day[fidx].name);
						
						// content
						$(div + '.content .innercont').text(weatherInfo.dayDesc.weatherLocs[location].day[fidx].desc);
						function lfresizeText(){
							let s = 67
							$('.info-slide-content.forecast .content').css('font-size', s + 'px');
							setTimeout(function(){
								while ($('.info-slide-content.forecast .content .innercont').height() > 500) {
									s-= 1;
									$('.info-slide-content.forecast .content').css('font-size', s + 'px');
								}
							},1)
							
							
						}
						lfresizeText();
					}
					fillinfo();
					if (fidx === 0) {
						weatherAudio.playLocalforecasti();
						$('.info-slide-content.forecast').fadeIn(500);
						$('.info-slide-content.forecast .frost-pane .content').fadeIn(500);
						$('.info-slide-content.forecast .frost-pane .title').fadeIn(500);
					} else {
						$('.info-slide-content.forecast .frost-pane').fadeIn(0);
						$('.info-slide-content.forecast .frost-pane .content').fadeIn(500);
						$('.info-slide-content.forecast .frost-pane .title').fadeIn(500);
					}
					setTimeout( function() {
							if (fidx<3) {
								$('.info-slide-content.forecast .frost-pane .title').fadeOut(500);
								$('.info-slide-content.forecast .frost-pane .content').fadeOut(500).promise().done(function(){
									currentDisplay(fidx+1);
									$('.info-slide-content.forecast').fadeIn(0);
								});
							} else {
								$('.info-slide-content.forecast').fadeOut(500).promise().done(function(){
									wait(0);
								});
							}

					}, slideDelay)
				}
			}
			,extendedForecast() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #d8c422');
				if (weatherInfo.fiveDay.weatherLocs[location].noReport == true) {
					$('.city-info-slide .tempunavailable').fadeIn(500)
					setTimeout(function() {
						$('.city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
					//days
					$('.info-slide-content.extended-forecast .thingday.iw').text(weatherInfo.fiveDay.weatherLocs[location].day[0].name)
					$('.info-slide-content.extended-forecast .thingday.iiw').text(weatherInfo.fiveDay.weatherLocs[location].day[1].name)
					$('.info-slide-content.extended-forecast .thingday.iiiw').text(weatherInfo.fiveDay.weatherLocs[location].day[2].name)
					$('.info-slide-content.extended-forecast .thingday.ivw').text(weatherInfo.fiveDay.weatherLocs[location].day[3].name)
					$('.info-slide-content.extended-forecast .thingday.vw').text(weatherInfo.fiveDay.weatherLocs[location].day[4].name)

					//icons
					getCCicon('.info-slide-content.extended-forecast .frost-pane.iw .icon',weatherInfo.fiveDay.weatherLocs[location].day[0].icon, weatherInfo.fiveDay.weatherLocs[location].day[0].windspeed)
					getCCicon('.info-slide-content.extended-forecast .frost-pane.iiw .icon',weatherInfo.fiveDay.weatherLocs[location].day[1].icon, weatherInfo.fiveDay.weatherLocs[location].day[1].windspeed)
					getCCicon('.info-slide-content.extended-forecast .frost-pane.iiiw .icon',weatherInfo.fiveDay.weatherLocs[location].day[2].icon, weatherInfo.fiveDay.weatherLocs[location].day[2].windspeed)
					getCCicon('.info-slide-content.extended-forecast .frost-pane.ivw .icon',weatherInfo.fiveDay.weatherLocs[location].day[3].icon, weatherInfo.fiveDay.weatherLocs[location].day[3].windspeed)
					getCCicon('.info-slide-content.extended-forecast .lfrost-pane.vw .icon',weatherInfo.fiveDay.weatherLocs[location].day[4].icon, weatherInfo.fiveDay.weatherLocs[location].day[4].windspeed)

					//conditions
					$('.info-slide-content.extended-forecast .frost-pane.iw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[0].cond);
					$('.info-slide-content.extended-forecast .frost-pane.iiw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[1].cond);
					$('.info-slide-content.extended-forecast .frost-pane.iiiw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[2].cond);
					$('.info-slide-content.extended-forecast .frost-pane.ivw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[3].cond);
					$('.info-slide-content.extended-forecast .lfrost-pane.vw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[4].cond);

					//high
					$('.info-slide-content.extended-forecast .frost-pane.iw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[0].high)
					$('.info-slide-content.extended-forecast .frost-pane.iiw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[1].high)
					$('.info-slide-content.extended-forecast .frost-pane.iiiw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[2].high)
					$('.info-slide-content.extended-forecast .frost-pane.ivw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[3].high)
					$('.info-slide-content.extended-forecast .lfrost-pane.vw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[4].high)

					//low
					$('.info-slide-content.extended-forecast .frost-pane.iw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[0].low)
					$('.info-slide-content.extended-forecast .frost-pane.iiw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[1].low)
					$('.info-slide-content.extended-forecast .frost-pane.iiiw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[2].low)
					$('.info-slide-content.extended-forecast .frost-pane.ivw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[3].low)
					$('.info-slide-content.extended-forecast .lfrost-pane.vw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[4].low)

					//fade in and out
					$('.info-slide-content.extended-forecast').fadeIn(500);
					setTimeout(function() {
						$('.info-slide-content.extended-forecast').fadeOut(500).promise().done(function(){
							wait(0)
						});
					}, slideDelay);
				}
			}
			,almanac() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #d8c422');
				if (weatherInfo.almanac.noReport == true) {
					$('.city-info-slide #subhead-city').text(weatherInfo.almanac.displayname);
					$('.city-info-slide .tempunavailable').fadeIn(500)
					setTimeout(function() {
						$('.city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
					$('.info-slide-content.almanac .thing .thingtext').text(weatherInfo.almanac.date);
					$('.info-slide-content.almanac .frost-pane.half .ahightext').text(weatherInfo.almanac.avghigh);
					$('.info-slide-content.almanac .frost-pane.half .alowtext').text(weatherInfo.almanac.avglow);
					$('.info-slide-content.almanac .frost-pane.half .rhightext').text(weatherInfo.almanac.rechigh);
					$('.info-slide-content.almanac .frost-pane.half .rlowtext').text(weatherInfo.almanac.reclow);
					$('.info-slide-content.almanac .frost-pane.half .rhighyear').text(weatherInfo.almanac.rechighyear);
					$('.info-slide-content.almanac .frost-pane.half .rlowyear').text(weatherInfo.almanac.reclowyear);
					$('.info-slide-content.almanac .frost-pane.purple .sunrisetext').text(weatherInfo.almanac.sunrise);
					$('.info-slide-content.almanac .frost-pane.purple .sunsettext').text(weatherInfo.almanac.sunset);
					$('.info-slide-content.almanac .frost-pane.purple .phase.i .phasetext').text(weatherInfo.almanac.moonphases[0].name);
					$('.info-slide-content.almanac .frost-pane.purple .phase.ii .phasetext').text(weatherInfo.almanac.moonphases[1].name);
					$('.info-slide-content.almanac .frost-pane.purple .phase.iii .phasetext').text(weatherInfo.almanac.moonphases[2].name);
					$('.info-slide-content.almanac .frost-pane.purple .phase.iv .phasetext').text(weatherInfo.almanac.moonphases[3].name);
					$('.info-slide-content.almanac .frost-pane.purple .phase.i .date').text(weatherInfo.almanac.moonphases[0].date);
					$('.info-slide-content.almanac .frost-pane.purple .phase.ii .date').text(weatherInfo.almanac.moonphases[1].date);
					$('.info-slide-content.almanac .frost-pane.purple .phase.iii .date').text(weatherInfo.almanac.moonphases[2].date);
					$('.info-slide-content.almanac .frost-pane.purple .phase.iv .date').text(weatherInfo.almanac.moonphases[3].date);
					$('.info-slide-content.almanac .frost-pane.purple .phase.i .icon').css('background-image', 'url("images/moonphases/' + weatherInfo.almanac.moonphases[0].name + '.png")');
					$('.info-slide-content.almanac .frost-pane.purple .phase.ii .icon').css('background-image', 'url("images/moonphases/' + weatherInfo.almanac.moonphases[1].name + '.png")');
					$('.info-slide-content.almanac .frost-pane.purple .phase.iii .icon').css('background-image', 'url("images/moonphases/' + weatherInfo.almanac.moonphases[2].name + '.png")');
					$('.info-slide-content.almanac .frost-pane.purple .phase.iv .icon').css('background-image', 'url("images/moonphases/' + weatherInfo.almanac.moonphases[3].name + '.png")');

					//fade in and out
					$('.info-slide-content.almanac').fadeIn(500);
					setTimeout(function() {
						$('.info-slide-content.almanac').fadeOut(500).promise().done(function(){
							wait(0)
						});
					}, slideDelay);
				}
			},
			
			//traffic
			trafficIntro() {
				$('.traffic-slide-intro .accent').fadeIn(500);
				$('.traffic-slide-intro .weatherscanmarquee').fadeIn(500);
				$('.traffic-slide-intro .weatherscanmarquee').css('animation', 'marqueeweatherscan 5.5s linear normal forwards');
				hideExtraInfo();
				setTimeout(function() {
					$('.traffic-slide-intro .segment').fadeIn(500);
				}, 1000);
				setTimeout(function() {
					$('.traffic-slide-intro .segment').fadeOut(500)
					$('.traffic-slide-intro .accent').fadeOut(500);
					
					$('.traffic-slide-intro .weatherscanmarquee').fadeOut(500).promise().done(function(){
						wait(0);
					});
				}, 5000);
			}
			,trafficOverview () {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #de932a');
				weatherAudio.playTrafficConditions();
				if (weatherInfo.trafficMapUnavailable == true) {
					$('.info-slide.traffic .tempunavailable').fadeIn(500);
					setTimeout(function() {
						$('.info-slide.traffic .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					$('.info-slide-content.traffic-overview').fadeIn(500);
					tt.resize()
					setTimeout(function() {
						$('.info-slide-content.traffic-overview').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				}
			}
			,trafficReport() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #de932a');
				function hideBottom() {
					$('.info-slide-content.traffic-report .frost-pane.blank').fadeIn(0);
					$('.info-slide-content.traffic-report .thing-bot .thingbg').fadeOut(0);
					$('.info-slide-content.traffic-report .thing-bot .thingtext').fadeOut(0);
					$('.info-slide-content.traffic-report .description-bot').fadeOut(0);
					$('.info-slide-content.traffic-report .frost-pane.bot').fadeOut(0);
					$('.info-slide-content.traffic-report .impact-bot').fadeOut(0);
				}
				function showBottom() {
					$('.info-slide-content.traffic-report .frost-pane.blank').fadeOut(0);
					$('.info-slide-content.traffic-report .thing-bot .thingbg').fadeIn(0);
					$('.info-slide-content.traffic-report .thing-bot .thingtext').fadeIn(0);
					$('.info-slide-content.traffic-report .description-bot').fadeIn(0);
					$('.info-slide-content.traffic-report .frost-pane.bot').fadeIn(0);
					$('.info-slide-content.traffic-report .impact-bot').fadeIn(0);
				}
				if (weatherInfo.trafficIncidents.incidentcount == 1) {
					$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[0].title);
					if (weatherInfo.trafficIncidents.incidents[0].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[0].impact);
					$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[0].fulldesc);
					hideBottom();

					$('.info-slide-content.traffic-report').fadeIn(500);
					
					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else if (weatherInfo.trafficIncidents.incidentcount == 2) {
					$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[0].title);
					if (weatherInfo.trafficIncidents.incidents[0].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[0].impact);
					$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[0].fulldesc);
					$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[1].title);
					if (weatherInfo.trafficIncidents.incidents[1].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[1].impact);
					$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[1].fulldesc);
					showBottom();

					$('.info-slide-content.traffic-report').fadeIn(500);
					
					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else if (weatherInfo.trafficIncidents.incidentcount == 3) {
					$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[0].title);
					if (weatherInfo.trafficIncidents.incidents[0].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[0].impact);
					$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[0].fulldesc);
					$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[1].title);
					if (weatherInfo.trafficIncidents.incidents[1].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[1].impact);
					$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[1].fulldesc);
					showBottom();

					$('.info-slide-content.traffic-report').fadeIn(500);

					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(250);
					}, slideDelay);

					setTimeout(function() {
						setTimeout(function() {
						$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[2].title);
						if (weatherInfo.trafficIncidents.incidents[2].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
						$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[2].impact);
						$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[2].fulldesc);
						hideBottom();
						}, 250)
						

						$('.info-slide-content.traffic-report').fadeIn(250);
					}, slideDelay);

					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay*2);
				} else if (weatherInfo.trafficIncidents.incidentcount == 4) {
					$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[0].title);
					if (weatherInfo.trafficIncidents.incidents[0].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[0].impact);
					$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[0].fulldesc);
					$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[1].title);
					if (weatherInfo.trafficIncidents.incidents[1].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[1].impact);
					$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[1].fulldesc);
					showBottom();

					$('.info-slide-content.traffic-report').fadeIn(500);

					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(250);
					}, slideDelay);

					setTimeout(function() {
						setTimeout(function() {
						$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[2].title);
						if (weatherInfo.trafficIncidents.incidents[2].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
						$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[2].impact);
						$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[2].fulldesc);
						$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[3].title);
						if (weatherInfo.trafficIncidents.incidents[3].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
						$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[3].impact);
						$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[3].fulldesc);
						showBottom();
						}, 250)
						

						$('.info-slide-content.traffic-report').fadeIn(250);
					}, slideDelay);

					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay*2);
				} else if (weatherInfo.trafficIncidents.incidentcount == 5) {
					$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[0].title);
					if (weatherInfo.trafficIncidents.incidents[0].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[0].impact);
					$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[0].fulldesc);
					$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[1].title);
					if (weatherInfo.trafficIncidents.incidents[1].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[1].impact);
					$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[1].fulldesc);
					showBottom();

					$('.info-slide-content.traffic-report').fadeIn(500);

					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(250);
					}, slideDelay);

					setTimeout(function() {
						setTimeout(function() {
						$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[2].title);
						if (weatherInfo.trafficIncidents.incidents[2].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
						$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[2].impact);
						$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[2].fulldesc);
						$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[3].title);
						if (weatherInfo.trafficIncidents.incidents[3].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
						$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[3].impact);
						$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[3].fulldesc);
						showBottom();
						}, 250)
						
						$('.info-slide-content.traffic-report').fadeIn(250);

						setTimeout(function() {
							$('.info-slide-content.traffic-report').fadeOut(250);
						}, slideDelay);	
						setTimeout(function() {
							setTimeout(function() {
							$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[4].title);
							if (weatherInfo.trafficIncidents.incidents[4].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
							$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[4].impact);
							$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[4].fulldesc);
							hideBottom();
							}, 250)
						
							$('.info-slide-content.traffic-report').fadeIn(250);
						}, slideDelay);
					}, slideDelay);
					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay*3);
				} else if (weatherInfo.trafficIncidents.incidentcount >= 6) {
					$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[0].title);
					if (weatherInfo.trafficIncidents.incidents[0].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[0].impact);
					$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[0].fulldesc);
					$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[1].title);
					if (weatherInfo.trafficIncidents.incidents[1].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
					$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[1].impact);
					$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[1].fulldesc);
					showBottom();

					$('.info-slide-content.traffic-report').fadeIn(500);

					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(250);
					}, slideDelay);

					setTimeout(function() {
						setTimeout(function() {
						$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[2].title);
						if (weatherInfo.trafficIncidents.incidents[2].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
						$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[2].impact);
						$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[2].fulldesc);
						$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[3].title);
						if (weatherInfo.trafficIncidents.incidents[3].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
						$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[3].impact);
						$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[3].fulldesc);
						showBottom();
						}, 250)
						
						$('.info-slide-content.traffic-report').fadeIn(250);

						setTimeout(function() {
							$('.info-slide-content.traffic-report').fadeOut(250);
						}, slideDelay);	
						setTimeout(function() {
							setTimeout(function() {
							$('.info-slide-content.traffic-report .thing-top .thingtext').text(weatherInfo.trafficIncidents.incidents[4].title);
							if (weatherInfo.trafficIncidents.incidents[4].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-top').css("background-color", "#3DD135")};
							$('.info-slide-content.traffic-report .impact-top').text(weatherInfo.trafficIncidents.incidents[4].impact);
							$('.info-slide-content.traffic-report .description-top').text("           " +weatherInfo.trafficIncidents.incidents[4].fulldesc);
							$('.info-slide-content.traffic-report .thing-bot .thingtext').text(weatherInfo.trafficIncidents.incidents[5].title);
							if (weatherInfo.trafficIncidents.incidents[5].impact === "MEDIUM IMPACT ") {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#E6EC46")} else if ((weatherInfo.trafficIncidents.incidents[0].impact === "HIGH IMPACT ")) {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#FE2C2D")} else {$('.info-slide-content.traffic-report .impact-bot').css("background-color", "#3DD135")};
							$('.info-slide-content.traffic-report .impact-bot').text(weatherInfo.trafficIncidents.incidents[5].impact);
							$('.info-slide-content.traffic-report .description-bot').text("           " +weatherInfo.trafficIncidents.incidents[5].fulldesc);
							showBottom();
							}, 250)
						
							$('.info-slide-content.traffic-report').fadeIn(250);
						}, slideDelay);
					}, slideDelay);

					setTimeout(function() {
						$('.info-slide-content.traffic-report').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay*3);
				}
			},
			healthIntro() {
				$('.health-slide-intro .accent').fadeIn(500);
				$('.health-slide-intro .weatherscanmarquee').fadeIn(500);
				$('.health-slide-intro .weatherscanmarquee').css('animation', 'marqueeweatherscan 5.5s linear normal forwards')
				hideExtraInfo();
				setTimeout(function() {
					$('.health-slide-intro .segment').fadeIn(500);
				}, 1000);
				setTimeout(function() {
					$('.health-slide-intro .segment').fadeOut(500)
					$('.health-slide-intro .accent').fadeOut(500);
					$('.health-slide-intro .weatherscanmarquee').fadeOut(500).promise().done(function(){
						wait(0);
					});
				}, 5000);
			}
			,healthForecast() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #03bdc6');
				if (weatherInfo.healthforecast.noReport == true) {
					$('.info-slide.health .tempunavailable').fadeIn(500);
					setTimeout(function() {
						$('.info-slide.health .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					if (weatherInfo.healthforecast.dayidx == 0 && dateFns.getHours(new Date()) >= 4) {
						$('.info-slide-content.health-forecast .mainforecast .hightext').css("right","100px");
						$('.info-slide-content.health-forecast .mainforecast .hightext').css("top","295px");
						$('.info-slide-content.health-forecast .mainforecast .high').css("left","190px");
						$('.info-slide-content.health-forecast .mainforecast .high').css("top","315px");
						$('.info-slide-content.health-forecast .mainforecast .lowtext').fadeOut(0)
						$('.info-slide-content.health-forecast .mainforecast .low').fadeOut(0)
					} else {
						$('.info-slide-content.health-forecast .mainforecast .hightext').removeAttr("style");
						$('.info-slide-content.health-forecast .mainforecast .hightext').removeAttr("style");
						$('.info-slide-content.health-forecast .mainforecast .high').removeAttr("style");
						$('.info-slide-content.health-forecast .mainforecast .high').removeAttr("style");
						$('.info-slide-content.health-forecast .mainforecast .lowtext').fadeIn(0)
						$('.info-slide-content.health-forecast .mainforecast .low').fadeIn(0)
					}
					$('.info-slide-content.health-forecast .thing .thingtext').text("Forecast for " + weatherInfo.healthforecast.day)
					$('.info-slide-content.health-forecast .mainforecast .hightext').text(weatherInfo.healthforecast.high)
					$('.info-slide-content.health-forecast .mainforecast .lowtext').text(weatherInfo.healthforecast.low)
					$('.info-slide-content.health-forecast .forecastdetails .chancepreciptext').text(weatherInfo.healthforecast.precipChance)
					$('.info-slide-content.health-forecast .forecastdetails .humidtext').text(weatherInfo.healthforecast.humid)
					$('.info-slide-content.health-forecast .forecastdetails .windtext').text(weatherInfo.healthforecast.wind)
					getCCicon('.info-slide-content.health-forecast .mainforecast .icon', weatherInfo.healthforecast.icon, weatherInfo.healthforecast.windspeed)

					$('.info-slide-content.health-forecast').fadeIn(500);
					setTimeout(function() {
						$('.info-slide-content.health-forecast').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				}
			}
			,pollen() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #03bdc6');
				$('.info-slide-content.allergy .totalpollen .desc').text(weatherInfo.healthPollen.totalcat)
				$('.info-slide-content.allergy .pollen .pollenbar.tree .treetype').text(weatherInfo.healthPollen.types[0].treetype)
				$('.info-slide-content.allergy .leftpanel .thing .thingtext').text("As of " + weatherInfo.healthPollen.date)
				$('.info-slide-content.allergy .totalpollen .cat').text(weatherInfo.healthPollen.total)

				//play narration and fade in
				weatherAudio.playPollenReport();
				$('.info-slide-content.allergy').fadeIn(500);
				//animate pollen bars
				setTimeout(function () {
					i = 0
					var pollentypes = ['tree', 'grass', 'weed', 'mold'];
					pollentypes.forEach(pollentype => {
						var plength = {"0":"-15", "1":"63", "2":"146", "3":"229", "4":"312", "5":"395", "9":"-15"}[weatherInfo.healthPollen.types[i].pollenidx]
						var ptime = {"0":0, "1":500, "2":1000, "3":1500, "4":2000, "5":2500, "9":0}[weatherInfo.healthPollen.types[i].pollenidx]
						$('.info-slide-content.allergy .pollen .pollenbar.' + pollentype + ' .bar .bararrow').animate({left: plength + "px"}, ptime)
					});
				}, 500)
				//fade out
				setTimeout(function() {
					$('.info-slide-content.allergy').fadeOut(500).promise().done(function(){
						wait(0);
					});
				}, slideDelay);
			}
			,achesBreath() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #03bdc6');
				if (weatherInfo.healthAcheBreath.noReport == true) {
					$('.info-slide.health .tempunavailable').fadeIn(500);
					setTimeout(function() {
						$('.info-slide.health .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					var alength = {"0":"-15", "1":"21.5", "2":"63", "3":"104.5", "4":"146", "5":"187.5", "6":"229", "7":"270.5", "8":"312", "9":"353.5", "10":"395"}[weatherInfo.healthAcheBreath.achesindex]
					var atime = {"0":0, "1":250, "2":500, "3":750, "4":1000, "5":1250, "6":1500, "7":1750, "8":2000, "9":2250, "10":2500}[weatherInfo.healthAcheBreath.achesindex]
					var blength = {"10":"-15","9":"21.5", "8":"63", "7":"104.5", "6":"146", "5":"187.5", "4":"229", "3":"270.5", "2":"312", "1":"353.5", "0":"395"}[weatherInfo.healthAcheBreath.breathindex]
					var btime = {"10":0, "9":250, "8":500, "7":750, "6":1000, "5":1250, "4":1500, "3":1750, "2":2000, "1":2250, "0":2500}[weatherInfo.healthAcheBreath.breathindex]
					$('.info-slide-content.Aches-Breath .thing .thingtext').text(weatherInfo.healthAcheBreath.date)
					//reset bars
					$('.info-slide-content.Aches-Breath .aches .bar .bararrow').css('left','-15px')
					$('.info-slide-content.Aches-Breath .breath .bar .bararrow').css('left','-15px')
					$('.info-slide-content.Aches-Breath .aches .bar .bararrow .bararrowtext').fadeOut(0);
					$('.info-slide-content.Aches-Breath .breath .bar .bararrow .bararrowtext').fadeOut(0);

					//fade in
					$('.info-slide-content.Aches-Breath').fadeIn(500);
					//animate bars
					setTimeout(function () {
						$('.info-slide-content.Aches-Breath .aches .bar .bararrow').animate({left: alength + "px"}, atime, 'linear', function() {
							$('.info-slide-content.Aches-Breath .aches .bar .bararrow .bararrowtext').text(weatherInfo.healthAcheBreath.achescat);
							$('.info-slide-content.Aches-Breath .aches .bar .bararrow .bararrowtext').fadeIn(500);
						})
						$('.info-slide-content.Aches-Breath .breath .bar .bararrow').animate({left: blength + "px"}, btime, 'linear' ,function() {
							$('.info-slide-content.Aches-Breath .breath .bar .bararrow .bararrowtext').text(weatherInfo.healthAcheBreath.breathcat);
							$('.info-slide-content.Aches-Breath .breath .bar .bararrow .bararrowtext').fadeIn(500);
						})
					}, 500);
					//fade out
					setTimeout(function() {
						$('.info-slide-content.Aches-Breath').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				}
			}
			,airQuality() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #03bdc6');
				if (weatherInfo.airquality.noReport == true) {
					$('.info-slide.health .tempunavailable').fadeIn(500);
					setTimeout(function() {
						$('.info-slide.health .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					var ozone = false;

					/*if (foreDataAlert !== undefined){
						for (var i=0; i<foreDataAlert.alerts.length; i += 1) {
							warning = foreDataAlert.alerts[i].eventDescription;
							if (warning == "Ozone Action Day")  {
								ozone = true;
							}
						};
						if (ozone == true) {
							$('.info-slide-content.airquality .primarypolute .ozoneaction').fadeIn(0)
						}
					}*/
					var aqlength = {1:"45", 2:"151.75", 3:"258.5", 4:"365.25", 5:"472"}[weatherInfo.airquality.airqualityindex]
					var aqcat = {1:"green", 2:"yellow", 3:"orange", 4:"deep orange", 5:"red"}[weatherInfo.airquality.airqualityindex]
					var aqtime = {1:0, 2:500, 3:1000, 4:1500, 5:2000}[weatherInfo.airquality.airqualityindex]
					$('.info-slide-content.airquality .airforecast .bar .arrow').css('bottom','45px');
					$('.info-slide-content.airquality .airforecast .bar .forecast').fadeOut(0);
					$('.info-slide-content.airquality .primarypolute .pollutant').text(weatherInfo.airquality.primarypolute)

					$('.info-slide-content.airquality .leftpanel .thing .thingtext').text(weatherInfo.airquality.date)

					//fade in
					$('.info-slide-content.airquality').fadeIn(500);
					//animate air quality bar
					setTimeout(function() {
						$('.info-slide-content.airquality .airforecast .bar .arrow').animate({bottom: aqlength + "px"}, aqtime, 'linear', function() {
							$('.info-slide-content.airquality .airforecast .bar .' + aqcat + ' .forecast').fadeIn(500)
						})
					}, 500);
					//fade out
					setTimeout(function() {
						$('.info-slide-content.airquality').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				}
			}
			,uvIndex() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #03bdc6');
				if (weatherInfo.uvindex.noReport == true) {
					$('.info-slide.health .tempunavailable').fadeIn(500);
					setTimeout(function() {
						$('.info-slide.health .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					$('.info-slide-content.uvindex .uvtime.i .uvtime').text(weatherInfo.uvindex.forecast[0].time);
					$('.info-slide-content.uvindex .uvtime.ii .uvtime').text(weatherInfo.uvindex.forecast[1].time);
					$('.info-slide-content.uvindex .uvtime.iii .uvtime').text(weatherInfo.uvindex.forecast[2].time);
					$('.info-slide-content.uvindex .uvtime.i .uvday').text(weatherInfo.uvindex.forecast[0].day);
					$('.info-slide-content.uvindex .uvtime.ii .uvday').text(weatherInfo.uvindex.forecast[1].day);
					$('.info-slide-content.uvindex .uvtime.iii .uvday').text(weatherInfo.uvindex.forecast[2].day);
					//reset animation
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'i' + ' .cat').fadeOut(0)
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'ii' + ' .cat').fadeOut(0)
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'iii' + ' .cat').fadeOut(0)
					$('.info-slide-content.uvindex .currentuv .bar .cat').fadeOut(0)
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'i' + ' .num').fadeOut(0)
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'ii' + ' .num').fadeOut(0)
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'iii' + ' .num').fadeOut(0)
					$('.info-slide-content.uvindex .currentuv .bar .num').fadeOut(0)
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'i').css('height','0px')
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'ii').css('height','0px')
					$('.info-slide-content.uvindex .forecastuv .bar.' + 'iii').css('height','0px')
					$('.info-slide-content.uvindex .currentuv .bar').css('height','0px')

					//fade in
					$('.info-slide-content.uvindex').fadeIn(500);
					//animate uv bars
					var hourlable = ['i', 'ii', 'iii'],
					uvi, value, i = 0;
					var ulength = {"-2":"25", "-1":"25", 0:"25", 1:"25", 2:"50", 3:"75", 4:"100", 5:"125", 6:"150", 7:"175", 8:"200", 9:"225", 10:"250", 11:"275"}[weatherInfo.uvindex.currentuv.index]
					var utime = {"-2":0, "-1":0, 0:0, 1:125, 2:250, 3:375, 4:500, 5:625, 6:750, 7:1000, 8:1250, 9:1325, 10:1500, 11:1625}[weatherInfo.uvindex.currentuv.index]
					$('.info-slide-content.uvindex .currentuv .bar .cat').text(weatherInfo.uvindex.currentuv.desc)
					$('.info-slide-content.uvindex .currentuv .bar .num').text(weatherInfo.uvindex.currentuv.index)
					if (weatherInfo.uvindex.currentuv.index == "0" || weatherInfo.uvindex.currentuv.index == "-1" || weatherInfo.uvindex.currentuv.index == "-2") {
							$('.info-slide-content.uvindex .currentuv .bar').css("background", "rgba(0,0,0,0)")
					}
					$('.info-slide-content.uvindex .currentuv .bar').animate({height:ulength+"px"}, utime,function(){
							$('.info-slide-content.uvindex .currentuv .bar .cat').fadeTo('slow', 1);
							$('.info-slide-content.uvindex .currentuv .bar .num').fadeTo('slow', 1);
					});
					$('.info-slide-content.uvindex .forecastuv .bar').each(function(){
						var ulength = {"-2":"25", "-1":"25", 0:"25", 1:"25", 2:"50", 3:"75", 4:"100", 5:"125", 6:"150", 7:"175", 8:"200", 9:"225", 10:"250", 11:"275"}[weatherInfo.uvindex.forecast[i].index]
						var utime = {"-2":0, "-1":0, 0:0, 1:125, 2:250, 3:375, 4:500, 5:625, 6:750, 7:1000, 8:1250, 9:1325, 10:1500, 11:1625}[weatherInfo.uvindex.forecast[i].index]
						$('.info-slide-content.uvindex .forecastuv .bar.' + hourlable[i] + ' .cat').text(weatherInfo.uvindex.forecast[i].desc)
						$('.info-slide-content.uvindex .forecastuv .bar.' + hourlable[i] + ' .num').text(weatherInfo.uvindex.forecast[i].index)
						if (weatherInfo.uvindex.forecast[i].index == "0" || weatherInfo.uvindex.forecast[i].index == "-1" || weatherInfo.uvindex.forecast[i].index == "-2") {
							$('.info-slide-content.uvindex .forecastuv .bar.' + hourlable[i]).css("background", "rgba(0,0,0,0)")
						}
						$('.info-slide-content.uvindex .forecastuv .bar.' + hourlable[i]).animate({height:ulength+"px"}, utime,function(){
							$(this).find(".cat").fadeTo('slow', 1);
							$(this).find(".num").fadeTo('slow', 1);
						});
						i = i + 1
					})
					//fade out
					setTimeout(function() {
						$('.info-slide-content.uvindex').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				}
			}
			,healthTip() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #03bdc6');
				const d = new Date();
				let month = d.getMonth();
				const summertips = ["summertip","summertip2","summertip3","summertip4","summertip5","bothtip","bothtip2","bothtip3","bothtip4","bothtip5","bothtip6","bothtip7","bothtip8","bothtip9","bothtip10"]
				const wintertips = ["wintertip","wintertip2","wintertip3","wintertip4","wintertip5","wintertip6","wintertip7","wintertip8","wintertip9","wintertip10","bothtip","bothtip2","bothtip3","bothtip4","bothtip5","bothtip6","bothtip7","bothtip8","bothtip9","bothtip10"]

				if (month > 2 && month < 9) {
					$('.' + summertips[tipidx]).show();
					if (tipidx > summertips.length) {
						tipidx = 0
					} else {
						tipidx += 1;
					}
				} else {
					$('.' + wintertips[tipidx]).show();
					if (tipidx > wintertips.length) {
						tipidx = 0
					} else {
						tipidx += 1;
					}
				}
				$('.info-slide-content.healthtip').fadeIn(500);
				setTimeout(function() {
					$('.info-slide-content.healthtip').fadeOut(500).promise().done(function(){
						if (month > 2 && month < 9) {
							$('.' + summertips[tipidx-1]).hide();
						} else {
							$('.' + wintertips[tipidx-1]).hide();
						}
						wait(0);
					});
				}, slideDelay);
			}
			,moreInfoImage() {
				$('.subheaderarrow').fadeOut(0);
				$('.info-slide-content.moreinfoimage').fadeIn(500);
				setTimeout(function() {
					$('.info-slide-content.moreinfoimage').fadeOut(500).promise().done(function(){
						wait(0);
					});
				}, slideDelay);
			},

			//international
			internationalIntro() {
				$('.international-slide-intro').fadeIn(0);
				$('.international-slide-intro .accent').fadeIn(500);
				$('.international-slide-intro .weatherscanmarquee').fadeIn(500);
				hideExtraInfo();
				$('.international-slide-intro .weatherscanmarquee').css('animation', 'marqueeweatherscan 5.5s linear normal forwards')
				setTimeout(function() {
					$('.international-slide-intro .segment').fadeIn(500);
				}, 1000);
				setTimeout(function() {
					$('.international-slide-intro .segment').fadeOut(500)
					$('.international-slide-intro .accent').fadeOut(500);
					$('.international-slide-intro .weatherscanmarquee').fadeOut(500).promise().done(function(){
						$('.international-slide-intro').fadeOut(0);
						wait(0);
					});
				}, 5000);
			}
			,internationalForecast(aidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #9ea1a2');
				var pages = Math.ceil(weatherInfo.travel.cities.length/3);
				if (weatherInfo.travel.noReport == true) {
					$('.info-slide-content.internationalforecast').fadeIn(500);
					$('.international .nodata').fadeIn(500)
					setTimeout(function() {
						$('.international .nodata').fadeOut(500);
						$('.info-slide-content.internationalforecast').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					//$('.city-info-slide #subhead-city').fadeOut(0);
					function fillinfo() {
						aidx = (aidx===undefined ? 1 : aidx);
						var di = 0;
						for (var i = 3*aidx - 3; i < 3*aidx && i < weatherInfo.international.cities.length; i++) {
							var divnumbers = ['toploc','midloc','botloc']
							if (weatherInfo.international.cities[i]) {
								$('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .cityname').text(weatherInfo.international.cities[i].displayname);
								for (var ddi = 0; ddi < 3; ddi++) {
									var subdivnumbers = ['i','ii','iii']
									$('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .hightemp').text(weatherInfo.international.cities[i].days[ddi].high);
									$('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .lowtemp').text(weatherInfo.international.cities[i].days[ddi].low);
									//$('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .icon').css('background-image', 'url("' + getCCicon(+weatherInfo.international.cities[i].days[ddi].icon, weatherInfo.international.cities[i].days[ddi].windspeed) + '")');
									getCCicon('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .icon', weatherInfo.international.cities[i].days[ddi].icon, weatherInfo.international.cities[i].days[ddi].windspeed)
								}
							} else {
								var divnumbers = ['toploc','midloc','botloc']
								$('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .cityname').text(weatherInfo.international.cities[i].displayname);
								for (var ddi = 0; ddi < 3; ddi++) {
									var subdivnumbers = ['i','ii','iii']
									$('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .hightemp').text("");
									$('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .lowtemp').text("weatherInfo.travel.cities[i].low");
									$('.info-slide-content.internationalforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .icon').css('background-image', 'url("")');
								}
							}
							di = di + 1
						}
					}
					fillinfo();
					$('.info-slide-content.internationalforecast').fadeIn(500);
					setTimeout( function() {

						if (aidx<pages) {
							$('.info-slide-content.internationalforecast').fadeOut(500).promise().done(function(){
								currentDisplay(aidx+1);
								//fillinfo();
							});
						} else {
							$('.info-slide-content.internationalforecast').fadeOut(500).promise().done(function(){
								wait(0);
							});
						}

					}, slideDelay)
				}
			}

		//travel
			,travelIntro() {
				$('.travel-slide-intro .accent').fadeIn(500);
				$('.travel-slide-intro .weatherscanmarquee').fadeIn(500);
				hideExtraInfo();
				$('.travel-slide-intro .weatherscanmarquee').css('animation', 'marqueeweatherscan 5.5s linear normal forwards')
				setTimeout(function() {
					$('.travel-slide-intro .segment').fadeIn(500);
				}, 1000);
				setTimeout(function() {
					$('.travel-slide-intro .segment').fadeOut(500)
					$('.travel-slide-intro .accent').fadeOut(500);
					$('.travel-slide-intro .weatherscanmarquee').fadeOut(500).promise().done(function(){
						wait(0);
					});
				}, 5000);
			}
			,travelWeather() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #82a0cb');

				$('.info-slide.destinationmap-slide').fadeIn(0);
				$('.info-slide.destinationmap-slide .info-slides-content.destinationmap-content .blackmaplayer').fadeOut(500);
				$('.info-slide.destinationmap-slide .travel-legend').fadeIn(500);
				setTimeout(function() {$('.info-slide.destinationmap-slide .travel-legend').fadeOut(500), $('.info-slide.destinationmap-slide .info-slides-content.destinationmap-content .blackmaplayer').fadeIn(500)}, slideDelay-500);
					setTimeout(function() {
						$('.info-slide.destinationmap-slide').fadeOut(0).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
			}
			,regionalTravel(aidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #82a0cb');
				var lol = 0;
				var regt;
				function positionRegMap() {
					rt = 0
					if (aidx != 1) {rt = 1};
					$('.info-slide.regionaldest-slide .info-subheader .subhead-title').text(weatherInfo.regionalTravel.cities[0].days[rt].dayName + ' Forecast');
					if (maincitycoords.state === "ME" || maincitycoords.state === "NH" || maincitycoords.state === "VT" || maincitycoords.state === "MA" || maincitycoords.state === "NY") {
						lol = 0;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "NJ" || maincitycoords.state === "PA" || maincitycoords.state === "DE" || maincitycoords.state === "CT" || maincitycoords.state === "RI" || maincitycoords.state === "WV" || maincitycoords.state === "OH" || maincitycoords.state === "VA" || maincitycoords.state === "DC" || maincitycoords.state === "MD" || maincitycoords.state === "KY") {
						lol = 5;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "NC" || maincitycoords.state === "SC" ||maincitycoords.state ===  "GA" || maincitycoords.state === "TN" || maincitycoords.state === "AL" || maincitycoords.state === "MS" || maincitycoords.state === "LA" || maincitycoords.state === "AR") {
						lol = 10;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "FL") {
						lol = 15;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "IN" || maincitycoords.state === "IL" || maincitycoords.state === "MO" || maincitycoords.state === "IA" || maincitycoords.state === "KS" || maincitycoords.state === "NE") {
						lol = 20;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "AZ" || maincitycoords.state === "NM" || maincitycoords.state === "TX" || maincitycoords.state === "OK") {
						lol = 25;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "NV" || maincitycoords.state === "CO" || maincitycoords.state === "UT" || maincitycoords.state === "WY") {
						lol = 30;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "MT" || maincitycoords.state === "WA" || maincitycoords.state === "OR" || maincitycoords.state === "ID") {
						lol = 35;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "CA") {
						lol = 40;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else if (maincitycoords.state === "ND" || maincitycoords.state === "SD" || maincitycoords.state === "WI" || maincitycoords.state === "MI" || maincitycoords.state === "MN") {
						lol = 45;
						$('.regionaldest-content .clusters .cluster.one .ctitle').text(weatherInfo.regionalTravel.cities[0+lol].displayname);
						$('.regionaldest-content .clusters .cluster.one .chigh').text(weatherInfo.regionalTravel.cities[0+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.one .cicon'), weatherInfo.regionalTravel.cities[0+lol].days[rt].icon, weatherInfo.regionalTravel.cities[0+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.two .ctitle').text(weatherInfo.regionalTravel.cities[1+lol].displayname);
						$('.regionaldest-content .clusters .cluster.two .chigh').text(weatherInfo.regionalTravel.cities[1+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.two .cicon'), weatherInfo.regionalTravel.cities[1+lol].days[rt].icon, weatherInfo.regionalTravel.cities[1+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.three .ctitle').text(weatherInfo.regionalTravel.cities[2+lol].displayname);
						$('.regionaldest-content .clusters .cluster.three .chigh').text(weatherInfo.regionalTravel.cities[2+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.three .cicon'), weatherInfo.regionalTravel.cities[2+lol].days[rt].icon, weatherInfo.regionalTravel.cities[2+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.four .ctitle').text(weatherInfo.regionalTravel.cities[3+lol].displayname);
						$('.regionaldest-content .clusters .cluster.four .chigh').text(weatherInfo.regionalTravel.cities[3+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.four .cicon'), weatherInfo.regionalTravel.cities[3+lol].days[rt].icon, weatherInfo.regionalTravel.cities[3+lol].days[rt].windspeed);
						$('.regionaldest-content .clusters .cluster.five .ctitle').text(weatherInfo.regionalTravel.cities[4+lol].displayname);
						$('.regionaldest-content .clusters .cluster.five .chigh').text(weatherInfo.regionalTravel.cities[4+lol].days[rt].high);
						getCCicon($('.regionaldest-content .clusters .cluster.five .cicon'), weatherInfo.regionalTravel.cities[4+lol].days[rt].icon, weatherInfo.regionalTravel.cities[4+lol].days[rt].windspeed);
					} else {
						$('.regionaldest-slide .tempunavailable').fadeIn(500)
					}
				}
				aidx = (aidx===undefined ? 1 : aidx);
				positionRegMap();

				if (aidx <= 1) {
					$('.info-slide.regionaldest-slide').fadeIn(0);
					$('.info-slide.regionaldest-slide .info-subheader .subhead-title').fadeIn(500);
					$('.info-slides-content .clusters').fadeIn(500);
				} else {
					$('.info-slide.regionaldest-slide .info-subheader .subhead-title').fadeIn(250);
					$('.info-slides-content .clusters').fadeIn(250);
				}
				setTimeout(function() {
					if (aidx==2) {
						$('.info-slide.regionaldest-slide .info-subheader .subhead-title').fadeOut(500);
						$('.info-slides-content.regionaldest-content .clusters').fadeOut(500);
					}
				}, slideDelay-500);
				setTimeout(function() {
					if (aidx<2) {
						$('.info-slide.regionaldest-slide .info-subheader .subhead-title').fadeOut(250);
						$('.info-slides-content.regionaldest-content .clusters').fadeOut(250).promise().done(function(){
							currentDisplay(aidx+1);
						});
					} else {
						$('.info-slide.regionaldest-slide').fadeOut(0).promise().done(function(){
							wait(0);
						});
					}
					}, slideDelay);
			}
			,destinationForecast(aidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #82a0cb');
				var pages = Math.ceil(weatherInfo.travel.cities.length/3);
				if (weatherInfo.travel.noReport == true) {
					$('.info-slide-content.destinationforecast').fadeIn(500);
					$('.travel .nodata').fadeIn(500)
					setTimeout(function() {
						$('.travel .nodata').fadeOut(500);
						$('.info-slide-content.destinationforecast').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					//$('.city-info-slide #subhead-city').fadeOut(0);
					function fillinfo() {
						aidx = (aidx===undefined ? 1 : aidx);
						var di = 0;
						$('.info-slide-content.destinationforecast .thing .thingtext .daytitle.i').text(weatherInfo.travel.cities[0].days[0].dayName.toUpperCase())
						$('.info-slide-content.destinationforecast .thing .thingtext .daytitle.ii').text(weatherInfo.travel.cities[0].days[1].dayName.toUpperCase())
						$('.info-slide-content.destinationforecast .thing .thingtext .daytitle.iii').text(weatherInfo.travel.cities[0].days[2].dayName.toUpperCase())
						for (var i = 3*aidx - 3; i < 3*aidx && i < weatherInfo.travel.cities.length; i++) {
							var divnumbers = ['toploc','midloc','botloc']
							if (weatherInfo.travel.cities[i]) {
								$('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .cityname').text(weatherInfo.travel.cities[i].displayname);
								for (var ddi = 0; ddi < 3; ddi++) {
									var subdivnumbers = ['i','ii','iii']
									$('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .hightemp').text(weatherInfo.travel.cities[i].days[ddi].high);
									$('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .lowtemp').text(weatherInfo.travel.cities[i].days[ddi].low);
									//$('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .icon').css('background-image', 'url("' + getCCicon(+weatherInfo.travel.cities[i].days[ddi].icon, weatherInfo.travel.cities[i].days[ddi].windspeed) + '")');
									getCCicon('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .icon', weatherInfo.travel.cities[i].days[ddi].icon, weatherInfo.travel.cities[i].days[ddi].windspeed)
								}
							} else {
								var divnumbers = ['toploc','midloc','botloc']
								$('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .cityname').text(weatherInfo.travel.cities[i].displayname);
								for (var ddi = 0; ddi < 3; ddi++) {
									var subdivnumbers = ['i','ii','iii']
									$('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .hightemp').text("");
									$('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .lowtemp').text("weatherInfo.travel.cities[i].low");
									$('.info-slide-content.destinationforecast .frost-pane.' + divnumbers[di] + ' .day.' + subdivnumbers[ddi] + ' .icon').css('background-image', 'url("")');
								}
							}
							di = di + 1
						}
					}
					fillinfo();
					if (aidx === 1) {
						weatherAudio.playRegionalforecast();
					}
					//fade in
					$('.info-slide-content.destinationforecast').fadeIn(500);
					//change pages
					setTimeout( function() {
						if (aidx<pages) {
							$('.info-slide-content.destinationforecast').fadeOut(500).promise().done(function(){
								currentDisplay(aidx+1);
								//fillinfo();
							});
						} else {
							$('.info-slide-content.destinationforecast').fadeOut(500).promise().done(function(){
								wait(0);
							});
						}
					}, slideDelay)
				}
			},
			// airport
			airportIntro() {
				$('.airport-slide-intro .accent').fadeIn(500);
				$('.airport-slide-intro .weatherscanmarquee').fadeIn(500);
				hideExtraInfo();
				$('.airport-slide-intro .weatherscanmarquee').css('animation', 'marqueeweatherscan 5.5s linear normal forwards')
				setTimeout(function() {
					$('.airport-slide-intro .segment').fadeIn(500);
				}, 1000);
				setTimeout(function() {
					$('.airport-slide-intro .segment').fadeOut(500)
					$('.airport-slide-intro .accent').fadeOut(500);
					$('.airport-slide-intro .weatherscanmarquee').fadeOut(500).promise().done(function(){
						wait(0);
					});
				}, 5000);
			}
			,airportConditions(aidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #82a0cb');
				var pages = weatherInfo.airport.mainairports.length
				aidx = (aidx===undefined ? 0 : aidx);
				if (weatherInfo.airport.mainairports[aidx].noReport == true) {
					$('.airport-slide .nodata').fadeIn(500)
					setTimeout(function() {
						$('.airport-slide .nodata').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					function fillinfo() {
						aidx = (aidx===undefined ? 0 : aidx);
						$('.info-slide-content.airportpanel .thing .thingtext').text(weatherInfo.airport.mainairports[aidx].displayname)
						$('.info-slide-content.airportpanel .top .delayfill').html(weatherInfo.airport.mainairports[aidx].arrivals.delay)
						$('.info-slide-content.airportpanel .top .reasonfill').text(weatherInfo.airport.mainairports[aidx].arrivals.reason)
						$('.info-slide-content.airportpanel .bottom .delayfill').html(weatherInfo.airport.mainairports[aidx].departures.delay)
						$('.info-slide-content.airportpanel .bottom .reasonfill').text(weatherInfo.airport.mainairports[aidx].departures.reason)
						$('.info-slide-content.airportpanel .temp').text(weatherInfo.airport.mainairports[aidx].temp)
						$('.info-slide-content.airportpanel .conditions').text(weatherInfo.airport.mainairports[aidx].cond)
						//$('.info-slide-content.airportpanel .icon').css('background-image', 'url("' +  getCCicon(weatherInfo.airport.mainairports[aidx].icon, weatherInfo.airport.mainairports[aidx].windspeed) + '")');
						getCCicon('.info-slide-content.airportpanel .icon', weatherInfo.airport.mainairports[aidx].icon, weatherInfo.airport.mainairports[aidx].windspeed)
					}
					fillinfo();
					//naration on first slide
					if (aidx === 0) {
						weatherAudio.playAirportDelays();
					}
					//fade in
					$('.info-slide-content.airportpanel').fadeIn(500);
					//change pages
					setTimeout( function() {
						if ((aidx+1)<pages) {
							$('.info-slide-content.airportpanel').fadeOut(500).promise().done(function(){
								currentDisplay(aidx+1);
							});
						} else {
							$('.info-slide-content.airportpanel').fadeOut(500).promise().done(function(){
								wait(0);
							});
						}

					}, slideDelay)
				}
			}
			,otherAirportConds(aidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #82a0cb');
				var pages = Math.ceil(weatherInfo.airport.otherairports.length/4);
				if (weatherInfo.airport.noReport == true) {
					$('.info-slide-content.otherairports').fadeIn(500);
					$('.airport-slide .nodata').fadeIn(500)
					setTimeout(function() {
						$('.airport-slide .nodata').fadeOut(500);
						$('.info-slide-content.otherairports').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				} else {
					//$('.city-info-slide #subhead-city').fadeOut(0);
				function fillinfo() {

					aidx = (aidx===undefined ? 1 : aidx);

					//replace tomorrow
					var di = 0;
					for (var i = 4*aidx - 4; i < 4*aidx || i < weatherInfo.airport.otherairports.length; i++) {
						var divnumbers = ['i','ii','iii','iv']
						if (weatherInfo.airport.otherairports[i]) {
							$('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .airportname').text(weatherInfo.airport.otherairports[i].displayname);
							$('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .temp').text(weatherInfo.airport.otherairports[i].temp);
							//$('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .icon').css('background-image', 'url("' + getCCicon(+weatherInfo.airport.otherairports[i].icon, weatherInfo.airport.otherairports[i].windspeed) + '")');
							getCCicon('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .icon', weatherInfo.airport.otherairports[i].icon, weatherInfo.airport.otherairports[i].windspeed)
							$('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .delay').html(weatherInfo.airport.otherairports[i].delay);
						} else {
							var divnumbers = ['i','ii','iii','iv']
							$('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .airportname').text("");
							$('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .temp').text("");
							$('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .icon').css('background-image', 'url("' + "" + '")');
							$('.info-slide-content.otherairports .airport.' + divnumbers[di] + ' .delay').text("")
						}
						di = di + 1
					}
				}
				fillinfo();

				//fade in
				$('.info-slide-content.otherairports').fadeIn(500);
				//change pages
				setTimeout( function() {
					if (aidx<pages) {
						$('.info-slide-content.otherairports').fadeOut(500).promise().done(function(){
							currentDisplay(aidx+1);
							//fillinfo();
						});
					} else {
						$('.info-slide-content.otherairports').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}

					}, slideDelay)
				}
			}

			//severe
			,severeCityIntro() {
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #961b13');
				if (location == 0) {
					$('#brand-container').fadeOut(0);
					hideExtraInfo()
					$('.city-slide-intro .segment').text(weatherInfo.currentCond.weatherLocs[location].displayname);
					$('.city-slide-intro').fadeIn(0);
					$('.city-slide-intro .weatherscancopyright').fadeIn(500);
					$('.city-slide-intro .cityintrobottom').fadeIn(500);
					$('.city-slide-intro .cityaccent').fadeIn(500);
					$('.city-slide-intro .cityweatherscanmarquee').fadeIn(500);
					setTimeout(function() {
						$('.city-slide-intro .segment').fadeIn(500);
						$('.city-slide-intro .cityintrobottomwebsite').fadeIn(500);
					}, 2000);
					setTimeout(function() {
						$('.city-slide-intro .weatherscancopyright .copyrighttext').fadeOut(500).promise().done(function(){
							$('.city-slide-intro .weatherscancopyright .copyrighttext').css('font-size','20px')
							$('.city-slide-intro .weatherscancopyright .copyrighttext').text(`© ${new Date().getFullYear()} Weather Group Television LLC All Rights Reserved`)
							$('.city-slide-intro .weatherscancopyright .copyrighttext').fadeIn(500);
						});
					}, 5000);
					setTimeout(function() {
						$('.city-slide-intro .segment').fadeOut(500)
						$('.city-slide-intro .weatherscancopyright').fadeOut(500);
						$('.city-slide-intro .cityintrobottom').fadeOut(500);
						$('.city-slide-intro .cityintrobottomwebsite').fadeOut(500);
						$('.city-slide-intro .cityaccent').fadeOut(500);
						$('.city-slide-intro .cityweatherscanmarquee').fadeOut(500).promise().done(function(){
							$('.city-slide-intro').fadeOut(0);
							$('#brand-container').fadeIn(0);
							$('.city-slide-intro .weatherscancopyright .copyrighttext').css('font-size','43px')
							$('.city-slide-intro .weatherscancopyright .copyrighttext').text("Weatherscan is only available on " + apperanceSettings.affilateName)
							wait(0);
						});
					}, 10000);
				} else {wait(0)}
			}
			,severeMessage(){
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #961b13');
				$('#date-time').fadeOut(500)
				$('.severe-weatherstatement .frost-pane .statement').text('Weatherscan brings you this special programming because of severe weather in your area.')

				$('.severe-weatherstatement').fadeIn(500);
				setTimeout(function() {
					$('#date-time').fadeIn(500);
					$('.severe-weatherstatement').fadeOut(500).promise().done(function(){
						wait(0)
					})
				}, slideDelay);
			}
			,severeCurrentConditions() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #961b13');
				if (weatherInfo.currentCond.weatherLocs[location].noReport == true) {
					$('.severe-city-info-slide .noreport').fadeIn(500)
					setTimeout(function() {
						$('.severe-city-info-slide .noreport').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
					var	strLabels =	'Humidity<br>Dew Point<br>Pressure<Br>Wind<br>',
						strData = weatherInfo.currentCond.weatherLocs[location].humid + '%<br>' + weatherInfo.currentCond.weatherLocs[location].dewpt + '<br>' + weatherInfo.currentCond.weatherLocs[location].pressure + " " + weatherInfo.currentCond.weatherLocs[location].pressureTrend + '<br>' + weatherInfo.currentCond.weatherLocs[location].wind + '<br>';
						strLabels+='Gusts<Br>';
						strData+=weatherInfo.currentCond.weatherLocs[location].gust +	'<br>';
					if (weatherInfo.currentCond.weatherLocs[location].feelslike.type != "dontdisplay") {
						strLabels+=weatherInfo.currentCond.weatherLocs[location].feelslike.type
						strData+=weatherInfo.currentCond.weatherLocs[location].feelslike.val
					}

					$('.severe-city-info .frost-pane .labels').html(strLabels);
					$('.severe-city-info .frost-pane .data').html(strData);

					// right pane
					getCCicon('.severe-city-info .icon', weatherInfo.currentCond.weatherLocs[location].icon, weatherInfo.currentCond.weatherLocs[location].windspeed)
					$('.severe-city-info .conditions').text(weatherInfo.currentCond.weatherLocs[location].cond);
					$('.severe-city-info .temp').text(weatherInfo.currentCond.weatherLocs[location].temp);
					weatherAudio.playCurrentConditions();

					//fadein
					$('.severe-city-info').fadeIn(500);
					//fadeout and switch
					setTimeout(function() {
						$('.severe-city-info').fadeOut(500).promise().done(function(){
							wait(0);
						});
					}, slideDelay);
				}
			}
			,severeCity8Slides(pidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #961b13');
				var pages = Math.ceil(citySlideList.length/4);
				if (weatherInfo.currentCond.city8slides.noReport == true) {
					$('.severe-city-info-slide .tempunavailable').fadeIn(500)
					setTimeout(function() {
						$('.info-slide-content.severe-aroundcityinfo').fadeOut(500);
						$('.severe-city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							$('.severe-city-info-slide #subhead-city').fadeIn(0);
							wait(0);
					});
					}, slideDelay);
				} else {
					function fillinfo() {
						pidx = (pidx===undefined ? 1 : pidx);

						//replace tomorrow
						var di = 0;
						for (var i = (pidx == 1) ? 0 : 4; i < 4*pidx || i < citySlideList.length; i++) {
							if (weatherInfo.currentCond.city8slides.cities[i]) {
								var divnumbers = ['i','ii','iii','iv']
								$('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .cityname').text(weatherInfo.currentCond.city8slides.cities[i].displayname);
								$('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .temp').text(weatherInfo.currentCond.city8slides.cities[i].temp);
								//$('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .icon').css('background-image', 'url("' + getCCicon(+weatherInfo.currentCond.city8slides.cities[i].icon, weatherInfo.currentCond.city8slides.cities[i].windspeed) + '")');
								getCCicon('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .icon', weatherInfo.currentCond.city8slides.cities[i].icon, weatherInfo.currentCond.city8slides.cities[i].windspeed)

								$('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .wind').text(weatherInfo.currentCond.city8slides.cities[i].wind);
							} else {
								var divnumbers = ['i','ii','iii','iv']
								$('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .cityname').text("");
								$('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .temp').text("");
								$('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .icon').css('background-image', 'url("")');
								$('.info-slide-content.severe-aroundcityinfo .city.' + divnumbers[di] + ' .wind').text("")
							}
							di = di + 1
						}
					}
					fillinfo();
					//fade in
					$('.info-slide-content.severe-aroundcityinfo').fadeIn(500);
					//change page
					setTimeout( function() {
						if (pidx<pages) {
							$('.info-slide-content.severe-aroundcityinfo').fadeOut(500).promise().done(function(){
								currentDisplay(pidx+1);
								//fillinfo();
							});
						} else {
							$('.info-slide-content.severe-aroundcityinfo').fadeOut(500).promise().done(function(){
								$('.severe-city-info-slide #subhead-city').fadeIn(0);
								wait(0);
							});
						}
					}, slideDelay)
				}
			}
			,severeDayPart(fidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #961b13');
				if (weatherInfo.dayPart.weatherLocs[location].noReport == true) {
					$('.severe-city-info-slide .tempunavailable').fadeIn(500)
					setTimeout(function() {
						$('.severe-city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
					$('.info-slide-content.severe-daypart .hour').each(function(){
							$('.info-slide-content.severe-daypart .hour .tempbar').css("height", "0px")
							$('.info-slide-content.severe-daypart .hour .tempbar .temp').css("opacity", "0%");
							$('.info-slide-content.severe-daypart .hour .tempbar .wind').css("opacity", "0%");
						i = i + 1
					});
					//hour title
					$('.info-slide-content.severe-daypart .hour.i .thing .thingtext').text(weatherInfo.dayPart.weatherLocs[location].hour[0].time);
					$('.info-slide-content.severe-daypart .hour.ii .thing .thingtext').text(weatherInfo.dayPart.weatherLocs[location].hour[1].time);
					$('.info-slide-content.severe-daypart .hour.iii .thing .thingtext').text(weatherInfo.dayPart.weatherLocs[location].hour[2].time);
					$('.info-slide-content.severe-daypart .hour.iv .thing .thingtext').text(weatherInfo.dayPart.weatherLocs[location].hour[3].time);

					//temp
					$('.info-slide-content.severe-daypart .hour.i .tempbar .temp').text(weatherInfo.dayPart.weatherLocs[location].hour[0].temp);
					$('.info-slide-content.severe-daypart .hour.ii .tempbar .temp').text(weatherInfo.dayPart.weatherLocs[location].hour[1].temp);
					$('.info-slide-content.severe-daypart .hour.iii .tempbar .temp').text(weatherInfo.dayPart.weatherLocs[location].hour[2].temp);
					$('.info-slide-content.severe-daypart .hour.iv .tempbar .temp').text(weatherInfo.dayPart.weatherLocs[location].hour[3].temp);

					//wind
					$('.info-slide-content.severe-daypart .hour.i .tempbar .wind').text(weatherInfo.dayPart.weatherLocs[location].hour[0].wind);
					$('.info-slide-content.severe-daypart .hour.ii .tempbar .wind').text(weatherInfo.dayPart.weatherLocs[location].hour[1].wind);
					$('.info-slide-content.severe-daypart .hour.iii .tempbar .wind').text(weatherInfo.dayPart.weatherLocs[location].hour[2].wind);
					$('.info-slide-content.severe-daypart .hour.iv .tempbar .wind').text(weatherInfo.dayPart.weatherLocs[location].hour[3].wind);

					$('.info-slide-content.severe-daypart .hour.i .condition').text(weatherInfo.dayPart.weatherLocs[location].hour[0].cond);
					$('.info-slide-content.severe-daypart .hour.ii .condition').text(weatherInfo.dayPart.weatherLocs[location].hour[1].cond);
					$('.info-slide-content.severe-daypart .hour.iii .condition').text(weatherInfo.dayPart.weatherLocs[location].hour[2].cond);
					$('.info-slide-content.severe-daypart .hour.iv .condition').text(weatherInfo.dayPart.weatherLocs[location].hour[3].cond);

					//icon
					getCCicon('.info-slide-content.severe-daypart .hour.i .icon',weatherInfo.dayPart.weatherLocs[location].hour[0].icon, weatherInfo.dayPart.weatherLocs[location].hour[0].windspeed)
					getCCicon('.info-slide-content.severe-daypart .hour.ii .icon',weatherInfo.dayPart.weatherLocs[location].hour[1].icon, weatherInfo.dayPart.weatherLocs[location].hour[1].windspeed)
					getCCicon('.info-slide-content.severe-daypart .hour.iii .icon',weatherInfo.dayPart.weatherLocs[location].hour[2].icon, weatherInfo.dayPart.weatherLocs[location].hour[2].windspeed)
					getCCicon('.info-slide-content.severe-daypart .hour.iv .icon',weatherInfo.dayPart.weatherLocs[location].hour[3].icon, weatherInfo.dayPart.weatherLocs[location].hour[3].windspeed)

					// calculate height of tempbars
					var temps = [];
					for (var i = 0; i < 4; i++) {
						temps.push(weatherInfo.dayPart.weatherLocs[location].hour[i].temp);
					}
					var min = Math.min(...temps),  // 54
						max = Math.max(...temps),  // 73
						range = ((max-min) != 0) ? (max-min) : .001,
						prange = (100-78), // percent range for bar height
						hourlable = ['i', 'ii', 'iii', 'iv'],
						temp, value, i = 0;
					$('.info-slide-content.severe-daypart .hour').each(function(){
						temp = weatherInfo.dayPart.weatherLocs[location].hour[i].temp
						value = ((temp-min)/range) * prange + 78; // find percentage of range and translate to percent and add that to the starting css % height number
						valueii = (value/100) * 250 // multiply percentage by max height
						$('.info-slide-content.severe-daypart .hour.' + hourlable[i] + ' .tempbar').animate({height:valueii+"px"}, 1500,function(){
							$('.info-slide-content.severe-daypart .hour .tempbar .temp').fadeTo('slow', 1);
							$('.info-slide-content.severe-daypart .hour .tempbar .wind').fadeTo('slow', 1);
						});
						i = i + 1
					})
					//fade in
					$('.info-slide-content.severe-daypart').fadeIn(500);

					//fadeout
					setTimeout(function() {
						$('.info-slide-content.severe-daypart').fadeOut(500).promise().done(function(){
							wait(0)
						});
					}, slideDelay);
				}
			}
			,severeDayDesc(fidx) {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #961b13');
				var div = '.info-slide-content.severe-forecast '
				if (weatherInfo.dayDesc.weatherLocs[location].noReport == true) {
					$('.severe-city-info-slide .tempunavailable').fadeIn(500)
					$('.info-slide-content.severe-forecast').fadeIn(500);
					$(div + '.title').empty()
					$(div + '.content').empty()
					setTimeout(function() {
						$('.info-slide-content.severe-forecast').fadeOut(500);
						$('.severe-city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
					function fillinfo() {
						fidx = (fidx===undefined ? 0 : fidx);

						//replace tomorrow
						$(div + '.title').text(weatherInfo.dayDesc.weatherLocs[location].day[fidx].name);

						// content
						$(div + '.content .innercont').text(weatherInfo.dayDesc.weatherLocs[location].day[fidx].desc);
						function slfresizeText(){
							let s = 67
							$('.info-slide-content.severe-forecast .content').css('font-size', s + 'px');
							setTimeout(function(){
								while ($('.info-slide-content.severe-forecast .content .innercont').height() > 500) {
									s-= 1;
									$('.info-slide-content.severe-forecast .content').css('font-size', s + 'px');
								}
							},1)	
						}
						slfresizeText();
					}
					fillinfo();
					if (fidx === 0) {
						weatherAudio.playLocalforecasti();
						$('.info-slide-content.severe-forecast').fadeIn(500);
						$('.info-slide-content.severe-forecast .frost-pane .content').fadeIn(500);
						$('.info-slide-content.severe-forecast .frost-pane .title').fadeIn(500);
					} else {
						$('.info-slide-content.severe-forecast .frost-pane').fadeIn(0);
						$('.info-slide-content.severe-forecast .frost-pane .content').fadeIn(500);
						$('.info-slide-content.severe-forecast .frost-pane .title').fadeIn(500);
					}
					setTimeout( function() {
							if (fidx<3) {
								$('.info-slide-content.severe-forecast .frost-pane .title').fadeOut(500);
								$('.info-slide-content.severe-forecast .frost-pane .content').fadeOut(500).promise().done(function(){
									currentDisplay(fidx+1);
									$('.info-slide-content.severe-forecast').fadeIn(0);
								});
							} else {
								$('.info-slide-content.severe-forecast').fadeOut(500).promise().done(function(){
									wait(0);
								});
							}

					}, slideDelay)
				}
			}
			,severeExtendedForecast() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #961b13');
				if (weatherInfo.fiveDay.weatherLocs[location].noReport == true) {
					$('.severe-city-info-slide .tempunavailable').fadeIn(500)
					setTimeout(function() {
						$('.severe-city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
					//days
					$('.info-slide-content.severe-extended-forecast .thingday.iw').text(weatherInfo.fiveDay.weatherLocs[location].day[0].name)
					$('.info-slide-content.severe-extended-forecast .thingday.iiw').text(weatherInfo.fiveDay.weatherLocs[location].day[1].name)
					$('.info-slide-content.severe-extended-forecast .thingday.iiiw').text(weatherInfo.fiveDay.weatherLocs[location].day[2].name)
					$('.info-slide-content.severe-extended-forecast .thingday.ivw').text(weatherInfo.fiveDay.weatherLocs[location].day[3].name)
					$('.info-slide-content.severe-extended-forecast .thingday.vw').text(weatherInfo.fiveDay.weatherLocs[location].day[4].name)

					//icons
					getCCicon('.info-slide-content.severe-extended-forecast .frost-pane.iw .icon',weatherInfo.fiveDay.weatherLocs[location].day[0].icon, weatherInfo.fiveDay.weatherLocs[location].day[0].windspeed)
					getCCicon('.info-slide-content.severe-extended-forecast .frost-pane.iiw .icon',weatherInfo.fiveDay.weatherLocs[location].day[1].icon, weatherInfo.fiveDay.weatherLocs[location].day[1].windspeed)
					getCCicon('.info-slide-content.severe-extended-forecast .frost-pane.iiiw .icon',weatherInfo.fiveDay.weatherLocs[location].day[2].icon, weatherInfo.fiveDay.weatherLocs[location].day[2].windspeed)
					getCCicon('.info-slide-content.severe-extended-forecast .frost-pane.ivw .icon',weatherInfo.fiveDay.weatherLocs[location].day[3].icon, weatherInfo.fiveDay.weatherLocs[location].day[3].windspeed)
					getCCicon('.info-slide-content.severe-extended-forecast .lfrost-pane.vw .icon',weatherInfo.fiveDay.weatherLocs[location].day[4].icon, weatherInfo.fiveDay.weatherLocs[location].day[4].windspeed)

					//conditions
					$('.info-slide-content.severe-extended-forecast .frost-pane.iw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[0].cond);
					$('.info-slide-content.severe-extended-forecast .frost-pane.iiw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[1].cond);
					$('.info-slide-content.severe-extended-forecast .frost-pane.iiiw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[2].cond);
					$('.info-slide-content.severe-extended-forecast .frost-pane.ivw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[3].cond);
					$('.info-slide-content.severe-extended-forecast .lfrost-pane.vw .conditions').text(weatherInfo.fiveDay.weatherLocs[location].day[4].cond);

					//high
					$('.info-slide-content.severe-extended-forecast .frost-pane.iw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[0].high)
					$('.info-slide-content.severe-extended-forecast .frost-pane.iiw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[1].high)
					$('.info-slide-content.severe-extended-forecast .frost-pane.iiiw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[2].high)
					$('.info-slide-content.severe-extended-forecast .frost-pane.ivw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[3].high)
					$('.info-slide-content.severe-extended-forecast .lfrost-pane.vw .temphightext').text(weatherInfo.fiveDay.weatherLocs[location].day[4].high)

					//low
					$('.info-slide-content.severe-extended-forecast .frost-pane.iw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[0].low)
					$('.info-slide-content.severe-extended-forecast .frost-pane.iiw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[1].low)
					$('.info-slide-content.severe-extended-forecast .frost-pane.iiiw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[2].low)
					$('.info-slide-content.severe-extended-forecast .frost-pane.ivw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[3].low)
					$('.info-slide-content.severe-extended-forecast .lfrost-pane.vw .templow').text(weatherInfo.fiveDay.weatherLocs[location].day[4].low)

					//fade in and out
					$('.info-slide-content.severe-extended-forecast').fadeIn(500);
					setTimeout(function() {
						$('.info-slide-content.severe-extended-forecast').fadeOut(500).promise().done(function(){
							wait(0)
						});
					}, slideDelay);
				}
			}
			,severeAlmanac() {
				showExtraInfo();
				$('.subheaderarrow').fadeIn(0);
				$('.subheaderarrow').css('border-left', '38px solid #961b13');
				if (weatherInfo.almanac.noReport == true) {
					$('.severe-city-info-slide #subhead-city').text(weatherInfo.almanac.displayname);
					$('.severe-city-info-slide .tempunavailable').fadeIn(500)
					setTimeout(function() {
						$('.severe-city-info-slide .tempunavailable').fadeOut(500).promise().done(function(){
							wait(0);
					});
					}, slideDelay);
				} else {
					$('.info-slide-content.severe-almanac .thing .thingtext').text(weatherInfo.almanac.date);
					$('.info-slide-content.severe-almanac .frost-pane.half .ahightext').text(weatherInfo.almanac.avghigh);
					$('.info-slide-content.severe-almanac .frost-pane.half .alowtext').text(weatherInfo.almanac.avglow);
					$('.info-slide-content.severe-almanac .frost-pane.half .rhightext').text(weatherInfo.almanac.rechigh);
					$('.info-slide-content.severe-almanac .frost-pane.half .rlowtext').text(weatherInfo.almanac.reclow);
					$('.info-slide-content.severe-almanac .frost-pane.half .rhighyear').text(weatherInfo.almanac.rechighyear);
					$('.info-slide-content.severe-almanac .frost-pane.half .rlowyear').text(weatherInfo.almanac.reclowyear);
					$('.info-slide-content.severe-almanac .frost-pane.purple .sunrisetext').text(weatherInfo.almanac.sunrise);
					$('.info-slide-content.severe-almanac .frost-pane.purple .sunsettext').text(weatherInfo.almanac.sunset);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.i .phasetext').text(weatherInfo.almanac.moonphases[0].name);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.ii .phasetext').text(weatherInfo.almanac.moonphases[1].name);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.iii .phasetext').text(weatherInfo.almanac.moonphases[2].name);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.iv .phasetext').text(weatherInfo.almanac.moonphases[3].name);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.i .date').text(weatherInfo.almanac.moonphases[0].date);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.ii .date').text(weatherInfo.almanac.moonphases[1].date);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.iii .date').text(weatherInfo.almanac.moonphases[2].date);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.iv .date').text(weatherInfo.almanac.moonphases[3].date);
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.i .icon').css('background-image', 'url("images/moonphases/' + weatherInfo.almanac.moonphases[0].name + '.png")');
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.ii .icon').css('background-image', 'url("images/moonphases/' + weatherInfo.almanac.moonphases[1].name + '.png")');
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.iii .icon').css('background-image', 'url("images/moonphases/' + weatherInfo.almanac.moonphases[2].name + '.png")');
					$('.info-slide-content.severe-almanac .frost-pane.purple .phase.iv .icon').css('background-image', 'url("images/moonphases/' + weatherInfo.almanac.moonphases[3].name + '.png")');

					//fade in and out
					$('.info-slide-content.severe-almanac').fadeIn(500);
					setTimeout(function() {
						$('.info-slide-content.severe-almanac').fadeOut(500).promise().done(function(){
							wait(0)
						});
					}, slideDelay);
				}
			}
		},
		divTest = $(header + ' .city.current')[0],
		keys = JSON.parse(divTest.dataset.slideorder),
		moveHeader = 0
		//keys = Object.keys(displays);
		var daypart;
		if (weatherInfo.reboot == true) {
			$('#info-slide-container').hide()
			return;
		}
		//figure out next two slides.
		function grabTestDiv() {
			//Move to next segment if next slide is in next segment
			if (idx>=keys.length) {
				idx = 0
				if (severepreload == true && severemode != true) {
					transitionSevereWeatherMode('enter')
					divTest = $('#severe-header .city.current')[0]
				} else if (severepreload == true && severemode == true) {
					transitionSevereWeatherMode('exit')
					divTest = $('#slides-header .city.current')[0]
				} else {
					moveHeader++
					const prevDivs = $(header + ' .city.current').prevAll()
					divTest = $(header + ' .city.current').nextAll('.city').add(header + ' .city.current')[moveHeader]
				}
				keys = JSON.parse(divTest.dataset.slideorder)
			}
			//Check if the slide was declared to be skipped.
			if (keys[idx].skipped == true) {
				//reset skip for next go around.
				keys[idx].skipped = false
				divTest.dataset.slideorder = JSON.stringify(keys)
				
				idx++;
				grabTestDiv()
			}
		}
		grabTestDiv()
		//move header once next div is found.
		if (moveHeader > 0) advanceHeader(moveHeader)//, gadvanceHeader()
		var preloadIdx = parseInt(idx) + 1, divTestNext = divTest, keysNext = keys, moveHeaderPreload = 0;
		location = divTest.dataset.locidx
		slideDelay = (keys[idx].slidedelay != undefined) ? parseInt(keys[idx].slidedelay) : parseInt(divTest.dataset.slidedelay)
		function grabPreloadDiv() {
			if (preloadIdx >= keysNext.length) {
				preloadIdx = 0
				//determine if header is going to change to severe or back
				if (weatherInfo.bulletin.severeweathermode == true && severemode != true) {
					moveHeaderPreload++
					if ($('#severe-header .city')[moveHeaderPreload - 1]) {
						divTestNext = $('#severe-header .city')[moveHeaderPreload - 1]
					} else {
						divTestNext = $('#severe-header .city')[0]
						moveHeaderPreload = 0
					}
					severepreload = true
				} else if (weatherInfo.bulletin.severeweathermode != true && severemode == true) {
					moveHeaderPreload++
					if (severeLoopSettings.radarTransition == true) {
						$('#slides-header .hscroller .current').removeClass('current')
						$('#slides-header .hscroller').prepend('<span class="city radar current" data-slide="radar" data-divOrder="'+0+'" data-locIdx="'+0+'" data-repeat="'+0+'" data-slideDelay="'+10000+'"' + `data-slideOrder='[{"name":"localDoppler","slideDelay":""}]'>LOCAL RADAR</span>` + '<span class="divider-arrow" style="font-family: Zemestro Std ">&lt;</span>')
					}
					if ($('#slides-header .city')[moveHeaderPreload - 1]) {
						divTestNext = $('#slides-header .city')[moveHeaderPreload - 1]
					} else {
						divTestNext = $('#slides-header .city')[0]
						moveHeaderPreload = 0
					}
					severepreload = true
				} else {
					severepreload = false
					moveHeaderPreload++
					if ($(header + ' .city.current').nextAll('.city').add(header + ' .city.current')[moveHeaderPreload]) {
						divTestNext = $(header + ' .city.current').nextAll('.city').add(header + ' .city.current')[moveHeaderPreload]
					} else { //wrap around if none are next. Usually in the case that the header has not moved yet.
						divTestNext = $(header + ' .city')[moveHeaderPreload - 1]
					}
				}
				keysNext = JSON.parse(divTestNext.dataset.slideorder)
			}
			testFunc = new Function(keysNext[preloadIdx].testDisplay)
			if (testFunc()) {
				if (!keysNext[preloadIdx].alternate) {
					keysNext[preloadIdx].skipped = true
					divTestNext.dataset.slideorder = JSON.stringify(keysNext)
					preloadIdx++;
					grabPreloadDiv();
				} else {
					//store orginal slide to test in future.
					var ogSlide
					if (!keysNext[preloadIdx].originalSlide) {
						ogSlide = JSON.parse(divTestNext.dataset.slideorder)
						
					}
					keysNext[preloadIdx] = keysNext[preloadIdx].alternate
					keysNext[preloadIdx].originalSlide = ogSlide[preloadIdx]
					divTestNext.dataset.slideorder = JSON.stringify(keysNext)
					//make sure alternate doesn't need to be skipped as well.
					grabPreloadDiv();
				}
			}
		}
		grabPreloadDiv()
		//set up variables
		currentDisplay = displays[keys[idx].name];
		//if slide is preloaded, load it, if not preloaded the info-slide is the same.
		if ($(maindiv[keys[idx].name])[0].classList.contains('preload')){
			//other slides need to fade out old slide.
			$('.slideLoaded').fadeOut(0)
			$('.slideLoaded').removeClass("slideLoaded")
			$(maindiv[keys[idx].name]).removeClass("preload")
			$(maindiv[keys[idx].name]).addClass("slideLoaded")
		} else {
			//if slide was not preloaded, load
			if (!$(maindiv[keys[idx].name])[0].classList.contains('slideLoaded')) {
				$(maindiv[keys[idx].name]).addClass("slideLoaded")
				$(maindiv[keys[idx].name]).fadeIn(0)
			}
			if (mainDivHeaders[keys[idx].name] != '') $(maindiv[keys[idx].name] + ' .subhead-title').text(mainDivHeaders[keys[idx].name].replace('*daytitle*',weatherInfo.dayPart.weatherLocs[location].daytitle).replace('*none*',''));
			if (mainDivCityHeaders[keys[idx].name] != '') $(maindiv[keys[idx].name] + ' #subhead-city').text(mainDivCityHeaders[keys[idx].name].replace('*currentConditionsLocation*',weatherInfo.currentCond.weatherLocs[location].displayname).replace('*dayPartLocation*',weatherInfo.dayPart.weatherLocs[location].displayname).replace('*dayDescLocation*',weatherInfo.dayDesc.weatherLocs[location].displayname).replace('*extendedForecastLocation*',weatherInfo.fiveDay.weatherLocs[location].displayname).replace('*almanacLocation*',weatherInfo.almanac.displayname).replace('*none*','').replace('*currentConditionsEnding*',slideApperanceSettings.currentConditions.cityHeaderEnding).replace('*dayPartEnding*',slideApperanceSettings.dayPart.cityHeaderEnding).replace('*dayDescEnding*',slideApperanceSettings.dayPart.cityHeaderEnding).replace('*extendedForecastEnding*',slideApperanceSettings.extendedForecast.cityHeaderEnding).replace('*almanacEnding*',slideApperanceSettings.almanac.cityHeaderEnding).replace('*healthlocation*',weatherInfo.healthforecast.displayname).replace('*trafficarea*',(maincitycoords.displayname + " Area")));
		}
		//preload if the next info-slide is not the same.
		if (maindiv[keys[idx].name] != maindiv[keysNext[preloadIdx].name]) {
			if (mainDivHeaders[keysNext[preloadIdx].name] != '') $(maindiv[keysNext[preloadIdx].name] + ' .subhead-title').text(mainDivHeaders[keysNext[preloadIdx].name].replace('*daytitle*',weatherInfo.dayPart.weatherLocs[location].daytitle).replace('*none*',''));
			if (mainDivCityHeaders[keysNext[preloadIdx].name] != '') $(maindiv[keysNext[preloadIdx].name] + ' #subhead-city').text(mainDivCityHeaders[keysNext[preloadIdx].name].replace('*currentConditionsLocation*',weatherInfo.currentCond.weatherLocs[location].displayname).replace('*dayPartLocation*',weatherInfo.dayPart.weatherLocs[location].displayname).replace('*dayDescLocation*',weatherInfo.dayDesc.weatherLocs[location].displayname).replace('*extendedForecastLocation*',weatherInfo.fiveDay.weatherLocs[location].displayname).replace('*almanacLocation*',weatherInfo.almanac.displayname).replace('*none*','').replace('*currentConditionsEnding*',slideApperanceSettings.currentConditions.cityHeaderEnding).replace('*dayPartEnding*',slideApperanceSettings.dayPart.cityHeaderEnding).replace('*dayDescEnding*',slideApperanceSettings.dayPart.cityHeaderEnding).replace('*extendedForecastEnding*',slideApperanceSettings.extendedForecast.cityHeaderEnding).replace('*almanacEnding*',slideApperanceSettings.almanac.cityHeaderEnding).replace('*healthlocation*',weatherInfo.healthforecast.displayname).replace('*trafficarea*',(maincitycoords.displayname + " Area")));
			$(maindiv[keysNext[preloadIdx].name]).addClass("preload")
			$(maindiv[keysNext[preloadIdx].name]).fadeIn(0)
		}
		//If alternative slide was used, reset it.
		if (keys[idx].originalSlide) {
			keys[idx] = keys[idx].originalSlide
			divTest.dataset.slideorder = JSON.stringify(keys)
		}
		currentDisplay();
		return;

		function wait(duration){
			setTimeout(function() {
				idx++
				showSlides(idx);
			}, duration);
		}
	}

	function showRadar(lat, lon, zoom, time, withsat, maxloop) {
			// fade out info, fade in radar
			weatherAudio.playLocalRadar();
			if (withsat == true) {

				$('.radar-slide .radar-legends .pastlegend').text('Past 5 Hours')
				$('.radar-slide').fadeIn(0);
				$('.radar-content').fadeIn(0);
				fadeMap('satrad-1', true, zoom)
				animateRadar('satrad-1', 1, maxloop)
				if (weatherInfo.radarTempUnavialable == true) {
					$('.radar-slide .tempunavailable').fadeIn(500);
				}
				if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeIn(500)} else {$('.radar-color-legend').fadeIn(500)}

				setTimeout(function() {
					fadeMap('satrad-1', false, zoom)
					if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeOut(500)} else {$('.radar-color-legend').fadeOut(500)}
					if (weatherInfo.radarTempUnavialable == true) {
						$('.radar-slide .tempunavailable').fadeOut(500);
					}
					setTimeout( function() {
						$('.radar-content').fadeOut(0);
						$('.radar-slide').fadeOut(0);
						$('.radar-slide .radar-legends .pastlegend').text('Past 3 Hours')
					}, 500)
				}, time);
			} else {
				$('.radar-slide').fadeIn(0);
				$('.radar-content').fadeIn(0);
				recenterMap('radar-1', lat, lon, zoom)
				fadeMap('radar-1', true, zoom)
				animateRadar('radar-1', 1, maxloop)
				if (weatherInfo.radarTempUnavialable == true) {
					$('.radar-slide .tempunavailable').fadeIn(500);
				}
				if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeIn(500)} else {$('.radar-color-legend').fadeIn(500)}
				setTimeout(function() {
					fadeMap('radar-1', false, zoom)
					if (weatherInfo.radarWinterLegend == true) {$('.radar-color-legend-winter').fadeOut(500)} else {$('.radar-color-legend').fadeOut(500)}
					if (weatherInfo.radarTempUnavialable == true) {
						$('.radar-slide .tempunavailable').fadeOut(500);
					}
					setTimeout( function() {
						$('.radar-content').fadeOut(0);
						$('.radar-slide').fadeOut(0);
					}, 500)
				}, time);
			}
		}

		function advanceHeader(moveHeaderVal) {
			// swap current
			var $cities = $(header + ' .city'), currentcity = $(header + ' .current'),
				$scroller = $(header + ' .hscroller'),
				left = 0;
			//reload cityslide data from newweathermanager on loop complete
			if ($cities[moveHeaderVal].dataset.loopcomplete) {
				grabCitySlidesData()
				grabHealthData()
				grabCity8SlidesData()
				grabalmanacSlidesData()
				grabTravelData()
				grabRegionalTravelData()
				grabInternationalData()
				grabAirportDelayData()
				grabTrafficData()
			}
			$($cities[0]).removeClass('current');
			$($cities[moveHeaderVal]).addClass('current');

			// animate move left
			var $prevCities = $(header + ' .city.current').prevAll('.city')
			var $firstCities = $('#marqueenext .city')
			for (var i = 0; i < $prevCities.length; i++) {
				left += -1.06*($($prevCities[i]).outerWidth(true) + $(header + ' .divider-arrow').first().outerWidth(true));
			}
			$scroller.animate({ 'left':	left+'px' }, 900,
			function(){
				// on completion, move the old one to the end
				$scroller.css('left','');
				for (var i = 0; i < $prevCities.length; i++) {
					if ($prevCities[i].dataset.repeat == true || $prevCities[i].dataset.repeat == 'true') {
						$(header + ' .hscroller').append('<span class="divider-arrow" style="font-family: Zemestro Std ">&lt;</span>')
						$($prevCities[i]).appendTo($scroller);
					} else if (parseInt($cities[0].dataset.repeat) > 0) {
						$(header + ' .hscroller').append('<span class="divider-arrow" style="font-family: Zemestro Std ">&lt;</span>')
						$($prevCities[i]).appendTo($scroller);
						$prevCities[i].dataset.repeat = parseInt($prevCities[i].dataset.repeat) - 1
					} else {
						$(header + ' span').first().remove();
					}
					$(header + ' .divider-arrow').first().remove();
					if ($firstCities[0].dataset.repeat == true || $firstCities[0].dataset.repeat == 'true') {
						$('#marqueenext .hscroller').append('<span class="divider-arrow" style="font-family: Zemestro Std "></span>')
						$($firstCities[0]).appendTo($('#marqueenext .hscroller'));
					} else if (parseInt($firstCities[0].dataset.repeat) > 0) {
						$('#marqueenext .hscroller').append('<span class="divider-arrow" style="font-family: Zemestro Std "></span>')
						$($firstCities[0]).appendTo($('#marqueenext .hscroller'));
						$firstCities[0].dataset.repeat = parseInt($firstCities[0].dataset.repeat) - 1
					} else {
						$('#marqueenext span').first().remove();
					}
					$('#marqueenext .divider-arrow').first().remove();
				}
			})
		}
	function buildHeader(){
		$(header + ' .hscroller').empty();
		var arrow ='<span class="divider-arrow" style="font-family: Zemestro Std ">&lt;</span>';
		var city, first, dname

			var li = 1
		function grabDiv(divTypeVal, locIdxVal, slideVal, repeatVal, slideDelayVal, slideOrderVal, loopComplete) {
			var divType = {
				"severe-cities":'<span class="city severe" data-slide="severe" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>` + ((locIdxVal == 0) ? maincitycoords.displayname : locList[locIdxVal-1].displayname)+ '</span>',
				"cities":'<span class="city" data-slide="city" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>` + ((locIdxVal == 0) ? maincitycoords.displayname : locList[locIdxVal-1].displayname)+ '</span>',
				"radar":'<span class="city radar" data-slide="radar" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>LOCAL RADAR</span>`,
				"golf":'<span class="city golf" data-slide="golf" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>GOLF</span>`,
				"beach":'<span class="city beach" data-slide="beach" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>BOAT & BEACH</span>`,
				"traffic":'<span class="city trafficc" data-slide="trafficc" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>TRAFFIC</span>`,
				"health":'<span class="city healthh" data-slide="healthh" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>HEALTH</span>`,
				"airport":'<span class="city airport" data-slide="airport" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>AIRPORTS</span>`,
				"travel":'<span class="city travell" data-slide="travell" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>TRAVEL</span>`,
				"international":'<span class="city internationall" data-slide="internationall" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>INTERNATIONAL</span>`,
			}
			return divType[divTypeVal];
		}

		var totalSlides = 0;
		for (var slide = 0; slide < slideLoopSettings.order.length; slide++) {
			var locIdxOrder = []
			if (String(slideLoopSettings.order[slide].locidx).includes('extra')) {
				for (var i = 1; i <= locList.length; i++) {
					locIdxOrder.push(i)
				}
			} else if (String(slideLoopSettings.order[slide].locidx).includes('all')) {
				for (var i = 0; i <= locList.length; i++) {
					locIdxOrder.push(i)
				}
			} else {
				$('#slides-header .hscroller').append(((totalSlides > 0) ? arrow : "") + grabDiv(slideLoopSettings.order[slide].type, slideLoopSettings.order[slide].locidx, totalSlides, slideLoopSettings.order[slide].repeat, slideLoopSettings.order[slide].slideDelay, (JSON.stringify(slideLoopSettings.order[slide].slideOrder)).replaceAll('replaceLocIdx', slideLoopSettings.order[slide].locidx), slideLoopSettings.order[slide].loopComplete));
				totalSlides += 1
				continue
			}
			if (slideLoopSettings.order[slide].locidx.includes('reverse')) locIdxOrder.reverse();
			if (slideLoopSettings.order[slide].locidx.includes('random')) shuffle(locIdxOrder);
			
			for (var loc = 0; loc < locIdxOrder.length; loc++) {
				$('#slides-header .hscroller').append(((totalSlides > 0) ? arrow : "") + grabDiv(slideLoopSettings.order[slide].type, locIdxOrder[loc], totalSlides, ((slideLoopSettings.order[slide].repeat.length) ? slideLoopSettings.order[slide].repeat[loc % slideLoopSettings.order[slide].repeat.length] : slideLoopSettings.order[slide].repeat), ((slideLoopSettings.order[slide].slideDelay.length) ? slideLoopSettings.order[slide].slideDelay[loc % slideLoopSettings.order[slide].slideDelay.length] : slideLoopSettings.order[slide].slideDelay), ((slideLoopSettings.order[slide].slideOrders) ? JSON.stringify(slideLoopSettings.order[slide].slideOrders[loc % slideLoopSettings.order[slide].slideOrders.length]) : JSON.stringify(slideLoopSettings.order[slide].slideOrder)).replaceAll('replaceLocIdx',locIdxOrder[loc]), slideLoopSettings.order[slide].loopComplete));
				totalSlides += 1
			}
		}
		$('#slides-header .hscroller .city')[0].classList.add('current')
		totalSlides = 0
		for (var slide = 0; slide < severeLoopSettings.order.length; slide++) {
			var locIdxOrder = []
			if (String(severeLoopSettings.order[slide].locidx).includes('extra')) {
				for (var i = 1; i <= locList.length; i++) {
					locIdxOrder.push(i)
				}
			} else if (String(severeLoopSettings.order[slide].locidx).includes('all')) {
				for (var i = 0; i <= locList.length; i++) {
					locIdxOrder.push(i)
				}
			} else {
				$('#severe-header .hscroller').append(((totalSlides > 0) ? arrow : "") + grabDiv(severeLoopSettings.order[slide].type, severeLoopSettings.order[slide].locidx, totalSlides, severeLoopSettings.order[slide].repeat, severeLoopSettings.order[slide].slideDelay, (JSON.stringify(severeLoopSettings.order[slide].slideOrder)).replaceAll('replaceLocIdx',severeLoopSettings.order[slide].locidx), severeLoopSettings.order[slide].loopComplete));
				totalSlides += 1
				continue
			}
			if (severeLoopSettings.order[slide].locidx.includes('reverse')) locIdxOrder.reverse();
			if (severeLoopSettings.order[slide].locidx.includes('random')) shuffle(locIdxOrder);
			for (var loc = 0; loc < locIdxOrder.length; loc++) {
				$('#severe-header .hscroller').append(((totalSlides > 0) ? arrow : "") + grabDiv(severeLoopSettings.order[slide].type, locIdxOrder[loc], totalSlides, ((severeLoopSettings.order[slide].repeat.length) ? severeLoopSettings.order[slide].repeat[loc % severeLoopSettings.order[slide].repeat.length] : severeLoopSettings.order[slide].repeat), ((severeLoopSettings.order[slide].slideDelay.length) ? severeLoopSettings.order[slide].slideDelay[loc % severeLoopSettings.order[slide].slideDelay.length] : severeLoopSettings.order[slide].slideDelay), ((severeLoopSettings.order[slide].slideOrders) ? JSON.stringify(slideLoopSettings.order[slide].slideOrders[loc % severeLoopSettings.order[slide].slideOrders.length]) : JSON.stringify(severeLoopSettings.order[slide].slideOrder)).replaceAll('replaceLocIdx',locIdxOrder[loc]), severeLoopSettings.order[slide].loopComplete));
				totalSlides += 1
			}
		}
		$('#severe-header .hscroller .city')[0].classList.add('current')

		//$(header + ' .hscroller').append(firstradar + cities + arrow + (radar + arrow + airport + arrow + health + arrow + international + arrow + travel + cities + arrow).repeat(4));
	}
	buildHeaderGlobal = buildHeader
	function gbuildHeader(){
		var header = "#marqueenext";
		$(header + ' .hscroller').empty();
		var arrow ='<span class="divider-arrow" style="font-family: Zemestro Std "></span>';
		var city, first, dname
	
			var li = 1
			function ggrabDiv(divTypeVal, locIdxVal, slideVal, repeatVal, slideDelayVal, slideOrderVal, loopComplete) {
				var divType = {
				  "severe-cities":'<span class="city severe" data-slide="severe" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...` + ((locIdxVal == 0) ? maincitycoords.displayname : locList[locIdxVal-1].displayname)+ `<br></span>`,
				  "cities":'<span class="city" data-slide="city" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...` + ((locIdxVal == 0) ? maincitycoords.displayname : locList[locIdxVal-1].displayname)+ `<br></span>`,
				  "radar":'<span class="city radar" data-slide="radar" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...Your Local Radar<br></span>`,
				  "golf":'<span class="city golf" data-slide="golf" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...Golf Forecast<br></span>`,
				  "beach":'<span class="city beach" data-slide="beach" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...Boat & Beach Forecast<br></span>`,
				  "traffic":'<span class="city trafficc" data-slide="trafficc" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...Traffic Report<br></span>`,
				  "health":'<span class="city healthh" data-slide="healthh" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...Health<br></span>`,
				  "airport":'<span class="city airport" data-slide="airport" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...Airport Conditions<br></span>`,
				  "travel":'<span class="city travell" data-slide="travell" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...Travel Forecast<br></span>`,
				  "international":'<span class="city internationall" data-slide="internationall" data-divOrder="'+slideVal+ ((loopComplete == true) ? '" data-loopComplete="true"':'"')+' data-locIdx="'+locIdxVal+'" data-repeat="'+repeatVal+'" data-slideDelay="'+slideDelayVal+'"' + `data-slideOrder='${slideOrderVal}'>Up Next...International<br></span>`,
				}
				return divType[divTypeVal];
			}
	
		var totalSlides = 0;
		for (var slide = 0; slide < slideLoopSettings.order.length; slide++) {
			var locIdxOrder = []
			if (String(slideLoopSettings.order[slide].locidx).includes('extra')) {
				for (var i = 1; i <= locList.length; i++) {
					locIdxOrder.push(i)
				}
			} else if (String(slideLoopSettings.order[slide].locidx).includes('all')) {
				for (var i = 0; i <= locList.length; i++) {
					locIdxOrder.push(i)
				}
			} else {
				$('#marqueenext .hscroller').append(((totalSlides > 0) ? arrow : "") + ggrabDiv(slideLoopSettings.order[slide].type, slideLoopSettings.order[slide].locidx, totalSlides, slideLoopSettings.order[slide].repeat, slideLoopSettings.order[slide].slideDelay, (JSON.stringify(slideLoopSettings.order[slide].slideOrder)).replaceAll('replaceLocIdx', slideLoopSettings.order[slide].locidx), slideLoopSettings.order[slide].loopComplete));
				totalSlides += 1
				continue
			}
			if (slideLoopSettings.order[slide].locidx.includes('reverse')) locIdxOrder.reverse();
			if (slideLoopSettings.order[slide].locidx.includes('random')) shuffle(locIdxOrder);
			
			for (var loc = 0; loc < locIdxOrder.length; loc++) {
				$('#marqueenext .hscroller').append(((totalSlides > 0) ? arrow : "") + ggrabDiv(slideLoopSettings.order[slide].type, locIdxOrder[loc], totalSlides, ((slideLoopSettings.order[slide].repeat.length) ? slideLoopSettings.order[slide].repeat[loc % slideLoopSettings.order[slide].repeat.length] : slideLoopSettings.order[slide].repeat), ((slideLoopSettings.order[slide].slideDelay.length) ? slideLoopSettings.order[slide].slideDelay[loc % slideLoopSettings.order[slide].slideDelay.length] : slideLoopSettings.order[slide].slideDelay), ((slideLoopSettings.order[slide].slideOrders) ? JSON.stringify(slideLoopSettings.order[slide].slideOrders[loc % slideLoopSettings.order[slide].slideOrders.length]) : JSON.stringify(slideLoopSettings.order[slide].slideOrder)).replaceAll('replaceLocIdx',locIdxOrder[loc]), slideLoopSettings.order[slide].loopComplete));
				totalSlides += 1
			}
		}
		$('#marqueenext .hscroller .city')[0].classList.add('current')
		if ($('#marqueenext .hscroller')[0].dataset.repeat == true || $('#marqueenext .hscroller')[0].dataset.repeat == 'true') {
			$(header + ' .hscroller').append('<span class="divider-arrow" style="font-family: Zemestro Std "></span>')
			$($('#marqueenext .hscroller')[0]).appendTo($('#marqueenext .hscroller'));
		} else if (parseInt($('#marqueenext .city')[0].dataset.repeat) > 0) {
			$(header + ' .hscroller').append('<span class="divider-arrow" style="font-family: Zemestro Std "></span>')
			$($('#marqueenext .hscroller')[0]).appendTo($('#marqueenext .hscroller'));
			$('#marqueenext .hscroller')[0].dataset.repeat = parseInt($('#marqueenext .hscroller')[0].dataset.repeat) - 1
		} else {
			$(header + ' span').first().remove();
		}
		$(header + ' .divider-arrow').first().remove();
	}
}  // end function
