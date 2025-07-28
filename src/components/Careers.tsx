import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

interface FormData {
  jobOpening: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  address: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  motivation: string;
  resume: File | null;
}

interface FormErrors {
  jobOpening?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  pincode?: string;
  motivation?: string;
  resume?: string;
}

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const Careers: React.FC = () => {
  // Job openings data
  const jobOpenings: JobOpening[] = [
    {
      id: 'Designer',
      title: 'Amazon Product Image & A+ Content Designer (Lifestyle + Portfolio Specialist)',
      department: 'Design',
      location: 'Hybrid / Bangalore',
      type: 'Part Time',
      description: 'Create custom images for the products we are going to showcase to the global market'
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    jobOpening: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    address: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    motivation: '',
    resume: null
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleJobSelect = (jobId: string) => {
    setFormData(prev => ({ ...prev, jobOpening: jobId }));
    setIsDropdownOpen(false);
    if (errors.jobOpening) {
      setErrors(prev => ({ ...prev, jobOpening: undefined }));
    }
  };

  const getSelectedJob = () => {
    return jobOpenings.find(job => job.id === formData.jobOpening);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
      if (validTypes.includes(file.type)) {
        setFormData(prev => ({ ...prev, resume: file }));
        setErrors(prev => ({ ...prev, resume: undefined }));
      } else {
        setErrors(prev => ({ ...prev, resume: 'Please upload a PDF or Word document' }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.jobOpening) newErrors.jobOpening = 'Please select a job opening';
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Please tell us why you want this job';
    if (!formData.resume) newErrors.resume = 'Resume is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[+]?[\d\s-()]{10,}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    // Pincode validation
    const pincodeRegex = /^\d{5,10}$/;
    if (formData.pincode && !pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid pincode';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'resume' && value instanceof File) {
          submitData.append(key, value);
        } else if (key !== 'resume') {
          submitData.append(key, value as string);
        }
      });

      // Submit to backend
      const response = await fetch('http://localhost:5000/careers', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        jobOpening: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        address: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        motivation: '',
        resume: null
      });

      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - ContactSection Style */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Dream Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Be part of our mission to transform brands through innovation and creativity. 
              We&apos;re looking for passionate individuals who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-green-800">
                Thank you for your application! We&apos;ll review it and get back to you soon.
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
            >
              <AlertCircle className="w-6 h-6 text-red-600" />
              <p className="text-red-800">
                There was an error submitting your application. Please try again.
              </p>
            </motion.div>
          )}

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apply for a Position</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Job Opening Selection */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                  Select Position
                </h3>
                
                <div>
                  <label htmlFor="jobOpening" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Opening *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.jobOpening ? 'border-red-500' : ''
                      }`}
                    >
                      {formData.jobOpening ? (
                        <span className="text-gray-900">{getSelectedJob()?.title}</span>
                      ) : (
                        <span className="text-gray-500">Select a job opening</span>
                      )}
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
                        {jobOpenings.map((job) => (
                          <button
                            key={job.id}
                            type="button"
                            onClick={() => handleJobSelect(job.id)}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                          >
                            <div className="font-medium text-gray-900">{job.title}</div>
                            <div className="text-sm text-gray-600">{job.department} • {job.location} • {job.type}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {errors.jobOpening && <p className="mt-1 text-sm text-red-600">{errors.jobOpening}</p>}
                </div>

                {/* Selected Job Details */}
                {formData.jobOpening && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-blue-50 rounded-xl p-4 border border-blue-200"
                  >
                    <h4 className="font-semibold text-blue-900 mb-2">{getSelectedJob()?.title}</h4>
                    <p className="text-sm text-blue-800 mb-2">
                      {getSelectedJob()?.department} • {getSelectedJob()?.location} • {getSelectedJob()?.type}
                    </p>
                    <p className="text-sm text-blue-700">{getSelectedJob()?.description}</p>
                  </motion.div>
                )}
              </div>
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.fullName ? 'border-red-500' : ''
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.phoneNumber ? 'border-red-500' : ''
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.gender ? 'border-red-500' : ''
                      }`}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                  Address Information
                </h3>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      errors.address ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your complete address"
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.country ? 'border-red-500' : ''
                      }`}
                      placeholder="Enter your country"
                    />
                    {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.state ? 'border-red-500' : ''
                      }`}
                      placeholder="Enter your state"
                    />
                    {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.city ? 'border-red-500' : ''
                      }`}
                      placeholder="Enter your city"
                    />
                    {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.pincode ? 'border-red-500' : ''
                      }`}
                      placeholder="Enter your pincode"
                    />
                    {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>}
                  </div>
                </div>
              </div>

              {/* Application Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                  Application Details
                </h3>
                
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want this job? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows={5}
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      errors.motivation ? 'border-red-500' : ''
                    }`}
                    placeholder="Tell us what motivates you to join our team and how you can contribute to our mission..."
                  />
                  {errors.motivation && <p className="mt-1 text-sm text-red-600">{errors.motivation}</p>}
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume (PDF or Word) *
                  </label>
                  <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
                    errors.resume ? 'border-red-500' : 'border-gray-300 hover:border-blue-400'
                  }`}>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      {formData.resume ? (
                        <div className="flex items-center justify-center space-x-2">
                          <FileText className="w-5 h-5 text-green-600" />
                          <span className="text-green-600 font-medium">{formData.resume.name}</span>
                        </div>
                      ) : (
                        <div>
                          <p className="text-gray-600 font-medium">Click to upload your resume</p>
                          <p className="text-sm text-gray-500 mt-1">PDF or Word document (max 10MB)</p>
                        </div>
                      )}
                    </label>
                  </div>
                  {errors.resume && <p className="mt-1 text-sm text-red-600">{errors.resume}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              Questions about the application process? Contact us at{' '}
              <a href="mailto:careers@dolfynbrands.com" className="text-blue-600 hover:text-blue-700 font-medium">
                careers@dolfynbrands.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
