"use client";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
export default function Footer() {
  
  const [email, setEmail] = useState("");
  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const payload = {
      email: email
    };

    try {
      const res = await fetch("/api/subscriptions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");
      toast.success("Thanks for subscribing!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setEmail("");
    }
  };

  return (
    <>
      <ToastContainer />
      <footer
        className="bg-black py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "gainsboro" }}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Description of my image"
                  width={250}
                  height={40}
                />
              </Link>

              <p className="text-sm text-[rgb(var(--brand-navy))] mt-6 max-w-sm leading-relaxed">
                Strategic intellectual property solutions helping innovators
                protect ideas, strengthen assets, and unlock long-term value.
              </p>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-[rgb(var(--brand-navy))] font-medium">
                Important Links
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                <Link
                  href="/about"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/careers"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/testimonials"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="/metrics"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Metrics
                </Link>
                <Link
                  href="/support"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Support
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-[rgb(var(--brand-navy))] font-medium">
                Social Links
              </h3>
              <div className="flex flex-col gap-2 mt-6">
                <a
                  href="https://x.com/veloriqip"
                  target="_blank"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  X.com (Twitter)
                </a>
                <a
                  href="https://www.instagram.com/veloriqip"
                  target="_blank"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@VeloriqIP"
                  target="_blank"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Youtube
                </a>
                <a
                  href="https://www.linkedin.com/company/veloriqip"
                  target="_blank"
                  className="text-sm text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
                >
                  Linkedin
                </a>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-sm text-[rgb(var(--brand-navy))] font-medium">
                Subscribe for newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="w-full max-w-80 mt-4">
                <div className="flex items-center border gap-2 border-[rgb(var(--brand-navy))] h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email.."
                    className="w-full h-full pl-6 outline-none text-sm bg-transparent text-[rgb(var(--brand-navy))] placeholder-[rgb(var(--brand-navy))] placeholder:text-xs"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1.5 duration-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Office Locations */}
          <div className="flex justify-center md:justify-end mt-10">
            <div className="flex items-start gap-2 text-xs text-[rgb(var(--brand-navy))]">
              <FaMapMarkerAlt className="mt-0.5" />
              <div className="leading-snug">
                <p>Noida, India</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px mt-5 mb-4 bg-linear-to-r from-black via-white/25 to-black"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[rgb(var(--brand-navy))]">
              © 2026 VeloriqIP. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms-and-conditions"
                className="text-xs text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
              >
                Terms & Conditions
              </Link>
              <div className="w-px h-4 bg-white/20"></div>
              <Link
                href="/privacy-policy"
                className="text-xs text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
