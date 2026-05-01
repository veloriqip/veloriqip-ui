"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function SupportForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);


    const formData = new FormData(e.currentTarget);

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/support/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      toast.success("Support request submitted successfully.");
      e.target.reset();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-sm text-slate-800 w-full mt-35 mb-20"
      >
        <p className="text-xs bg-[rgb(var(--brand-navy))] text-white font-medium px-3 py-1 rounded-full">
          Technical Support
        </p>

        <h1 className="text-4xl font-bold py-4 text-center">
          Report a Technical Issue
        </h1>

        <p className="max-md:text-sm text-gray-500 pb-10 text-center">
          Facing a bug or error on our website? Share the details below.
          <br />
          Or email{" "}
          <a
            href="mailto:info@veloriqip.com"
            className="text-[rgb(var(--brand-navy))] hover:underline"
          >
            info@veloriqip.com
          </a>
        </p>

        <div className="max-w-96 w-full px-4">
          <label className="font-medium">Full Name</label>
          <input
            name="fullName"
            required
            className="w-full mt-2 mb-4 h-10 px-3 border rounded-full"
            placeholder="Your full name"
          />

          <label className="font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-2 mb-4 h-10 px-3 border rounded-full"
            placeholder="Email for follow-up"
          />

          <label className="font-medium">Issue Details</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full mt-2 p-2 border rounded-lg"
            placeholder="Describe the issue you are facing"
          />

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer mt-5 bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] text-white py-2.5 w-full rounded-full transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Support Request"}
          </button>
        </div>
      </form>
    </>
  );
}
