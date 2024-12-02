import React from 'react';

const Aboutus = ({ theme }) => {
  // Determine styles based on the theme
  const isDarkTheme = theme === 'dark';
  const bgColor = isDarkTheme ? 'bg-gray-900' : 'bg-red-100';
  const textColor = isDarkTheme ? 'text-red' : 'text-orange-800';
  const textSecondaryColor = isDarkTheme ? 'text-gray-300' : 'text-gray-700';
  

  return (
    <section id="about" className={`${bgColor} py-12`}>
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className={`py-20 text-4xl font-bold ${textColor}`}>About Us</h2>
        </div>

        {/* Information */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          {/* Text Info */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <p className={`text-lg leading-relaxed text-justify ${textSecondaryColor}`}>
              Jatoi Construction is a top-tier construction company specializing in residential, commercial, and industrial infrastructure. Over the years, we have completed a variety of successful projects, earning a reputation for delivering quality, safety, and sustainable solutions. From planning to execution, we prioritize innovation and excellence in every aspect of our work.
            </p>
            <p className={`text-lg leading-relaxed mt-4 text-justify ${textSecondaryColor}`}>
              Our team is comprised of experienced professionals dedicated to building long-lasting relationships with our clients through exceptional service. We take pride in contributing to the infrastructure that supports thriving communities.
            </p>
            <p className={`text-lg leading-relaxed mt-4 text-justify ${textSecondaryColor}`}>
              Our head office is located in Karachi, Pakistan, but we have a wide reach across the country. Whether you're building a residential home or a commercial complex, Jatoi Construction is committed to bringing your vision to life.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            {/* Statistics */}
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src="const1.jpg" alt="Jatoi Construction" />
                    </div>
                  </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">31 tasks remaining</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location and Targets Section */}
        <div className="mt-12 text-center">
          <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>Our Achievements</h3>
          <p className={`text-lg leading-relaxed text-justify ${textSecondaryColor}`}>
            We have successfully completed over 300 projects in various sectors, including residential homes, office buildings, and industrial plants. Our commitment to quality and safety has allowed us to build long-term relationships with our clients.
          </p>
          <p className={`text-lg leading-relaxed mt-4 text-justify ${textSecondaryColor}`}>
            Our office is located at: <strong>123 Business Plaza, Clifton, Karachi, Pakistan</strong>. Feel free to visit us or reach out for any inquiries.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-8">
          <a
            href="#experience"
            className="px-8 py-4 bg-green-500 text-white rounded-md text-lg font-medium transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-600 cursor-pointer"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
