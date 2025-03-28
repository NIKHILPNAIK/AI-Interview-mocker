'use client'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const RecordAnswerSection = dynamic(
  () => import('./_components/RecordAnswerSection.jsx'),
  { ssr: false }
)
function StartInterview({params}) {

    const [interviewData,setInterviewData]=useState([]);
    const[mockInterviewQuestion,setMockInterviewQuestion]=useState([]);
    const[activeQuestionIndex,setActiveQuestionIndex]=useState(0);
    useEffect(()=>{
         GetInterviewDetails()
    },[])
      
    const GetInterviewDetails=async()=>{
        const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId,params.interviewId))
       
        const jsonMockResp=JSON.parse(result[0].jsonMockResp)
        console.log(jsonMockResp);
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0])
        console.log("Fetching interview for ID:", params.interviewId);
    }

  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* Questions */}
      <div className='flex flex-col'>
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        
        <div className='mt-auto flex justify-between gap-6 my-12'>
          {activeQuestionIndex>0 &&
          <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question
          </Button>}

          {activeQuestionIndex!=mockInterviewQuestion?.length-1 &&
          <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question
          </Button>}

          {activeQuestionIndex==mockInterviewQuestion?.length-1 &&
          <Link href={`/dashboard/interview/${params.interviewId}/feedback`}>
          <Button>End Interview
          </Button>
          </Link>}
        </div>
      </div>
      
      <RecordAnswerSection
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        interviewData={interviewData}
      />
    </div>
    </div>
  )
}

export default StartInterview