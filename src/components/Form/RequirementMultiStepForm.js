"use client";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import countries from "@/data/countries.json";

const DRAFT_KEY = "ip_enquiry_draft";
const TOTAL_STEPS = 6;

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
    <>
      <ToastContainer />
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>
            Step {step} of {TOTAL_STEPS}
          </span>
          <span>{percentage}% completed</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-[rgb(var(--brand-navy))] h-2 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default function RequirementMultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    if (typeof window === "undefined") return initialData;
    const saved = localStorage.getItem(DRAFT_KEY);
    return saved ? JSON.parse(saved) : initialData;
  });

  /* 🔹 Auto-save draft */
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
    if (!phone) return "+91"; // default

    // Sort by length to avoid "+1" matching before "+124"
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
      setFormData(initialData); // Reset all fields
      setStep(1); // Reset to first step
      localStorage.removeItem(DRAFT_KEY); // Remove saved draft
    }
  };

  const isCurrentStepValid = isStepValid(step, formData);

  return (
    <div className="mt-35 mb-20 max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">IP Requirement Enquiry</h2>

        <button
          onClick={resetForm}
          className="cursor-pointer px-3 py-2 border rounded-full bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] text-white transition text-sm duration-500"
        >
          Reset
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Thank you for contacting us. Please avoid sharing confidential technical
        details. Submission does not create a professional relationship.
      </p>

      <ProgressBar step={step} />

      {/* STEP 1 */}
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

          {/* Phone number with country code */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Number*
            </label>

            {(() => {
              const countryCode = deriveCountryCode(formData.phone);
              const localNumber = formData.phone.replace(countryCode, "");

              return (
                <div className="flex gap-2">
                  {/* Country dropdown */}
                  <select
                    value={countryCode}
                    onChange={(e) =>
                      updateField("phone", `${e.target.value}${localNumber}`)
                    }
                    className="border rounded px-2 py-2 bg-white text-sm max-w-[110px]"
                  >
                    {countries.map((c) => (
                      <option key={c.iso2} value={c.dialCode}>
                        {c.flag} ({c.dialCode}) {c.name}
                      </option>
                    ))}
                  </select>

                  {/* Local phone input */}
                  <input
                    type="tel"
                    value={localNumber}
                    onChange={(e) => {
                      if (/^[0-9]*$/.test(e.target.value)) {
                        updateField("phone", `${countryCode}${e.target.value}`);
                      }
                    }}
                    placeholder="Enter phone number"
                    className="flex-1 border rounded px-3 py-2"
                  />
                </div>
              );
            })()}

            {/* Validation message */}
            {formData.phone && !/^\+[1-9][0-9]{9,14}$/.test(formData.phone) && (
              <p className="text-xs text-red-600 mt-1">
                Enter a valid phone number (digits only, include country code)
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

      {/* STEP 2 */}
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

      {/* STEP 3 */}
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

      {/* STEP 4 */}
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

      {/* STEP 5 */}
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

      {/* STEP 6 */}
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
            <p className="mt-3 text-sm text-red-600">
              You must accept all declarations to submit the form.
            </p>
          )}
        </Section>
      )}

      {/* NAVIGATION */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="cursor-pointer px-4 py-2 border rounded-full bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] text-white duration-500"
          >
            Back
          </button>
        )}

        {step < 6 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!isCurrentStepValid}
            className={`ml-auto px-4 py-2 rounded transition duration-500
    ${
      isCurrentStepValid
        ? "cursor-pointer rounded-full bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] text-white"
        : "bg-gray-300 text-white cursor-not-allowed rounded-full"
    }`}
          >
            Next
          </button>
        ) : (
          <button
            onClick={submitForm}
            disabled={!isCurrentStepValid}
            className={`ml-auto px-4 py-2 rounded transition duration-500
    ${
      isCurrentStepValid
        ? "cursor-pointer bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] text-white rounded-full"
        : "bg-gray-300 text-white cursor-not-allowed rounded-full"
    }`}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

/* ================= UI HELPERS ================= */

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const Input = ({ label, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded px-3 py-2"
    />
  </div>
);

const RadioGroup = ({ label, options, value, onChange }) => (
  <div>
    <p className="font-medium mb-1">{label}</p>
    {options.map((o) => (
      <label key={o} className="flex items-center gap-2 text-sm">
        <input
          type="radio"
          checked={value === o}
          onChange={() => onChange(o)}
        />
        {o}
      </label>
    ))}
  </div>
);

const CheckboxGroup = ({ label, options, values, onChange }) => (
  <div>
    <p className="font-medium mb-1">{label}</p>
    {options.map((o) => (
      <label key={o} className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={values.includes(o)}
          onChange={() => onChange(o)}
        />
        {o}
      </label>
    ))}
  </div>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex gap-2 text-sm">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    {label}
  </label>
);
