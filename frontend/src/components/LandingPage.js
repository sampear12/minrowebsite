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
  FiX,
  FiRefreshCw
} from "react-icons/fi";
import { SiSlack, SiNotion, SiGithub, SiLinear, SiGooglecalendar } from "react-icons/si";

const LandingPage = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [typingText, setTypingText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const examples = [
    {
      input: "When someone mentions 'bug' in Slack, create a GitHub issue",
      output: "✅ Automation created! Now watching #dev-team channel",
      apps: ["Slack", "GitHub"]
    },
    {
      input: "Log customer feedback from support emails to Notion",
      output: "✅ Automation created! Now processing support@company.com",
      apps: ["Gmail", "Notion"]
    },
    {
      input: "Create calendar events when Linear issues are marked urgent",
      output: "✅ Automation created! Now monitoring Linear project",
      apps: ["Linear", "Calendar"]
    }
  ];

  const problems = [
    "Manually copying data between apps",
    "Forgetting to follow up on important tasks",
    "Spending hours on repetitive workflows",
    "Missing notifications across different tools"
  ];

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

  const faqs = [
    {
      question: "How is this different from Zapier?",
      answer: "Minro uses AI to understand your requests in plain English. No need to learn triggers, actions, or complex workflows. Just describe what you want and we build it for you instantly."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Not at all! Minro is designed for everyone. Simply describe what you want in plain English, and our AI handles all the technical complexity."
    },
    {
      question: "What apps does it work with?",
      answer: "Minro works with 100+ popular business tools including Slack, Notion, GitHub, Linear, Google Calendar, Discord, and many more. We're constantly adding new integrations."
    },
    {
      question: "How secure is my data?",
      answer: "We take security seriously. All data is encrypted and we never store your business information. We only create secure connections between your authorized apps."
    }
  ];

  // Typing animation
  useEffect(() => {
    const example = examples[currentExample];
    let index = 0;
    setTypingText("");
    setIsComplete(false);

    const typingInterval = setInterval(() => {
      if (index < example.input.length) {
        setTypingText(example.input.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setIsComplete(true), 1000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [currentExample]);

  // Auto-advance examples
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examples.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
              <a href="#how" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">How it Works</a>
              <a href="#integrations" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Integrations</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all font-medium">
                Get Started Free
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
              Stop Doing
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                Repetitive Work
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Tell Minro what you want in plain English. Our AI connects your apps and automates the boring stuff.
            </motion.p>
            
            {/* Problem Statement */}
            <motion.div 
              variants={itemVariants}
              className="mb-12"
            >
              <p className="text-lg text-gray-500 mb-4">Tired of...</p>
              <div className="flex flex-wrap justify-center gap-4">
                {problems.map((problem, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm border border-red-200"
                  >
                    {problem}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                Automate My Work
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
                <FiPlay className="w-5 h-5" />
                See It in Action
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Simple Demo Section */}
      <section id="how" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Here's How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No learning curve. No setup. Just describe what you want.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Input Side */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Tell us what you want</h3>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">You</span>
                    </div>
                    <span className="font-medium text-gray-900">Type your request</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 min-h-[80px] flex items-center">
                    <p className="text-gray-900 text-lg">
                      {typingText}
                      {!isComplete && <span className="animate-pulse text-teal-600">|</span>}
                    </p>
                  </div>
                </div>
              </div>

              {/* Output Side */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">2. We build it instantly</h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentExample}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-50 rounded-xl p-6 border border-green-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <FiCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">Minro</span>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-gray-900 text-lg mb-3">
                        {isComplete ? examples[currentExample].output : "Building your automation..."}
                      </p>
                      {isComplete && (
                        <div className="flex gap-2">
                          {examples[currentExample].apps.map((app, index) => (
                            <span key={index} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                              {app}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Example switcher */}
            <div className="mt-8 flex justify-center gap-2">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExample(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentExample === index ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Teams Choose Minro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save hours every week. No technical skills required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FiMessageSquare,
                title: "Just Use Plain English",
                description: "No triggers, actions, or complex workflows. Just tell us what you want like you're talking to a colleague.",
                benefit: "5 minutes to set up vs 2 hours with traditional tools"
              },
              {
                icon: FiZap,
                title: "Works Instantly",
                description: "Our AI builds and deploys your automation in seconds. No waiting, no debugging, no setup.",
                benefit: "Automations work immediately"
              },
              {
                icon: FiUsers,
                title: "Built for Everyone",
                description: "Your entire team can create automations. No need to bother the IT department or learn new software.",
                benefit: "Anyone can use it, not just tech people"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-sm font-medium text-teal-700">✓ {feature.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section - Simplified */}
      <section id="integrations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Connects Your Favorite Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Works with the tools you already use. No need to change your workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-200 hover:shadow-md transition-all group text-center"
              >
                <integration.icon className={`w-8 h-8 mx-auto mb-3 ${integration.color} group-hover:scale-110 transition-transform`} />
                <p className="font-medium text-gray-900">{integration.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">+ 90 more integrations</p>
            <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              See All Integrations →
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Join 5,000+ Teams Saving Time
            </h2>
            <div className="flex justify-center items-center gap-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">15 hrs</div>
                <div className="text-gray-600">Average weekly time saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">2 min</div>
                <div className="text-gray-600">Average setup time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">99%</div>
                <div className="text-gray-600">Customer satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "I automated 5 repetitive tasks in 10 minutes. This is magic.",
                author: "Sarah Chen",
                role: "Product Manager at TechCorp"
              },
              {
                quote: "Finally, automation that doesn't require a computer science degree.",
                author: "Michael Torres",
                role: "Operations Lead at GrowthCo"
              },
              {
                quote: "Our team saves 20+ hours per week. Best investment we've made.",
                author: "Emily Rodriguez",
                role: "CEO at StartupXYZ"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <p className="text-gray-700 mb-4 italic text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
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
              Stop Wasting Time on Repetitive Tasks
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join thousands of people who automated their work in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
                Start Automating Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all">
                See Live Demo
              </button>
            </div>
            <p className="text-teal-200 text-sm mt-4">No credit card required • Set up in 2 minutes</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-lg font-bold">M</span>
                </div>
                <span className="text-xl font-bold">Minro</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Automate your work with plain English. No code required.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
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
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 Minro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;