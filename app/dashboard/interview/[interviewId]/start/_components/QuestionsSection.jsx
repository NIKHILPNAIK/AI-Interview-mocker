import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {

  const textToSpeech=(text)=>{
    if('speechSynthesis' in window){
      const speech=new SpeechSynthesisUtterance(text)
      window.speechSynthesis.speak(speech)
    }
    else{
      alert('Speech synthesis not supported for this browser')
    }
  }



  return mockInterviewQuestion&&(
    <div className='p-5 border rounded-lg my-1'>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>


    {mockInterviewQuestion&&mockInterviewQuestion.map((question, index) => (
  <h2
    key={index} 
    className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer
    ${activeQuestionIndex==index && '!bg-purple-600 text-white'}`}
  >
    Question {index + 1}
  </h2>

))}

</div>

      <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.Question}</h2>

      <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)}/>

      <div className='border p-5 rounded-lg bg-blue-100 my-10 mt-15'>
        <h2 className='flex items-center gap-2 text-blue-700'>
          <Lightbulb/>
          <strong>Note: Don't go to the next question if the prompt Answer saved Successfully is not shown</strong>
        </h2>
        <h2 className='text-sm text-blue-700  my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>

    </div>
  )
}




export default QuestionsSection
