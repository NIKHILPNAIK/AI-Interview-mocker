import React from 'react'
import Interview from '../interview/[interviewId]/page'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function InterviewItemCard({interview}) {
    const router = useRouter();

  return (
    <div className='border shadow-lg rounded-lg p-3 mb-4'>
      <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
      <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
      <h2 className='text-sm text-gray-500'>Skill: {interview?.jobDesc}</h2>

      <div className='flex justify-between gap-5 mt-3'> 
      <Button size="sm" variant="outline" className="font-bold w-full"
      onClick={() => router.push("/dashboard/interview/"+interview?.mockId+"/feedback")}>
        Feedback
      </Button>
      
      <Button size="sm" className="w-full"
      onClick={() => router.push("/dashboard/interview/"+interview?.mockId)}>
        Start
      </Button>
      </div>
    </div>
  )
}

export default InterviewItemCard