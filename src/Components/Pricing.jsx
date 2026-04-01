import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 0,
      period: "Month",
      description: "Perfect for individuals just getting started",
      buttonText: "Get Started Free",
      features: [
        "Access to 5 basic tools",
        "Email support",
        "Basic analytics",
        "1GB cloud storage",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: 29,
      period: "Month",
      description: "Best for professionals and small teams",
      buttonText: "Start pro trial",
      features: [
        "Access to all digital tools",
        "Priority support",
        "Advanced analytics",
        "10GB cloud storage",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 99,
      period: "Year",
      description: "For large organizations with advanced needs",
      buttonText: "Contact Sales",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom development",
        "Unlimited cloud storage",
        "Team collaboration",
        "API access",
      ],
      popular: false,
    },
  ];

  return (
    <div>
      <div className="text-center my-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center py-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="card w-96 shadow-sm"
            style={
              plan.popular
                ? {
                    background: "linear-gradient(135deg, #4f39f6, #3b82f6)",
                    color: "white",
                  }
                : {}
            }
          >
            <div className="card-body">
              {plan.popular && (
                <span className="badge badge-xs badge-warning">
                  {plan.name} — Most Popular
                </span>
              )}

              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">{plan.name}</h2>
                <span className="text-xl">
                  ${plan.price}/{plan.period === "Month" ? "Month" : "Year"}
                </span>
              </div>

              {/* ✅ fixed: added space before ${} so classes don't merge */}
              <p
                className={`text-sm mt-1 ${plan.popular ? "text-blue-100" : "text-gray-500"}`}
              >
                {plan.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {/* ✅ fixed: button styled to contrast properly on gradient card */}
                <button
                  className={`btn btn-block border-none font-semibold ${
                    plan.popular
                      ? "bg-white text-[#4f39f6] hover:bg-blue-50"
                      : "btn-primary text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
