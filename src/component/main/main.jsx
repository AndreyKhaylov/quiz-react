import React from 'react';
import s from './main.module.css';


function Main({
    score, setScore, setShowScore,
    questionsBase, currentAnswer, 
    setCurrentAnswer, currentQuestion,
    setCurrentQuestion,

}) {
    
    function handleAnswer(e, answerUser) {
      e.preventDefault();

      setCurrentAnswer([ ...currentAnswer, answerUser]); // Записывается ответ пользователя в локальный state
      answerUser.isCorrect && setScore(score+1); // Делается подсчет правильных ответов
      
      const nextQuestion = currentQuestion + 1; // Переход к следующему вопросу
      if (nextQuestion < questionsBase.length) {
        setCurrentQuestion(nextQuestion); 
      } else {
        setShowScore(true);  /* Переход к isShowScore котпоненту. 
                                  (выводится последняя страница) */
      }
    }

    return (   
        <main className={s.main}>
          <h1>Тест на знание React JS</h1>
          <section className={s.question}>
            <p className={s.question__num}>Вопрос {currentQuestion + 1} / {questionsBase.length}</p>
            <p className={s.question__text}>{ questionsBase[currentQuestion].questionText }</p>
          </section>
          <section className={s.answer__options}>
            {
              questionsBase[currentQuestion].answersOption.map((item, index) => (
                <button 
                  key={index}
                  className={s.answer__btn}
                  onClick={ (e) => handleAnswer(e, item) }
                >
                  {item.answerText}
                </button>
              ))
            }            
          </section> 
        </main>
    )      
}

export default Main;