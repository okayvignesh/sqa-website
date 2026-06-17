import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface WebinarFormProps {
  isOpen: boolean;
  onClose: () => void;
  webinarTitle: string;
  webinarDate: string;
  webinarTime: string;
  presenter: string;
}

const WebinarForm: React.FC<WebinarFormProps> = ({
  isOpen,
  onClose,
  webinarTitle,
  webinarDate,
  webinarTime,
  presenter
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    experience: '',
    interests: [] as string[],
    marketingConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Webinar registration:', formData);
    setIsSubmitted(true);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const experienceLevels = [
    'Beginner (0-1 years)',
    'Intermediate (2-5 years)',
    'Advanced (5+ years)',
    'Expert (10+ years)'
  ];

  const interestAreas = [
    'AI-Powered Testing',
    'Mobile Automation',
    'API Testing',
    'Performance Testing',
    'Security Testing',
    'CI/CD Integration'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold mb-2">Register for Free Webinar</h2>
              <p className="text-blue-100">Secure your spot for this exclusive session</p>
            </div>

            {/* Webinar Details */}
            <div className="p-6 bg-blue-50 border-b border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{webinarTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                  {webinarDate}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-blue-600" />
                  {webinarTime}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-blue-600" />
                  {presenter}
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="john.doe@company.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="QA Manager"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Testing Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {interestAreas.map((interest) => (
                    <label key={interest} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3 mt-0.5"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to receive marketing communications from SimplifyQA about future webinars, 
                    product updates, and testing resources. You can unsubscribe at any time.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
              >
                Complete Registration
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <p className="mt-4 text-xs text-gray-500 text-center">
                By registering, you agree to our Terms of Service and Privacy Policy. 
                You'll receive a confirmation email with webinar access details.
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
              Registration Confirmed!
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
              You're all set for the webinar. We've sent a confirmation email with 
              the webinar link and calendar invite.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">What's Next?</h3>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>• Check your email for the webinar link</li>
                <li>• Add the event to your calendar</li>
                <li>• Join 15 minutes early for tech check</li>
                <li>• Prepare your questions for the Q&A</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Close
              </button>
              <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all">
                Browse More Webinars
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebinarForm;