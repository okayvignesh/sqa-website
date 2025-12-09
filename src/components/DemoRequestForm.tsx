import { Calendar, CheckCircle, Mail, X } from 'lucide-react';
import React, { useState } from 'react';

interface DemoRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoRequestForm: React.FC<DemoRequestFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneCountry: '+91',
    phone: '',
    email: '',
    organisation: '',
    designation: '',
    comments: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    setIsSubmitted(true);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Request a Demo</h2>
                <p className="text-sm mt-1 opacity-90">Fill the form and our team will reach out to schedule your demo.</p>
              </div>
            </div>

            {/* Demo Benefits */}
            <div className="p-6 bg-blue-50 border-b border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What You'll Get in Your Demo:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Personalized walkthrough of SimplifyQA features
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom use case demonstration
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  ROI calculation for your team
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Q&A with our testing experts
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="p-6">
              {/* Simplified form: Name, Phone (country+number), Email, Organisation, Designation, Comments */}
              <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <div className="flex">
                      <select
                        name="phoneCountry"
                        value={formData.phoneCountry}
                        onChange={handleInputChange}
                        className="px-3 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-white"
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="123 456 7890"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organisation *</label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your Organisation"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., QA Manager"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                  <div />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              {/* no extra checkbox: only requested fields are present */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
                >
                  Schedule My Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </button>

                <a
                  href="https://calendly.com/simplifyqa/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center border border-gray-200 rounded-lg px-6 py-4 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Schedule via Calendly
                </a>
              </div>

              <p className="mt-4 text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                Our team will contact you within 24 hours to confirm your demo.
              </p>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Demo Request Received!
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
              Thank you for your interest in SimplifyQA. Our team will review your request 
              and contact you within 24 hours to schedule your personalized demo.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4">What Happens Next?</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Team Review</div>
                    <div className="text-gray-600">We'll review your requirements</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Demo Setup</div>
                    <div className="text-gray-600">Customize demo for your use case</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Live Session</div>
                    <div className="text-gray-600">45-minute personalized demo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Close
              </button>
              <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Contact Sales Team
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoRequestForm;