var noreportmodecc = false, noreportmodefc = false, noreportmodeac = false;
var marqueeforecasttype = 'forecast'
//do audio thing and second marquee
$(function(){
	weatherAudio.playCallback = function(tags) {
		$('.track-info').text('playing "' + tags.title + '" by ' + tags.artist);
	}
	setTimeout(function() {
		switchMarquee2(0)
	}, 100)
});
function switchMarquee2(idx) {
	if (apperanceSettings.marqueeAd.length == 0 || apperanceSettings.marqueeAd == '') {
		$('#marquee2').fadeOut(0); $('#marquee2-shadow').fadeOut(0); $('#marqueenext').fadeIn(0);
} else {
	$('#marquee2').fadeIn(0)
	$('#marquee2-shadow').fadeIn(0);
	$('#marqueenext').fadeOut(0)
	$('#marquee2')
		.marquee('destroy')
	$('#marquee2').text(apperanceSettings.marqueeAd[idx])
	$('#marquee2')
		.marquee({speed: 103, pauseOnHover: false})
		.on('finished', function() { $('#marquee2').fadeOut(0); $('#marquee2-shadow').fadeOut(0); $('#marqueenext').fadeIn(0); setTimeout(function() {switchMarquee2(((idx < apperanceSettings.marqueeAd.length) ? ++idx : 0))}, 15000)});
	
	}
}
function MarqueeMan() {
	function switchToWarningMarquee(sidx) {
		if (weatherInfo.bulletin.severeweathermode == true) {
			$('.marqueeheadersevere').css("color","#DDDDDD")
			$('.marqueeheadersevere').css("text-shadow","2px 2px 4px #000")

			$('.marqueeheadersevere').text((weatherInfo.bulletin.severewarnings[sidx].warningname) + ' ' + weatherInfo.bulletin.severewarnings[sidx].warningstatus).replaceAll('Severe Thunderstorm Warning Update', 'Severe T\'Storm Update');
			$('#arrow-img').fadeOut(0)
			$('.normal-marqueecontainer').fadeOut(0)
			$('#brand').fadeOut(0);
			$('#brand-severe').fadeIn(0);
			$('#marqueeSevere').fadeIn(0)
			$('#marqueeSevere-shadow').fadeIn(0)
			$('.marqueeheadersevere').fadeIn(0) //#868686
			$('.marqueeheadersevere-background').fadeIn(0);
			$('#marqueeSevere').text(weatherInfo.bulletin.severewarnings[sidx].warningdesc.toUpperCase())
			weatherAudio.playwarningbeep()
			setTimeout(function()
			{
				if (weatherInfo.bulletin.severewarnings[sidx].warningname == "SEVERE THUNDERSTORM WARNING") {
					weatherAudio.severeWarning()
				} else if (weatherInfo.bulletin.severewarnings[sidx].warningname == "TORNADO WARNING") {
					weatherAudio.tornadoWarning()
				} else if (weatherInfo.bulletin.severewarnings[sidx].warningname == "FLASH FLOOD WARNING") {
					weatherAudio.flashFloodWarning()
				}
			},3500)
			//weatherAudio.severeWarning()
			$('#marqueeSevere')
				.marquee('destroy')
				.marquee({speed: 103, delayBeforeStart: 1000, pauseOnHover: false, pauseOnCycle: true})
				.on('finished', function(){
					switchToWarningMarquee(((sidx < weatherInfo.bulletin.severewarnings.length -1) ? sidx + 1 : 0))
				})
		} else if (weatherInfo.bulletin.severeweathermode == true){
			if (weatherInfo.bulletin.severeweathermode == true) {
				$('.marqueeheadersevere').css("color","#DDDDDD")
				$('.marqueeheadersevere').css("text-shadow","2px 2px 4px #000")
				weatherAudio.playwarningbeep()
			}	else if (weatherInfo.bulletin.marqueewarnings[0].significance == "Y" || weatherInfo.bulletin.marqueewarnings[0].significance == "S") {
				$('.marqueeheadersevere').css("color","#000")
				$('.marqueeheadersevere').css("text-shadow", "0px 0px 0px #000")
			} else if (weatherInfo.bulletin.marqueewarnings[0].significance == "A") {
				$('.marqueeheadersevere').css("color", "#000");
				$('.marqueeheadersevere').css("text-shadow", "0px 0px 0px #000");
			}	else if (weatherInfo.bulletin.marqueewarnings[0].significance == "W") {
				$('.marqueeheadersevere').css("color","#DDDDDD")
				$('.marqueeheadersevere').css("text-shadow","2px 2px 4px #000")
			}
			
			$('.marqueeheadersevere').text((weatherInfo.bulletin.marqueewarnings[0].name) + ' ' + weatherInfo.bulletin.marqueewarnings[0].status)
			$('#arrow-img').fadeOut(0)
			$('#marqueeSevere').text(weatherInfo.bulletin.marqueewarnings[0].desc.toUpperCase())
			$('#marqueeSevere')
				.marquee({speed: 103, delayBeforeStart: 1000, pauseOnHover: false, pauseOnCycle: true})
				.on('finished', function(){	if (weatherInfo.bulletin.severeweathermode == true) {weatherAudio.playwarningbeep()}})

		} else {
			$('#marqueeSevere')
				.marquee('destroy')
			$('#marqueeSevere').fadeOut(0)
			$('#marqueeSevere-shadow').fadeOut(0)
			$('.marqueeheadersevere').fadeOut(0)
			$('.marqueeheadersevere-background').fadeOut(0);
			$('#arrow-img').fadeIn(0)
			$('#brand').fadeIn(0);
			$('#brand-severe').fadeOut(0);
		}

	}
		// for ccticker
		function displayCCTickerData() {
			var $span,$spanfor,$spanair;
			// ajax the latest observation
			$(".marquee-current").remove()
			$(".marquee-fore").remove()
			$(".marquee-airport").remove()
			if (weatherInfo.ccticker.noReportCC == true) {
				noreportmodecc = true
			} else {noreportmodecc == false}
			if (weatherInfo.ccticker.noReportFC == true) {
				noreportmodefc = true
			} else {noreportmodefc == false}
			if (weatherInfo.ccticker.noReportAC == true) {
				noreportmodeac = true
			} else {noreportmodeac == false}
			weatherInfo.ccticker.ccLocs.forEach((ccLoc, i) => {
				$span = $("<span class=marquee-current id='" + "cclocation" + i + "'></span>").appendTo('#marquee-now');
				$spanfor = $("<span class=marquee-fore id='" + "cclocation" + i + "'></span>").appendTo('#marquee-now');
				$span.text(ccLoc.displayname + ((noreportmodecc == true) ? "" : ccLoc.currentCond.temp + ' ' + ccLoc.currentCond.cond));
				$spanfor.css('display','none')
				$span.css('display','none')
				$spanfor.text(ccLoc.displayname + ((noreportmodefc == true) ? "" : ccLoc.forecast.temp  + ' ' + ccLoc.forecast.cond));
			});
			weatherInfo.ccticker.ccairportdelays.forEach((ccAirLoc, i) => {
				$spanair = $("<span class=marquee-airport id='" + "aclocation" + i + "'></span>").appendTo('#marquee-now');
				$spanair.css('display','none')
				$spanair.text((ccAirLoc.displayname).replace('International',"Int'l")+ ': ' + ((noreportmodeac == true) ? "" : ccAirLoc.temp + ' ' + ccAirLoc.cond + ', ' + ccAirLoc.delay));
			});
		};

		function refreshMarquee (idx) {
			var currentDisplay,
				displays = {
					marqueeairport() {
						$('.track-info').show()
						$('#arrow-img').attr("src",'/images/now.png');
						$('.marquee-fore').each(function(i, item) {
							item.style.display = 'none'
						});
						$('.marquee-airport').each(function(i, item) {
							item.style.display = ''
						});
						$('.marquee-current').each(function(i, item) {
							item.style.display = 'none'
						});
					}
					,marqueecurrent() {
						$('#arrow-img').attr("src",'/images/now.png');
						$('.track-info').hide()
						$('.marquee-fore').each(function(i, item) {
							item.style.display = 'none'
						});
						$('.marquee-airport').each(function(i, item) {
							item.style.display = 'none'
						});
						$('.marquee-current').each(function(i, item) {
							item.style.display = ''
						});
					}
					,marqueeforecast() {
						$('.track-info').hide()
						if (noreportmodefc == false) {
							$('#arrow-img').attr("src",'/images/' + weatherInfo.ccticker.arrow + 'arrow.png');
						} else {
							$('#arrow-img').attr("src",'/images/arrow.png');
						}
						marqueeforecasttype = 'forecast'
						$('.marquee-fore').each(function(i, item) {
							item.style.display = ''
						});
						$('.marquee-current').each(function(i, item) {
							item.style.display = 'none'
						});
						$('.marquee-airport').each(function(i, item) {
							item.style.display = 'none'
						});
					}
				}
				keys = Object.keys(displays);
				if (noreportmodeac == true && idx == 0) {idx == 1}
				if (noreportmodecc == true && idx == 1) {idx == 2}
				currentDisplay = displays[keys[idx]];
				currentDisplay();
				$('#marquee-container')
					.marquee('destroy')
					.marquee({speed: 120, pauseOnHover:false, delayBeforeStart:1000})
					.on('finished', function() {refreshMarquee(((idx < 2) ? ++idx : 0))});
		}
		//init and loop the things
		refreshMarquee(0);
		switchToWarningMarquee(0);
		displayCCTickerData();
		setInterval(function(){
			displayCCTickerData();
			switchToWarningMarquee();
		}, 300)
}
