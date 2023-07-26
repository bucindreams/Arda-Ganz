//By Arda Ganz
try{
$(document).ready(function() {
$.getJSON('http://ip-api.com/json', function (data) {
$('#status').text(data.status);
$('#country').text(data. country);
$('#countryCode').text(data. countryCode);
$('#region').text(data. region);
$('#regionName').text(data. regionName);
$('#city').text(data. city);
$('#zip').text(data. zip);
$('#latitude').text(data. lat);
$('#longitude').text(data. lon);
$('#timezone').text(data. timezone);
$('#isp').text(data. isp);
$('#org').text(data. org);
$('#as').text(data. as);
$('#ip-address').text(data. query);
});
});
}catch(e){console.log(e);
alert("Maaf ada kesalahan dalam mengakses informasi");}






