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
	var andy  = getParam("andy");
	var unlock_chris = false;
	var unlock_billy = false;
	var unlock_andy = false;

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
	if(andy == "1"){
		unlock_andy = true;
	}

	if(unlock_chris){
		unlockCharactor("chris");
	}
	if(unlock_billy){
		unlockCharactor("billy");
	}
	if(unlock_andy){
		unlockCharactor("andy");
	}

	if(unlock_chris && unlock_billy && unlock_andy){
		$("#page-title").hide();
		$("#jobs-button").removeClass("hide-text");
		$("#jobs-button").click(function(){
			window.open("./jobs.html");
		})
	}
	$(".backButton").click(function(){
		window.location.replace("./login.html");
	});
	$(".spectateButton").click(function(){
		var p1_option = $("#player1-option input:checked").attr("id");
		var p2_option = $("#player2-option input:checked").attr("id");
		var valid = true;
		$(".player1-menu .input-warning").addClass("hide-text");
		$(".player2-menu .input-warning").addClass("hide-text");
		if(p1_option == "img-1-7"  && !unlock_chris){
			// warning here
			valid = false;
			$(".player1-menu .input-warning").removeClass("hide-text");
		} 
		if(p2_option == "img-2-7"  && !unlock_chris){
			// warning here
			valid = false;
			$(".player2-menu .input-warning").removeClass("hide-text");
		} 
		if(p1_option == "img-1-8" && !unlock_billy){
			// warning here
			valid = false;
			$(".player1-menu .input-warning").removeClass("hide-text");
		} 
		if(p2_option == "img-2-8" && !unlock_billy){
			// warning here
			valid = false;
			$(".player2-menu .input-warning").removeClass("hide-text");
		} 
		if(p1_option == "img-1-9" && !unlock_andy){
			// warning here
			valid = false;
			$(".player1-menu .input-warning").removeClass("hide-text");
		} 
		if(p2_option == "img-2-9" && !unlock_andy){
			// warning here
			valid = false;
			$(".player2-menu .input-warning").removeClass("hide-text");
		}
		if(valid){
			window.location.replace("./index.html" + "?player1="+name1+"&player2="+name2+"&char1="+p1_option+"&char2="+p2_option);
		}
		
	});
});