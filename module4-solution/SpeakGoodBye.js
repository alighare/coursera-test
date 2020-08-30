// NOTE! The steps in this file are basically identical to the ones you    
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE    ---step 6 done
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach   ---step 7 done
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
 (function(window){
 	var byeSpeaker ={};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the     ---step 8 done
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
	byeSpeaker.speak= function (name) {
	  console.log(speakWord + " " + name);
}
	window.byeSpeaker=byeSpeaker;
 })(window);

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it      ---step 9 done
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
