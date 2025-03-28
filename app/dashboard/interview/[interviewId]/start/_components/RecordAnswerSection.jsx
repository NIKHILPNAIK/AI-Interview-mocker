'use client'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { Mic } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModel.js';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import moment from 'moment/moment';

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) { 
  const [userAnswer, setUserAnswer] = useState(''); 
  const {user}= useUser();
  const[loading,setLoading]=useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    crossBrowser: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => {
      setUserAnswer(prevAns=>prevAns+result?.transcript);
    })
  }, [results]);

  useEffect(() => {
  if(!isRecording&&userAnswer?.length>0){
    UpdateUserAnswer();
  }
    },[userAnswer]);

  const StartStopRecording = async() => {
    if (isRecording) {
      stopSpeechToText();
    
  }
    else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer =async()=>{
    setLoading(true);
    const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.Question+", User Answer:"+userAnswer+", Depends on question and user answer for given interview "+"Please give us rating for answer and feedback as area of improvement if any"+"In just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

    const result = await chatSession.sendMessage(feedbackPrompt);

    const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '').trim();

    console.log(mockJsonResp);

    const JsonFeedbackResp = JSON.parse(mockJsonResp);

    console.log(mockInterviewQuestion[activeQuestionIndex]?.Question);
    console.log(mockInterviewQuestion[activeQuestionIndex]?.correctAns);
   

    const resp = await db.insert(UserAnswer).values({
    mockIdRef: interviewData?.mockId,
    question: mockInterviewQuestion[activeQuestionIndex]?.Question, 
    correctAns: mockInterviewQuestion[activeQuestionIndex]?.Answer,
    userAns: userAnswer,
    feedback: JsonFeedbackResp?.feedback,
    rating: JsonFeedbackResp?.rating,
    userEmail: user?.primaryEmailAddress?.emailAddress,
    createdAt: moment().toDate(),
}).execute();
    

    if(resp){
      toast.success('Answer Saved Successfully');
      setUserAnswer('');
      setResults([]);
  } 
  setResults([]);
  setLoading(false);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
           <div className='flex flex-col mt-20 items-center justify-center bg-black rounded-lg p-5 my-3 relative'>
        <Image
          src={"/webcam.png"}
          alt='webcam'
          width={200}
          height={200}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
            borderRadius: '10px',
          }}
        />
      </div>

      
      <div className='w-3/4 p-4 border border-gray-500 rounded-lg bg-white text-black text-lg h-[100px] overflow-y-auto'>
        <div className="whitespace-pre-wrap break-words">
          {interimResult || userAnswer || "Your speech will appear here..."}
        </div>
      </div> 

      <Button
      
        variant='ghost'
        className='my-10 border border-black'
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className='flex items-center gap-1 text-red-500'>
            <Mic /> Stop Recording
          </h2>
        ) : (
          'Record Answer'
        )}
      </Button>

    </div>
  );
}

export default RecordAnswerSection;
