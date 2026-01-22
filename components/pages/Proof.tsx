import { ArrowRight, Shield, FileCheck, Activity, Database } from 'lucide-react';

export function Proof() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-stone-900 text-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-4xl">
            <div className="text-sm text-teal-400 tracking-wider mb-6">
              INTERNAL CASE STUDY
            </div>
            <h1 className="text-5xl lg:text-6xl tracking-tight mb-8 leading-[1.1]">
              Operational System for AutoDrive Systems
            </h1>
            <p className="text-xl lg:text-2xl text-stone-300 leading-relaxed">
              We built our own internal operational system using the same principles, 
              controls, and governance frameworks we deliver to clients.
            </p>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl tracking-tight text-stone-900 mb-4">
                Context
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                As a boutique consultancy, we needed operational systems that could handle 
                client engagement workflows, compliance documentation, and knowledge management 
                without introducing administrative overhead.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                We also needed to demonstrate our approach in a real production environment—one 
                where failure would have direct business consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl tracking-tight text-stone-900 mb-4">
                Problem
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>Manual processes for:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="size-1.5 bg-stone-900 mt-2.5 flex-shrink-0" />
                    <span>Client engagement tracking and status updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-1.5 bg-stone-900 mt-2.5 flex-shrink-0" />
                    <span>Compliance documentation and audit trail generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-1.5 bg-stone-900 mt-2.5 flex-shrink-0" />
                    <span>Knowledge capture from completed projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-1.5 bg-stone-900 mt-2.5 flex-shrink-0" />
                    <span>Time tracking and resource allocation</span>
                  </li>
                </ul>
                <p>
                  These manual processes consumed approximately 15-20 hours per week of senior 
                  team time and created gaps in our audit trail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl tracking-tight text-stone-900 mb-4">
                Approach
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-stone-600 leading-relaxed mb-12">
                We designed an integrated system with three core components, each with 
                defined responsibilities and clear data ownership.
              </p>

              <div className="space-y-8">
                <div className="border border-stone-200 bg-white p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-10 flex items-center justify-center bg-stone-900 text-stone-50 flex-shrink-0">
                      <Database className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl tracking-tight text-stone-900 mb-2">
                        Engagement Management System
                      </h3>
                      <p className="text-stone-600 leading-relaxed">
                        Tracks client projects from initial contact through delivery. 
                        Automated status updates, milestone tracking, and stakeholder notifications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-stone-200 bg-white p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-10 flex items-center justify-center bg-stone-900 text-stone-50 flex-shrink-0">
                      <FileCheck className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl tracking-tight text-stone-900 mb-2">
                        Compliance Documentation Engine
                      </h3>
                      <p className="text-stone-600 leading-relaxed">
                        Generates audit trails, compliance reports, and documentation artifacts 
                        automatically from system activity. Every action is logged and attributable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-stone-200 bg-white p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-10 flex items-center justify-center bg-stone-900 text-stone-50 flex-shrink-0">
                      <Activity className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl tracking-tight text-stone-900 mb-2">
                        Knowledge Management System
                      </h3>
                      <p className="text-stone-600 leading-relaxed">
                        Captures learnings, patterns, and reusable components from each engagement. 
                        Structured data with search and retrieval capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls & Governance */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl tracking-tight text-stone-900 mb-4">
                Controls & Governance
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-stone-600 leading-relaxed mb-12">
                We designed the system with enterprise-grade controls from the start.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl tracking-tight text-stone-900 mb-3">
                    Access Controls
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    Role-based permissions with audit logging. All access attempts are recorded. 
                    Sensitive data is encrypted at rest and in transit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl tracking-tight text-stone-900 mb-3">
                    Data Integrity
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    Immutable audit logs. All changes are versioned and attributable to specific 
                    users and timestamps. No retroactive editing of records.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl tracking-tight text-stone-900 mb-3">
                    Failure Handling
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    Automated monitoring with alerting. Graceful degradation for non-critical 
                    components. Clear escalation paths for system issues.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl tracking-tight text-stone-900 mb-3">
                    Documentation Standards
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    Every system component has runbooks, architecture diagrams, and decision logs. 
                    All integrations are documented with data flow maps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl tracking-tight text-stone-900 mb-4">
                Outcomes
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-stone-600 leading-relaxed mb-12">
                Measurable improvements across operational metrics and compliance readiness.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border border-stone-200 bg-white p-8">
                  <div className="text-5xl tracking-tight text-stone-900 mb-3">
                    78%
                  </div>
                  <div className="text-stone-500 leading-relaxed">
                    Reduction in manual administrative overhead (15-20 hours/week to 3-4 hours/week)
                  </div>
                </div>

                <div className="border border-stone-200 bg-white p-8">
                  <div className="text-5xl tracking-tight text-stone-900 mb-3">
                    100%
                  </div>
                  <div className="text-stone-500 leading-relaxed">
                    Compliance audit trail coverage with full attribution and timestamps
                  </div>
                </div>

                <div className="border border-stone-200 bg-white p-8">
                  <div className="text-5xl tracking-tight text-stone-900 mb-3">
                    &lt;2 min
                  </div>
                  <div className="text-stone-500 leading-relaxed">
                    Average time to generate compliance documentation (previously 45-60 minutes)
                  </div>
                </div>

                <div className="border border-stone-200 bg-white p-8">
                  <div className="text-5xl tracking-tight text-stone-900 mb-3">
                    Zero
                  </div>
                  <div className="text-stone-500 leading-relaxed">
                    Compliance gaps identified in external audit (previously 7 minor findings)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Iteration */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl tracking-tight text-stone-900 mb-4">
                Next Iteration
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                We continue to evolve the system based on operational learnings:
              </p>
              <ul className="space-y-4 text-lg text-stone-600">
                <li className="flex items-start gap-3">
                  <div className="size-1.5 bg-stone-900 mt-2.5 flex-shrink-0" />
                  <span>
                    AI-assisted analysis of engagement patterns to identify optimization opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-1.5 bg-stone-900 mt-2.5 flex-shrink-0" />
                  <span>
                    Enhanced knowledge graph to surface relevant past work during discovery phases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="size-1.5 bg-stone-900 mt-2.5 flex-shrink-0" />
                  <span>
                    Predictive resource allocation based on historical engagement data
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-stone-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl tracking-tight mb-8">
              We can apply this approach to your operations
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed mb-12">
              If you're facing similar challenges with manual processes, compliance requirements, 
              or operational complexity, let's discuss how we can help.
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
