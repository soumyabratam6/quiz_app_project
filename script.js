document.addEventListener("DOMContentLoaded", function () {
  let quizData = {
    sections: [
      {
        sectionTitle: "General Knowledge",
        questions: [
          {
            questionType: "mcq",
            question: "What is the tallest mountain in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            answer: "Mount Everest",
          },
          {
            questionType: "text",
            question: "What is the capital of Italy?",
            answer: "Rome",
          },
          {
            questionType: "number",
            question: "How many continents are there?",
            answer: 7,
          },
          {
            questionType: "mcq",
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            answer: "Pacific",
          },
          {
            questionType: "text",
            question: "Who wrote 'Romeo and Juliet'?",
            answer: "William Shakespeare",
          },
          {
            questionType: "number",
            question: "In what year did the Titanic sink?",
            answer: 1912,
          },
          {
            questionType: "mcq",
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
            answer: "Vatican City",
          },
          {
            questionType: "text",
            question: "What is the longest river in the world?",
            answer: "Nile",
          },
          {
            questionType: "number",
            question: "How many planets are in the Solar System?",
            answer: 8,
          },
          {
            questionType: "mcq",
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "South Korea", "Thailand"],
            answer: "Japan",
          },
        ],
      },
      {
        sectionTitle: "Science",
        questions: [
          {
            questionType: "mcq",
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
          },
          {
            questionType: "text",
            question: "What force keeps us on the ground?",
            answer: "Gravity",
          },
          {
            questionType: "number",
            question: "At what temperature (Celsius) does water boil?",
            answer: 100,
          },
          {
            questionType: "mcq",
            question: "What is the hardest natural substance on Earth?",
            options: ["Iron", "Diamond", "Quartz", "Granite"],
            answer: "Diamond",
          },
          {
            questionType: "text",
            question: "What is the largest planet in our Solar System?",
            answer: "Jupiter",
          },
          {
            questionType: "number",
            question: "How many elements are in the periodic table?",
            answer: 118,
          },
          {
            questionType: "mcq",
            question: "What is the human body's largest organ?",
            options: ["Heart", "Skin", "Liver", "Brain"],
            answer: "Skin",
          },
          {
            questionType: "text",
            question: "What gas do plants absorb during photosynthesis?",
            answer: "Carbon Dioxide",
          },
          {
            questionType: "number",
            question: "How long does Earth take to orbit the Sun (in days)?",
            answer: 365,
          },
          {
            questionType: "mcq",
            question:
              "Which vitamin is produced when the skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: "Vitamin D",
          },
        ],
      },
      {
        sectionTitle: "Mathematics",
        questions: [
          {
            questionType: "mcq",
            question: "What is the value of Pi (approximate)?",
            options: ["2.14", "3.14", "4.14", "5.14"],
            answer: "3.14",
          },
          {
            questionType: "text",
            question: "What is the term for a shape with three sides?",
            answer: "Triangle",
          },
          {
            questionType: "number",
            question: "What is the square root of 64?",
            answer: 8,
          },
          {
            questionType: "mcq",
            question: "What is 50% of 200?",
            options: ["100", "150", "200", "250"],
            answer: "100",
          },
          {
            questionType: "text",
            question: "What is the next prime number after 7?",
            answer: "11",
          },
          {
            questionType: "number",
            question: "How many degrees are in a right angle?",
            answer: 90,
          },
          {
            questionType: "mcq",
            question: "What is the sum of angles in a triangle?",
            options: ["180", "360", "270", "90"],
            answer: "180",
          },
          {
            questionType: "text",
            question: "What is the term for a 10-sided polygon?",
            answer: "Decagon",
          },
          {
            questionType: "number",
            question:
              "If a rectangle has a width of 4cm and a length of 10cm, what is its area (in cm\u00b2)?",
            answer: 40,
          },
          {
            questionType: "mcq",
            question: "What is the value of 'x' in the equation 2x + 6 = 14?",
            options: ["2", "3", "4", "5"],
            answer: "4",
          },
        ],
      },
      {
        sectionTitle: "Indian History",
        questions: [
          {
            questionType: "mcq",
            question: "Who was the first Emperor of the Maurya Dynasty?",
            options: ["Ashoka", "Chandragupta Maurya", "Harsha", "Bindusara"],
            answer: "Chandragupta Maurya",
          },
          {
            questionType: "text",
            question: "What was the capital of the Mughal Empire?",
            answer: "Agra",
          },
          {
            questionType: "number",
            question: "In what year did India gain independence?",
            answer: 1947,
          },
          {
            questionType: "mcq",
            question: "Who was the founder of the Gupta Empire?",
            options: [
              "Samudragupta",
              "Chandragupta I",
              "Chandragupta II",
              "Kumaragupta",
            ],
            answer: "Chandragupta I",
          },
          {
            questionType: "text",
            question: "Which city was the capital of the Maratha Empire?",
            answer: "Pune",
          },
          {
            questionType: "number",
            question: "In what century did the Battle of Plassey take place?",
            answer: 18,
          },
          {
            questionType: "mcq",
            question: "Who was the first female ruler of Delhi Sultanate?",
            options: [
              "Razia Sultana",
              "Mumtaz Mahal",
              "Noor Jahan",
              "Jodha Bai",
            ],
            answer: "Razia Sultana",
          },
          {
            questionType: "text",
            question:
              "What was the main language of administration under the Mughal Empire?",
            answer: "Persian",
          },
          {
            questionType: "number",
            question: "How many years did the British Raj last in India?",
            answer: 90,
          },
          {
            questionType: "mcq",
            question:
              "Which year marked the start of the British East India Company's rule in India?",
            options: ["1600", "1757", "1858", "1947"],
            answer: "1757",
          },
        ],
      },
    ],
  };
  initSections();

  function initSections() {
    const sections = document.querySelectorAll(".section");
    //console.log(sections);
    sections.forEach((section) => {
      section.addEventListener("click", function () {
        const currentSection = parseInt(this.getAttribute("data-section"));
        //console.log(currentSection);
        startQuiz(currentSection);
      });
    });
  }

  function startQuiz(index) {
    let currentQuestions = quizData.sections[index].questions;
    //console.log(currentQuestions.length);
    let currentQuestionIndex = 0;
    let score = 0;
    let answerSelected = false;
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("question-container").innerHTML = `
        <p id="score">Score:0</p>
        <div id="question"></div>
        <div id="options"></div>
        <button id="next-button">Next</button>
      `;
    showQuestions();

    function showQuestions() {
      //document.getElementById("question").textContent = currentQuestions[currentQuestionIndex].question;
      const question = currentQuestions[currentQuestionIndex];
      //console.log(questions);
      const questionElements = document.getElementById("question");
      const optionsElements = document.getElementById("options");
      questionElements.textContent = question.question;
      optionsElements.innerHTML = "";
      if (question.questionType === "mcq") {
        question.options.forEach((option) => {
          //console.log(option);
          const optionElements = document.createElement("div");
          optionElements.textContent = option;
          optionElements.addEventListener("click", function () {
            if (!answerSelected) {
              answerSelected = true;
              optionElements.classList.add("selected");
              checkAnswer(option, question.answer);
            }
          });
          optionsElements.appendChild(optionElements);
        });
      } else {
        const inputElement = document.createElement("input");
        inputElement.type =
          question.questionType === "number" ? "number" : "text";
        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit Answer";
        submitButton.className = "submit-answer";

        submitButton.onclick = () => {
          if (!answerSelected) {
            answerSelected = true;
            checkAnswer(
              inputElement.value.toString(),
              question.answer.toString()
            );
          }
        };
        optionsElements.appendChild(inputElement);
        optionsElements.appendChild(submitButton);
      }
      function checkAnswer(givenAnswer, correctAnswer) {
        //console.log(option);
        const feedbackElement = document.createElement("div");
        feedbackElement.id = "feedback";
        if (
          givenAnswer === correctAnswer ||
          correctAnswer.toLowerCase() === givenAnswer.toLowerCase()
        ) {
          score++;
          feedbackElement.textContent = "correct!";
          feedbackElement.style.color = "green";
        } else {
          feedbackElement.textContent = `Wrong. Correct answer:${correctAnswer}`;
          feedbackElement.style.color = "red";
        }
        const optionsElement = document.getElementById("options");
        optionsElement.appendChild(feedbackElement);
        updateScore();
      }

      function updateScore() {
        document.getElementById("score").textContent = "Score:" + score;
      }
      // console.log(aas);
    }

    document.getElementById("next-button").addEventListener("click", () => {
      if (currentQuestionIndex == currentQuestions.length - 1) {
        endQuiz();
      } else {
        answerSelected = false;
        currentQuestionIndex++;
        showQuestions();
      }
    });

    function endQuiz() {
      let questionContainer = document.getElementById("question-container");
      let quizContainer = document.getElementById("quiz-container");
      questionContainer.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your final score:${score}/${currentQuestions.length}</p>
      <button id="home-button">Go to Home</button>
      `;

      document
        .getElementById("home-button")
        .addEventListener("click", function () {
          quizContainer.style.display = "grid";
          questionContainer.style.display = "none";
        });
    }
  }
});
