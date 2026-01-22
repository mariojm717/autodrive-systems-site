import { ArrowRight, CheckCircle2, Cog, Brain, Network } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-stone-50 overflow-hidden">
        {/* Background video placeholder - darkened abstract system motion */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 opacity-90" />
        
        <div className="relative max-w-7xl mx-auto px-8 lg:px-16 py-32 lg:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl tracking-tight mb-8 leading-[1.1]">
              Reliable Systems for Demanding Operations
            </h1>
            <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed mb-12 max-w-3xl">
              We design and build operational automation and AI-enabled systems that deliver 
              durable value for complex, real-world business challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a
                href="#/contact"
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-stone-50 px-8 py-4 transition-colors"
              >
                Start a Conversation
              </a>
              <a
                href="#/how-we-work"
                className="inline-flex items-center gap-2 text-stone-300 hover:text-stone-50 transition-colors py-4"
              >
                See how we work
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Enterprise-safe delivery',
              'Compliance-aware approach',
              'U.S.-based operations',
              'Built for reliability',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-stone-600"
              >
                <CheckCircle2 className="size-4 text-teal-700 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl tracking-tight text-stone-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl leading-relaxed">
              We build systems that work. Our capabilities focus on outcomes, not tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="size-12 flex items-center justify-center bg-stone-900 text-stone-50">
                <Cog className="size-6" />
              </div>
              <h3 className="text-2xl tracking-tight text-stone-900">
                Process Automation
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Transform manual, error-prone workflows into reliable, auditable systems 
                that scale with your operations and integrate seamlessly with existing infrastructure.
              </p>
            </div>

            <div className="space-y-6">
              <div className="size-12 flex items-center justify-center bg-stone-900 text-stone-50">
                <Brain className="size-6" />
              </div>
              <h3 className="text-2xl tracking-tight text-stone-900">
                AI-Enabled Operations
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Deploy AI where it creates measurable value. We design systems that combine 
                machine intelligence with human oversight for decision-making that matters.
              </p>
            </div>

            <div className="space-y-6">
              <div className="size-12 flex items-center justify-center bg-stone-900 text-stone-50">
                <Network className="size-6" />
              </div>
              <h3 className="text-2xl tracking-tight text-stone-900">
                Systems Integration
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Connect disparate platforms and data sources into unified operational systems. 
                We handle complexity so your teams can focus on what they do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl tracking-tight text-stone-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl leading-relaxed">
              A disciplined approach designed for complex environments.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                number: '01',
                title: 'Discovery',
                description:
                  'We map current operations, identify constraints, and define success criteria with stakeholders across your organization.',
              },
              {
                number: '02',
                title: 'Design',
                description:
                  'We architect systems with compliance, security, and long-term maintainability as core requirements, not afterthoughts.',
              },
              {
                number: '03',
                title: 'Implement',
                description:
                  'We build and deploy incrementally, with testing, validation, and documentation at every stage of delivery.',
              },
              {
                number: '04',
                title: 'Stabilize',
                description:
                  'We monitor, refine, and transfer knowledge to ensure your team can operate and evolve the system independently.',
              },
            ].map((step) => (
              <div key={step.number} className="space-y-4">
                <div className="text-sm text-teal-700 tracking-wider">
                  {step.number}
                </div>
                <h3 className="text-2xl tracking-tight text-stone-900">
                  {step.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Without Client Logos */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl lg:text-5xl tracking-tight text-stone-900 mb-8">
              Proof
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed mb-12">
              We don't display client logos. Instead, we built and documented our own 
              internal operational system—applying the same rigor, controls, and governance 
              we bring to client engagements.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="border border-stone-200 bg-white p-8">
                <div className="text-4xl tracking-tight text-stone-900 mb-2">
                  78%
                </div>
                <div className="text-sm text-stone-500">
                  Reduction in manual administrative overhead
                </div>
              </div>
              <div className="border border-stone-200 bg-white p-8">
                <div className="text-4xl tracking-tight text-stone-900 mb-2">
                  100%
                </div>
                <div className="text-sm text-stone-500">
                  Compliance audit trail coverage
                </div>
              </div>
            </div>

            <a
              href="#/proof"
              className="inline-flex items-center gap-2 text-stone-900 hover:text-teal-700 transition-colors"
            >
              View the internal system case study
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl tracking-tight text-stone-900 mb-8">
              Let's discuss your operational challenges
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed mb-12">
              We work with organizations ready to invest in durable systems designed for the long term.
            </p>
            <a
              href="#/contact"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-4 transition-colors"
            >
              Request a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}