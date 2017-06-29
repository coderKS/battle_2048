$(document).ready(function(){
	function getParam(player){
		var url = new URL(window.location.href);
		var c = url.searchParams.get(player);
		console.log("getPlayerName# c="+c);
		return c;
	}

	function unlockCharactor(name){
		$("img").each(function(){
			if($(this).attr("src") == "images/"+name+"_hidden.jpg"){
				$(this).attr("src", "images/"+name+".jpg");
			}
		});
	}
	
	var name1 = getParam("player1");
	var name2 = getParam("player2");
	var chris = getParam("chris");
	var billy = getParam("billy");
	var unlock_chris = false;
	var unlock_billy = false;

	if(name1 != null && name1 != ''){
		$(".player1-menu .player-name").html(name1);
	} 
	if(name2 != null && name2 != ''){
		$(".player2-menu .player-name").html(name2);
	}
	if(chris == "1"){
		unlock_chris = true;
	}
	if(billy == "1"){
		unlock_billy = true;
	}

	if(unlock_chris){
		unlockCharactor("chris");
	}
	if(unlock_billy){
		unlockCharactor("billy");
	}

	$(".spectateButton").click(function(){
		var p1_option = $("#player1-option input:checked").attr("id");
		var p2_option = $("#player2-option input:checked").attr("id");
		if(p1_option == "img-1-7"  && !unlock_chris){
			// warning here
			$(".player1-menu .input-warning").removeClass("hide-text");
			return;
		} 
		if(p2_option == "img-2-7"  && !unlock_chris){
			// warning here
			$(".player2-menu .input-warning").removeClass("hide-text");
			return;
		} 
		if(p1_option == "img-1-8" && !unlock_billy){
			// warning here
			$(".player1-menu .input-warning").removeClass("hide-text");
			return;
		} 
		if(p2_option == "img-2-8" && !unlock_billy){
			// warning here
			$(".player2-menu .input-warning").removeClass("hide-text");
			return;
		} 
		window.location.replace("./index.html" + "?player1="+name1+"&player2="+name2+"&char1="+p1_option+"&char2="+p2_option);
	});
});