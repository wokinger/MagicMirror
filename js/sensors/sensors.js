var sensors = {
	sensorsLocation: '.sensors',
	updateInterval: 1000,
	intervalId: null
};

/**
 * Updates the time that is shown on the screen
 */
sensors.updateSensors = function () {

	var sensorData = "hello data";
	
    
	$(this.sensorsLocation).html(sensorData);
}

sensors.init = function () {	
	this.intervalId = setInterval(function () {
		this.updateSensors();
	}.bind(this), this.updateInterval);

}