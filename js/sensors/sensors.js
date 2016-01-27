var sensors = {
	sensorsLocation: '.sensors',
	updateInterval: 1000,
	intervalId: null,
	SensorData: null
	
};

/**
 * Updates the time that is shown on the screen
 */
sensors.updateSensors = function () {

	
	var filePath = "./test2.txt";
    var test;
    var cardRules = new Array();
    $.get('test2.txt', function(data){
            cardRules = data.split('\n');
            SensorData = cardRules;
            console.log(cardRules);
        });

//    $(this.sensorsLocation).html(SensorData[0]);
    $(this.sensorsLocation).html(SensorData.join("\n"));
	
}

sensors.init = function () {	
	this.intervalId = setInterval(function () {
		this.updateSensors();
	}.bind(this), this.updateInterval);

}