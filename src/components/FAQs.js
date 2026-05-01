"use client"
import React from "react";
import faqs from "@/data/faqs.json";
export default function FAQs () {
    const [openIndex, setOpenIndex] = React.useState(null);

    return (
        <>
            <div className="mt-35 mb-20 flex flex-col md:flex-row items-start justify-center gap-8 px-4 ">
                <div>
                    <p className="text-[rgb(var(--brand-gold))] text-sm font-medium">FAQ&apos;s</p>
                    <h1 className="text-3xl font-semibold">Looking for answer?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-4 max-w-250">
                        Have questions about intellectual property, patents, trademarks, or our services? We’ve compiled answers to the most common queries to help you understand VeloriqIP’s processes, offerings, and support options.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-200 ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq?.answer}
                                {faq?.bullets && (
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                {faq?.bullets.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                                </ul>
                            )}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};