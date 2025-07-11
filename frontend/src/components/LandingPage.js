import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FiChevronUp,
  FiPlus,
  FiSearch,
  FiX
} from "react-icons/fi";
import { SiSlack, SiNotion, SiGithub, SiLinear, SiGooglecalendar } from "react-icons/si";

const LandingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const automationExamples = [
    {
      text: "Summarize my slack thread and write a PRD in Docs",
      description: "AI will analyze your Slack conversation and automatically create a comprehensive Product Requirements Document",
      apps: ["Slack", "Google Docs"],
      result: "PRD created with key requirements, user stories, and technical specifications"
    },
    {
      text: "Log customer feedback from Slack to Notion automatically",
      description: "When customers provide feedback in Slack, automatically create structured entries in your Notion database",
      apps: ["Slack", "Notion"],
      result: "Feedback logged with sentiment analysis, priority, and assigned team member"
    },
    {
      text: "Create a meeting for feature requests and push to Linear",
      description: "Schedule stakeholder meetings for feature requests and create corresponding Linear issues",
      apps: ["Google Calendar", "Linear"],
      result: "Meeting scheduled with agenda, Linear ticket created with proper priority"
    }
  ];

  const integrations = [
    { icon: SiSlack, name: "Slack", color: "text-purple-500", status: "Connected" },
    { icon: SiNotion, name: "Notion", color: "text-gray-700", status: "Connected" },
    { icon: SiGithub, name: "GitHub", color: "text-gray-800", status: "Connected" },
    { icon: SiLinear, name: "Linear", color: "text-blue-500", status: "Connected" },
    { icon: SiGooglecalendar, name: "Google Calendar", color: "text-green-500", status: "Connected" },
    { icon: FiMessageSquare, name: "Discord", color: "text-indigo-500", status: "Available" },
    { icon: FiCalendar, name: "Calendly", color: "text-orange-500", status: "Available" },
    { icon: FiLayers, name: "Airtable", color: "text-yellow-500", status: "Available" },
  ];

  const features = [
    {
      icon: FiMessageSquare,
      title: "Natural Language Processing",
      description: "Describe your workflow in plain English. Our AI understands context, relationships, and business logic.",
      highlight: "No code required"
    },
    {
      icon: FiZap,
      title: "Instant Automation",
      description: "Watch your automations come to life in seconds. Connect any app to any other app with zero setup.",
      highlight: "Deploy in seconds"
    },
    {
      icon: FiUsers,
      title: "Team Collaboration",
      description: "Share automations across your team. Chat with your automations to modify and optimize them.",
      highlight: "Built for teams"
    }
  ];

  const workflowSteps = [
    { step: 1, title: "Describe", description: "Tell us what you want in plain English" },
    { step: 2, title: "Connect", description: "We'll connect the required apps automatically" },
    { step: 3, title: "Deploy", description: "Your automation runs instantly" },
    { step: 4, title: "Chat", description: "Refine and optimize through conversation" }
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

  // Typing animation effect
  useEffect(() => {
    const currentExample = automationExamples[currentStep];
    let index = 0;
    setTypingText("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (index < currentExample.text.length) {
        setTypingText(currentExample.text.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentStep]);

  // Auto-advance examples
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % automationExamples.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-lg font-bold">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Minro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
              <a href="#integrations" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Integrations</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
            >
              Automate Anything
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                Just Ask
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Describe your workflow in plain English. Minro's AI builds the automation, connects your apps, and deploys it instantly.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <button className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                Start Building Free
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
                <FiPlay className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Workflow Steps */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {workflowSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={floatVariants}
                  animate="animate"
                  className="text-center"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-teal-600 font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See Minro in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how simple it is to create powerful automations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Demo Interface */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">M</span>
                    </div>
                    <span className="font-semibold text-gray-900">Minro</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Welcome Message */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome, <span className="text-teal-600">samikasanghvi</span>
                </h3>
                <p className="text-gray-600 mb-8">
                  Describe what you need in plain english and Minro will build the automation for you
                </p>

                {/* Input Box */}
                <div className="relative mb-8">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 min-h-[120px] flex items-center justify-center">
                    <div className="w-full">
                      <p className="text-left text-gray-900 font-medium">
                        {typingText}
                        {isTyping && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Popular Automations */}
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <FiZap className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">Popular automations:</span>
                  </div>
                  <div className="space-y-3">
                    {automationExamples.map((example, index) => (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          currentStep === index 
                            ? 'border-teal-500 bg-teal-50 text-teal-900' 
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                        onClick={() => setCurrentStep(index)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                            <span className="text-teal-600 text-xs font-semibold">
                              {index === 0 ? 'G' : index === 1 ? 'S' : 'L'}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium line-clamp-2">{example.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Automation Result */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Automation Preview</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Description:</p>
                      <p className="text-gray-900">{automationExamples[currentStep].description}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Connected Apps:</p>
                      <div className="flex gap-2">
                        {automationExamples[currentStep].apps.map((app, index) => (
                          <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FiCheck className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Automation Created</span>
                      </div>
                      <p className="text-sm text-green-700">{automationExamples[currentStep].result}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Connected Apps Preview */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connected Apps</h3>
                <div className="grid grid-cols-2 gap-3">
                  {integrations.slice(0, 4).map((integration, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <integration.icon className={`w-5 h-5 ${integration.color}`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{integration.name}</p>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {integration.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for the Future of Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful automation that understands your business and adapts to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center gap-2 text-teal-600 font-medium">
                  <span className="text-sm">{feature.highlight}</span>
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Works with Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect 100+ apps instantly. No setup, no configuration required.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <integration.icon className={`w-8 h-8 ${integration.color} group-hover:scale-110 transition-transform`} />
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    integration.status === 'Connected' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {integration.status}
                  </span>
                </div>
                <p className="font-medium text-gray-900">{integration.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center gap-2 mx-auto">
              View All 100+ Integrations
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Modern Teams
            </h2>
            <div className="flex justify-center items-center gap-12 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">10k+</div>
                <div className="text-sm text-gray-600">Automations Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Hours Saved Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Minro transformed our workflow. Complex automations that used to take hours now happen in minutes.",
                author: "Sarah Chen",
                role: "Product Manager",
                company: "TechCorp",
                image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
              },
              {
                quote: "The natural language interface is revolutionary. Our entire team creates automations without any technical knowledge.",
                author: "Michael Torres",
                role: "Operations Lead",
                company: "GrowthCo",
                image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
              },
              {
                quote: "We've automated 80% of our repetitive tasks. The time savings and accuracy improvements are incredible.",
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
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams automating their work with natural language
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
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
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-lg font-bold">M</span>
                </div>
                <span className="text-xl font-bold">Minro</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
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
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
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