'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container px-4 mx-auto max-w-3xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Request a Quote</CardTitle>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Product Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plc">Advanced PLC X1000</SelectItem>
                      <SelectItem value="hmi">SmartHMI Pro</SelectItem>
                      <SelectItem value="inverter">InverterMax 5000</SelectItem>
                      <SelectItem value="sensor">AutoSense Pro</SelectItem>
                      <SelectItem value="robot">RoboControl X</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input id="quantity" type="number" min="1" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Additional Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Please describe your specific needs or requirements..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6-12months">6-12 months</SelectItem>
                      <SelectItem value="future">Future project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full">Submit Quote Request</Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Thank you for your request!
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                  We've received your quote request and will get back to you within 24 hours.
                </p>
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}