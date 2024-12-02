import React from 'react';
import { Link } from 'react-router-dom';

const Vision = () => {
  return (
    <section className="bg-gray-100 px-28 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 mb-6 animate-fadeIn delay-1s text-justify">
              At Jatoi Construction, our vision is to create sustainable, high-quality infrastructure that shapes the future and inspires innovation. We are dedicated to building lasting legacies while ensuring environmental sustainability and the use of cutting-edge technologies. Our projects reflect our commitment to quality, integrity, and excellence in every detail.
            </p>
            <p className="text-lg text-gray-600 mb-6 animate-fadeIn delay-2s text-justify">
              We believe that by combining our expertise, passion, and creativity, we can redefine the future of construction and engineering. From residential projects to large-scale commercial developments, our goal is to leave a positive, lasting impact on communities and the environment.
            </p>
            <Link to="/about">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-lg font-medium transition duration-300 shadow-md animate-fadeIn delay-3s">
                Learn More About Us
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-24">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="/images/const5.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">COMPANY MAINTAINCES</h2>
    <p>The Construction you want we will give you.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
