"use client";

import Image from "next/image";

export default function AboutPage() {
  const team = [
    { name: "Christophe Verdouq", role: "CEO", img: "/team/Christophe.png" },
    { name: "Josh Trivedi", role: "CTO", img: "/team/Josh.jpg" },
    { name: "Arnaud Demortiere", role: "CSO", img: "/team/Arnaud.jpeg" },
    { name: "Basille Jezequel", role: "Lead Engineer", img: "/team/Basile.jpg" },
    { name: "Raghvender Raghvender", role: "Lead MLOps Engineer", img: "/team/Raghvender.jpeg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">
        About PreDeeption
      </h1>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            PreDeeption is dedicated to revolutionizing energy storage systems
            through predictive analytics, anomaly detection, and edge intelligence.
            Our solutions empower businesses to optimize battery life and manage fleets efficiently.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To be the global leader in intelligent battery management solutions,
            providing real-time insights and actionable analytics for sustainable energy and mobility.
          </p>
        </div>

        <Image
          src="/team-banner.jpg"
          alt="Team Banner"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg object-cover"
        />
      </section>

      {/* 🔋 New Section: Platform Overview */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          Optimize Your Battery Systems with Predictive Intelligence
        </h2>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          PreDeeption empowers operators, integrators, and energy solution providers to manage fleets of
          batteries—whether in electric vehicles, e-bikes, or renewable energy storage systems (BESS)—with
          unmatched precision and foresight. By combining the power of Generative AI and Agentic AI, our
          platform delivers advanced battery analytics that go far beyond conventional monitoring. From
          real-time diagnostics to long-term forecasting and early anomaly detection, PreDeeption transforms
          raw data into smart, scalable decisions across the entire battery lifecycle.
        </p>

        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">What PreDeeption Provides:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-3">
          <li>
            <strong>Real-Time SOH, SOC & RUL Estimation:</strong> Continuous and precise evaluation of battery
            State of Health, State of Charge, and Remaining Useful Life using real-world signals, usage data, and
            environmental conditions.
          </li>
          <li>
            <strong>Mid- and Long-Term SOH Forecasting:</strong> Anticipate battery aging trajectories under
            varying operational scenarios to plan maintenance, replacement, and second-life applications with confidence.
          </li>
          <li>
            <strong>AI-Driven Anomaly Detection:</strong> Identify abnormal usage patterns, early signs of
            degradation, and potential failures with robust models trained on extensive multi-domain battery datasets.
          </li>
          <li>
            <strong>Fleet-Level Analytics and Insights:</strong> Analyze and compare battery behavior across
            entire fleets—whether EVs, e-bikes, or BESS—to detect hotspots, usage trends, and environmental impacts.
          </li>
          <li>
            <strong>Usage Profile Identification:</strong> Classify and interpret real-world usage scenarios—fast
            charging, urban driving, temperature extremes—to better understand and optimize operational conditions.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-yellow-400 mt-10 mb-4">How It Works:</h3>
        <p className="text-gray-300 leading-relaxed">
          PreDeeption’s AI core processes time-series data from charging/discharging cycles, current, voltage,
          temperature, and other embedded sensor streams. Our Generative AI models simulate realistic aging
          trajectories under varying scenarios, while our Agentic AI algorithms autonomously adapt to fleet-level
          dynamics and evolving operational environments. This hybrid approach ensures robust, interpretable, and
          actionable insights at scale.
        </p>
      </section>

      {/* 👨‍💻 Team Section */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Meet the Team</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto shadow-lg object-cover"
              />
              <h3 className="mt-4 font-semibold text-yellow-400">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
