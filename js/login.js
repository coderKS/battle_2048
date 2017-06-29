var vid = document.getElementById("bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

$(document).ready(function(){
	$(".spectateButton").click(function(){
		var name1 = $("#player1-name").val();
		var name2 = $("#player2-name").val();
		var valid = true;
		if(name1 == null || name1 == '' || !isValid(name1)){
			$("#player1-name").addClass("red-line");
			$(".player1-menu .input-warning").removeClass("hide-text");
			valid = false;
		} else {
			$("#player1-name").removeClass("red-line");
			$(".player1-menu .input-warning").addClass("hide-text");
		}
		
		if(name2 == null || name2 == '' || !isValid(name2)){
			$("#player2-name").addClass("red-line");
			$(".player2-menu .input-warning").removeClass("hide-text");
			valid = false;
		} else {
			$("#player2-name").removeClass("red-line");
			$(".player2-menu .input-warning").addClass("hide-text");
		}

		if(valid){
			console.log("Valid!");
			window.location.replace("./selectCharacter.html" + "?player1="+name1+"&player2="+name2);
		}
	});
});

function isValid(str){
 	return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}