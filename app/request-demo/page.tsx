import { permanentRedirect } from 'next/navigation';

// Marketing CTA URL used in outbound links and campaigns. There is no
// standalone demo page — booking runs through the Calendly modal — so any
// inbound traffic is consolidated onto /contact with a permanent redirect
// (no duplicate/thin page, no 404).
export default function RequestDemoPage() {
  permanentRedirect('/contact');
}
