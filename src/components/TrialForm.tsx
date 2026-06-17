import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface TrialFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialForm({ isOpen, onClose }: TrialFormProps) {
  const handleScheduleMeeting = () => {
    window.open('https://outlook.office.com/book/SimplifyQAMeeting@simplify3x.com/?ismsaljsauthenabled', '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-gray-900 border border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-purple-400" />
            <span>Schedule Your Demo</span>
          </DialogTitle>
          <p className="text-gray-400 mt-2">
            Book a personalized 20-minute demo with our SimplifyQA experts
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Booking Information */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">What to Expect:</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>Personalized demo tailored to your testing needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>Live demonstration of SimplifyQA's AI-powered features</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>Q&A session with our technical experts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <span>Discussion of your specific use cases and requirements</span>
              </li>
            </ul>
          </div>

          {/* Schedule Button */}
          <div className="text-center">
            <Button
              onClick={handleScheduleMeeting}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo Meeting
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-gray-400 text-sm mt-3">
              Opens Microsoft Outlook booking in a new tab
            </p>
          </div>

          {/* Alternative Contact */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-300 text-sm text-center">
              Prefer a different method?{' '}
              <a href="mailto:info@simplify3x.com" className="text-blue-400 hover:text-blue-300">
                Email us
              </a>{' '}
              or call us directly
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

