import React, { useState } from 'react'
import './App.css'

function App()
{
  const questions=[
    {
      questionText:' 1.Which animal is known as the "Ship of the Desert"? ',
    answerOptions:[
      {answerText:'Camel',isCorrect: true },
      {answerText:'Dog',isCorrect: false },
      {answerText:'Elephant',isCorrect: false },
      {answerText:'Cow',isCorrect: false}]
    } ,
    {
      questionText:' 2.How many days are there in a week?',
    answerOptions:[
      {answerText:'3 days',isCorrect: false},
      {answerText:'7 days',isCorrect: true},
      {answerText:'5 days',isCorrect: false},
      {answerText:'8 days',isCorrect: false}]
    } ,
    {
      questionText:' 3.How many hours are there in a day?',
    answerOptions:[
      {answerText:'24 hours',isCorrect: true},
      {answerText:'34 hours',isCorrect: false},
      {answerText:'42 hours',isCorrect: false},
      {answerText:'10 hours',isCorrect: false}]
    } ,
    {
      questionText:' 4.How many letters are there in the English alphabet?',
    answerOptions:[
      {answerText:'43 letters',isCorrect: false},
      {answerText:'54 letters',isCorrect: false},
      {answerText:'26 letters',isCorrect: true},
      {answerText:'24 letters',isCorrect: false}]
    } 
  ]
 const[currentQuestion,setCurrentQuestion]=useState(0);
 const[score,setScore]=useState(0);
 const[showscore,setShowScore]=useState(false); //showscore==true
 //question.length == 4
 const handleclick=(isCorrect)=>
 {
  if(isCorrect === true)
    {
     setScore(score+1)
    }
    const nextquestion=currentQuestion+1;
    if(nextquestion <questions.length )
    {
      setCurrentQuestion(nextquestion)
    }
    else
    {
      setShowScore(true);
    }
 }
 return(
  <>
      <h1 className='title' >Simple GK Questions and Answers</h1>
      <div className='app'>
        { showscore ? 
        (<div className='score-section'>
          <h1>you scored {score} out {questions.length}</h1>
        </div>) :
         (<>
            <div className='Question-Section'>
                <h1> Question <span> {currentQuestion+1}</span>/{questions.length} </h1>
            
                <div className='Question-Text'>
                 {questions[currentQuestion].questionText }
                </div>
            </div>
            <div className='Answer-Section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions)=>
                   (
                      <button onClick={()=>handleclick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                    ))       
                }

            </div>
          </>)
        }

      </div>
    </>
  )
}

 
 




export default App

//rafce--react arrow function component class component --rcc (hooks)