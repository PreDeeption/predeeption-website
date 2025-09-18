"use client";

import Image from "next/image";

export default function AboutPage() {
  const team = [
    { name: "Christophe Verdouq", role: "CEO", img: "https://placehold.co/200x200?text=Christophe" },
    { name: "Josh Trivedi", role: "CTO", img: "https://placehold.co/200x200?text=Josh" },
    { name: "Arnaud Demortiere", role: "CSO", img: "https://placehold.co/200x200?text=Arnaud" },
    { name: "Basille Jezequel", role: "Lead Engineer", img: "https://placehold.co/200x200?text=Basille" },
    { name: "Raghvender Raghvender", role: "Lead MLOps Engineer", img: "https://placehold.co/200x200?text=Raghvender" },
    { name: "Mahdi Abid", role: "ML Research Engineer", img: "https://placehold.co/200x200?text=Mahdi" },
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
        <Image
          src="https://placehold.co/500x500?text=Team+Banner"
          alt="Team Banner"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </section>

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
                className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
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
// Note: Replace placeholder images with actual team member photos when available.