// Add-on pricing data
export const pricingData = [
  {
    title: "Web Automation",
    price: "$15",
    time: "/month",
    bgColor: "bg-gray-50",
    textColor: "text-blue-600",
    btnColor: "btn-primary",
    shape: "top-right",
    listItem: [
      { li: "Scriptless record & playback" },
      { li: "Intelligent object recognition engine" },
      { li: "Automated reporting & analysis" },
      { li: "Cross browser testing" },
      { li: "Network API logs for test execution" },
      { li: "Web object inspector" }
    ]
  },
  {
    title: "Mobile Automation",
    price: "$25",
    time: "/month",
    bgColor: "bg-blue-50",
    textColor: "text-green-600",
    btnColor: "btn-success",
    shape: null,
    listItem: [
      { li: "Mobile record & playback" },
      { li: "Native app & hybrid app support" },
      { li: "Real device & emulator support" },
      { li: "Built-in integration with device farms" },
      { li: "Mobile object inspector" },
      { li: "Cross-platform testing" }
    ]
  },
  {
    title: "API & Database",
    price: "$20",
    time: "/month", 
    bgColor: "bg-green-50",
    textColor: "text-purple-600",
    btnColor: "btn-warning",
    shape: "bottom-left",
    listItem: [
      { li: "API test management" },
      { li: "Scriptless API editor" },
      { li: "Integrated Postman support" },
      { li: "Database validation" },
      { li: "Multiple DB support (MySQL, Oracle, etc.)" },
      { li: "Data-driven testing" }
    ]
  }
];

export const pricingDataPolupar = [
  {
    title: "Starter",
    price: "$29",
    time: "/month",
    bgColor: "bg-white",
    textColor: "text-primary",
    btnColor: "btn-outline-primary",
    btnText: "Get Started",
    btnWidth: "w-100",
    containerClassName: "col-lg-4 col-md-6",
    border: "border border-gray-200",
    popular: false,
    addOn: false,
    listItem: [
      { li: "Up to 5 projects" },
      { li: "Basic test automation" },
      { li: "Email support" },
      { li: "Standard reporting" },
      { li: "API access" }
    ]
  },
  {
    title: "Professional",
    price: "$99",
    time: "/month",
    bgColor: "bg-dark",
    textColor: "text-white",
    btnColor: "btn-primary",
    btnText: "Start Free Trial",
    btnWidth: "w-100",
    containerClassName: "col-lg-4 col-md-6",
    border: "border-0",
    popular: true,
    addOn: {
      title: "AI Testing",
      price: "$49",
      time: "/month",
      bgColor: "bg-light",
      textColor: "text-success",
      listItem: [
        { li: "AI-powered test generation" },
        { li: "Smart test maintenance" },
        { li: "Predictive analytics" }
      ]
    },
    listItem: [
      { li: "Unlimited projects" },
      { li: "Advanced test automation" },
      { li: "Priority support" },
      { li: "Advanced reporting" },
      { li: "Custom integrations" },
      { li: "Team collaboration" },
      { li: "Performance testing" }
    ]
  },
  {
    title: "Enterprise",
    price: "Custom",
    time: "",
    bgColor: "bg-white",
    textColor: "text-warning",
    btnColor: "btn-outline-warning",
    btnText: "Contact Sales",
    btnWidth: "w-100",
    containerClassName: "col-lg-4 col-md-12",
    border: "border border-gray-200",
    popular: false,
    addOn: false,
    listItem: [
      { li: "Everything in Professional" },
      { li: "Dedicated support team" },
      { li: "Custom SLA" },
      { li: "On-premise deployment" },
      { li: "Advanced security features" },
      { li: "Custom training" }
    ]
  }
];
