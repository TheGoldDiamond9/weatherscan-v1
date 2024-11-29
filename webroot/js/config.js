//Some of the settings may or may not work as this is not a fully completed update. Mainly Appearance settings and weather variables that arent finished.
//Input API Keys below. If no API is inputted, sim will default to no report.
var api_key = 'e1f10a1e78da46f5b10a1e78da96f525';
var map_key = 'pk.eyJ1Ijoiam9lbW9saW5lbGxpIiwiYSI6ImNscXd1a29idDA3MjcyaW10MjBrazN0Ym8ifQ.2c81zLP6d1LTi1Y0TMYejQ';
var traf_key = 'JczeDe7nkChZ1izAoQ8dxGJpmYAbbug7';
//Apperance settings. Fields left blank will use defaults. Will only refresh upon reload.
var apperanceSettings = {
  iconSet:"2005", //2007 or 2010 or 2005
  serialNumber:"",// Ex. "TWCS02983932"
  headinID:"", // Ex. "0298393223"
  affilateName:"Mist Weather Media",// Ex. "Comcast"
  logoURL:"", //image size must be 879*184px or similar aspect ratio.
  corebackgroud:"buildings", //forest, mountain, city, buildings, neighborhood, southwest, ocean. Default is buildings.
  backgroudType:"",//Set to
  backgroudURL:"",//If background type set to "custom" will use this url. URL can be a website or local file path.
  marqueeAd: ["If you are interested in TWC, EAS, or anything weather/tech related, join Mist Weather Media! Visit mistwx.com/discord right now!", "Want to watch Weatherscan and more from around the US? Visit live.weatherscan.net and search through the guide today!", "This emulator isn't going anywhere. It will never be taken down and it will always be here until the end of time. Nothing will force this emulator to be taken off the internet, and the Mist team will fight every second of every day of every year to keep this up.", "If a tornado warning is issued will you get the call? Sign up now to recieve a phone call warning when severe weather is headed your way. Visit weather.com/notify to learn more.", "Now Available! Get picture perfect weather with The Weather Channel HD."],
  //marqueeAd: ["You know who else likes Weatherscan? MY MOM! WOOOOOOOOOOOOO","YYYYYYABADABADOOOOOOOOOOO","With Comcast Spotlight, utilize the impact of interactive advertising. Specifically target areas of New Jersey on TV with commercials on networks like ESPN and TNT - and on the internet at XFINITY.com and FoxNews.com. For your custom advertising solution, call 244-2122.", "If a tornado warning is issued will you get the call? Sign up now to recieve a phone call warning when severe weather is headed your way. Visit weather.com/notify to learn more.", "Now Available! Get picture perfect weather with The Weather Channel HD.", "Comcast is now interviewing for Full-time Residential Door to Door Cable Sales Reps. Base pay plus commission and full benefits. Average rep earns $600 to $800 per week. Qualified applicants should apply at www.comcast.com/careers followed by a call to Mr DeBald at 412.747.6191."],
  copyrightAvoidance: false, //Set to true if you stream or make videos of this emulator and do not want to worry about copyright issues with The Weather Chanel
  startupTime: 29000, //How long you want to wait for everything to load
}
var slideApperanceSettings = {//Ill add more options here eventually.
  localDoppler: {},
  cityIntro: {},
  currentConditions: {cityHeaderEnding: ""},
  city8Slides: {},
  dayPart: {cityHeaderEnding: "Area"},
  dayDesc: {cityHeaderEnding: "Area"},
  extendedForecast: {cityHeaderEnding: "Area"},
  almanac: {cityHeaderEnding: ""},
  severeCityIntro: {},
  severeMessage: {},
  severeCurrentConditions: {cityHeaderEnding: ""},
  severeCity8Slides: {},
  severeDayPart: {cityHeaderEnding: ""},
  severeDayDesc: {cityHeaderEnding: ""},
  severeExtendedForecast: {cityHeaderEnding: ""},
  severeAlmanac: {cityHeaderEnding: ""},
  travelIntro: {},
  destinationForecast: {cityHeaderEnding: ""},
  internationalIntro: {},
  internationalForecast: {cityHeaderEnding: ""},
  beachIntro: {},
  beachConditions: {},
  costalWatersAlerts: {},
  costalWatersForecast: {},
  healthIntro: {},
  healthForecast: {cityHeaderEnding: ""}, //ill make these work later too lazy right now
  pollen: {cityHeaderEnding: ""},
  achesBreath: {cityHeaderEnding: ""},
  airQuality: {cityHeaderEnding: ""},
  uvIndex: {cityHeaderEnding: ""},
  healthTip: {cityHeaderEnding: ""},
  moreInfoImage: {cityHeaderEnding: ""},
  trafficIntro: {},
  trafficOverview: {cityHeaderEnding: "Area"},
  trafficReport: {cityHeaderEnding: "Area"},
}
/*For locidx, all, extra, or number can be used. Random or reverse can be used with all or extra.
All will add all the cities to the loop and extra will add all but the main.
Additionaly, with extra or all, slideOrder, slideDelay, and repeat takes multiple setups in an array.
Currently, only cityslides and severecityslides are set up to work with locidx.

For skipping, a testDisplay function is added. This function must return true for the slide to skip.
Functions have access to global variable only, and location index by inserting replaceLocIdx.
An alternate slide can be added by adding alternate:{slide}.

For this to work properly, there must be two packages in the loop that are not skipped. I might try to address this later if it doesn't add too many checks.
*/
var slideLoopSettings = {
  order:[
  {type:"cities",repeat:0,locidx:0,slideDelay:10000,slideOrder:[{name:"cityIntro",slideDelay:""},{name:"upNext",slideDelay:""},{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"currentConditions",slideDelay:""},{name:"city8Slides",slideDelay:""},{name:"localDoppler",slideDelay:"",testDisplay:"return (Math.random() > 0.5) ? true : false",alternate:{name:"regionalSatellite",slideDelay:""}},{name:"dayDesc",slideDelay:""},{name:"extendedForecast",slideDelay:""},{name:"almanac",slideDelay:""}]},
  {type:"traffic",repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"trafficIntro",slideDelay:""},{name:"trafficOverview",slideDelay:""},{name:"trafficReport",slideDelay:"",testDisplay:'if (weatherInfo.trafficIncidents.enabled != true) {return true}'}]},
  {type:"health",repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"healthIntro",slideDelay:""},{name:"healthForecast",slideDelay:""},{name:"pollen",slideDelay:"",testDisplay:"if (!weatherInfo.healthPollen.totalcat || weatherInfo.healthforecast.noReport != false) {return true}"},{name:"achesBreath",slideDelay:""},{name:"airQuality",slideDelay:""},{name:"uvIndex",slideDelay:""},{name:"healthTip",slideDelay:""},{name:"moreInfoImage",slideDelay:""}]},
  {type:"travel",repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"travelIntro",slideDelay:""},{name:"travelWeather",slideDelay:""},{name:"regionalTravel",slideDelay:""},{name:"destinationForecast",slideDelay:""}]},
  {type:"cities",repeat:0,locidx:0,slideDelay:10000,slideOrder:[{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"currentConditions",slideDelay:""},{name:"localDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"regionalSatellite",slideDelay:""}},{name:"dayPart",slideDelay:""},{name:"extendedForecast",slideDelay:""}]},
  {type:"cities",repeat:true,locidx:'extra',slideDelay:10000,slideOrders:[[{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"currentConditions",slideDelay:""},{name:"localDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"regionalSatellite",slideDelay:""}},{name:"dayPart",slideDelay:""},{name:"extendedForecast",slideDelay:""}],[{name:"upNext",slideDelay:""},{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"currentConditions",slideDelay:""},{name:"localDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"regionalSatellite",slideDelay:""}},{name:"dayDesc",slideDelay:""}]]},
  {type:"traffic",repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"trafficIntro",slideDelay:""},{name:"trafficOverview",slideDelay:""},{name:"trafficReport",slideDelay:"",testDisplay:'if (weatherInfo.trafficIncidents.enabled != true) {return true}'}]},
  {type:"airport",repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"airportIntro",slideDelay:""},{name:"airportConditions",slideDelay:""},{name:"otherAirportConds",slideDelay:""}]},
	{type:"international",repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"internationalIntro",slideDelay:""},{name:"internationalForecast",slideDelay:""}]},
  {type:"cities",repeat:true,locidx:'extra reverse',slideDelay:10000,slideOrders:[[{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"currentConditions",slideDelay:""},{name:"localDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"regionalSatellite",slideDelay:""}},{name:"dayPart",slideDelay:""},{name:"extendedForecast",slideDelay:""}],[{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"currentConditions",slideDelay:""},{name:"localDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"regionalSatellite",slideDelay:""}},{name:"dayDesc",slideDelay:""}]]},
  {type:"cities",loopComplete:true,repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"upNext",slideDelay:""},{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"currentConditions",slideDelay:""},{name:"localDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"regionalSatellite",slideDelay:""}},{name:"dayDesc",slideDelay:""},{name:"cityIntro",slideDelay:""},{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"currentConditions",slideDelay:""},{name:"city8Slides",slideDelay:""},{name:"localDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"regionalSatellite",slideDelay:""}},{name:"dayDesc",slideDelay:""},{name:"extendedForecast",slideDelay:""},{name:"almanac",slideDelay:""}]},
      ]   
}
var severeLoopSettings = {radarTransition:true,order:[
  {type:"severe-cities",repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"severeMessage",slideDelay:""},{name:"bulletin",slideDelay:"",testDisplay:'if (weatherInfo.bulletin.weatherLocs[replaceLocIdx].enabled != true) {return true}'},{name:"severeCurrentConditions",slideDelay:""},{name:"severeCity8Slides",slideDelay:""},{name:"severeLocalDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"severeRegionalSatellite",slideDelay:""}},{name:"severeDayDesc",slideDelay:""},{name:"severeExtendedForecast",slideDelay:""},{name:"severeAlmanac",slideDelay:""}]},
  {type:"severe-cities",repeat:true,locidx:0,slideDelay:10000,slideOrder:[{name:"severeCurrentConditions",slideDelay:""},{name:"severeLocalDoppler",slideDelay:"",testDisplay:'return (Math.random() > 0.5) ? true : false',alternate:{name:"severeRegionalSatellite",slideDelay:""}},{name:"severeDayPart",slideDelay:""},{name:"severeExtendedForecast",slideDelay:""}]}
]}
var audioSettings = {
  enableMusic: true, //Something is wrong if you set this to false.
  order: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], //The order the music will play. To include or exclude tracks add or remove their number to the order. Default is 1-33. 34-46 are known 2003 tracks excluding duplicates with 2007. 47-51 are known 2006 tracks excluding duplicates with 2007 and 2003. 52-53 are other weatherscan tracks from unknown year. 54-66 is Trammel Starks 1 not used in any other section. 67-76 is Trammel Starks 2 excluding duplicates. 77-83 is Trammel Starks 3 excluding duplicates.
  shuffle: false, //Shuffle audio. Default is false.
  randomStart: true, //Starts the order from a random spot. Default is true.
  enableNarrations: true, //Play narrations. Default is true.
  narrationType: 'female',//allen or female. Default is female.
}
var locationSettings = {
  mainLocation:{
    displayName:"",//Name that will show up on the sim.
    searchQuery:{ //Type and val are required fields for search to work. Will be overridden if location is given in URL.
      type:"",//Leave type blank to use automatic search. "geocode", "state", "district", "city", "locality", "neighborhood", "postal" (zipcode), "address", "poi", "pws" (personal weatherstation) //If geocode is used all otherfields but val will be ignored.
      fuzzy:true, //Attempt approximate search.
      country:"US", //Two letter country code. //Recommend using "US".
      state:"", //Two letter state code.
      val:"", //for geocode "lat,lon"
      searchResultNum:2,//Defaults to 0. Use if the first result for a particular location sucks.
    }
  },
  extraLocations: {
    useAutoLocations: true, //Will add automatically searched locations to the list.
    maxLocations: 4, //Will limit amount of locations that appear on sim. Default is 3.
    locationOrderNum:[5,4,3,9], //Ordernum for automatically generated locations. Lower number will be placed closer to the front.
    locs:[
    {
      displayName:'',
      orderNum:2,
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"US",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      orderNum:3,
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"US",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      orderNum:3,
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"US",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
  ]},
  aroundCityInfoLocs: {
    useAutoLocations: true, //Will add automatically searched locations to the list.
    maxLocations: 8, //Will limit amount of locations that appear on sim. Default is 8. Hard Limit is 8.
    locationOrderNum:[5,4,3], //Ordernum for automatically generated locations. Lower number will be placed closer to the front.
    locs:[//Cities for the nearby cities slide
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
  ]},
  marqueeCities: [// Cities for the ccticker.
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
    {
      displayName:"",
      searchQuery:{
        type:"",
        fuzzy:true,
        country:"",
        state:"",
        val:"",
        searchResultNum:"",
      }
    },
  ],//to be functional in a future update
  airportLocations:[//For main airports slide.
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
  ],
  otherAirportLocations:[//For other airports slide.
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
    {
      displayName:"",
      iataCode:"",
    },
  ]
}
//var mapSettings = {}
//to be functional in a future update
//This section will deal with all weather variables. Blank fields will use API data. You can update this via console and data will be refreshed on a set time.
var weatherInfoSettings = {
  currentCond: {
    sidebar: {
      noReport:false, //If true, shows no report.
      displayname:"", //Ove
      temp:"", //
      cond:"",
      icon:"",
      humid:"",
      dewpt:"",
      pressure:"",
      wind:"",
      windspeed:"",
      gust:"",
      feelslike: {type:"",val:""},
      visibility:"",
      uvidx:"",
      ceiling:""
    },
    //loc:{noReport:"",displayname:"",temp:"",cond:"",icon:"",humid:"",dewpt:"",pressure:"",pressureTrend:"",wind:"",windspeed:"",gust:"",feelslike:{type:"",val:""},},
    weatherLocs:[

    ],
  //cityLoc:{noReport:false,displayname:"",temp:"",icon:"",wind:"",windspeed:""}
  city8slides:{noReport:false, cities:[]},
}, dayPart: {
  lowerbar:{noReport:false,displayname:"",daytitle:"",hour:[{time:"",cond:"",icon:"",temp:"",wind:"",windspeed:""},{time:"",cond:"",icon:"",temp:"",wind:"",windspeed:""},{time:"",cond:"",icon:"",temp:"",wind:"",windspeed:""},{time:"",cond:"",icon:"",temp:"",wind:"",windspeed:""},]},
  /*loc:{noReport:"",displayname:"",daytitle:"",hour:[
    {time:"",cond:"",icon:"",temp:"",wind:"",windspeed:""},
    {time:"",cond:"",icon:"",temp:"",wind:"",windspeed:""},
    {time:"",cond:"",icon:"",temp:"",wind:"",windspeed:""},
    {time:"",cond:"",icon:"",temp:"",wind:"",windspeed:""},
  ]},*/
  weatherLocs:[],
}, dayDesc: {
  lowerbar: {noReport:false,displayname:"",day:[{name:"",desc:""},{name:"",desc:""},{name:"",desc:""},{name:"",desc:""}]},
  /*loc:{noReport:"",displayname:"",day:[
    {name:"",desc:""},
    {name:"",desc:""},
    {name:"",desc:""},
    {name:"",desc:""}
  ]},*/
  weatherLocs:[]
}, fiveDay: {
    lowerbar: {noReport:false,displayname:"",day:[{name:"",cond:"",icon:"",high:"",low:"",windspeed:"",weekend:""},{name:"",cond:"",icon:"",high:"",low:"",windspeed:"",weekend:""},{name:"",cond:"",icon:"",high:"",low:"",windspeed:"",weekend:""},{name:"",cond:"",icon:"",high:"",low:"",windspeed:"",weekend:""},{name:"",cond:"",icon:"",high:"",low:"",windspeed:"",weekend:""}]},
    /*loc:{noReport:"",displayname:"",day:[
      {name:"",cond:"",icon:"",high:"",low:"",windspeed:""},
      {name:"",cond:"",icon:"",high:"",low:"",windspeed:""},
      {name:"",cond:"",icon:"",high:"",low:"",windspeed:""},
      {name:"",cond:"",icon:"",high:"",low:"",windspeed:""},
      {name:"",cond:"",icon:"",high:"",low:"",windspeed:""}
    ]},*/
    weatherLocs:[]
  }, almanac: {displayname:"",date:"",avghigh:"",avglow:"",rechigh:"",reclow:"",rechighyear:"",reclowyear:"",sunrise:"",sunset:"",moonphases:[
    {name:"NEW",date:"Feb 10"},
    {name:"FIRST",date:"Feb 16"},
    {name:"FULL",date:"Feb 21"},
    {name:"LAST",date:"Feb 27"},
  ]}, bulletin: {
    //loc:{displayname:"",pages:[]},
    includesevereonbulletin: false,
    weatherLocs:[],
    severewarnings:[],
    //{name:"", desc:"", status:""}

	//{name:"", desc:"", status:""}
    marqueewarnings:[],
    severeweathermode: false
    //{name:"", desc:"", status:"", significance:""}
  }, healthforecast: {noReport:false, displayname:"",dayidx:0, day:"", high:"", low:"", precipChance:"", humid:"", wind:"",windspeed:"", icon:""
  }, healthPollen: {noReport:false, displayname:"", total:"", totalcat:"", date:"", types:[
    {type:"tree", treetype:"", pollenidx:""},
    {type:"grass", pollenidx:""},
    {type:"weed", pollenidx:""},
    {type:"mold", pollenidx:""},
  ]}, healthAcheBreath: {noReport:false, date:"",achesindex:"",achescat:"",breathindex:"",breathcat:""
  },  airquality: {noReport:false, date:"",ozoneactin: false, primarypolute:"", airqualityindex:""
  },  uvindex: {noReport:false, currentuv:{index:"",desc:""},forecast:[
    {day:"",time:"",index:"",desc:""},
    {day:"",time:"",index:"",desc:""},
    {day:"",time:"",index:"",desc:""}
  ]}, airport: {noReport: false, mainairports:[
    {displayname:"",iata:"MIA",arrivals:{delay:"No Delay",reason:""},departures:{delay:"No Delay",reason:""},temp:"",cond:"",icon:"",windspeed:""},
    {displayname:"",iata:"MCO",arrivals:{delay:"No Delay",reason:""},departures:{delay:"No Delay",reason:""},temp:"",cond:"",icon:"",windspeed:""}
  ], delays: [],
    //{iato:"",type:"",amount:"",amountmin:"",reason:""}
   otherairports:[
    {displayname:"New York / LaGaurdia",iata:"LGA",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Chicago O'hare Int'l",iata:"ORD",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Los Angeles Int'l",iata:"LAX",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Atlanta International",iata:"LAX",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Dallas / Ft. Worth Int'l",iata:"DFW",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Denver International",iata:"DEN",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Boston / Logan Int'l",iata:"BOS",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Salt Lake City Int'l",iata:"SLC",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Miami International",iata:"MIA",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Phoenix / Sky Harbor",iata:"PHX",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Minneapolis - St. Paul",iata:"MSP",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Washington Dulles Int'l",iata:"IAD",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"San Francisco Int'l",iata:"SFO",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Philadelphia Int'l",iata:"PHL",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Seattle - Tacoma Int'l",iata:"SEA",delay:"No Delay",temp:"",icon:"",windspeed:""},
    {displayname:"Lambert - St. Louis Int'l",iata:"STL",delay:"No Delay",temp:"",icon:"",windspeed:""},
  ]},
  ccticker: {noReportCC:false,noReportFC:false,noReportAC:false,arrow:"",ccLocs:[],ccairportdelays:[]},
  radarTempUnavialable: false,
  radarWinterLegend: false,
  reboot: false,
  ad: "With Comcast Spotlight, utilize the impact of interactive advertising. Specifically target areas of New Jersey on TV with commercials on networks like ESPN and TNT - and on the internet at XFINITY.com and FoxNews.com. For your custom advertising solution, call 244-2122."
}
