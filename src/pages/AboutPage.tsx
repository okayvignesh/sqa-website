import { Award, Target, Users } from 'lucide-react';

import { useEffect } from 'react';

const AboutPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at TestTech with 15+ years in quality assurance and test automation.",
      image: "/assets/illustrate/people.png"
    },
    {
      name: "Dr. Sarah Kim",
      role: "CTO & Co-Founder",
      bio: "PhD in Computer Science, former Principal Engineer at Google focusing on testing infrastructure.",
      image: "/assets/illustrate/Girl.png"
    },
    {
      name: "Marcus Johnson",
      role: "VP of Engineering",
      bio: "Led testing teams at Microsoft and Amazon, expert in scalable testing architectures.",
      image: "/assets/illustrate/people.png"
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Customer Success",
      bio: "15+ years helping enterprise customers optimize their testing and quality processes.",
      image: "/assets/illustrate/Girl.png"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Quality First",
      description: "We believe quality software starts with quality testing. Every decision we make prioritizes helping our customers deliver better products."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Customer Success",
      description: "Your success is our success. We're committed to providing the tools, support, and expertise needed to achieve your testing goals."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in testing automation, leveraging the latest technologies and methodologies."
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", description: "SimplifyQA was born from the frustration of complex testing workflows." },
    { year: "2020", title: "First Enterprise Customer", description: "Signed our first Fortune 500 customer and proved enterprise viability." },
    { year: "2021", title: "AI Integration", description: "Launched AI-powered test generation, revolutionizing automated testing." },
    { year: "2022", title: "Series A Funding", description: "Raised $25M Series A to accelerate product development and growth." },
    { year: "2023", title: "Global Expansion", description: "Expanded operations to serve customers across North America and Europe." },
    { year: "2024", title: "1M+ Tests Daily", description: "Platform now processes over 1 million test executions daily." }
  ];

  return (
    <div className="pt-16 about-bg">
    

      {/* Zigzag sections: alternating left-right layout */}
      <section className=''>

        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The SimplifyQA Story
            </h2>
          </div>
          {/* Zigzag Layout Component */}
          {/* eslint-disable-next-line react/no-unstable-nested-components */}
          {(() => {
            const ZigzagSection = ({ img, title, text, reverse = false, index }: { img: string; title: string; text: string; reverse?: boolean; index: number }) => {
              // Get the total number of sections to determine last and second-to-last
              const totalSections = 6; // Based on the sections array length
              const isLastImage = index === totalSections - 1;
              const isSecondToLastImage = index === totalSections - 2;
              const isPuzzleImage = img === '/assets/illustrate/Puzzle_copy.png';
              
              let imageWidth = '350px'; // default
              if (isLastImage) {
                imageWidth = '320px';
              } else if (isSecondToLastImage) {
                imageWidth = '280px';
              } else if (isPuzzleImage) {
                imageWidth = '280px';
              }
              
              return (
                <div>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <img 
                        src={img} 
                        alt={title} 
                        className="w-full rounded-lg" 
                        style={{ maxWidth: imageWidth, width: '100%' }} 
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-4 lg:p-8">
                      <p className="text-white leading-relaxed" style={{ fontSize: '17px' }}>
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            };

            const illustrations = [
              '/assets/illustrate/Artboard 1@2x 10.png',
              '/assets/illustrate/Girl 1.png',
              '/assets/illustrate/people copy 1.png',
              '/assets/illustrate/Puzzle_copy.png',
              '/assets/illustrate/SQA bot 1.png',
              '/assets/illustrate/board.png',
            ];

            const sections = [
              {
                title: 'Quality Assurance', text: `Quality Assurance was supposed to make software better. Instead, somewhere along the way, it became complicated.

  Ever counted how many apps you juggle every day for testing? There was a time when manual checklists and spreadsheets ruled the quality game. Then came the age of automation, where scripts took center stage—but also deepened the rift between "functional" and "technical" teams. One tool for test management, another for automation, a third for defect tracking. Teams started working in silos, wasting more time switching tabs than actually improving quality. The very process meant to ensure confidence in software ended up creating chaos.` },

              { title: 'Our Vision', text: `We started SimplifyQA because we believed testing deserved better. Our vision was simple: to build a platform where all those scattered parts finally fit together. A single, unified space where test planning, automation, execution, and reporting all live together—like LEGO blocks snapped into a single, intuitive workspace.` },

              { title: 'Inclusivity', text: `At the heart of our platform is inclusivity. We pioneered scriptless automation so that anyone—whether a tester, developer, or business user—can create and run a test case without needing to know code. Testing shouldn’t belong only to specialists. It should be something every team member can contribute to.` },

              { title: 'Built for Impact', text: `But unifying tools wasn’t enough. We wanted to push QA forward. That’s why SimplifyQA is built with impact analysis that sees change before it breaks things, cloud execution that finishes in hours what used to take days, and dashboards that turn raw data into clear decisions.` },

              { title: 'Our Belief', text: `More than a platform, SimplifyQA is a belief: that quality should be simple, scalable, and accessible for everyone. We invest heavily in innovation, listening to real teams, solving real bottlenecks, and constantly evolving our platform to match the pace of technology. Today, SimplifyQA is trusted by teams across industries and geographies who share the same frustration we once felt—and the same dream we’re building toward.` },

              { title: 'Inventing the Future', text: `Because we believe the best way to predict the future of quality is not to wait for it. It's to invent it—and make it radically accessible for everyone.` }
            ];

            return (
              <>
                {sections.map((s, i) => (
                  <div key={i}>
                    <ZigzagSection
                      img={illustrations[i % illustrations.length]}
                      title={s.title}
                      text={s.text}
                      reverse={i % 2 === 1}
                      index={i}
                    />
                    {/* Dot section between each main section */}
                    {i < sections.length - 1 && (
                      <div style={{ width: '75%', margin: 'auto' }}>
                        {(i === 0 || i === 2 || i === 4 || i === 6) ? (
                          <img
                            src="/assets/illustrate/right_dot.svg"
                            alt="Right dot"
                            className="w-full"
                            style={{ filter: 'invert(1)' }}
                          />
                        ) : (
                          <img
                            src="/assets/illustrate/left_dot.svg"
                            alt="Left dot"
                            className="w-full"
                            style={{ filter: 'invert(1)' }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </>
            );
          })()}
        </div>
      </section>


      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by a commitment to excellence, innovation, and customer success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving SimplifyQA's vision and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center group feature-gradient-bg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                  style={{ maxWidth: '350px', width: '100%', margin: 'auto' }}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader - here's how we've grown.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                <div className="ml-16">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals who share our passion for quality software.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </section> */}



    </div>
  );
};

export default AboutPage;