"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const solutions = [
    {
      title: "Battery Life Prediction",
      desc: "AI-driven insights into lifecycle management.",
    },
    {
      title: "Anomaly Detection",
      desc: "Detect irregularities before they cause downtime.",
    },
    {
      title: "Fleet Management Cloud",
      desc: "Monitor and manage fleets at scale.",
    },
    {
      title: "Edge SOH & SOC Estimation",
      desc: "Real-time analytics at the edge.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center text-center px-6 md:px-12 h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag. 
        </video>
        

        {/* Centered Logo */}
        <Image
          src="/logo_01.svg"
          alt="Main Logo"
          width={300}
          height={300}
          className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto mb-6"
          priority
        />

        {/* Hero Text */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
          Powering the Future of Battery Intelligence
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-gray-200">
          Predicting battery life, detecting anomalies, managing fleets, and
          enabling edge solutions for real-time SOH and SOC estimation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500">
              Request Demo
            </button>
          </Link>
          <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 hover:text-black">
            Learn More
          </button>
        </div>
      </section>


      {/* Why PreDeeption */}
      <section id="solutions" className="px-8 py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">
            Why PreDeeption?
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            PreDeeption offers an AI-powered SaaS platform for real-time battery
            diagnostics, long-term SOH forecasting, anomaly detection, and
            fleet-wide insights—empowering smarter, safer, and more efficient EV
            operations.
          </p>

          {/* Features Grid */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "/Mini-logo-1.svg",
                title: "High Accuracy of Battery SOH Estimation",
                desc: "Get a precise view of your battery’s health using advanced AI models trained on real-world cycling data.",
              },
              {
                icon: "/Mini-logo-2.svg",
                title: "Long-Range Battery SOH Prediction",
                desc: "Forecast battery aging and lifespan well ahead of time to optimize maintenance and reduce unexpected failures.",
              },
              {
                icon: "/Mini-logo-3.svg",
                title: "Real-Time SOH / SOC / RUL Estimation",
                desc: "Monitor State of Health, State of Charge, and Remaining Useful Life in real time for better operational decisions.",
              },
              {
                icon: "/Mini-logo-4.svg",
                title: "AI-Driven Anomaly Detection & Alerts",
                desc: "Detect irregular behaviors and failure patterns early with real-time alerts driven by AI anomaly detection.",
              },
              {
                icon: "/Mini-logo-5.svg",
                title: "Fleet Statistics: Profile, Usage, Environment",
                desc: "Track fleet-level patterns across usage, environments, and charging habits to optimize performance and cost.",
              },
              {
                icon: "/Mini-logo-6.svg",
                title: "SaaS Platform for Fleet Management",
                desc: "Centralize data, automate insights, and deploy scalable analytics to manage large EV fleets efficiently.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 bg-yellow-50 rounded-2xl shadow hover:shadow-xl transition"
              >
                {/* Logo */}
                <div className="mb-6">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={60}     // mini icon size update from 60 to 90
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
                <p className="mt-3 text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Image
              src="/website_image_01.svg"
              alt="Solutions Overview"
              width={1200}
              height={400}
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-8 py-16 bg-yellow-400 text-black text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to optimize your fleet? Let’s talk.
        </h2>
        <Link href="/contact">
          <button className="mt-6 bg-black text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-gray-900">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}
