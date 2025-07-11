import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiPlay, 
  FiCheck, 
  FiZap, 
  FiUsers, 
  FiLayers,
  FiTrendingUp,
  FiGitBranch,
  FiMessageSquare,
  FiCalendar,
  FiClock,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";
import { SiSlack, SiNotion, SiGithub, SiLinear, SiGooglecalendar } from "react-icons/si";

const LandingPage = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const integrations = [
    { icon: SiSlack, name: "Slack", color: "text-purple-500" },
    { icon: SiNotion, name: "Notion", color: "text-gray-700" },
    { icon: SiGithub, name: "GitHub", color: "text-gray-800" },
    { icon: SiLinear, name: "Linear", color: "text-blue-500" },
    { icon: SiGooglecalendar, name: "Google Calendar", color: "text-green-500" },
    { icon: FiMessageSquare, name: "Discord", color: "text-indigo-500" },
    { icon: FiCalendar, name: "Calendly", color: "text-orange-500" },
    { icon: FiLayers, name: "Airtable", color: "text-yellow-500" },
  ];

  const demoSteps = [
    {
      text: "Log customer feedback from Slack to Notion automatically",
      workflow: "Slack → Notion",
      description: "When a customer leaves feedback in #feedback channel, create a new entry in your feedback database"
    },
    {
      text: "Create a summary for all the PRs in my GitHub repo",
      workflow: "GitHub → Summary",
      description: "Automatically generate weekly summaries of all pull requests with key changes and contributors"
    },
    {
      text: "Create a meeting for a feature request by the customer and push the issue to Linear",
      workflow: "Request → Calendar + Linear",
      description: "Schedule customer meetings and create corresponding Linear issues with context and priority"
    }
  ];

  const features = [
    {
      icon: FiZap,
      title: "Plain English Commands",
      description: "Describe what you want in natural language. No code, no complex configurations.",
      image: "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png"
    },
    {
      icon: FiLayers,
      title: "Universal Integrations",
      description: "Connect any app to any other app. We support 100+ integrations and growing.",
      image: "https://images.pexels.com/photos/5532668/pexels-photo-5532668.jpeg"
    },
    {
      icon: FiTrendingUp,
      title: "Smart Automation",
      description: "AI understands context and handles complex workflows that adapt to your needs.",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
    }
  ];

  const faqs = [
    {
      question: "How does Minro understand my automation requests?",
      answer: "Minro uses advanced AI to parse your natural language descriptions and automatically map them to the appropriate integrations and workflows. Our AI understands context, relationships, and common business processes."
    },
    {
      question: "Which apps and services does Minro integrate with?",
      answer: "Minro integrates with 100+ popular business tools including Slack, Notion, GitHub, Linear, Google Calendar, Discord, Airtable, and many more. We're constantly adding new integrations based on user requests."
    },
    {
      question: "Do I need any technical knowledge to use Minro?",
      answer: "Not at all! Minro is designed for everyone. Simply describe what you want in plain English, and our AI will build the automation for you. No coding or technical setup required."
    },
    {
      question: "How secure is my data with Minro?",
      answer: "We take security seriously. All data is encrypted in transit and at rest. We follow industry-standard security practices and never store your sensitive business data permanently."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMTIiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik0xMiAxNEgyOEMzMC4yMDkxIDE0IDMyIDE1Ljc5MDkgMzIgMThWMjJDMzIgMjQuMjA5MSAzMC4yMDkxIDI2IDI4IDI2SDEyQzkuNzkwODYgMjYgOCAyNC4yMDkxIDggMjJWMThDOCAxNS43OTA5IDkuNzkwODYgMTQgMTIgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI0MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTREOEM5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA4OTE5QSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
                alt="Minro"
                className="h-8 w-8 mr-3"
              />
              <span className="text-xl font-bold text-gray-900">Minro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#integrations" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591547878024-b41bc082eb9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3dzfGVufDB8fHx0ZWFsfDE3NTIyMTU1MjF8MA&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              Automate Anything
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                In Plain English
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Describe your workflow in natural language, and Minro's AI will build the automation for you. 
              Connect any app to any other app, no code required.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                Start Building Free
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <FiPlay className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Just Tell Us What You Want
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No complicated setup, no technical jargon. Describe your automation in plain English and watch it come to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {demoSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    activeDemo === index
                      ? 'border-teal-500 bg-teal-50 shadow-lg scale-105'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setActiveDemo(index)}
                  whileHover={{ scale: activeDemo === index ? 1.05 : 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeDemo === index ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-900 mb-2">{step.text}</p>
                      <p className="text-sm text-gray-600">{step.description}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                          {step.workflow}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400">minro.ai</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">You:</p>
                  <p className="text-white">{demoSteps[activeDemo].text}</p>
                </div>
                
                <div className="bg-teal-900/50 rounded-lg p-4 border border-teal-700">
                  <p className="text-sm text-teal-400 mb-2">Minro:</p>
                  <p className="text-white mb-3">Perfect! I'll create that automation for you.</p>
                  <div className="flex items-center gap-2 text-teal-400">
                    <FiCheck className="w-4 h-4" />
                    <span className="text-sm">Automation created successfully</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful automation that grows with your business, designed to be intuitive and intelligent.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Connect Everything
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minro integrates with all the tools you already use. 100+ integrations and growing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group cursor-pointer"
              >
                <integration.icon className={`w-8 h-8 mx-auto mb-3 ${integration.color} group-hover:scale-110 transition-transform`} />
                <p className="text-sm text-center text-gray-600">{integration.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              View All Integrations →
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Growing Teams
            </h2>
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">10k+</div>
                <div className="text-sm text-gray-600">Automations Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Hours Saved Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Minro has revolutionized how our team handles repetitive tasks. What used to take hours now happens automatically.",
                author: "Sarah Chen",
                role: "Product Manager",
                company: "TechCorp",
                image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
              },
              {
                quote: "The plain English interface is a game-changer. Our entire team can create automations without any technical knowledge.",
                author: "Michael Torres",
                role: "Operations Lead",
                company: "GrowthCo",
                image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
              },
              {
                quote: "We've saved over 20 hours per week since implementing Minro. The ROI is incredible.",
                author: "Emily Rodriguez",
                role: "CEO",
                company: "StartupXYZ",
                image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Minro
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <FiChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Everything?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who've already discovered the power of plain English automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMTIiIGZpbGw9InVybCgjZ3JhZGllbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik0xMiAxNEgyOEMzMC4yMDkxIDE0IDMyIDE1Ljc5MDkgMzIgMThWMjJDMzIgMjQuMjA5MSAzMC4yMDkxIDI2IDI4IDI2SDEyQzkuNzkwODYgMjYgOCAyNC4yMDkxIDggMjJWMThDOCAxNS43OTA5IDkuNzkwODYgMTQgMTIgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDBfbGluZWFyXzFfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI0MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTREOEM5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA4OTE5QSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
                  alt="Minro"
                  className="h-8 w-8 mr-3"
                />
                <span className="text-xl font-bold">Minro</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The AI-powered automation platform that understands plain English and connects all your favorite tools.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Minro. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;