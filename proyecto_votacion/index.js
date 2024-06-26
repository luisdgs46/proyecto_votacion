class Question {
    constructor(question, options, correctAnswer, userAnswer) {
      this.question = question;
      this.options = options;
      this.correctAnswer = correctAnswer;
      this.userAnswer = userAnswer;
    }
  
    isCorrectAnswer() {
      return this.userAnswer === this.correctAnswer;
    }
  }
  class Quiz {
    constructor(questions) {
      this.questions = questions;
    }
  
    askQuestions() {
      this.questions.forEach((question) => {
        console.log(question.question);
        const userAnswer = question.userAnswer;
        if (question.isCorrectAnswer()) {
          console.log("¡Correcto!");
        } else {
          console.log(`Incorrecto. La respuesta correcta es ${question.correctAnswer}`);
        }
      });
    }
  }
  const askQuestions = [
    new Question("¿Cuál es el fruto del Manzano?", ["Manzana", "Pera", "frutilla"], "Manzana", "Manzana"),
    new Question("¿Cuál es el fruto del moral?", ["Mora", "Frambuesa", "Higos"], "Mora", "Mora"),
    new Question("¿Cuál es el fruto de la Higuera?", ["Higos", "Piña", "Melones"], "Higos", "Higos"),
    new Question("¿Cuál es el auto mas veloz?", ["Deportivo", "camioneta", "City car"], "Deportivo", "Deportivo"),
    new Question("¿Cuál es el mejor jugador de football en Chile?", ["Alexis", "Zamorano", "Salas"], "Alexis", "Alexis"),
    new Question("¿Cuál es el mejor conductor?", ["Toretto", "O' conner", "Roman"], "Toretto", "Toretto"),
    new Question("¿Cuál es el mejor jugador de football del mundo?", ["Pele", "Maradona", "Cristiano"], "Pele", "Pele"),
    new Question("¿Cuál es la mejor fruta?", ["Sandia", "Piña", "Melon"], "Sandia", "Sandia"),
  ];
  
  const quiz = new Quiz(questions);
  quiz.askQuestions();
  const questions = [
    {
      question: "¿Cuál es el fruto del Manzano?",
      options: ["Manzana", "Pera", "Frutilla"],
      correctAnswer: "Manzana",
      userAnswer: "Manzana" // Respuesta correcta
    },
    {
      question: "¿Cuál es el fruto del moral?",
      options: ["Mora", "Frambuesa", "Higos"],
      correctAnswer: "Mora",
      userAnswer: "Frambuesa", "Higos" : any// Respuesta incorrecta
    },
    {
      question: "¿Cuál es fruto de la Higuera?",
      options: ["Higos", "Piña", "Melones"],
      correctAnswer: "Melones",
      userAnswer: "Melones" // Respuesta correcta
    },
    {
      question: "¿Cuál es el auto mas veloz?",
      options: ["Deportivo", "Camioneta", "City car"],
      correctAnswer: "Deportivo",
      userAnswer: "Camioneta", "City car" : any // Respuesta incorrecta
    },
    {
      question: "¿Cuál es el mejor jugador de football en Chile?",
      options: ["Alexis", "Zamorano", "Salas"],
      correctAnswer: "Alexis",
      userAnswer: "Alexis" // Respuesta correcta
    },
    {
      question: "¿Cuál es el mejor conductor?",
      options: ["Toretto", "O' conner", "Roman"],
      correctAnswer: "Toretto",
      userAnswer: "O' conner", "Roman" : any // Respuesta incorrecta
    },
    {
      question: "¿Cuál es el mejor jugador de football del mundo ?",
      options: ["Pele", "Maradona", "Cristiano"],
      correctAnswer: "Pele",
      userAnswer: "Pele" // Respuesta correcta
    },
    {
      question: "¿Cuál es la mejor fruta?",
      options: ["Sandia", "Piña", "Melon"],
      correctAnswer: "Sandia",
      userAnswer: "Piña", "Melon" : any// Respuesta incorrecta
    }
  ];