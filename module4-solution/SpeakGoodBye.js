(function (window) {

	var byeSpeaker = {};

	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
	  var the_text = speakWord + " " + name;
	  console.log(the_text);
	}

	window.byeSpeaker = byeSpeaker;

})(window);