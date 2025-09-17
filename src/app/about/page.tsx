"use client";

import Image from "next/image";

export default function AboutPage() {
  const team = [
    { name: "Christophe Verdouq", role: "CEO", img: "/team1.jpg" },
    { name: "Josh Trivedi", role: "CTO", img: "/team2.jpg" },
    { name: "Arnaud Demortiere", role: "CSO", img: "/team3.jpg" },
    { name: "Basille Jezequel", role: "Lead Engineer", img: "/team4.jpg" },
    { name: "Raghvender Raghvender", role: "Lead MLOps Engineer", img: "/team5.jpg" },
    { name: "Mahdi Abid", role: "ML Research Engineer", img: "/team6.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">
        About Predeeption
      </h1>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            Predeeption is dedicated to revolutionizing energy storage systems
            through predictive analytics, anomaly detection, and edge intelligence.
            Our solutions empower businesses to optimize battery life and manage fleets efficiently.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To be the global leader in intelligent battery management solutions,
            providing real-time insights and actionable analytics for sustainable energy and mobility.
          </p>
        </div>
        <Image src="/team-banner.jpg" alt="Team Banner" width={500} height={500} className="rounded-2xl shadow-lg" />
      </section>

      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Meet the Team</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <Image src={member.img} alt={member.name} width={200} height={200} className="rounded-full mx-auto shadow-lg" />
              <h3 className="mt-4 font-semibold text-yellow-400">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
