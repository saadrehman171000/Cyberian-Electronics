'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Cog,
  Users,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ProductsSection from '@/components/ProductsSection'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const features = [
  { name: 'Advanced PLCs', description: 'State-of-the-art Programmable Logic Controllers for precise automation control.', icon: Zap },
  { name: 'Custom Solutions', description: 'Tailored automation solutions designed to meet your specific industry needs.', icon: Cog },
  { name: 'Expert Support', description: '24/7 technical support from our team of experienced engineers.', icon: Users },
  { name: 'Quality Assurance', description: 'Rigorous testing and quality control for reliable, long-lasting products.', icon: CheckCircle },
]

const testimonials = [
  { content: "Cyberian Electronics' PLC solutions have significantly improved our manufacturing efficiency. Their support team is always ready to help.", author: "Ahmed Khan", role: "Production Manager at PakTech Industries" },
  { content: "The customized SCADA system from Cyberian Electronics has given us unprecedented control and visibility over our operations. Highly recommended!", author: "Fatima Zaidi", role: "CEO of Karachi Automation Systems" },
  { content: "We've seen a 30% increase in productivity since implementing Cyberian Electronics' automation solutions. Their expertise is unmatched.", author: "Rahul Sharma", role: "Operations Director at IndoTech Manufacturing" },
]

const products = [
  { name: 'Advanced PLC X1000', description: 'Next-generation programmable logic controller for industrial automation.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxjfGVufDB8fDB8fHww' },
  { name: 'SmartHMI Pro', description: 'Intuitive human-machine interface with multi-touch capabilities.', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxjfGVufDB8fDB8fHww' },
  { name: 'InverterMax 5000', description: 'High-efficiency inverter for precise motor control and energy savings.', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxjfGVufDB8fDB8fHww' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-6">
            <div className="flex items-center">
              <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-2xl font-bold text-gray-900 dark:text-white">
                Cyberian
              </a>
              <div className="hidden ml-10 space-x-8 lg:flex">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4 flex items-center">
              <Link href="/quote" className="hidden lg:inline-flex">
                <Button>
                  Get a Quote
                </Button>
              </Link>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-200"
              >
                {mounted && (theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
              </button>
              <div className="lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Toggle menu</span>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden"
              >
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Link href="/quote" className="w-full mt-2">
                    <Button>
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 pt-16 pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Empowering Industries</span>
                  <span className="block text-blue-600 dark:text-blue-400">with Advanced Electronics</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Cyberian Electronics provides cutting-edge industrial automation solutions and electronic products. We specialize in PLCs, HMIs, inverters, and customized solutions for various industries.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <Button asChild size="lg" className="mr-4">
                    <a href="#products">Explore Products</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#contact">Contact Us</a>
                  </Button>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <Image
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                    alt="Industrial automation"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Advanced Technology Solutions
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Revolutionizing industrial processes with cutting-edge automation solutions.
              </p>
            </div>

            <div className="mt-20">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <ProductsSection />

        {/* About Us Section */}
        <section id="about" className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">About Us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Our Commitment to Innovation
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                At Cyberian Electronics, we're dedicated to pushing the boundaries of industrial automation.
              </p>
            </div>

            <div className="mt-20">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    Pioneering the Future of Industry
                  </h3>
                  <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                    With over a decade of experience, we've been at the forefront of developing cutting-edge solutions that transform industrial processes. Our team of expert engineers and designers work tirelessly to create products that not only meet but exceed the evolving needs of modern industries.
                  </p>
                  <div className="mt-10 space-y-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                          <CheckCircle className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Quality Assurance</h4>
                        <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                          Every product undergoes rigorous testing to ensure reliability and performance.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                          <Users className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Customer-Centric Approach</h4>
                        <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                          We work closely with our clients to develop tailored solutions that address their unique challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <Image
                    className="rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                    alt="About Cyberian Electronics"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Trusted by Industry Leaders
              </p>
            </div>
            <div className="mt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  <blockquote>
                    <p className="text-xl font-medium text-gray-900 dark:text-white">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </blockquote>
                  <div className="mt-8">
                    <div className="font-medium text-gray-900 dark:text-white">{testimonials[currentIndex].author}</div>
                    <div className="mt-1 text-gray-500 dark:text-gray-300">{testimonials[currentIndex].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-10 flex justify-center space-x-4">
                <Button onClick={prev} size="icon" variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button onClick={next} size="icon" variant="outline">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Contact Us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Get in Touch
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Have questions or need a custom solution? Our team is here to help.
              </p>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">info@cyberian.com</p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 sm:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">123 Innovation Drive, Tech City, TC 12345</p>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="block">Boost your productivity.</span>
              <span className="block text-blue-600 dark:text-blue-400">Start using our solutions today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button size="lg">
                  Get started
                </Button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Button variant="outline" size="lg">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
                Cyberian
              </a>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Empowering industries with advanced electronics and automation solutions since 2015.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {['PLCs', 'HMIs', 'Inverters', 'SCADA Systems'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {['Documentation', 'Guides', 'API Status', 'Contact Us'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {['About', 'Blog', 'Jobs', 'Press'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {['Privacy', 'Terms', 'Cookies', 'License'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Cyberian Electronics, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}