var CONSTANTS = {
	FT : (1000*60*14), //FourTeen minutes
	N : (1000*60*90) //Ninety minutes
}

//converts the time to a human readable format
function formatToHuman(date){
	var hours = date.getHours(),
			mins	= date.getMinutes();
			if(mins < 10){
				mins = '0' + mins //stringyfy.
			}
	return hours + ':' +mins;
}

//converts the time to a date format
function formatToDate(hours, mins, ampm){
	var today = new Date(),
			day = today.getDate(),
			month = today.getMonth()+1,
			year = today.getFullYear();

	return new Date(month + ' ' + day + ' '+ year + ' ' + hours + ':' + mins + ' '+ ampm);

}


//returns an array of waking times if you sleep at a certain time.
function wakeUpTimes(bedtime){
	//+operator converts date time object into miliseconds.
	//we then add 14 minutes to that to account for 'falling asleep'
	bedtime = +bedtime + CONSTANTS.FT;

	var waketimes = [];

	for(var i = 0; i < 6; i++){
		//calculating wake times!
		//we take bed times and add 90 minute cycles to it
		waketimes.push(new Date(bedtime + (CONSTANTS.N * (i+1)));
	}
	return waketimes;
}

