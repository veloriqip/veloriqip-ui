"use client";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error("Incorrect email or password!");
  };
  return (
    <>
      <ToastContainer />
      <form
        className="mt-35 mb-20 flex w-full flex-col items-center justify-center max-w-96 m-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>
        <p className="mt-3 text-sm text-gray-500/90">
          Welcome back! Please sign in to continue
        </p>
        <div className="my-5 flex w-full items-center gap-4">
          <div className="h-px w-full bg-gray-300/90"></div>
        </div>
        <div className="flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail text-gray-400"
            aria-hidden="true"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
          <input
            placeholder="Email id"
            className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
            required
            type="email"
          />
        </div>
        <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-lock text-gray-400"
            aria-hidden="true"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <input
            placeholder="Password"
            className="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
            required
            type="password"
          />
        </div>

        <button
          type="submit"
          className="mt-8 h-11 w-full cursor-pointer rounded-full bg-[rgb(var(--brand-navy))] text-white transition hover:bg-[rgb(var(--btn-hover))] duration-500"
        >
          Login
        </button>

        <div className="mt-5 flex w-full flex-col items-center justify-center">
          <p>Having trouble logging in?</p>
          <p>Contact our support team for quick assistance.</p>
          <Link className="text-blue-600 underline" href={"/support"}>
            Click here
          </Link>
        </div>
      </form>
    </>
  );
}
