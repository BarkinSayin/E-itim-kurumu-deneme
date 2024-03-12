class Quiz{
    constructor(whichQuiz,numberOfQuestion,questions,answers){
      this.whichQuiz=whichQuiz;
      this.numberOfQuestion=numberOfQuestion;
      this.questions=questions;
      this.answers=answers;
    }
  }
  const mathQuiz=[
    new Quiz("1.Quiz",20,firstQuizQuestions,firstQuizAnswers),
    new Quiz("2.Quiz",20,secondQuizQuestions,secondQuizAnswers)
  ]