// Wait till the browser is ready to render the game (avoids glitches)
$(document).ready(function(){
	$(".game-container .game-message-player1").addClass("game-pause");
	$(".game-container .game-message-player1 p").html("");
    $(".game-container .game-message-player1 .lower").hide();

    $(".game-container .game-message-player2").addClass("game-pause");
	$(".game-container .game-message-player2 p").html("");
    $(".game-container .game-message-player2 .lower").hide();

    $(".restart-button").click(function(){
    	clearScreen();
    	window.requestAnimationFrame(function () {
		  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager, TimerManager, "player2");
		});
		window.requestAnimationFrame(function () {
		  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager, TimerManager, "player1");
		});

    });
});

function clearScreen(){
	$(".game-container .game-message-player1").removeClass("game-pause");
	$(".game-container .game-message-player1 p").html("");
    $(".game-container .game-message-player1 .lower").show();

    $(".game-container .game-message-player2").removeClass("game-pause");
	$(".game-container .game-message-player2 p").html("");
    $(".game-container .game-message-player2 .lower").show();

    $(".restart-button").hide();
}