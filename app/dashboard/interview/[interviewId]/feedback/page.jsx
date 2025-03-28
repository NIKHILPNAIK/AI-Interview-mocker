"use client"
import { UserAnswer } from '@/utils/schema'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronsUpDown } from 'lucide-react'
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


function Feedback({ params: paramsPromise }) {

  const [params, setParams] = useState(null);
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();


  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    }
    fetchParams();
  }, [paramsPromise]);

  useEffect(() => {
    if (params) {
      GetFeedback(params.interviewId);
    }
  }, [params]);

  const GetFeedback = async (interviewId) => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  if (!params) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <div >

      {feedbackList.length ==0?<h2 className='font-bold text-xl my-10 text-gray-500 '>No feedback available</h2>:
      <>
      <h2 className='text-2xl font-bold text-green-500 mt-10'>Congratulations</h2>
      <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
      <h2 className='text-primary text-lg my-3'>Your overall rating: <strong>7/10</strong></h2>
      <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, your answer and feedback for improvement</h2>
      
      {feedbackList && feedbackList.map((item, index) => (
        <Collapsible key={index} className='mt-7'>
          <CollapsibleTrigger className='p-2 flex justify-between bg-secondary my-2 rounded-lg text-left gap-7 w-full'>  
            {item.question} <ChevronsUpDown className='h-5 w-5'/>
          </CollapsibleTrigger>

          <CollapsibleContent className='mb-6'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-red-500 p-2 border rounded-lg'>
                <strong>Rating:</strong> {item.rating}
              </h2>

              <h2 className='p-2 border rounded-lg bg-red-100 text-sm text-red-900'>
                <strong>Your answer:</strong> {item?.userAns}
              </h2>

              <h2 className='p-2 border rounded-lg bg-green-100 text-sm text-green-900'>
                <strong>Correct Answer:</strong>
                <div className="prose">
                  <ReactMarkdown>{item?.correctAns}</ReactMarkdown>
                </div>
              </h2>



              <h2 className='p-2 border rounded-lg bg-blue-100 text-sm text-primary'>
                <strong>Feedback:</strong> {item?.feedback}
              </h2>


            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}

      </>}


      <Button onClick={()=> router.replace('/dashboard')} className='mt-4'> Go Home</Button>
    </div>
  );
}

export default Feedback;
