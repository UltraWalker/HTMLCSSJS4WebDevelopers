(function (window) {

	var helloSpeaker = {};

	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
	  var the_text = speakWord + " " + name;
	  console.log(the_text);
	}

	window.helloSpeaker = helloSpeaker

})(window);