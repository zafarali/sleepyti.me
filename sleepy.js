var CONSTANTS = {
	MIN_14 : (1000*60*14),
	MIN_90 : (1000*60*90)
}


function format(date){
	var hours = date.getHours(),
			mins	= date.getMinutes();
			if(mins < 10){
				mins = '0' + mins //stringyfy.
			}
	return hours + ':' +mins;
}