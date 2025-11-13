"use client";

import { useState } from "react";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [dialogMessage, setDialogMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, company, message }),
      });

      if (res.ok) {
        setStatus("success");
        setDialogMessage("✅ Your message has been sent successfully!");
        setFullName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        setStatus("error");
        const data = await res.json();
        setDialogMessage(`❌ Failed to send message: ${data.error?.Message || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setDialogMessage("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-6 rounded-2xl shadow-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[120px]"
          required
        ></textarea>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Status Dialog */}
      {status !== "idle" && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => status !== "loading" && setStatus("idle")}
        >
          <div
            className="bg-white text-black p-6 rounded-xl shadow-xl max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "loading" ? (
              <p className="mb-4">⏳ Sending your message...</p>
            ) : (
              <>
                <p className="mb-4">{dialogMessage}</p>
                <button
                  className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-500"
                  onClick={() => setStatus("idle")}
                >
                  OK
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
