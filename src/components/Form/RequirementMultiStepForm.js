"use client";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardList,
  Clock3,
  Globe2,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import countries from "@/data/countries.json";

const DRAFT_KEY = "ip_enquiry_draft";
const TOTAL_STEPS = 6;

const STEP_META = [
  {
    id: 1,
    eyebrow: "Step 1",
    title: "Basic Information",
    description: "Tell us who you are and how we can reach you.",
    icon: UserRound,
  },
  {
    id: 2,
    eyebrow: "Step 2",
    title: "Service Requirement",
    description: "Help us understand the kind of IP support you need.",
    icon: ClipboardList,
  },
  {
    id: 3,
    eyebrow: "Step 3",
    title: "Invention / Brand Overview",
    description: "Share the current maturity of the idea, product, or work.",
    icon: Sparkles,
  },
  {
    id: 4,
    eyebrow: "Step 4",
    title: "Jurisdiction & Timeline",
    description: "Clarify where protection is needed and how quickly.",
    icon: Globe2,
  },
  {
    id: 5,
    eyebrow: "Step 5",
    title: "Background & Communication",
    description: "Give us context and tell us how you prefer to engage.",
    icon: Clock3,
  },
  {
    id: 6,
    eyebrow: "Step 6",
    title: "Consent & Declaration",
    description: "Review the declarations required before submission.",
    icon: ShieldCheck,
  },
];

const initialData = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  clientCategory: "",

  services: [],
  enquiryPurpose: "",

  currentStage: "",

  jurisdiction: [],
  timeline: "",

  previousIP: "",
  communication: [],
  source: "",

  consent: {
    noConfidentialInfo: false,
    noRelationship: false,
    contactConsent: false,
  },
};

const isStepValid = (step, data) => {
  switch (step) {
    case 1:
      return (
        data.fullName.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
        /^\+[1-9][0-9]{9,14}$/.test(data.phone) &&
        data.clientCategory
      );

    case 2:
      return data.services.length > 0 && data.enquiryPurpose;

    case 3:
      return !!data.currentStage;

    case 4:
      return data.jurisdiction.length > 0 && data.timeline;

    case 5:
      return data.previousIP && data.communication.length > 0;

    case 6:
      return (
        data.consent.noConfidentialInfo &&
        data.consent.noRelationship &&
        data.consent.contactConsent
      );

    default:
      return false;
  }
};

const ProgressBar = ({ step }) => {
  const percentage = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
        <span>
          Step {step} of {TOTAL_STEPS}
        </span>
        <span>{percentage}% complete</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-[rgb(var(--brand-navy))] transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

function StepRail({ step }) {
  return (
    <div className="space-y-3">
      {STEP_META.map((item) => {
        const Icon = item.icon;
        const isActive = item.id === step;
        const isCompleted = item.id < step;

        return (
          <div
            key={item.id}
            className={`rounded-[24px] border p-4 transition-colors duration-300 ${
              isActive
                ? "border-[rgb(var(--brand-navy))]/20 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
                : isCompleted
                  ? "border-[#b59b5a]/20 bg-[#fbf8ef]"
                  : "border-white/70 bg-white/65"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                  isActive
                    ? "bg-[rgb(var(--brand-navy))] text-white"
                    : isCompleted
                      ? "bg-[#e8d8a5] text-[rgb(var(--brand-navy))]"
                      : "bg-slate-100 text-slate-500"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {item.eyebrow}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function RequirementMultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    if (typeof window === "undefined") return initialData;
    const saved = localStorage.getItem(DRAFT_KEY);
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
  }, [formData]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const deriveCountryCode = (phone) => {
    if (!phone) return "+91";

    const codes = countries
      .map((c) => c.dialCode)
      .sort((a, b) => b.length - a.length);

    return codes.find((code) => phone.startsWith(code)) || "+91";
  };

  const submitForm = async () => {
    if (!isStepValid(6, formData)) {
      toast.error("Please accept all declarations before submitting.");
      return;
    }

    try {
      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.error("Form submit error:", err);
    }

    setFormData(initialData);
    setStep(1);
    localStorage.removeItem(DRAFT_KEY);
    toast.success("Inquiry Form submitted successfully.");
  };

  const resetForm = () => {
    if (
      confirm(
        "Are you sure you want to start over? All entered data will be lost."
      )
    ) {
      setFormData(initialData);
      setStep(1);
      localStorage.removeItem(DRAFT_KEY);
    }
  };

  const isCurrentStepValid = isStepValid(step, formData);
  const currentStepMeta = STEP_META.find((item) => item.id === step);
  const CurrentIcon = currentStepMeta?.icon || ClipboardList;

  return (
    <>
      <ToastContainer />

      <section className="mt-26 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-[rgb(var(--border))]/70 bg-[linear-gradient(180deg,#f7f4ee_0%,#f9f7f2_45%,#ffffff_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,48,73,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(181,155,90,0.14),transparent_26%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),transparent_32%,rgba(0,48,73,0.03)_100%)]" />

          <div className="relative grid gap-8 p-5 lg:grid-cols-[minmax(320px,0.78fr)_minmax(0,1.22fr)] lg:p-8">
            <aside className="rounded-[32px] bg-[rgb(var(--brand-navy))] p-6 text-white shadow-[0_18px_55px_rgba(0,48,73,0.22)] lg:sticky lg:top-8 lg:self-start">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/62">
                    Contact Veloriq IP
                  </p>
                  <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-[2.35rem]">
                    Start an IP enquiry with the right structure from the beginning
                  </h1>
                </div>
                <Building2 className="mt-1 h-5 w-5 shrink-0 text-[#e3cd95]" />
              </div>

              <p className="mt-5 text-base leading-8 text-white/82">
                Share the essentials of your requirement and we will engage with
                the right context, jurisdiction, and business objective in mind.
              </p>

              <div className="mt-6 rounded-[26px] border border-white/12 bg-white/8 p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#e3cd95]" />
                  <p className="text-sm leading-7 text-white/82">
                    Please avoid including confidential technical details at this
                    stage. Submission does not create a professional relationship.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[26px] border border-white/12 bg-white/8 p-4">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#e3cd95]" />
                  <p className="text-sm leading-7 text-white/82">
                    Your draft is saved locally in this browser while you complete
                    the form.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <StepRail step={step} />
              </div>
            </aside>

            <div className="rounded-[32px] border border-white/80 bg-white/86 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7 lg:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--brand-navy))] text-white shadow-sm">
                    <CurrentIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {currentStepMeta?.eyebrow}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                      IP Requirement Enquiry
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                      {currentStepMeta?.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-50"
                >
                  Reset form
                </button>
              </div>

              <div className="mt-6">
                <ProgressBar step={step} />

                {step === 1 && (
                  <Section title="Basic Information">
                    <Input
                      label="Full Name*"
                      value={formData.fullName}
                      onChange={(v) => updateField("fullName", v)}
                    />

                    <Input
                      label="Email*"
                      type="email"
                      value={formData.email}
                      onChange={(v) => updateField("email", v)}
                    />

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-800">
                        Contact Number*
                      </label>

                      {(() => {
                        const countryCode = deriveCountryCode(formData.phone);
                        const localNumber = formData.phone.replace(countryCode, "");

                        return (
                          <div className="flex gap-2">
                            <select
                              value={countryCode}
                              onChange={(e) =>
                                updateField("phone", `${e.target.value}${localNumber}`)
                              }
                              className="max-w-[130px] rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 shadow-sm outline-none transition-colors focus:border-[rgb(var(--brand-navy))]"
                            >
                              {countries.map((c) => (
                                <option key={c.iso2} value={c.dialCode}>
                                  {c.flag} ({c.dialCode})
                                </option>
                              ))}
                            </select>

                            <input
                              type="tel"
                              value={localNumber}
                              onChange={(e) => {
                                if (/^[0-9]*$/.test(e.target.value)) {
                                  updateField(
                                    "phone",
                                    `${countryCode}${e.target.value}`
                                  );
                                }
                              }}
                              placeholder="Enter phone number"
                              className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition-colors focus:border-[rgb(var(--brand-navy))]"
                            />
                          </div>
                        );
                      })()}

                      {formData.phone &&
                        !/^\+[1-9][0-9]{9,14}$/.test(formData.phone) && (
                          <p className="mt-2 text-xs text-red-600">
                            Enter a valid phone number (digits only, include
                            country code)
                          </p>
                        )}
                    </div>

                    <Input
                      label="Organization"
                      value={formData.organization}
                      onChange={(v) => updateField("organization", v)}
                    />

                    <RadioGroup
                      label="Client Category*"
                      options={[
                        "Startup",
                        "MSME",
                        "University / Research Institution",
                        "Individual Inventor",
                        "Other",
                      ]}
                      value={formData.clientCategory}
                      onChange={(v) => updateField("clientCategory", v)}
                    />
                  </Section>
                )}

                {step === 2 && (
                  <Section title="Service Requirement">
                    <CheckboxGroup
                      label="Services Interested In*"
                      options={[
                        "Patentability Search",
                        "Patent Drafting & Filing",
                        "Trademark Registration",
                        "Design Registration",
                        "Copyright Registration",
                        "IP Strategy / Advisory",
                        "International Filing",
                        "Other",
                      ]}
                      values={formData.services}
                      onChange={(v) => toggleArrayValue("services", v)}
                    />

                    <RadioGroup
                      label="Purpose of Enquiry*"
                      options={[
                        "End to end process",
                        "New IP filing",
                        "Feasibility / Patentability check",
                        "Funding / investor requirement",
                        "Academic / research purpose",
                        "Business protection",
                        "Other",
                      ]}
                      value={formData.enquiryPurpose}
                      onChange={(v) => updateField("enquiryPurpose", v)}
                    />
                  </Section>
                )}

                {step === 3 && (
                  <Section title="Invention / Brand Overview">
                    <RadioGroup
                      label="Current Stage*"
                      options={[
                        "Idea stage",
                        "Prototype developed",
                        "Product launched",
                        "Research / academic work completed",
                        "Not applicable",
                      ]}
                      value={formData.currentStage}
                      onChange={(v) => updateField("currentStage", v)}
                    />
                  </Section>
                )}

                {step === 4 && (
                  <Section title="Jurisdiction & Timeline">
                    <CheckboxGroup
                      label="Intended Jurisdiction*"
                      options={[
                        "India",
                        "International (PCT / USA / Europe)",
                        "Not sure",
                      ]}
                      values={formData.jurisdiction}
                      onChange={(v) => toggleArrayValue("jurisdiction", v)}
                    />

                    <RadioGroup
                      label="Expected Timeline*"
                      options={[
                        "Immediately",
                        "Within 1 month",
                        "Within 3 months",
                        "Just exploring options",
                      ]}
                      value={formData.timeline}
                      onChange={(v) => updateField("timeline", v)}
                    />
                  </Section>
                )}

                {step === 5 && (
                  <Section title="Background & Communication">
                    <RadioGroup
                      label="Filed IP Earlier?*"
                      options={["Yes", "No"]}
                      value={formData.previousIP}
                      onChange={(v) => updateField("previousIP", v)}
                    />

                    <CheckboxGroup
                      label="Preferred Communication*"
                      options={["Email", "Phone call", "Online meeting"]}
                      values={formData.communication}
                      onChange={(v) => toggleArrayValue("communication", v)}
                    />

                    <RadioGroup
                      label="How did you hear about us?"
                      options={[
                        "Google search",
                        "LinkedIn",
                        "Referral",
                        "Website",
                        "Other",
                      ]}
                      value={formData.source}
                      onChange={(v) => updateField("source", v)}
                    />
                  </Section>
                )}

                {step === 6 && (
                  <Section title="Consent & Declaration">
                    <Checkbox
                      label="I confirm that I have not shared confidential technical information."
                      checked={formData.consent.noConfidentialInfo}
                      onChange={(v) =>
                        setFormData((p) => ({
                          ...p,
                          consent: { ...p.consent, noConfidentialInfo: v },
                        }))
                      }
                    />
                    <Checkbox
                      label="Submission does not create a professional relationship."
                      checked={formData.consent.noRelationship}
                      onChange={(v) =>
                        setFormData((p) => ({
                          ...p,
                          consent: { ...p.consent, noRelationship: v },
                        }))
                      }
                    />
                    <Checkbox
                      label="I consent to be contacted regarding this enquiry."
                      checked={formData.consent.contactConsent}
                      onChange={(v) =>
                        setFormData((p) => ({
                          ...p,
                          consent: { ...p.consent, contactConsent: v },
                        }))
                      }
                    />
                    {!isCurrentStepValid && (
                      <p className="mt-2 text-sm text-red-600">
                        You must accept all declarations to submit the form.
                      </p>
                    )}
                  </Section>
                )}

                <div className="mt-8 flex flex-col gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:justify-between">
                  <div className="text-sm leading-6 text-slate-500">
                    {step < TOTAL_STEPS
                      ? "Complete this step to move forward."
                      : "Review the declarations carefully before submission."}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {step > 1 && (
                      <button
                        onClick={() => setStep(step - 1)}
                        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-slate-50"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </button>
                    )}

                    {step < TOTAL_STEPS ? (
                      <button
                        onClick={() => setStep(step + 1)}
                        disabled={!isCurrentStepValid}
                        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                          isCurrentStepValid
                            ? "cursor-pointer bg-[rgb(var(--brand-navy))] text-white hover:bg-[rgb(var(--btn-hover))]"
                            : "cursor-not-allowed bg-slate-300 text-white"
                        }`}
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        onClick={submitForm}
                        disabled={!isCurrentStepValid}
                        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                          isCurrentStepValid
                            ? "cursor-pointer bg-[rgb(var(--brand-navy))] text-white hover:bg-[rgb(var(--btn-hover))]"
                            : "cursor-not-allowed bg-slate-300 text-white"
                        }`}
                      >
                        Submit enquiry
                        <Send className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Section = ({ title, children }) => (
  <div>
    <h3 className="mb-5 text-lg font-semibold text-slate-900">{title}</h3>
    <div className="space-y-5">{children}</div>
  </div>
);

const Input = ({ label, value, onChange, type = "text" }) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-800">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition-colors focus:border-[rgb(var(--brand-navy))]"
    />
  </div>
);

const RadioGroup = ({ label, options, value, onChange }) => (
  <div>
    <p className="mb-2 text-sm font-medium text-slate-800">{label}</p>
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => {
        const isActive = value === o;
        return (
          <label
            key={o}
            className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition-colors duration-300 ${
              isActive
                ? "border-[rgb(var(--brand-navy))]/20 bg-[rgb(var(--brand-navy))]/5"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            <input
              type="radio"
              checked={isActive}
              onChange={() => onChange(o)}
              className="mt-1"
            />
            <span className="leading-6 text-slate-700">{o}</span>
          </label>
        );
      })}
    </div>
  </div>
);

const CheckboxGroup = ({ label, options, values, onChange }) => (
  <div>
    <p className="mb-2 text-sm font-medium text-slate-800">{label}</p>
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => {
        const isActive = values.includes(o);
        return (
          <label
            key={o}
            className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition-colors duration-300 ${
              isActive
                ? "border-[rgb(var(--brand-navy))]/20 bg-[rgb(var(--brand-navy))]/5"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => onChange(o)}
              className="mt-1"
            />
            <span className="leading-6 text-slate-700">{o}</span>
          </label>
        );
      })}
    </div>
  </div>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label
    className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition-colors duration-300 ${
      checked
        ? "border-[rgb(var(--brand-navy))]/20 bg-[rgb(var(--brand-navy))]/5"
        : "border-slate-200 bg-white hover:bg-slate-50"
    }`}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-1"
    />
    <span className="leading-6 text-slate-700">{label}</span>
  </label>
);
