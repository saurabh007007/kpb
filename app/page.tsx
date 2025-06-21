"use client"

import {
  Search,
  Shield,
  Cloud,
  Bot,
  Diamond,
  Menu,
  X,
  ChevronDown,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { ColorSchemeSelector } from "@/components/color-scheme-selector"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeNav, setActiveNav] = useState("HOME") // Add active navigation state

  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Enterprise-grade cloud solutions with unlimited scalability and 99.9% uptime guarantee",
      features: ["Auto-scaling", "Load Balancing", "Disaster Recovery", "24/7 Monitoring"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security protocols for complete digital protection against modern threats",
      features: ["Threat Detection", "Data Encryption", "Security Audits", "Compliance Management"],
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Intelligent automation and data-driven decision making to transform your business",
      features: ["Machine Learning", "Process Automation", "Predictive Analytics", "Natural Language Processing"],
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content:
        "KPB Solutions transformed our infrastructure completely. Their cloud solutions helped us scale 300% without any downtime.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Founder",
      content:
        "The AI solutions provided by KPB have automated 80% of our manual processes. Incredible ROI and support team.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "SecureBank",
      role: "Security Director",
      content:
        "Their cybersecurity expertise is unmatched. We've had zero security incidents since partnering with them.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Diamond className="h-10 w-10 text-cyan-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                  KPB Supports Solutions
                </span>
                <p className="text-xs text-gray-500 -mt-1">Digital Excellence Partner</p>
              </div>
            </div>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services, solutions..."
                  className="pl-10 w-80 border-gray-200 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 text-white"
              >
                Search
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Navigation */}
      <nav className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className={`${isMenuOpen ? "block" : "hidden"} lg:block`}>
            <div className="flex flex-col lg:flex-row lg:space-x-0">
              <button
                onClick={() => {
                  setActiveNav("HOME")
                  setIsMenuOpen(false)
                }}
                className={`group px-6 py-4 hover:bg-white/10 transition-all duration-200 border-b-2 text-left lg:text-center ${
                  activeNav === "HOME"
                    ? "bg-white/10 border-cyan-400 text-cyan-300"
                    : "border-transparent hover:border-cyan-400"
                }`}
              >
                <span className="font-medium">HOME</span>
                {activeNav === "HOME" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 lg:relative lg:mt-1 lg:mx-auto lg:w-8 lg:rounded-full"></div>
                )}
              </button>

              <div className="relative group">
                <button
                  onClick={() => {
                    setActiveNav("SERVICES")
                    setIsMenuOpen(false)
                  }}
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`flex items-center px-6 py-4 hover:bg-white/10 transition-all duration-200 border-b-2 w-full lg:w-auto text-left lg:text-center ${
                    activeNav === "SERVICES"
                      ? "bg-white/10 border-cyan-400 text-cyan-300"
                      : "border-transparent hover:border-cyan-400"
                  }`}
                >
                  <span className="font-medium">SERVICES</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                  {activeNav === "SERVICES" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 lg:relative lg:mt-1 lg:mx-auto lg:w-8 lg:rounded-full lg:ml-2"></div>
                  )}
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded-lg mt-1 w-64 z-50 border border-gray-100">
                    <div className="p-2">
                      <button
                        onClick={() => {
                          setActiveNav("SERVICES")
                          setActiveDropdown(null)
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <div className="font-medium text-gray-800">Cloud Infrastructure</div>
                        <div className="text-sm text-gray-500">Scalable cloud solutions</div>
                      </button>
                      <button
                        onClick={() => {
                          setActiveNav("SERVICES")
                          setActiveDropdown(null)
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <div className="font-medium text-gray-800">Cybersecurity</div>
                        <div className="text-sm text-gray-500">Advanced protection</div>
                      </button>
                      <button
                        onClick={() => {
                          setActiveNav("SERVICES")
                          setActiveDropdown(null)
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <div className="font-medium text-gray-800">AI Solutions</div>
                        <div className="text-sm text-gray-500">Intelligent automation</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setActiveNav("PRODUCTS")
                  setIsMenuOpen(false)
                }}
                className={`px-6 py-4 hover:bg-white/10 transition-all duration-200 border-b-2 text-left lg:text-center relative ${
                  activeNav === "PRODUCTS"
                    ? "bg-white/10 border-cyan-400 text-cyan-300"
                    : "border-transparent hover:border-cyan-400"
                }`}
              >
                <span className="font-medium">PRODUCTS</span>
                {activeNav === "PRODUCTS" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 lg:relative lg:mt-1 lg:mx-auto lg:w-8 lg:rounded-full"></div>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveNav("PRICING")
                  setIsMenuOpen(false)
                }}
                className={`px-6 py-4 hover:bg-white/10 transition-all duration-200 border-b-2 text-left lg:text-center relative ${
                  activeNav === "PRICING"
                    ? "bg-white/10 border-cyan-400 text-cyan-300"
                    : "border-transparent hover:border-cyan-400"
                }`}
              >
                <span className="font-medium">PRICING</span>
                {activeNav === "PRICING" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 lg:relative lg:mt-1 lg:mx-auto lg:w-8 lg:rounded-full"></div>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveNav("RESOURCES")
                  setIsMenuOpen(false)
                }}
                className={`px-6 py-4 transition-all duration-200 border-b-2 text-left lg:text-center relative ${
                  activeNav === "RESOURCES"
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white border-[var(--color-primary)]"
                    : "hover:bg-white/10 border-transparent hover:border-[var(--color-primary)]"
                }`}
              >
                <span className="font-medium">RESOURCES</span>
                {activeNav === "RESOURCES" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 lg:relative lg:mt-1 lg:mx-auto lg:w-8 lg:rounded-full"></div>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveNav("CONTACT")
                  setIsMenuOpen(false)
                }}
                className={`px-6 py-4 hover:bg-white/10 transition-all duration-200 border-b-2 text-left lg:text-center relative ${
                  activeNav === "CONTACT"
                    ? "bg-white/10 border-cyan-400 text-cyan-300"
                    : "border-transparent hover:border-cyan-400"
                }`}
              >
                <span className="font-medium">CONTACT US</span>
                {activeNav === "CONTACT" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 lg:relative lg:mt-1 lg:mx-auto lg:w-8 lg:rounded-full"></div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Active Section Indicator */}
        {/* <div className="bg-slate-900/50 border-t border-slate-600/30">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Current Section:</span>
                <span className="text-cyan-300 font-medium">{activeNav}</span>
              </div>
              <div className="hidden md:flex items-center space-x-4 text-gray-400">
                <span>🌐 Global Support</span>
                <span>•</span>
                <span>⚡ 24/7 Available</span>
                <span>•</span>
                <span>🔒 Secure & Trusted</span>
              </div>
            </div>
          </div>
        </div> */}
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white py-32 overflow-hidden">
        {/* Enhanced Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rotate-45"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border border-white/25 -rotate-12"></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 border border-white/30 rotate-45"></div>

          {/* Floating dots */}
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/40 rounded-full"></div>
          <div className="absolute top-40 right-1/3 w-3 h-3 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-white/50 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🚀 Trusted by 500+ Companies Worldwide
          </Badge>
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            KPB Supports
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Redefining Digital Excellence Through Innovation, Security, and Scalable Solutions
          </p>
          <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions that drive growth, enhance security, and
            optimize operations for the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[var(--color-primary)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Who We Are Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200">About KPB Solutions</Badge>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading technology partner dedicated to transforming businesses through innovative digital solutions and
              exceptional service delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 leading-relaxed mb-6">
                  To create a one-stop platform that offers comprehensive, budget-friendly solutions for businesses
                  while empowering individuals to grow their skills for career and business success. We envision an
                  ecosystem where businesses thrive by outsourcing smarter, faster, and with confidence—letting us
                  handle the details so you can focus on growth.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Global reach with local expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Innovation-driven solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Sustainable business growth</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 leading-relaxed mb-6">
                  To provide comprehensive business support services on a pocket-friendly budget, all on one platform.
                  Our one-stop solution empowers businesses to streamline operations and individuals to grow their
                  skills, enabling success in both their careers and ventures.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Cost-effective solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Comprehensive service portfolio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Skill development programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Journey Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Journey</h3>
              <p className="text-gray-600">From a vision in Mumbai to serving clients globally</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

              <div className="space-y-12">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2015
                  </div>
                  <Card className="flex-1 p-6 shadow-lg border-0 bg-white/80">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Foundation & Vision</h4>
                      <p className="text-gray-600 mb-4">
                        Founded in Mumbai with a vision to revolutionize IT support services and bridge the gap between
                        technology and business needs.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Mumbai HQ</Badge>
                        <Badge variant="secondary">IT Support</Badge>
                        <Badge variant="secondary">Vision 2020</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2018
                  </div>
                  <Card className="flex-1 p-6 shadow-lg border-0 bg-white/80">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">National Expansion</h4>
                      <p className="text-gray-600 mb-4">
                        Expanded operations across India, serving 100+ enterprise clients and establishing regional
                        offices in major cities.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">100+ Clients</Badge>
                        <Badge variant="secondary">Pan-India</Badge>
                        <Badge variant="secondary">Enterprise Focus</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2021
                  </div>
                  <Card className="flex-1 p-6 shadow-lg border-0 bg-white/80">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Digital Transformation</h4>
                      <p className="text-gray-600 mb-4">
                        Launched cloud infrastructure and AI solutions, helping businesses navigate the digital
                        transformation journey during the pandemic.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Cloud Solutions</Badge>
                        <Badge variant="secondary">AI Integration</Badge>
                        <Badge variant="secondary">Digital First</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2024
                  </div>
                  <Card className="flex-1 p-6 shadow-lg border-0 bg-white/80">
                    <CardContent className="p-0">
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Global Presence</h4>
                      <p className="text-gray-600 mb-4">
                        Achieved global presence with 500+ clients across 50+ countries, offering comprehensive digital
                        solutions and 24/7 support.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">500+ Clients</Badge>
                        <Badge variant="secondary">50+ Countries</Badge>
                        <Badge variant="secondary">24/7 Support</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Our Services</Badge>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cloud infrastructure to AI-powered automation, we provide end-to-end technology solutions that drive
              business growth and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 overflow-hidden"
              >
                <CardHeader className="p-8 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center text-slate-800 mb-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">Client Success Stories</Badge>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our services and partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rotate-45"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-white/15 rotate-12"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 border border-white/25 -rotate-12"></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 border border-white/20 rotate-45"></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/40 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/50 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🚀 Ready to Transform?
          </Badge>
          <h2 className="text-5xl font-bold mb-6">
            Transform Your Business
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 500+ companies that trust KPB Solutions for their digital transformation journey. Get started with a
            free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 text-white px-8 py-4 text-lg rounded-full shadow-xl"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-whitebg-whitetext-slate-900 px-8 py-4 text-lg rounded-full"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
              <div className="font-semibold mb-1">Call Us</div>
              <div className="text-sm opacity-80">+91 98765 43210</div>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
              <div className="font-semibold mb-1">Email Us</div>
              <div className="text-sm opacity-80">hello@kpbsolutions.com</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
              <div className="font-semibold mb-1">Visit Us</div>
              <div className="text-sm opacity-80">Mumbai, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Diamond className="h-8 w-8 text-cyan-500" />
                <span className="text-2xl font-bold">KPB Supports Solutions</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Redefining Digital Excellence through innovative technology solutions, exceptional service delivery, and
                strategic partnerships that drive business growth.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Cloud Infrastructure</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Cybersecurity</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI Solutions</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Digital Transformation</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">IT Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Our Journey</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">News & Updates</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">API Reference</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Support Center</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Case Studies</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 KPB Supports Solutions. All rights reserved.</p>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Color Scheme Selector */}
      <ColorSchemeSelector />
    </div>
  )
}
