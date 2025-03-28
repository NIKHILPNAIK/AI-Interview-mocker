"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle } from 'lucide-react'

function QuestionsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-primary mb-2 flex items-center gap-2">
        <HelpCircle className="h-8 w-8" />
        Frequently Asked Questions
      </h1>
      <p className="text-gray-500 mb-8">Find answers to common questions about using the AI Interview Mocker platform</p>
      
      <Tabs defaultValue="getting-started" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="technical">Technical Issues</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="account">Account & Billing</TabsTrigger>
        </TabsList>
        
        {/* Getting Started Questions */}
        <TabsContent value="getting-started">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started with AI Interview Mocker</CardTitle>
              <CardDescription>Basic questions about using our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create my first mock interview?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Creating your first mock interview is simple:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Go to your Dashboard</li>
                      <li>Click on the "+ Add New" card</li>
                      <li>Enter your job position/role (e.g., "Software Engineer")</li>
                      <li>Add relevant tech stack or job description details</li>
                      <li>Specify your years of experience</li>
                      <li>Click "Create" and your interview will be generated</li>
                    </ol>
                    <p className="mt-2">Once created, you can start the interview immediately or save it for later.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need to enable my camera and microphone?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Yes, AI Interview Mocker requires access to your camera and microphone to provide the full interview experience:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The camera helps simulate a real interview environment</li>
                      <li>The microphone is essential for our speech-to-text feature that records your answers</li>
                      <li>You'll be prompted to allow access when you start an interview</li>
                      <li>If you accidentally denied permission, you'll need to update your browser settings</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">Note: We never store video recordings - only the text transcription of your answers.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How many questions are in each mock interview?</AccordionTrigger>
                  <AccordionContent>
                    <p>Each mock interview typically contains 5-7 questions tailored to your specified job role and experience level. The questions are generated using AI to match real interview scenarios for your target position.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I practice the same interview multiple times?</AccordionTrigger>
                  <AccordionContent>
                    <p>Yes! You can practice the same interview as many times as you want. Each time you complete an interview, your answers and feedback are saved separately, allowing you to track your improvement over time.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Technical Issues */}
        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Technical Issues</CardTitle>
              <CardDescription>Troubleshooting common technical problems</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="tech-1">
                  <AccordionTrigger>My microphone isn't working during the interview</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">If your microphone isn't working properly, try these steps:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Check if your browser has permission to access your microphone</li>
                      <li>Make sure no other applications are using your microphone</li>
                      <li>Try refreshing the page</li>
                      <li>Test your microphone in your system settings</li>
                      <li>Try using a different browser (Chrome works best with our speech recognition)</li>
                      <li>If using headphones with a mic, try unplugging and using your device's built-in microphone</li>
                    </ol>
                    <p className="mt-2">If problems persist, try restarting your device or using a different microphone.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-2">
                  <AccordionTrigger>The speech-to-text isn't accurately capturing my words</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">To improve speech recognition accuracy:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Speak clearly and at a moderate pace</li>
                      <li>Minimize background noise</li>
                      <li>Position your microphone closer to your mouth</li>
                      <li>Try using a headset with a dedicated microphone</li>
                      <li>Ensure you're in a quiet environment</li>
                      <li>Check that you're using a supported browser (Chrome provides the best results)</li>
                    </ul>
                    <p className="mt-2">Our speech recognition technology improves with use, but may occasionally misinterpret words, especially technical terms.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-3">
                  <AccordionTrigger>The website is loading slowly or crashing</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">If you're experiencing performance issues:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Clear your browser cache and cookies</li>
                      <li>Close other tabs and applications to free up memory</li>
                      <li>Check your internet connection</li>
                      <li>Try using a different browser</li>
                      <li>Disable browser extensions that might interfere</li>
                      <li>Ensure your browser is updated to the latest version</li>
                    </ul>
                    <p className="mt-2">If problems persist, please contact our support team with details about your device and browser.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Features */}
        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Platform Features</CardTitle>
              <CardDescription>Learn more about what our platform offers</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="feat-1">
                  <AccordionTrigger>How is the AI feedback generated?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Our AI feedback system works through several steps:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Your spoken answer is transcribed to text</li>
                      <li>Our AI analyzes your answer against the question context</li>
                      <li>The system evaluates factors like relevance, completeness, clarity, and technical accuracy</li>
                      <li>Personalized feedback is generated with specific improvement suggestions</li>
                      <li>A numerical rating helps you track your progress over time</li>
                    </ol>
                    <p className="mt-2">The AI is trained on thousands of real interview responses and industry best practices to provide relevant, actionable feedback.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="feat-2">
                  <AccordionTrigger>Can I get interview questions for specific industries?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Yes! Our platform generates industry-specific questions based on:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The job position you enter (e.g., "Software Engineer", "Marketing Manager")</li>
                      <li>The tech stack or job description you provide</li>
                      <li>Your specified years of experience</li>
                    </ul>
                    <p className="mt-2">The more specific you are when creating your interview, the more tailored the questions will be to your target role. Premium users get access to more specialized industry questions.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="feat-3">
                  <AccordionTrigger>What's the "banana benefit" in the premium plan?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">The "banana benefit" is our playful way of adding a little extra value to our premium plan! 🍌</p>
                    <p>While we can't literally send you a banana through the internet (yet!), this represents the extra energy boost our premium features give to your interview preparation. It's our way of making the upgrade process a bit more fun while highlighting that premium users get that "something extra" to help them succeed.</p>
                    <p className="mt-2">And who knows? Maybe we'll surprise premium users with actual banana-themed goodies in the future!</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Account & Billing */}
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account & Billing</CardTitle>
              <CardDescription>Questions about your account and payment</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="acc-1">
                  <AccordionTrigger>How do I upgrade to the premium plan?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Upgrading to premium is simple:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Go to the "Upgrade" page from your dashboard</li>
                      <li>Click the "Upgrade Now" button under the Premium Plan</li>
                      <li>Complete the one-time payment of ₹20</li>
                      <li>Your account will be instantly upgraded with premium features</li>
                    </ol>
                    <p className="mt-2">The premium plan is a one-time payment, not a subscription, so you'll never be charged again.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="acc-2">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">We accept various payment methods including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
                      <li>UPI payments</li>
                      <li>Net Banking</li>
                      <li>Mobile Wallets (Paytm, PhonePe, Google Pay)</li>
                    </ul>
                    <p className="mt-2">All payments are processed securely through our payment gateway.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="acc-3">
                  <AccordionTrigger>Is there a limit to how many interviews I can create on the free plan?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Yes, the free plan has some limitations:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>You can create up to 5 mock interviews per month</li>
                      <li>Each interview can have up to 5-7 questions</li>
                      <li>Basic AI feedback is provided for your answers</li>
                    </ul>
                    <p className="mt-2">The premium plan removes these limitations, giving you unlimited interviews and more detailed feedback.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="acc-4">
                  <AccordionTrigger>How can I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">To delete your account:</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Contact our support team at support@ai-interview-mocker.com</li>
                      <li>Include your registered email address in the request</li>
                      <li>We'll process your account deletion within 48 hours</li>
                      <li>You'll receive a confirmation email once completed</li>
                    </ol>
                    <p className="mt-2 text-sm text-gray-500">Note: Account deletion is permanent and will remove all your interview history and feedback data.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="text-center mt-10 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-4">If you couldn't find the answer you were looking for, feel free to reach out to our support team.</p>
        <p className="text-primary">nikhilgithub9390@gmail.com</p>
      </div>
    </div>
  )
}

export default QuestionsPage