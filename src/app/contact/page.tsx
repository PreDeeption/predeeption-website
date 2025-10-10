"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">
        Contact Us
      </h1>

      <section className="max-w-2xl mx-auto">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg border border-gray-600 bg-black text-white focus:border-yellow-400 focus:ring focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg border border-gray-600 bg-black text-white focus:border-yellow-400 focus:ring focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Company"
            className="px-4 py-3 rounded-lg border border-gray-600 bg-black text-white focus:border-yellow-400 focus:ring focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="px-4 py-3 rounded-lg border border-gray-600 bg-black text-white focus:border-yellow-400 focus:ring focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-gray-400">
          <p>Email: Coming Soon</p>
          <p>Address: 15 Rue Baudelocque, 80000 Amiens</p>
        </div>
      </section>
    </main>
  );
}
