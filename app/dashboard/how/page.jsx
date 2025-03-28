"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

function HowItWorks() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-primary mb-2">How to Use AI Interview Mocker</h1>
      <p className="text-gray-500 mb-8">Follow these simple steps to get the most out of your mock interview practice</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader className="bg-secondary/50">
            <CardTitle className="flex items-center gap-2">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
              Create a New Interview
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Click on the "+ Add New" card on your dashboard</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Enter your job position/role (e.g., "Software Engineer")</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Add relevant tech stack or job description</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Specify your years of experience</p>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader className="bg-secondary/50">
            <CardTitle className="flex items-center gap-2">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
              Start Your Interview
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Enable your webcam and microphone when prompted</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Click "Start Interview" to begin the session</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>You can click the speaker icon to hear the question read aloud</p>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader className="bg-secondary/50">
            <CardTitle className="flex items-center gap-2">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
              Answer Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Click "Record Answer" to start speaking</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Your speech will be transcribed in real-time</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Click "Stop Recording" when you've finished your answer</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Wait for the "Answer Saved Successfully" notification before proceeding</p>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all">
          <CardHeader className="bg-secondary/50">
            <CardTitle className="flex items-center gap-2">
              <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">4</span>
              Review Feedback
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Navigate through all questions using the "Next Question" button</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Click "End Interview" after answering all questions</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Review your performance with AI-generated feedback</p>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Compare your answers with suggested responses</p>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md hover:shadow-lg transition-all mb-10">
        <CardHeader className="bg-blue-100">
          <CardTitle className="text-blue-700">Tips for Better Results</CardTitle>
          <CardDescription className="text-blue-600">Get the most out of your practice sessions</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>Find a quiet environment with good lighting</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>Speak clearly and at a moderate pace</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>Practice multiple times with different job descriptions</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>Review feedback carefully to improve for next time</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>Use a headset for better audio quality</p>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-blue-500 h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>Dress professionally as if for a real interview</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default HowItWorks