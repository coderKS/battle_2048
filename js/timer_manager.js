function TimerManager(GameManager){
	this.gameManager = GameManager;
	this.initTime = new Date();
	this.gameMinute = 1;
	this.initTime.setMinutes(this.initTime.getMinutes()+this.gameMinute);
	// this.initTime.setSeconds(this.initTime.getSeconds()+10);
	this.isTimeEnded = false;
}

TimerManager.prototype.reset = function(){
	this.initTime = new Date();
	this.initTime.setMinutes(this.initTime.getMinutes()+this.gameMinute);
	if(this.bg_player){
		this.bg_player.pause();
	}
	if(this.countdown_player){
		this.countdown_player.pause();
	}
	if(this.countDownInterval){
		clearInterval(this.countDownInterval);
	}
}

TimerManager.prototype.startCount = function() {

	var self = this;
	self.countDownInterval = setInterval(function() {
		self.makeTimer();
		var endTime = (Date.parse(self.initTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var score1 = -1;
		var score2 = -1;
		if(timeLeft == 10 && self.gameManager.player == "player1"){
			console.log("countdown starts");
			if(self.bg_player){
				console.log("stop bg_player");
				self.bg_player.pause();
			}
			self.countdown_player = new Audio('sound/countdown.mp3');
			self.countdown_player.play(); // play count down sound
		}
		if(timeLeft == 0){
			console.log(self.gameManager);
			self.gameManager.over = true;
			if(self.gameManager.player == "player1"){
				// console.log("player1 score=["+self.gameManager.score+"]");
				score1 = self.gameManager.score;
				var clone = $('.score-container-player2').clone();
				clone.find('div').remove();
				score2 = clone.html();
				// console.log("player2 score=["+score2+"]");
			} else if(self.gameManager.player == "player2"){
				// console.log("player2 score=["+self.gameManager.score+"]");
				score1 = self.gameManager.score;
				var clone = $('.score-container-player1').clone();
				clone.find('div').remove();
				score2 = clone.html();
				// console.log("player1 score=["+score2+"]");
			}
			if(score2 > score1){
				self.gameManager.actuator.message(false); // You lose
			} else {
				self.gameManager.actuator.message(true); // You win!
			} 
			self.isTimeEnded = true;
			clearInterval(self.countDownInterval);
		}
	},1000);
	if(this.gameManager.player == "player1"){
		this.bg_player = new Audio('sound/bg-music.mp3');
		this.bg_player.play();
	}
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

