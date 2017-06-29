// Wait till the browser is ready to render the game (avoids glitches)
$(document).ready(function(){
	$(".game-container .game-message-player1").addClass("game-pause");
	$(".game-container .game-message-player1 p").html("");
  $(".game-container .game-message-player1 .lower").hide();

  $(".game-container .game-message-player2").addClass("game-pause");
	$(".game-container .game-message-player2 p").html("");
  $(".game-container .game-message-player2 .lower").hide();

  var name1 = getParam("player1");
  var name2 = getParam("player2");
  var opt1 = getParam("char1");
  var opt2 = getParam("char2");
 	setup(name1, name2, opt1, opt2);
  
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

function getParam(player){
	var url = new URL(window.location.href);
	var c = url.searchParams.get(player);
	// console.log("getPlayerName# c="+c);
	return c;
}

function getImgPath(player, opt){
	var img_path = '';
	switch(opt) {
    case "img-"+player+"-1":
    	img_path = 'images/ken.jpg';
      break;
    case "img-"+player+"-2":
    	img_path = 'images/eric.jpg';
      break;
    case "img-"+player+"-3":
    	img_path = 'images/sherry.jpg';
      break;
    case "img-"+player+"-4":
    	img_path = 'images/joyce.jpg';
      break;
    case "img-"+player+"-5":
    	img_path = 'images/janet.jpg';
      break;
    case "img-"+player+"-6":
    	img_path = 'images/dennis.jpg';
      break;
    case "img-"+player+"-7":
    	img_path = 'images/chris.jpg';
      break;
    case "img-"+player+"-8":
    	img_path = 'images/billy.jpg';
      break;
    default:
    	break;
	}
	return img_path;
}
function setup(name1, name2, opt1, opt2){
	var path1 = '';
  var path2 = '';
	if(name1 != null && name1 != ''){
  	setPlayerName("player1", name1);
  }
  if(name2 != null && name2 != ''){
  	setPlayerName("player2", name2);
  }
  path1 = getImgPath("1", opt1);
  if(path1 != ''){
  	console.log(path1);
  	setCharImg("player1", path1);
  }
  path2 = getImgPath("2", opt2);
  if(path2 != ''){
  	console.log(path2);
  	setCharImg("player2", path2);
  }
}

function setPlayerName(player, name){
	$("#"+player+"-name").html(name);
}

function setCharImg(player, imgPath){
	$("#" + player + "-img").html("");
	var content = '<img class="char-img" src="'+imgPath+'">';
	console.log(content);
	$("#" + player + "-img").append(content);
}

function clearScreen(){
	$(".game-container .game-message-player1").removeClass("game-pause");
	$(".game-container .game-message-player1 p").html("");
    $(".game-container .game-message-player1 .lower").show();

    $(".game-container .game-message-player2").removeClass("game-pause");
	$(".game-container .game-message-player2 p").html("");
    $(".game-container .game-message-player2 .lower").show();

    $(".restart-button").hide();
}