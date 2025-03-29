import React from "react";
import { Settings } from "lucide-react";
import arrowandline from "/LineAndArrow.png";
import backgroundImage from "/wavy.png";

const ProcessFlow = () => {
  const stages = [
    {
      title: "Discovering",
      subtitle: "Understanding Your Needs",
      items: [
        "Problem Analysis",
        "Business Goals",
        "Audience Insights",
        "Project Scope",
      ],
    },
    {
      title: "Diagnosing",
      subtitle: "Analyzing Your Current State",
      items: [
        "Market Research",
        "Brand Positioning",
        "Competitor Analysis",
        "Current State Review",
      ],
    },
    {
      title: "Designing",
      subtitle: "Crafting the Strategy",
      items: [
        "Strategic Planning",
        "Creative Concepts",
        "Timelines & Roadmaps",
        "KPIs and Milestones",
      ],
    },
    {
      title: "Demonstrating",
      subtitle: "Testing the Solution",
      items: [
        "Pilot Campaigns",
        "Performance Analysis",
        "Fine-Tuning Solutions",
        "Client Review",
      ],
    },
    {
      title: "Deploying",
      subtitle: "Rolling Out the Solution",
      items: [
        "Full Implementation",
        "Campaign Rollout",
        "Tracking & Analytics",
        "Results Validation",
      ],
    },
    {
      title: "Delivering",
      subtitle: "Ensuring Long-Term Success",
      items: [
        "Performance",
        "Reporting",
        "Knowledge Transfer",
        "Standards & Best",
      ],
    },
  ];

  return (
    <div
      className="max-w-6xl mx-auto p-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "3.125rem",
        marginTop:"-3rem"
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {stages.map((stage, index) => (
          <div key={index} className="relative p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-800 flex items-baseline">
                  {stage.title}
                  <span className="text-8xl font-bold text-orange-500 ml-4">
                    {index + 1}
                  </span>
                </h3>
                <p className="text-black-500 mb-4">{stage.subtitle}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {stage.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  <Settings className="mr-2 text-black" size={16} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Arrow image for all screens except mobile */}
            {index < stages.length - 1 && (
              <div className="hidden md:block absolute right-[-20px] top-1/2 transform -translate-y-1/2">
                <img
                  src={arrowandline}
                  alt="Arrow"
                  className="w-10 h-auto"
                />
              </div>
            )}

            {/* Optional: Add downward arrow for mobile view between rows */}
            {index % 2 === 0 && index < stages.length - 1 && (
              <div className="md:hidden absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 rotate-90">
                <img src={arrowandline} alt="Arrow" className="w-10 h-auto" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
