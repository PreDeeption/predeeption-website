"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  const team = [
    {
      name: "Christophe Verdouq",
      role: "CEO",
      img: "/team/Christophe.png",
      bio: "Christophe leads the company with extensive experience in energy systems and business strategy.",
    },
    {
      name: "Josh Trivedi",
      role: "CTO",
      img: "/team/Josh.jpg",
      bio: "Josh oversees technology, AI research, and product development, bringing cutting-edge solutions to life.",
    },
    {
      name: "Arnaud Demortiere",
      role: "CSO",
      img: "/team/Arnaud.jpeg",
      bio: "Arnaud focuses on strategic partnerships and sustainable energy adoption globally.",
    },
    {
      name: "Basille Jezequel",
      role: "Lead Engineer",
      img: "/team/Basile.jpg",
      bio: "Basille leads the engineering team, building scalable, reliable battery intelligence platforms.",
    },
    {
      name: "Raghvender Raghvender",
      role: "Lead MLOps Engineer",
      img: "/team/Raghvender.jpeg",
      bio: "Raghvender specializes in deploying AI at scale, ensuring smooth production pipelines.",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">
        About PreDeeption
      </h1>
      
      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/predeeption-team-ai.png"
          alt="Team Banner"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            PreDeeption is dedicated to revolutionizing energy storage systems
            through predictive analytics, anomaly detection, and edge
            intelligence. Our solutions empower businesses to optimize battery
            life and manage fleets efficiently.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To be the global leader in intelligent battery management solutions,
            providing real-time insights and actionable analytics for
            sustainable energy and mobility.
          </p>
        </div>

        
      </section>

      {/* Platform Overview */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          Optimize Your Battery Systems with Predictive Intelligence
        </h2>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          PreDeeption empowers operators, integrators, and energy solution providers to manage fleets of
          batteries—whether in electric vehicles, e-bikes, or renewable energy storage systems (BESS)—with
          unmatched precision and foresight. By combining the power of Generative AI and Agentic AI, our
          platform delivers advanced battery analytics that go far beyond conventional monitoring.
          From real-time diagnostics to long-term forecasting and early anomaly detection, PreDeeption
          transforms raw data into smart, scalable decisions across the entire battery lifecycle.
        </p>

        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
          What PreDeeption Provides:
        </h3>
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
          What PreDeeption Provides:
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-3">
          <li>
            <strong>Real-Time SOH, SOC & RUL Estimation:</strong> Continuous and
            precise evaluation of battery State of Health, State of Charge, and
            Remaining Useful Life using real-world signals, usage data, and
            environmental conditions.
          </li>
          <li>
            <strong>Mid- and Long-Term SOH Forecasting:</strong> Anticipate
            battery aging trajectories under varying operational scenarios to
            plan maintenance, replacement, and second-life applications with
            confidence.
          </li>
          <li>
            <strong>AI-Driven Anomaly Detection:</strong> Identify abnormal
            usage patterns, early signs of degradation, and potential failures
            with robust models trained on extensive multi-domain battery
            datasets.
          </li>
          <li>
            <strong>Fleet-Level Analytics and Insights:</strong> Analyze and
            compare battery behavior across entire fleets—whether EVs, e-bikes,
            or BESS—to detect hotspots, usage trends, and environmental impacts.
          </li>
          <li>
            <strong>Usage Profile Identification:</strong> Classify and
            interpret real-world usage scenarios—fast charging, urban driving,
            temperature extremes—to better understand and optimize operational
            conditions.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-4">
          How It Works:
        </h3>
        <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-4">
          How It Works:
        </h3>
        <p className="text-gray-300 leading-relaxed">
          PreDeeption’s AI core processes time-series data from
          charging/discharging cycles, current, voltage, temperature, and other
          embedded sensor streams. Our Generative AI models simulate realistic
          aging trajectories under varying scenarios, while our Agentic AI
          algorithms autonomously adapt to fleet-level dynamics and evolving
          operational environments. This hybrid approach ensures robust,
          interpretable, and actionable insights at scale.
        </p>
      </section>

      {/* Team Section */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          Meet the Team
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={member.name} className="flex flex-col items-center">
              {/* 3D Flip Card */}
              <div
                className="relative w-48 h-48 cursor-pointer perspective"
                onClick={() => handleFlip(idx)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedIndex === idx ? "rotate-y-180" : ""
                  } group`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg backface-hidden transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_4px_rgba(250,204,21,0.5)]">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-yellow-400 text-black rounded-full flex flex-col justify-center items-center px-4 text-center backface-hidden rotate-y-180">
                    <h3 className="font-bold mb-2">{member.name}</h3>
                    <p className="text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mt-4">
                <h3 className="font-semibold text-yellow-400">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
