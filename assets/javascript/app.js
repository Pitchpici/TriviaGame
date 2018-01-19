$(document).ready( function() { 

	var arrOfObjects = [
		{
			question: "What has a gravitational pull so strong that even light cannot escape it?",
			answer1: "Netflix",
			answer2: "Our Sun",
			answer3: "A Black Hole",
			answer4: "Love",
			correctAnswer: "A Black Hole",
			correctPic: "<img src='assets/images/avocado.jpg' alt='Black Hole Image Winner' >",
			incorrectPic: "<img src='assets/images/avocadoboo.jpg' alt='Black Hole Loser GIF' >",
		},

		{
			question: "How many moons does Jupiter have?",
			answer1: "As Many As He Can Afford",
			answer2: "189 Moons",
			answer3: "As Many As He Pleases",
			answer4: "67 Moons",
			correctAnswer: "67 Moons",
			correctPic: "<img src='assets/images/antarctica.jpg' alt='Jupiter Winner' > ",
			incorrectPic: "<img src='assets/images/antarcticaboo.jpg' alt='Jupiter Loser' >",
		},

		{
			question: "What is the coldest place in the universe?",
			answer1: "Your Ex's Heart. D'uh!",
			answer2: "The Boomerang Nebula",
			answer3: "New England in Winter",
			answer4: "The Grasshopper Nebula",
			correctAnswer: "The Boomerang Nebula",
			correctPic: "<img src='assets/images/avocado.jpg' alt='The Boomerang Image Winner' >",
			incorrectPic: "<img src='assets/images/avocadoboo.jpg' alt='The Boomerang Loser GIF' >",
		},	

		{
			question: "What is the most common type of star found in the Milky Way?",
			answer1: "Purple Midget Stars",
			answer2: "Communis Brilliantus Stars",
			answer3: "Red Dwarf Stars",
			answer4: "Habemus Luce Stars",
			correctAnswer: "Red Dwarf Stars",
			correctPic: "<img src='assets/images/avocado.jpg' alt='Red Dwarf Image Winner' >",
			incorrectPic: "<img src='assets/images/avocadoboo.jpg' alt='Red Dwarf Loser GIF' >",
		},	

		{
			question: "What is the closest star to the Sun?",
			answer1: "You are!",
			answer2: "Proxima Centauri",
			answer3: "M77",
			answer4: "Beyonce",
			correctAnswer: "Proxima Centauri",
			correctPic: "<img src='assets/images/avocado.jpg' alt='Proxima Centauri Image Winner' >",
			incorrectPic: "<img src='assets/images/avocadoboo.jpg' alt='Proxima Centauri Loser GIF' >",
		}	

	];

	var correctScore;
	var incorrectScore;
	var unansweredScore;
	var timeVar;
	var counter;
	var timer;
	var answered=0;

	$("#questionPop").hide();
	$("#result").hide();
	$("#gameOver").hide();

// function declarations:

	function startGame() {

			correctScore=0;
			incorrectScore=0;
			unansweredScore=0;
			counter=0

			$("#questionPop").show();
			
			timer=31;
			yourTimeisUp();

			display(0);
	}	


	function display(index) {

			$("#question").html(arrOfObjects[index].question);
			$("#b1").html(arrOfObjects[index].answer1);
			$("#b2").html(arrOfObjects[index].answer2);
			$("#b3").html(arrOfObjects[index].answer3);
			$("#b4").html(arrOfObjects[index].answer4);

	}


	function nextQuestion() {

			clearInterval(timeVar);

			$("#result").hide();
			$("#questionTimer").show();
			$("#questionPop").show();

			counter++;
			console.log("Up next is question number:" + counter);

			if (counter == (arrOfObjects.length)) gameOver();

			else {
					timer=31;
					yourTimeisUp()
					
					display(counter);
					
				}
	}


	function correct(index) {

			$("#questionPop").hide();
			$("#questionTimer").empty(); //!!!!!!! vs hide()
			$("#result").show();

			$("#displayMessage").html("Your answer is correct");
			$("#displayPic").html(arrOfObjects[index].correctPic);
			correctScore++;

	}


	function incorrect(index) {


			$("#questionPop").hide();
			$("#questionTimer").empty();
			$("#result").show();

			$("#displayMessage").html("Your answer is incorrect! The correct answer was: " + arrOfObjects[index].correctAnswer);
			$("#displayPic").html(arrOfObjects[index].incorrectPic);
			incorrectScore++;
	}


	function unanswered(index) {

			unansweredScore++;

			$("#questionPop").hide();
			$("#questionTimer").empty();
			$("#result").show();

			$("#displayMessage").html("Oops! You ran out of time! Wake up! The correct answer was: " + arrOfObjects[index].correctAnswer);

	}


	function gameOver() {

			$("#result").hide();
			$("#questionPop").hide();
			$("#questionTimer").empty();

					$("#correctAnswers").html("Correct Answers: " + correctScore);
					$("#incorrectAnswers").html("Incorrect Answers: " + incorrectScore);
					$("#unansweredQuestions").html("Unanswered questions:" + unansweredScore);
			
			$("#gameOver").show();

	}

	
	function yourTimeisUp () {
	
			timeVar=setInterval(timeHop, 1000);
	}


	function timeHop() {

			if (timer == 0) {
				clearInterval(timeVar);
				unanswered(counter);
				setTimeout(nextQuestion, 3000);
			}

			 else if (timer > 0) {
			 	timer--;
			 }

			$("#questionTimer").html("Time remaining: " + timer);
	}	


	// function emptyElements() {
	// 		$("#question").empty();
	// 		$("#b1").empty();
	// 		$("#b2").empty();
	// 		$("#b3").empty();
	// 		$("#b4").empty();
	// }



// Start Game

		$(".startButton").on("click", function(){
			$(this).hide();
			$("#gameOver").hide();
			$(".questionPop").show();
			$("#questionTimer").show();
			startGame();

		});

// Choose Answer

		$(".button").click(function() {

				answered=1;
				clearInterval(timeVar);

				if ( $(this).html() == arrOfObjects[counter].correctAnswer ) {

					$("#questionPop").hide();
					$("#result").show();

					correct(counter);
					setTimeout(nextQuestion, 3000);
					
				}

				else { 

					$("#questionPop").hide();
					$("#result").show();

					incorrect(counter);
					setTimeout(nextQuestion, 3000);

				}


		});	


	}); //document ready function closing
			