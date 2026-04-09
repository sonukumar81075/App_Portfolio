import React from "react"; 
import {FeaturesData,Feature} from '../DynamicData/Features'
const Features = () => {
  return (
    <>
    <div className="section-shell w-full">
      {/* <div className="container lg:px-12 mx-auto text-center">
        <h3 className="text-yellow-500 text-sm font-semibold uppercase">{FeaturesData.Heading}</h3>
        <h2 className="text-4xl font-bold mt-2 mb-[10px]">{FeaturesData.title}</h2>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 container lg:px-12 mx-auto">
        {Feature.map((service, index) => (
          <div
            key={index}
            className="relative app-card p-4 sm:p-8 lg:p-12 rounded-[18px] sm:rounded-lg border-l-[2px] border-l-[var(--accent)] hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.12)] transform transition-all duration-300 ease-in-out md:hover:translate-x-2 hover:translate-y-2"
          >
            <div className="mb-4 sm:mb-6 text-[var(--accent)]">{service.icon}</div>
            <h3 className="text-[20px] sm:text-xl leading-[1.35] font-semibold mb-3 sm:mb-6 app-text-primary">{service.title}</h3>
            <p className="app-text-secondary text-[14px] sm:text-base leading-[1.45]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  
    </>
  );
};
export default Features;
