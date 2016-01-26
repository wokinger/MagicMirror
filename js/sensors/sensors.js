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
	var filePath = "./test.txt";
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", filePath, true);
    
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
    
    //sensorData = String(xhr.reponseText);    
    //console.log(sensorData);
    
	$(this.sensorsLocation).html(sensorData);
}

sensors.init = function () {	
	this.intervalId = setInterval(function () {
		this.updateSensors();
	}.bind(this), this.updateInterval);

}