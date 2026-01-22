import { Cog, Brain, Network, ArrowRight } from 'lucide-react';

export function WhatWeDo() {
  const capabilities = [
    {
      icon: Cog,
      title: 'Process Automation',
      subtitle: 'From manual to reliable',
      description:
        'Transform manual, error-prone workflows into reliable, auditable systems that integrate seamlessly with your existing infrastructure and scale with your operations.',
      examples: [
        'Document processing and data extraction',
        'Approval workflows and routing logic',
        'Report generation and distribution',
        'Compliance documentation and audit trails',
      ],
      outcomes: [
        'Reduced operational overhead',
        'Improved accuracy and consistency',
        'Full audit trail for compliance',
        'Scalable as demand grows',
      ],
    },
    {
      icon: Brain,
      title: 'AI-Enabled Operations',
      subtitle: 'Intelligence with oversight',
      description:
        'Deploy AI where it creates measurable value. We design systems that combine machine intelligence with human oversight for decision-making that matters.',
      examples: [
        'Intelligent document analysis and categorization',
        'Predictive analytics for operational planning',
        'Automated risk assessment with human review',
        'Natural language interfaces for complex systems',
      ],
      outcomes: [
        'Faster, data-informed decisions',
        'Reduced cognitive load on teams',
        'Consistent application of business rules',
        'Transparent, explainable outputs',
      ],
    },
    {
      icon: Network,
      title: 'Systems Integration',
      subtitle: 'Connected, unified operations',
      description:
        'Connect disparate platforms and data sources into unified operational systems. We handle complexity so your teams can focus on what they do best.',
      examples: [
        'Legacy system modernization and API integration',
        'Data synchronization across platforms',
        'Unified dashboards and reporting',
        'Cross-platform workflow automation',
      ],
      outcomes: [
        'Single source of truth for operational data',
        'Reduced manual data entry and reconciliation',
        'Real-time visibility across systems',
        'Faster onboarding of new tools',
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-stone-900 text-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl tracking-tight mb-8 leading-[1.1]">
              What We Do
            </h1>
            <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed">
              We build systems that work. Our capabilities focus on operational outcomes, 
              not buzzwords or tools.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="space-y-32">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={capability.title}
                  className={`grid lg:grid-cols-5 gap-12 lg:gap-16 ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`lg:col-span-2 ${!isEven ? 'lg:col-start-4' : ''}`}>
                    <div className="size-16 flex items-center justify-center bg-stone-900 text-stone-50 mb-8">
                      <Icon className="size-8" />
                    </div>
                    <h2 className="text-4xl tracking-tight text-stone-900 mb-3">
                      {capability.title}
                    </h2>
                    <div className="text-lg text-stone-500 mb-6">
                      {capability.subtitle}
                    </div>
                  </div>

                  <div className={`lg:col-span-3 space-y-12 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <p className="text-lg text-stone-600 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <div className="text-sm tracking-wider text-stone-900 mb-4">
                          EXAMPLE APPLICATIONS
                        </div>
                        <ul className="space-y-3">
                          {capability.examples.map((example) => (
                            <li
                              key={example}
                              className="flex items-start gap-3 text-stone-600"
                            >
                              <div className="size-1.5 bg-stone-900 mt-2 flex-shrink-0" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-sm tracking-wider text-stone-900 mb-4">
                          TYPICAL OUTCOMES
                        </div>
                        <ul className="space-y-3">
                          {capability.outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-3 text-stone-600"
                            >
                              <div className="size-1.5 bg-teal-700 mt-2 flex-shrink-0" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl tracking-tight mb-8">
              Let's discuss what you need
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed mb-12">
              Tell us about your operational challenges. We'll determine if there's a strong fit.
            </p>
            <a
              href="#/contact"
              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-stone-50 px-8 py-4 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
