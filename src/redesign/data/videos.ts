// Every website clip in one place. When a recording is ready, upload it to the
// CDN and paste its URL into `src` (and a still frame into `poster`). Each slot
// on the site switches from the placeholder to the video on its own.
// Source: "SimplifyQA docs, website, MCP guides and demo videos", section 4.

export type Video = {
  title: string;
  length: string;
  about: string;   // the MCP prompt, or what the walkthrough shows
  src?: string;
  poster?: string;
};

export const videos = {
  // Site clips
  hero: { title: 'Hero loop', length: '20–30s', about: 'Idea to production in one loop: plan, automate, run, report.' },
  mcp:  { title: 'SimplifyQA MCP', length: '60–90s', about: 'An AI assistant creating, recording and running tests in SimplifyQA.' },

  // SimplifyQA MCP clips (one prompt each)
  'mcp-story-to-tests': { title: 'User story to test cases', length: '30–45s', about: '"Write test cases for user story US-12, covering the happy path and the negative cases, and file them under the Login module."' },
  'mcp-web':            { title: 'Web test from one sentence', length: '30–45s', about: '"Record a test on our demo app: log in, add an employee named Priya Sharma, and check she appears in the employee list."' },
  'mcp-android':        { title: 'Android app', length: '30–45s', about: '"On my Android phone, record setting a 5-minute timer in the Clock app and check that it starts."' },
  'mcp-ios':            { title: 'iPhone', length: '30–45s', about: '"On the iPhone simulator, record switching Appearance to Dark in Settings and verify Dark is selected."' },
  'mcp-desktop':        { title: 'Windows desktop app', length: '30–45s', about: '"Record a Notepad++ test: type \'Release checklist\', save it as demo.txt on the Desktop, and check the window title."' },
  'mcp-mainframe':      { title: 'Mainframe', length: '30–45s', about: '"Record a logon on our test mainframe and check the READY prompt appears."' },
  'mcp-api':            { title: 'API', length: '30–45s', about: '"Create an API test for the Swagger Petstore: add a pet called Bruno, fetch it by its id, and assert the response."' },
  'mcp-database':       { title: 'Database', length: '30–45s', about: '"Record a database test on our QA PostgreSQL: read the latest order and verify its status is SHIPPED."' },
  'mcp-web-api-db':     { title: 'Web, API and database in one test', length: '30–45s', about: '"Sign up a new user on our web app, confirm GET /api/users returns them, and check the users table has the row."' },
  'mcp-custom-method':  { title: 'Custom method', length: '30–45s', about: '"Record a test on our demo shop that checks the cart total equals the sum of the item prices; write a custom method if no action fits."' },
  'mcp-why-failed':     { title: 'Why did it fail?', length: '30–45s', about: '"Run suite SU-7 on the cloud in parallel against QA, and tell me why anything failed."' },
  'mcp-self-heal':      { title: 'Self-heal (desktop)', length: '30–45s', about: '"TC-87 failed after the app update. Find out why and fix it."' },
  'mcp-coverage-gaps':  { title: 'Coverage gaps', length: '30–45s', about: '"Which stories in Sprint 12 have no test cases? Draft what\'s missing."' },

  // Platform walkthroughs (also the per-capability clips on the platform pages)
  'idea-to-sprint': { title: 'Idea to sprint', length: '30–45s', about: 'Epic, feature and user story with Write with AI; Sprint Board; My Board.' },
  automate:         { title: 'Automate without code', length: '30–45s', about: 'Record a web test, reuse a function, add test data, run on cloud, open the report.' },
  'execution-plan': { title: 'Execution plan', length: '30–45s', about: 'Cloud run with automatic re-run, live view, summary report and dashboards.' },
  'manual-esign':   { title: 'Manual testing with e-signature', length: '30–45s', about: 'Screenshots, pause, sign-off with e-signature, PDF report.' },
  mobile:           { title: 'Mobile', length: '30–45s', about: 'Record on a phone, run on a device cloud, watch the screen video.' },
  sap:              { title: 'SAP', length: '30–45s', about: 'Record and run an SAP test.' },
  dashboards:       { title: 'Dashboards', length: '30–45s', about: 'Release, execution and defect dashboards.' },
  'jira-ado':       { title: 'Jira and Azure DevOps', length: '30–45s', about: 'Two-way sync set-up.' },
} satisfies Record<string, Video>;

export type VideoId = keyof typeof videos;

export const mcpClips: VideoId[] = [
  'mcp-story-to-tests', 'mcp-web', 'mcp-android', 'mcp-ios', 'mcp-desktop', 'mcp-mainframe', 'mcp-api',
  'mcp-database', 'mcp-web-api-db', 'mcp-custom-method', 'mcp-why-failed', 'mcp-self-heal', 'mcp-coverage-gaps',
];
export const walkthroughs: VideoId[] = [
  'idea-to-sprint', 'automate', 'execution-plan', 'manual-esign', 'mobile', 'sap', 'dashboards', 'jira-ado',
];
