$(document).ready( function() { 

	var arrOfObjects = [
		{
			question: "What has a gravitational pull so strong that even light cannot escape it?",
			answer1: "Netflix",
			answer2: "Our Sun",
			answer3: "A Black Hole",
			answer4: "Love",
			correctAnswer: "A Black Hole",
			correctPic: "assets/images/blackhole1.jpg",
			correctPicAlt: "Black Hole Image Winner",
			incorrectPic: "assets/images/blackhole2.jpg",
			incorrectPicAlt: "Black Hole Loser GIF"
		},

		{
			question: "How many moons does Jupiter have?",
			answer1: "As Many As He Can Afford",
			answer2: "189 Moons",
			answer3: "As Many As He Pleases",
			answer4: "67 Moons",
			correctAnswer: "67 Moons",
			correctPic: "assets/images/jupitermoons1.png",
			correctPicAlt: "Jupiter Winner",
			incorrectPic: "assets/images/jupitermoons2.jpg",
			incorrectPicAlt: "Jupiter Loser"
		},

		{
			question: "What is the coldest place in the universe?",
			answer1: "Your Ex's Heart. D'uh!",
			answer2: "The Boomerang Nebula",
			answer3: "New England in Winter",
			answer4: "The Grasshopper Nebula",
			correctAnswer: "The Boomerang Nebula",
			correctPic: "assets/images/boomerangnebula3.jpg",
			correctPicAlt: "The Boomerang Image Winner",
			incorrectPic: "assets/images/boomerangnebula4.jpg",
			incorrectPicAlt: "The Boomerang Loser Image"
		},	

		{
			question: "What is the most common type of star found in the Milky Way?",
			answer1: "Purple Midget Stars",
			answer2: "Communis Brilliantus Stars",
			answer3: "Red Dwarf Stars",
			answer4: "Habemus Luce Stars",
			correctAnswer: "Red Dwarf Stars",
			correctPic: "assets/images/reddwarf1.jpg",
			correctPicAlt: "Red Dwarf Image Winner",
			incorrectPic: "assets/images/reddwarf2.jpg",
			incorrectPicAlt: "Red Dwarf Loser GIF"
		},	

		{
			question: "What is the closest star to the Sun?",
			answer1: "You are!",
			answer2: "Proxima Centauri",
			answer3: "M77",
			answer4: "Beyonce",
			correctAnswer: "Proxima Centauri",
			correctPic: "assets/images/proxima1.png",
			correctPicAlt: "Proxima Centauri Image Winner",
			incorrectPic: "assets/images/proxima2.png",
			incorrectPicAlt: "Proxima Centauri Loser Image"
		}	

	];

	var correctScore;
	var incorrectScore;
	var unansweredScore;
	var timeVar;
	var counter;
	var timer;

	$("#questionPop").hide();
	$("#result").hide();
	$("#gameOver").hide();

// function declarations:

	function countdown() {
	
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

			$("#questionTimer").text("Time remaining: " + timer);
			$(".timerbox").show();
	}	


	function startGame() {

			correctScore=0;
			incorrectScore=0;
			unansweredScore=0;
			counter=0

			$("#questionPop").show();
			
			timer=31;

			timeHop();

			countdown();

			display(0);
	}	


	function display(index) {

			$("#question").text(arrOfObjects[index].question);
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
					timeHop();
					countdown()
					
					display(counter);
					
				}
	}


	function correct(index) {

			$("#questionPop").hide();
			$("#questionTimer").empty(); //!!!!!!! vs hide()
			$("#result").show();

			$("#displayMessage").text("Your answer is correct");
			$("#displayPic").attr("src", arrOfObjects[index].correctPic).attr("alt", arrOfObjects[index].correctPicAlt);
			correctScore++;

	}


	function incorrect(index) {


			$("#questionPop").hide();
			$("#questionTimer").empty();
			$("#result").show();

			$("#displayMessage").text("Your answer is incorrect! The correct answer is: " + arrOfObjects[index].correctAnswer);
			$("#displayPic").attr("src", arrOfObjects[index].incorrectPic).attr("alt", arrOfObjects[index].incorrectPicAlt);
			incorrectScore++;
	}


	function unanswered(index) {

			unansweredScore++;

			$("#questionPop").hide();
			$("#questionTimer").empty();
			$("#result").show();

			$("#displayMessage").text("Oops! You ran out of time! Wake up! The correct answer is: " + arrOfObjects[index].correctAnswer);
			$("#displayPic").attr("src", arrOfObjects[index].incorrectPic).attr("alt", arrOfObjects[index].incorrectPicAlt);
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


// Start Game

		$(".startButton").on("click", function(){
			$(this).hide();
			$("#gameOver").hide();
			$("#questionPop").show();
			$("#questionTimer").show();
			startGame();

		});

// Choose Answer

		$(".button").click(function() {

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
			