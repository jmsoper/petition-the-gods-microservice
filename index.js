var http = require('http');
var url = require('url');
var calendar = require('./calendar');
var portNumber = 3000;

var server = http.createServer(function(request,response){
    var givenUrl = request.url.slice(1);
    var dateInfo = givenUrl.split("-");
    var month = dateInfo[0];
    var date = dateInfo[1];
    // var holiday = calendar[month][date];
    // var holidayText;
    // if (calendar[month][date] != ""){
    //   holidayText = calendar[month][date];
    // } else {
    //   holidayText = "no holiday today.";
    // //   while (calendar[month][date].length == 0){
    // //     if (date < calendar[month].length - 1){
    // //       date += 1;
    // //     } else if (month < 11){
    // //       month += 1;
    // //     } else {
    // //       month = 1;
    // //     }
    // //   }
    // //   holidayText = calendar[month][date];
    // }

    response.end(dateInfo.toString());
}).listen(portNumber);
