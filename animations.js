$(document).ready(function(){
	var $wakeupat = $('#wakeupat'),
			$sleepat 	= $('#sleepat'),
			$sleepnow = $('#sleepnow');

			console.log($wakeupat, $sleepat, $sleepnow);


	var bindEventTo = function ($element){
		$element.click(function (event) {

			// //close all open tabs
			// var $opened = $('.active');
			// $opened
			// 	.removeClass('active')
			// 	.find('.fadeable')
			// 	.fadeTo(500, 0, function(){
			// 		$opened.animate({
			// 			height:'100px'
			// 		}, 300, function(){
			// 			console.log('replaces');
			// 			bindEventTo($opened);
			// 		});
			// });

			//add the active class and remove the click event
			$element.addClass('active');
			$element.unbind('click');

			//animate the opening
			$element.animate({
				height: '300px'
			}, 300, function(){
				$element
					.find('.invisible')
					.removeClass('invisible')
					.fadeTo(500, 1);
			});
		});
	}
var inject = function(){

		var toinject = '<select id="w-hours">'
					+'<option>1</option>'
					+'<option>2</option>'
					+'<option>3</option>'
					+'<option>4</option>'
					+'<option>5</option>'
					+'<option>6</option>'
					+'<option>7</option>'
					+'<option>8</option>'
					+'<option>9</option>'
					+'<option>10</option>'
					+'<option>11</option>'
					+'<option>12</option>'
					+'</select> '
					+'<select id="w-min">'
					+'<option>00</option>'
					+'<option>05</option>'
					+'<option>10</option>'
					+'<option>15</option>'
					+'<option>20</option>'
					+'<option>25</option>'
					+'<option>30</option>'
					+'<option>35</option>'
					+'<option>40</option>'
					+'<option>45</option>'
					+'<option>50</option>'
					+'<option>55</option>'
					+'</select> '
					+'<select id="w-AMPM">'
					+'<option>AM</option>'
					+'<option>PM</option>'
					+'</select>';
	$('.injected').html(toinject);
	}
	bindEventTo($wakeupat);
	bindEventTo($sleepat);
	bindEventTo($sleepnow);
	inject();
	
});