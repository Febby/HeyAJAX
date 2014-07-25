
var local = $('.local-time');
var result = $('.results');
var url = "http://echo.jsontest.com/hello/world";

//Get Current Time
var getNow = function(){

	//moment.js
	var result = moment().format('YYYY-MM-DD | HH:MM:ss:SS');

	return result;
};

//Displays current time in DOM
var localClock = function (){
	local.text(getNow());
	//set Timeout 

	t = setTimeout(function(){
		localClock();},500);
};

//AJAX Call

var asyncDemo = function(url){
	$.ajax({
		url: url ,
		type: 'GET',
		beforeSend: function(){
			result.append('<p> Request sent at: ' + getNow() + '</p>');
		}
	})
	.done(function(data) {
		console.log("success");
		result.append('<p> Response at: ' + getNow() + '</p>');
		result.append('<p> Response object <em>hello</em> is: <b> ' + data.hello + '</b></p><hr>');
	})
	.fail(function() {
		console.log("error");
	})
	// .always(function() {
	// 	console.log("complete");
	// });
	
};

//Call asyncDemo and autoupdate localClock

$(document).ready(function(){
	localClock();
	asyncDemo(url);

});