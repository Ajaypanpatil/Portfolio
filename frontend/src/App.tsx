import { useState } from 'react'
import './App.css'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Github, Linkedin, ExternalLink, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react"

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        // Reset form
        e.currentTarget.reset()
      } else {
        console.error("Web3Forms error:", result)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Network error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Ajay Santosh Panpatil</h1>
              <p className="text-muted-foreground">Full-Stack Developer & Tech Entrepreneur</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:ajaypanpatil01@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl pb-2 font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Transforming Ideas into Scalable Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Full-Stack Developer specializing in MERN Stack and Cloud Architecture with a passion for building
              AI-powered applications that solve real-world problems. Currently pursuing MCA with 8.5 CGPA and ranked in
              the top 5% of my undergraduate class.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                React.js
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Node.js
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                MongoDB
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                AWS
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                AI Integration
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                System Design
              </Badge>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/Ajaypanpatil" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Background</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a results-driven software developer with a strong foundation in full-stack development and
                    emerging technologies. My journey began with a Bachelor's in Computer Science where I graduated with
                    a 9.22 CGPA, ranking in the top 5% of my department.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Career Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    My goal is to become a Technical Lead at a top-tier technology company while building innovative
                    products that impact millions of users. I'm particularly interested in the intersection of AI/ML and
                    web technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-lg italic text-center">
                "I don't just write code—I architect solutions. Every project I undertake is an opportunity to push
                boundaries, solve complex problems, and create technology that makes a meaningful difference."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* HireSphere Project */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">HireSphere - AI-Powered Job Portal</CardTitle>
                    <CardDescription className="mt-2">
                      Revolutionary job portal using AI for candidate matching
                    </CardDescription>
                  </div>
                  <Badge variant="default">Production Ready</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">OpenAI API</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Built intelligent system with AI resume screening, smart auto-apply features, and real-time
                    notifications. Reduced recruitment time by 60% and achieved 95% accuracy in candidate matching.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>10,000+ Applications Processed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>95% AI Matching Accuracy</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://hiresphere-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/Ajaypanpatil/HireSphere-MERN-Job-Portal" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CloudTravel Project */}
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">CloudTravel - Enterprise Travel Management</CardTitle>
                    <CardDescription className="mt-2">
                      Comprehensive travel booking platform for corporate clients
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Client Deployed</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Stripe API</Badge>
                    <Badge variant="outline">AWS S3</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enterprise travel platform with multi-tier booking system, payment gateway integration, and
                    comprehensive analytics dashboard. Increased booking efficiency by 45%.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>₹2.5M+ Transactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>99.9% Uptime</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://cloudtravel-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/Ajaypanpatil/cloudtravel" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DevCollab Project */}
            <Card className="overflow-hidden lg:col-span-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">DevCollab - Real-time Code Collaboration Platform</CardTitle>
                    <CardDescription className="mt-2">
                      Real-time collaborative coding platform with integrated chat and version control
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Open Source</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Socket.io</Badge>
                    <Badge variant="outline">Monaco Editor</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Redis</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Real-time collaborative coding platform enabling developers to code together seamlessly. Features
                    operational transformation for conflict-free editing, integrated terminal with Docker containers,
                    and WebRTC video chat.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>150+ GitHub Stars</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Featured by TechCrunch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Used by 5+ Universities</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://devcollab.dev" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/Ajaypanpatil/devcollab" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">React.js</span>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Next.js</span>
                      <Badge variant="secondary">Intermediate</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tailwind CSS</span>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">JavaScript (ES6+)</span>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Backend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Node.js</span>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Express.js</span>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">RESTful APIs</span>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">GraphQL</span>
                      <Badge variant="secondary">Intermediate</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Databases & Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">MongoDB</span>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">MySQL</span>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">AWS</span>
                      <Badge variant="secondary">Intermediate</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Docker</span>
                      <Badge variant="secondary">Intermediate</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Full-Stack Developer Intern</CardTitle>
                    <CardDescription>TechNova Solutions • Remote</CardDescription>
                  </div>
                  <Badge variant="outline">Jun 2024 - Aug 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Improved application load time by 35% through code optimization and lazy loading
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Reduced API response time by 50% by implementing efficient database queries
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Delivered 3 major features ahead of schedule, contributing to early product launch
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Frontend Developer Intern</CardTitle>
                    <CardDescription>Digital Dynamics • Mumbai, India</CardDescription>
                  </div>
                  <Badge variant="outline">Jan 2024 - May 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Built 15+ reusable UI components that reduced development time by 40%
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Achieved 98% design accuracy in component implementation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Improved mobile user experience resulting in 25% increase in mobile engagement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Master of Computer Applications (MCA)</CardTitle>
                    <CardDescription>NCRD Sterling Institute of Management Studies, Seawood, Thane</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">Current CGPA: 8.5/10</Badge>
                    <p className="text-sm text-muted-foreground mt-1">Aug 2024 - May 2026</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Bachelor of Science in Computer Science (BSc CS)</CardTitle>
                    <CardDescription>Karmaveer Bhaurao Patil College, Vashi, Thane</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">CGPA: 9.22/10</Badge>
                    <p className="text-sm text-muted-foreground mt-1">Jun 2021 - May 2024</p>
                    <p className="text-xs text-muted-foreground">Top 5% of Department</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Let's Build Something Amazing Together!</h2>
            <p className="text-center text-muted-foreground mb-12">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect
              with fellow developers.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Let's discuss your next project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:ajaypanpatil01@gmail.com" className="hover:underline">
                      ajaypanpatil01@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+919136829263" className="hover:underline">
                      +91-9136829263
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Available for full-time opportunities</span>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://linkedin.com/in/ajay-panpatil" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/Ajaypanpatil" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                  <CardDescription>I'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitStatus === "success" && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                      <div className="flex items-center gap-2 text-green-800">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                      <div className="flex items-center gap-2 text-red-800">
                        <span className="font-medium">Failed to send message</span>
                      </div>
                      <p className="text-sm text-red-700 mt-1">Please try again or contact me directly via email.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="access_key" value="5b32235e-d65a-4e3c-b766-adc4f661ae1c" />
                    <input type="hidden" name="subject" value="New Contact Form Submission from Ajay's Portfolio" />
                    <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                    />
                    <input type="hidden" name="redirect" value="false" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium block mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          disabled={isSubmitting}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium block mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          disabled={isSubmitting}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors disabled:opacity-50"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="inquiry_type" className="text-sm font-medium block mb-1">
                          Subject *
                        </label>
                        <select
                          name="inquiry_type"
                          id="inquiry_type"
                          required
                          disabled={isSubmitting}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors disabled:opacity-50"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="Job Opportunity">Job Opportunity</option>
                          <option value="Project Collaboration">Project Collaboration</option>
                          <option value="Freelance Work">Freelance Work</option>
                          <option value="Technical Discussion">Technical Discussion</option>
                          <option value="Mentorship">Mentorship</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="company" className="text-sm font-medium block mb-1">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          disabled={isSubmitting}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors disabled:opacity-50"
                          placeholder="Your company (optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium block mb-1">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none disabled:opacity-50"
                        placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Your message will be sent securely via Web3Forms</span>
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Ajay Santosh Panpatil. Built with Next.js and Tailwind CSS.</p>
          <p className="text-sm text-muted-foreground mt-2 italic">
            "Code is poetry written in logic. Let's create something beautiful together."
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App;