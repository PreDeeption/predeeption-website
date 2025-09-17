"use client";

import Image from "next/image";

export default function HomePage() {
  const solutions = [
    { title: "Battery Life Prediction", desc: "AI-driven insights into lifecycle management." },
    { title: "Anomaly Detection", desc: "Detect irregularities before they cause downtime." },
    { title: "Fleet Management Cloud", desc: "Monitor and manage fleets at scale." },
    { title: "Edge SOH & SOC Estimation", desc: "Real-time analytics at the edge." },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="flex flex-col justify-center items-center text-center px-6 md:px-12 h-screen relative">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
          Powering the Future of Battery Intelligence
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-gray-200">
          Predicting battery life, detecting anomalies, managing fleets, and enabling
          edge solutions for real-time SOH and SOC estimation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500">
            Request Demo
          </button>
          <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 hover:text-black">
            Learn More
          </button>
        </div>
        <div className="absolute inset-0 -z-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="px-8 py-20 bg-white text-black">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Solutions</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div key={s.title} className="p-6 bg-yellow-50 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-black">{s.title}</h3>
              <p className="mt-3 text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="px-8 py-20 bg-gradient-to-r from-black via-yellow-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image src="/tech.jpg" alt="Technology" width={500} height={500} className="rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">Our Technology</h2>
            <p className="mt-6 text-gray-200">
              Leveraging machine learning, cloud computing, and edge-based
              intelligence, Predeeption delivers scalable and efficient solutions
              for energy storage systems worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-8 py-16 bg-yellow-400 text-black text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to optimize your fleet? Let’s talk.
        </h2>
        <button className="mt-6 bg-black text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-gray-900">
          Contact Us
        </button>
      </section>
    </main>
  );
}
