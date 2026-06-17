
const OurOffice = () => {
  return (
    <section className="office-address-section ptb-120">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">

              <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Our Office</h2><p className="text-lg text-gray-600">Located Around the World</p></div>
            </div>
          </div>
        </div>

        {/* 4 office cards using responsive Tailwind flex */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto lg:w-[90%]">
          {/* Card 1 */}
          <div className="w-full">
            <div
              className="rounded-md border d-block office-address overflow-hidden z-10 bg-cover bg-center h-64 relative group"
              style={{ backgroundImage: "url('/assets/office/office-img-1.png')" }}
            >
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none"></span>
              <div className="office-content text-center p-4 h-full flex flex-col items-center justify-center relative" />
              {/* Visible title (hide when details are revealed) */}
              <div className="office-title absolute left-4 bottom-4 z-20 text-white font-semibold text-xl drop-shadow-md transition-opacity duration-300 group-hover:opacity-0">
                Bengaluru, India
              </div>
              {/* Hidden details, reveal on hover */}
              <div className="office-info absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center z-30">
                <h5 className="font-semibold text-2xl mb-3">Bengaluru, India</h5>
                <address className="not-italic text-sm leading-relaxed max-w-xs">
                  Head Office:
                  <br />
                  BCIT, Block 1, Ground Floor Bhartiya City, RK Hegde Nagar,
                  Bangalore.
                  <br />
                  <br />
                  +91 9019407023 (Mon - Fri)
                  <br />
                  info@simplify3x.com
                </address>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full">
            <div
              className="rounded-md border d-block office-address overflow-hidden z-10 bg-cover bg-center h-64 relative group"
              style={{ backgroundImage: "url('/assets/office/office-img-1.png')" }}
            >
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none"></span>
              <div className="office-content text-center p-4 h-full flex flex-col items-center justify-center relative" />
              <div className="office-title absolute left-4 bottom-4 z-20 text-white font-semibold text-xl drop-shadow-md transition-opacity duration-300 group-hover:opacity-0">
                Bengaluru, India
              </div>
              <div className="office-info absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center z-30">
                <h5 className="font-semibold text-2xl mb-3">Bengaluru, India</h5>
                <address className="not-italic text-sm leading-relaxed max-w-xs">
                  406, 2nd & 3rd Floor 1st Block, 7th Main Hennur Road,
                  Banaswadi Bengaluru, Karnataka, India (560043)
                  <br />
                  <br />
                  +91 80 411 16728 (Mon - Fri)
                  <br />
                  info@simplify3x.com
                </address>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full">
            <div
              className="rounded-md border d-block office-address overflow-hidden z-10 bg-cover bg-center h-64 relative group"
              style={{ backgroundImage: "url('/assets/office/office-img-2.png')" }}
            >
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none"></span>
              <div className="office-content text-center p-4 h-full flex flex-col items-center justify-center relative" />
              <div className="office-title absolute left-4 bottom-4 z-20 text-white font-semibold text-xl drop-shadow-md transition-opacity duration-300 group-hover:opacity-0">
                Orlando, Florida, USA
              </div>
              <div className="office-info absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center z-30">
                <h5 className="font-semibold text-2xl mb-3">Orlando, Florida, USA</h5>
                <address className="not-italic text-sm leading-relaxed max-w-xs">
                  1317, Edgewater Dr 897, Orlando Florida (32804)
                  <br />
                  <br />
                  +1 (678) 954-3946 (Mon - Fri)
                  <br />
                  info@simplify3x.com
                </address>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full">
            <div
              className="rounded-md border d-block office-address overflow-hidden z-10 bg-cover bg-center h-64 relative group"
              style={{ backgroundImage: "url('/assets/office/office-img-3.png')" }}
            >
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none"></span>
              <div className="office-content text-center p-4 h-full flex flex-col items-center justify-center relative" />
              <div className="office-title absolute left-4 bottom-4 z-20 text-white font-semibold text-xl drop-shadow-md transition-opacity duration-300 group-hover:opacity-0">
                Kuala Lumpur, Malaysia
              </div>
              <div className="office-info absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center z-30">
                <h5 className="font-semibold text-2xl mb-3">Kuala Lumpur, Malaysia</h5>
                <address className="not-italic text-sm leading-relaxed max-w-xs">
                  466, Unit 6, Level 4, SetiaWalk Mall (Block K) SetiaWalk,
                  Persiaran Wawasan Pusat Bandar Puchong (47160)
                  <br />
                  <br />
                  +603 8602 2095 (Mon - Fri)
                  <br />
                  info@simplify3x.com
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
