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
  FiRefreshCw,
  FiMail,
  FiFileText,
  FiBarChart
} from "react-icons/fi";
import { SiSlack, SiNotion, SiGithub, SiLinear, SiGooglecalendar, SiGmail } from "react-icons/si";

const LandingPage = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const useCases = [
    {
      title: "Sales Research before Meetings",
      description: "Research all my meetings for today and email me notes to prep",
      command: "Research my meetings for today and send me prep notes",
      apps: ["Calendar", "Gmail", "LinkedIn"],
      category: "Sales",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
      icon: FiUsers
    },
    {
      title: "Sprint Planning",
      description: "Use Linear to make a brief sprint plan doc for next 2 weeks",
      command: "Create a sprint plan doc for the next 2 weeks",
      apps: ["Linear", "Notion", "Google Docs"],
      category: "Engineering",
      image: "https://images.pexels.com/photos/5532668/pexels-photo-5532668.jpeg",
      icon: FiGitBranch
    },
    {
      title: "Overnight Updates",
      description: "Update me on overnight slack/email messages",
      command: "Summarize overnight messages and send me a digest",
      apps: ["Slack", "Gmail", "Notion"],
      category: "Productivity",
      image: "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png",
      icon: FiMessageSquare
    },
    {
      title: "Follow-Up Email Automation",
      description: "Automatically send follow-up emails to leads",
      command: "Send follow-up emails to leads who haven't responded",
      apps: ["Gmail", "CRM", "Calendar"],
      category: "Sales",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
      icon: FiMail
    },
    {
      title: "Content Calendar",
      description: "From a campaign document generate a full content calendar",
      command: "Generate a content calendar from our campaign doc",
      apps: ["Google Docs", "Notion", "Calendar"],
      category: "Marketing",
      image: "https://images.pexels.com/photos/17485657/pexels-photo-17485657.png",
      icon: FiCalendar
    },
    {
      title: "Expense Analysis",
      description: "Analyze my expenses and generate a report",
      command: "Analyze my expenses and create a summary report",
      apps: ["Google Sheets", "Gmail", "Slack"],
      category: "Finance",
      image: "https://images.pexels.com/photos/5532668/pexels-photo-5532668.jpeg",
      icon: FiBarChart
    }
  ];

  const integrations = [
    { icon: SiSlack, name: "Slack", color: "text-purple-500" },
    { icon: SiNotion, name: "Notion", color: "text-gray-700" },
    { icon: SiGithub, name: "GitHub", color: "text-gray-800" },
    { icon: SiLinear, name: "Linear", color: "text-blue-500" },
    { icon: SiGooglecalendar, name: "Google Calendar", color: "text-green-500" },
    { icon: SiGmail, name: "Gmail", color: "text-red-500" },
    { icon: FiFileText, name: "Google Docs", color: "text-blue-600" },
    { icon: FiLayers, name: "Airtable", color: "text-yellow-500" },
  ];

  const categories = ["All", "Sales", "Engineering", "Productivity", "Marketing", "Finance"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredUseCases = selectedCategory === "All" 
    ? useCases 
    : useCases.filter(useCase => useCase.category === selectedCategory);

  const faqs = [
    {
      question: "How is this different from Zapier?",
      answer: "Minro uses AI to understand your requests in plain English and can handle complex, multi-step workflows. Unlike Zapier's trigger-action model, Minro can perform entire tasks end-to-end with context awareness."
    },
    {
      question: "What kind of tasks can Minro handle?",
      answer: "Minro can handle complex workflows like research, content creation, data analysis, meeting prep, follow-ups, and more. It works across multiple apps and can make decisions based on context."
    },
    {
      question: "Do I need technical skills to use Minro?",
      answer: "Not at all! Just describe what you want in plain English. Minro handles all the technical complexity behind the scenes."
    },
    {
      question: "How secure is my data?",
      answer: "Your data is encrypted and secure. We only access what's necessary to complete your tasks and never store sensitive information permanently."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % filteredUseCases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredUseCases.length]);

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
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-lg font-bold">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Minro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#examples" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Examples</a>
              <a href="#integrations" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Integrations</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all font-medium">
                Start now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dash.ai Style */}
      <section 
        className="relative pt-24 pb-20 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1616763880410-744958efc093?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwYXR0ZXJuc3xlbnwwfHx8dGVhbHwxNzUyMjE1NTc0fDA&ixlib=rb-4.1.0&q=85')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              The AI for Work
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Minro connects to all your tools to complete entire tasks.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Start now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section - Dash.ai Style */}
      <section id="examples" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What can Minro do?
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {useCase.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="mb-4">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <p className="text-sm text-gray-800 font-medium">"{useCase.command}"</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.apps.map((app, appIndex) => (
                      <span key={appIndex} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for the Modern Workplace
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minro doesn't just connect apps - it completes entire workflows with AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FiLayers,
                title: "Integrates with all your Apps",
                description: "Connect to 100+ popular business tools seamlessly"
              },
              {
                icon: FiZap,
                title: "Create automated workflows",
                description: "Build complex multi-step automations with natural language"
              },
              {
                icon: FiRefreshCw,
                title: "Run on triggers",
                description: "Set up triggers to run workflows automatically"
              },
              {
                icon: FiSearch,
                title: "Search across apps",
                description: "Find information across all your connected tools"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Works with your favorite tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect to all the apps you use every day. No setup required.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group text-center"
              >
                <integration.icon className={`w-12 h-12 mx-auto mb-4 ${integration.color} group-hover:scale-110 transition-transform`} />
                <p className="font-semibold text-gray-900">{integration.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">+ 90+ more integrations</p>
            <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
              View all integrations →
            </button>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to automate your work?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've automated their workflows with Minro.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
              Start now
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
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
                The AI for Work. Automate entire tasks with natural language.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
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