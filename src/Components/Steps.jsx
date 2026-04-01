import React from "react";
import user from "../assets/user.png";
import packageBox from "../assets/package.png";
import rocket from "../assets/rocket.png";

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Browse Products",
      icon: user,
      description:
        "Browse our catalog and select the tools that fit your needs.",
    },
    {
      number: "02",
      title: "Choose Products",
      icon: packageBox,
      description:
        "Browse our catalog and select the tools that fit your needs.",
    },
    {
      number: "03",
      title: "Start Creating",
      icon: rocket,
      description: "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <section id="steps" className="py-30 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="relative bg-white  rounded-2xl shadow-lg py-20 px-5 text-center hover:shadow-xl  "
              >
                <div className="font-bold bg-linear-to-r from-[#4f39f6] to-purple-700 text-white mb-4 absolute top-0 right-0 h-10 w-10 flex items-center justify-center rounded-full m-4">
                  {step.number}
                </div>
                <div className="flex justify-center mb-4 bg-gray-100 h-30 w-30 m-auto items-center  rounded-full">
                  <img
                    src={step.icon}
                    alt=""
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
