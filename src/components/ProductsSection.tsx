'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const products = [
  {
    name: 'Advanced PLC X1000',
    description: 'Next-generation programmable logic controller for industrial automation.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop',
    price: 'Starting from $2,999'
  },
  {
    name: 'SmartHMI Pro',
    description: 'Intuitive human-machine interface with multi-touch capabilities.',
    image: 'https://images.unsplash.com/photo-1581092160562-2158d3a31a0a?w=800&auto=format&fit=crop',
    price: 'Starting from $1,499'
  },
  {
    name: 'InverterMax 5000',
    description: 'High-efficiency inverter for precise motor control and energy savings.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&auto=format&fit=crop',
    price: 'Starting from $3,499'
  },
  {
    name: 'AutoSense Pro',
    description: 'Advanced sensor system for real-time monitoring and control.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
    price: 'Starting from $899'
  },
  {
    name: 'RoboControl X',
    description: 'Comprehensive robotics control system for industrial automation.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&auto=format&fit=crop',
    price: 'Starting from $4,999'
  }
]

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <section id="products" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Industrial Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Discover our range of advanced industrial automation products.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-64 w-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{product.description}</p>
                      <p className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">{product.price}</p>
                      <div className="mt-4 flex gap-4 w-full">
                        <Button asChild className="flex-1">
                          <Link href="/quote">Get Quote</Link>
                        </Button>
                        <Button variant="outline" asChild className="flex-1">
                          <Link href="#contact">Contact Sales</Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}