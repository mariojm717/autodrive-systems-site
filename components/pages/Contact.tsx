import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    role: '',
    improvements: [] as string[],
    readiness: '',
    description: '',
  });

  const improvementOptions = [
    'Process automation',
    'AI-enabled operations',
    'Systems integration',
    'Compliance and governance',
    'Data infrastructure',
    'Other',
  ];

  const readinessOptions = [
    'Exploring options',
    'Defined need, planning timeline',
    'Ready to engage in next 90 days',
    'Active urgent requirement',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    setSubmitted(true);
  };

  const handleImprovementToggle = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      improvements: prev.improvements.includes(option)
        ? prev.improvements.filter((item) => item !== option)
        : [...prev.improvements, option],
    }));
  };

  if (submitted) {
    return (
      <div className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-8 lg:px-16">
          <div className="bg-white border border-stone-200 p-12 text-center">
            <div className="size-16 flex items-center justify-center bg-stone-900 text-stone-50 mx-auto mb-6">
              <CheckCircle2 className="size-8" />
            </div>
            <h2 className="text-3xl tracking-tight text-stone-900 mb-4">
              Thank you
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              We review every request and respond if there is a strong fit.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-stone-900 text-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl tracking-tight mb-8 leading-[1.1]">
              Contact
            </h1>
            <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed">
              We work with organizations that value systems designed for durability, 
              compliance, and measurable impact. Tell us about your operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm text-stone-900 mb-3">
                Full Name <span className="text-teal-700">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm text-stone-900 mb-3">
                Company / Organization <span className="text-teal-700">*</span>
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-stone-900 mb-3">
                Work Email <span className="text-teal-700">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm text-stone-900 mb-3">
                Role / Title
              </label>
              <input
                type="text"
                id="role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>

            {/* Improvements */}
            <div>
              <label className="block text-sm text-stone-900 mb-4">
                What are you looking to improve?
              </label>
              <div className="space-y-3">
                {improvementOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.improvements.includes(option)}
                      onChange={() => handleImprovementToggle(option)}
                      className="size-5 border-2 border-stone-300 text-stone-900 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-stone-700 group-hover:text-stone-900 transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Readiness */}
            <div>
              <label className="block text-sm text-stone-900 mb-4">
                Engagement Readiness
              </label>
              <div className="space-y-3">
                {readinessOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="readiness"
                      value={option}
                      checked={formData.readiness === option}
                      onChange={(e) =>
                        setFormData({ ...formData, readiness: e.target.value })
                      }
                      className="size-5 border-2 border-stone-300 text-stone-900 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-stone-700 group-hover:text-stone-900 transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm text-stone-900 mb-3">
                Brief Description
              </label>
              <textarea
                id="description"
                rows={6}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Tell us about the operational challenges you're facing and what success would look like."
                className="w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-4 transition-colors w-full sm:w-auto"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
