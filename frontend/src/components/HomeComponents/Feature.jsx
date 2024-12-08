const Feature = () => {
    return (
      <div className="py-16 bg-[#eff2f9]">
        <div className="max-w-[1140px] m-auto text-center">
          <h1 className="font-extrabold text-[#222] text-[41px] mb-12">
            Why Use a Resume Builder?
          </h1>
  
          <div className="feature-container flex flex-wrap justify-center gap-16">
            <div className="feature-item flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-[300px] text-center transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="icon mb-6 text-blue-600 text-[36px]">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h2 className="font-extrabold text-blue-700 text-[24px] mb-4">
                Save Time and Effort
              </h2>
              <p className="text-gray-600 text-[16px]">
                Resume builders offer pre-designed templates, automate formatting, and simplify resume creation. Tailor resumes quickly for multiple roles while maintaining professionalism, saving time for job seekers.
              </p>
            </div>
  
            <div className="feature-item flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-[300px] text-center transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="icon mb-6 text-blue-600 text-[36px]">
                <i className="fa-solid fa-computer"></i>
              </div>
              <h2 className="font-extrabold text-blue-700 text-[24px] mb-4">
                Ensure ATS Compatibility
              </h2>
              <p className="text-gray-600 text-[16px]">
                Designed for Applicant Tracking Systems, resume builders optimize layouts and suggest relevant keywords. They help bypass ATS filters, ensuring your application reaches hiring managers for better opportunities.
              </p>
            </div>
  
            <div className="feature-item flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-[300px] text-center transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="icon mb-6 text-blue-600 text-[36px]">
                <i className="fa-solid fa-star"></i>
              </div>
              <h2 className="font-extrabold text-blue-700 text-[24px] mb-4">
                Enhance Professional Appeal
              </h2>
              <p className="text-gray-600 text-[16px]">
                Resume builders provide polished templates, content guidance, and industry-specific layouts. They help create impactful resumes that stand out, leaving a strong impression on recruiters in competitive job markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Feature;
  