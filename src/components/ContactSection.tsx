import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "Message sent successfully!");
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setResponseMsg("Failed to send message. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Thrasio Style */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Let&apos;s Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your brand into a global leader? We&apos;re here to make it happen. Let&apos;s start the conversation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const partnerSection = document.getElementById('partner-up');
                if (partnerSection) {
                  partnerSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 mx-auto hover:bg-gray-100 transition-colors"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="partner-up" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partner With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your brand? Let&apos;s start a conversation about how we can
                help you achieve extraordinary results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your brand transformation needs"
                      />
                    </div>
                    
                    {/* Status message */}
                    {status === 'success' && (
                      <div className="text-green-600 font-semibold">{responseMsg}</div>
                    )}
                    {status === 'error' && (
                      <div className="text-red-600 font-semibold">{responseMsg}</div>
                    )}
                    {status === 'loading' && (
                      <div className="text-blue-600 font-semibold">Sending...</div>
                    )}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* WhatsApp */}
                <div className="bg-green-500 rounded-3xl p-8 text-white shadow-lg">
                  <div className="flex items-center mb-4">
                    <MessageCircle size={32} className="mr-4" />
                    <h3 className="text-2xl font-bold">WhatsApp Business</h3>
                  </div>
                  <p className="text-green-100 mb-6">
                    Get instant support and quick answers to your questions through our WhatsApp Business account.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:bg-green-50 transition-colors"
                  >
                    <MessageCircle size={20} />
                    <span>Chat on WhatsApp</span>
                  </motion.button>
                </div>

                {/* Contact Details */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">contact@dolfynbrands.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">
                          123 Innovation Drive<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gray-900 rounded-3xl p-6 text-white shadow-lg">
                  <h4 className="font-bold text-lg mb-2">Quick Response Guarantee</h4>
                  <p className="text-gray-300">
                    We respond to all inquiries within 24 hours. For urgent matters, 
                    contact us via WhatsApp for immediate assistance.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}