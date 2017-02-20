var http = require('http');
var url = require('url');
var calendar = require('./calendar');
var portNumber = 3000;

var server = http.createServer(function(request,response){
    response.setHeader('Content-Type', 'application/json');
    var calendarType = typeof calendar;
    var givenUrl = request.url.slice(1);
    var dateInfo = givenUrl.split("-");
    var month = parseInt(dateInfo[0]);
    var date = parseInt(dateInfo[1]);
    var holidayInfo = {
      isAHoliday: true,
      holidayText: ""
    };
    if (!calendar[month]){
      response.end("not a valid month.");
    } else if (!calendar[month][date]){
      response.end("not a valid date.");
    } else {
      if (calendar[month][date] == "not a holiday"){
        holidayInfo.isAHoliday = false;
      }
      holidayInfo.holidayText = calendar[month][date];
    }

    holidayInfo = JSON.stringify(holidayInfo);
    response.end(holidayInfo);
}).listen(portNumber);

console.log("Listening on port " + portNumber);
