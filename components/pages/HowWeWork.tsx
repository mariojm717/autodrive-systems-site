import { ArrowRight } from 'lucide-react';

export function HowWeWork() {
  const phases = [
    {
      number: '01',
      title: 'Discovery',
      subtitle: 'Understanding Your Operation',
      description:
        'We begin by mapping your current state: workflows, systems, constraints, and pain points. We interview stakeholders across functions to understand how work actually gets done--not just how it is documented.',
      deliverables: [
        'Process maps and system diagrams',
        'Stakeholder interviews and requirements documentation',
        'Risk assessment and constraint analysis',
        'Success criteria and measurable outcomes',
      ],
      timeline: '2-4 weeks',
    },
    {
      number: '02',
      title: 'Design',
      subtitle: 'Architecting for Durability',
      description:
        'We design systems with compliance, security, and long-term maintainability as core requirements. Our architectures account for edge cases, failure modes, and the reality that requirements evolve.',
      deliverables: [
        'System architecture and data flow diagrams',
        'Security and compliance controls design',
        'Integration specifications and API contracts',
        'Implementation roadmap with phased delivery',
      ],
      timeline: '3-6 weeks',
    },
    {
      number: '03',
      title: 'Implement',
      subtitle: 'Building with Discipline',
      description:
        'We build and deploy incrementally, validating each component before moving forward. Testing, documentation, and knowledge transfer happen continuously--not as an afterthought.',
      deliverables: [
        'Working systems deployed to production',
        'Automated testing and validation frameworks',
        'Technical documentation and runbooks',
        'Training materials and user guides',
      ],
      timeline: '8-16 weeks',
    },
    {
      number: '04',
      title: 'Stabilize',
      subtitle: 'Ensuring Long-Term Success',
      description:
        'We monitor system performance, refine based on real-world usage, and transfer operational knowledge to your team. Our goal is to make ourselves unnecessary over time.',
      deliverables: [
        'Monitoring dashboards and alerting systems',
        'Performance optimization and refinement',
        'Knowledge transfer and team enablement',
        'Maintenance and evolution documentation',
      ],
      timeline: '4-8 weeks',
    },
  ];

  const principles = [
    {
      title: 'Transparency',
      description:
        'We explain how systems work, what decisions they make, and where human oversight is required. No black boxes.',
    },
    {
      title: 'Compliance-Aware',
      description:
        'We design for auditability from day one. Every action has a traceable record. Every decision has a documented rationale.',
    },
    {
      title: 'Built to Last',
      description:
        'We optimize for maintainability, not speed of initial delivery. Your team will be able to understand, operate, and evolve the systems we build.',
    },
    {
      title: 'Outcome-Focused',
      description:
        'We measure success by operational impact, not lines of code. If it doesn\'t solve a real problem, we don\'t build it.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-stone-900 text-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl tracking-tight mb-8 leading-[1.1]">
              How We Work
            </h1>
            <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed">
              A disciplined, phased approach designed for complex operational environments 
              where reliability and compliance are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="space-y-24">
            {phases.map((phase) => (
              <div key={phase.number} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                <div className="lg:col-span-2">
                  <div className="text-sm text-teal-700 tracking-wider mb-4">
                    {phase.number}
                  </div>
                  <h2 className="text-4xl tracking-tight text-stone-900 mb-3">
                    {phase.title}
                  </h2>
                  <div className="text-lg text-stone-500 mb-6">
                    {phase.subtitle}
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-stone-400 border border-stone-200 px-4 py-2">
                    {phase.timeline}
                  </div>
                </div>

                <div className="lg:col-span-3 space-y-8">
                  <p className="text-lg text-stone-600 leading-relaxed">
                    {phase.description}
                  </p>

                  <div>
                    <div className="text-sm tracking-wider text-stone-900 mb-4">
                      DELIVERABLES
                    </div>
                    <ul className="space-y-3">
                      {phase.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex items-start gap-3 text-stone-600"
                        >
                          <div className="size-1.5 bg-stone-900 mt-2 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl tracking-tight text-stone-900 mb-6">
              Our Principles
            </h2>
            <p className="text-xl text-stone-500 max-w-3xl leading-relaxed">
              These guide every decision we make, from architecture to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {principles.map((principle) => (
              <div key={principle.title} className="space-y-4">
                <h3 className="text-2xl tracking-tight text-stone-900">
                  {principle.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl tracking-tight mb-8">
              See this approach in action
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed mb-12">
              Review our internal system case study to see how we apply these 
              principles to our own operations.
            </p>
            <a
              href="#/proof"
              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-stone-50 px-8 py-4 transition-colors"
            >
              View Case Study
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
