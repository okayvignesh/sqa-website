import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phoneNumber: '',
    primaryReason: '',
    teamSize: '',
    applicationTypes: [] as string[],
  });

  const personalEmailDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'yandex.com', 'zoho.com',
    'gmx.com', 'inbox.com', 'live.com', 'msn.com', 'yahoo.co.uk',
    'yahoo.co.in', 'rediffmail.com', 'me.com', 'mac.com'
  ];

  const validateBusinessEmail = (email: string): boolean => {
    if (!email) return false;

    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return false;

    if (personalEmailDomains.includes(domain)) {
      setEmailError('Please use a business email address. Personal email domains are not allowed.');
      return false;
    }

    setEmailError('');
    return true;
  };

  const primaryReasons = [
    'Evaluating testing tools',
    'Looking to replace current solution',
    'Starting a new project',
    'Scaling testing operations',
    'Compliance requirements',
    'Other',
  ];

  const teamSizes = [
    '1-5',
    '6-10',
    '11-25',
    '26-50',
    '51-100',
    '101-500',
    '500+',
  ];

  const applicationTypes = [
    { value: 'web', label: 'Web Applications' },
    { value: 'api', label: 'APIs' },
    { value: 'others', label: 'Others' },
    { value: 'mobile', label: 'iOS & Android Apps' },
    { value: 'database', label: 'Database' },
    { value: 'salesforce', label: 'Salesforce' },
    { value: 'mobileWeb', label: 'Mobile Web' },
    { value: 'desktop', label: 'Desktop' },
  ];

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      applicationTypes: prev.applicationTypes.includes(value)
        ? prev.applicationTypes.filter((v) => v !== value)
        : [...prev.applicationTypes, value],
    }));
  };

  const handleEmailChange = (email: string) => {
    setFormData({ ...formData, businessEmail: email });
    if (email) {
      validateBusinessEmail(email);
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateBusinessEmail(formData.businessEmail)) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmailError('');
        setFormData({
          firstName: '',
          lastName: '',
          businessEmail: '',
          phoneNumber: '',
          primaryReason: '',
          teamSize: '',
          applicationTypes: [],
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className="rounded-2xl relative overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto modal-scrollbar"
        style={{
          background: 'rgb(4, 7, 13)',
          border: '1px solid rgba(216, 231, 242, 0.07)',
          borderRadius: '16px',
          boxShadow: 'rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset'
        }}
      >
        <div className="relative z-10 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Get Your Price Quote</h2>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
          >
            <X className="h-6 w-6" />
          </button>

        {isSuccess ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
              <svg className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Quote Request Received!
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto">
              Thank you for your interest in SimplifyQA. Our team will review your request 
              and contact you within 24 hours with your personalized price quote.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full">
                <label className="block text-sm mb-2" style={{ color: 'rgb(213, 219, 230)', cursor: 'default' }}>
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="John"
                  className="w-full focus:outline-none transition-all"
                  style={{
                    background: 'rgb(4, 7, 13)',
                    border: '1px solid rgba(216, 231, 242, 0.07)',
                    borderRadius: '8px',
                    color: 'rgb(213, 219, 230)',
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '1.2em',
                    letterSpacing: '0em',
                    fontFamily: 'Inter, sans-serif',
                    height: '48px'
                  }}
                />
              </div>

              <div className="relative w-full">
                <label className="block text-sm mb-2" style={{ color: 'rgb(213, 219, 230)', cursor: 'default' }}>
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Doe"
                  className="w-full focus:outline-none transition-all"
                  style={{
                    background: 'rgb(4, 7, 13)',
                    border: '1px solid rgba(216, 231, 242, 0.07)',
                    borderRadius: '8px',
                    color: 'rgb(213, 219, 230)',
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '1.2em',
                    letterSpacing: '0em',
                    fontFamily: 'Inter, sans-serif',
                    height: '48px'
                  }}
                />
              </div>
            </div>

            <div className="relative w-full">
              <label className="block text-sm mb-2" style={{ color: 'rgb(213, 219, 230)', cursor: 'default' }}>
                Business Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.businessEmail}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="john.doe@acme.com"
                className="w-full focus:outline-none transition-all"
                style={{
                  background: 'rgb(4, 7, 13)',
                  border: emailError ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(216, 231, 242, 0.07)',
                  borderRadius: '8px',
                  color: 'rgb(213, 219, 230)',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '1.2em',
                  letterSpacing: '0em',
                  fontFamily: 'Inter, sans-serif',
                  height: '48px'
                }}
              />
              {emailError && (
                <p className="mt-2 text-sm" style={{ color: 'rgb(239, 68, 68)' }}>{emailError}</p>
              )}
            </div>

            <div className="relative w-full">
              <label className="block text-sm mb-2" style={{ color: 'rgb(213, 219, 230)', cursor: 'default' }}>
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                placeholder="+1 234 567 8900"
                className="w-full focus:outline-none transition-all"
                style={{
                  background: 'rgb(4, 7, 13)',
                  border: '1px solid rgba(216, 231, 242, 0.07)',
                  borderRadius: '8px',
                  color: 'rgb(213, 219, 230)',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '1.2em',
                  letterSpacing: '0em',
                  fontFamily: 'Inter, sans-serif',
                  height: '48px'
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full">
                <label className="block text-sm mb-2" style={{ color: 'rgb(213, 219, 230)', cursor: 'default' }}>
                  What is the primary reason you are here?<span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.primaryReason}
                  onChange={(e) => setFormData({ ...formData, primaryReason: e.target.value })}
                  className="w-full focus:outline-none transition-all appearance-none"
                  style={{
                    background: 'rgb(4, 7, 13)',
                    border: '1px solid rgba(216, 231, 242, 0.07)',
                    borderRadius: '8px',
                    color: 'rgb(213, 219, 230)',
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '1.2em',
                    letterSpacing: '0em',
                    fontFamily: 'Inter, sans-serif',
                    height: '48px'
                  }}
                >
                  <option value="">Please Select</option>
                  {primaryReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative w-full">
                <label className="block text-sm mb-2" style={{ color: 'rgb(213, 219, 230)', cursor: 'default' }}>
                  Size of QA team<span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="w-full focus:outline-none transition-all appearance-none"
                  style={{
                    background: 'rgb(4, 7, 13)',
                    border: '1px solid rgba(216, 231, 242, 0.07)',
                    borderRadius: '8px',
                    color: 'rgb(213, 219, 230)',
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '1.2em',
                    letterSpacing: '0em',
                    fontFamily: 'Inter, sans-serif',
                    height: '48px'
                  }}
                >
                  <option value="">Please Select</option>
                  {teamSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-3" style={{ color: 'rgb(213, 219, 230)', cursor: 'default' }}>
                Which Application Types will you be testing?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {applicationTypes.map((type) => (
                  <label
                    key={type.value}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.applicationTypes.includes(type.value)}
                      onChange={() => handleCheckboxChange(type.value)}
                      className="w-4 h-4 rounded cursor-pointer"
                      style={{
                        accentColor: 'rgb(59, 130, 246)',
                        background: 'rgb(4, 7, 13)',
                        border: '1px solid rgba(216, 231, 242, 0.07)'
                      }}
                    />
                    <span className="text-sm group-hover:text-blue-400 transition-colors" style={{ color: 'rgb(213, 219, 230)' }}>
                      {type.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !!emailError}
              className="w-full font-semibold text-white transition-all hover:opacity-90 relative overflow-visible cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                willChange: 'transform',
                padding: '14px 28px',
                height: 'min-content'
              }}
            >
              <div 
                className="absolute pointer-events-none overflow-hidden"
                style={{
                  inset: '0px -1px 0px 0px',
                  zIndex: 0,
                  background: 'radial-gradient(25% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
                  filter: 'blur(15px)',
                  borderRadius: '8px',
                  willChange: 'transform'
                }}
              />
              <div 
                className="absolute pointer-events-none overflow-hidden"
                style={{
                  inset: '0px -1px 0px 0px',
                  zIndex: 0,
                  background: 'radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
                  borderRadius: '8px',
                  willChange: 'auto'
                }}
              />
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: 'rgb(0, 0, 0)',
                  borderRadius: '8px',
                  zIndex: 1
                }}
              />
              <span className="relative flex items-center" style={{ zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mr-2 h-5 w-5">
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </span>
            </button>
            
            <p className="mt-4 text-sm text-center" style={{ color: 'rgb(156, 163, 175)' }}>
              By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
            </p>
          </form>
        )}
        
        <div 
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          style={{
            background: 'radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)',
            opacity: 0.1
          }}
        />
        </div>
      </div>
    </div>
  );
}

