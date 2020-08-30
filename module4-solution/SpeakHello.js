 // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE        ---step 2done
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach    ---step 3 done
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
(function(window){
	var helloSpeaker ={};

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the        ---step 4 done
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
	helloSpeaker.speak= function (name) {
  		console.log(speakWord + " " + name);
}
	window.helloSpeaker=helloSpeaker;
})(window);

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it       ---step 5 done
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
