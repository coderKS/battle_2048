function TimerManager(GameManager){
	this.gameManager = GameManager;
	this.initTime = new Date();
	this.gameMinute = 1;
	this.initTime.setMinutes(this.initTime.getMinutes()+this.gameMinute);
}

TimerManager.prototype.reset = function(){
	this.initTime = new Date();
	this.initTime.setMinutes(this.initTime.getMinutes()+this.gameMinute);
}

TimerManager.prototype.startCount = function() {
	var self = this;
	var countDownInterval = setInterval(function() {
		self.makeTimer();
		var endTime = (Date.parse(self.initTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		if(timeLeft == 0){
			this.gameManager.over = true;
		}
	},1000);
	

}

TimerManager.prototype.makeTimer = function() {
	var endTime = (Date.parse(this.initTime)) / 1000;
	var now = new Date();
	var now = (Date.parse(now) / 1000);
	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#days").html(days + "<span>Days</span>");
	$("#hours").html(hours + "<span>Hours</span>");
	$("#minutes").html(minutes + "<span>Minutes</span>");
	$("#seconds").html(seconds + "<span>Seconds</span>");		
}

