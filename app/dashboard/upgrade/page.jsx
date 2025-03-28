"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, X } from 'lucide-react'

function Upgrade() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-primary mb-2">Upgrade Your Interview Experience</h1>
      <p className="text-gray-500 mb-8">Choose the plan that works best for your interview preparation needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Free Plan */}
        <Card className="shadow-md hover:shadow-lg transition-all border-2">
          <CardHeader className="bg-secondary/30">
            <CardTitle className="text-2xl">Free Plan</CardTitle>
            <CardDescription>Get started with basic interview practice</CardDescription>
            <div className="mt-4 text-3xl font-bold">₹0</div>
            <p className="text-sm text-gray-500">Forever free</p>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>5 mock interviews per month</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Basic AI feedback on your answers</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Access to common interview questions</p>
              </li>
              <li className="flex items-start gap-2">
                <X className="text-red-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">Advanced performance analytics</p>
              </li>
              <li className="flex items-start gap-2">
                <X className="text-red-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">Unlimited interviews</p>
              </li>
              <li className="flex items-start gap-2">
                <X className="text-red-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">Priority support</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Current Plan</Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="shadow-md hover:shadow-lg transition-all border-2 border-primary relative">
          <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg rounded-tr-lg flex items-center gap-1">
            <Crown className="h-4 w-4" /> 
            <span>BEST VALUE</span>
          </div>
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-2xl">Premium Plan</CardTitle>
            <CardDescription>Unlock the full interview preparation experience</CardDescription>
            <div className="mt-4 text-3xl font-bold">₹20</div>
            <p className="text-sm text-gray-500">One-time payment</p>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p><strong>Unlimited</strong> mock interviews</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Detailed AI feedback with improvement suggestions</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>I will come to your home to teach you</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Advanced performance analytics and progress tracking</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>Priority support</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                <p><strong>BONUS:</strong> Extra banana for your interview journey! 🍌</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary hover:bg-primary/90">Upgrade Now</Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="shadow-md hover:shadow-lg transition-all mb-10 border-blue-200">
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-blue-700">Why Upgrade?</CardTitle>
          <CardDescription className="text-blue-600">Investing in your interview preparation can make all the difference</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Unlimited Practice</h3>
              <p className="text-gray-600">Practice makes perfect. With unlimited interviews, you can prepare for any job but it will be taken by AI anyways</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Detailed Feedback</h3>
              <p className="text-gray-600">Get comprehensive feedback on your answers to understand your strengths and areas for improvement.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">Industry-Specific Questions</h3>
              <p className="text-gray-600">Access questions tailored to your specific industry and role for more relevant practice.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">The Banana Advantage</h3>
              <p className="text-gray-600">Our exclusive banana benefit gives you that extra energy boost for your real interviews! 🍌</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-gray-500 text-sm mt-10">
        <p>Questions about our plans? Contact us at nikhilgithub9390@gmail.com</p>
      </div>
    </div>
  )
}

export default Upgrade