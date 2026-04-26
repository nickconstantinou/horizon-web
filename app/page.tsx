import WaitlistForm from "@/components/waitlist-form";

const features = [
  {
    title: "2028 NMPA Calculator",
    description:
      "The pension access age rises from 55 to 57 in April 2028. Model the two-year gap between your retirement date and when you can legally access your SIPP without a 55% tax charge.",
  },
  {
    title: "ISA Bridge Planner",
    description:
      "If you retire before 57, you need income from somewhere. Horizon AI calculates exactly how much ISA drawdown you need to bridge the gap — and the optimal withdrawal sequence to avoid higher-rate tax.",
  },
  {
    title: "SIPP / ISA Sequencing",
    description:
      "Draw from the ISA first or the SIPP first? The right answer depends on your marginal rate each year, your spouse's tax position, and your inheritance intentions. Horizon AI optimises the sequence.",
  },
  {
    title: "State Pension Deferral",
    description:
      "Every 9 weeks you defer your State Pension adds approximately £322/year permanently. Over a 20-year retirement, a 2-year deferral is worth roughly £74,000. Model whether it makes sense for you.",
  },
  {
    title: "PCLS Timing Optimiser",
    description:
      "Your 25% tax-free lump sum (capped at £268,275) isn't a 'take it now' decision. Taking PCLS crystallises your pension and starts the MPAA clock. Horizon AI models the timing consequences.",
  },
  {
    title: "Monte Carlo Stress Testing",
    description:
      "How does your plan hold up if markets drop 30% in year two of retirement? Run scenarios across 1,000 simulated futures and see the probability your money lasts as long as you need it to.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-zinc-100 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-zinc-900">
            Horizon
          </span>
          <span className="rounded bg-zinc-900 px-1.5 py-0.5 text-xs font-medium text-white">
            AI
          </span>
        </div>
        <a
          href="#waitlist"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
          ⚠ April 2028 — Pension access age rises from 55 to 57
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl sm:leading-[1.1]">
          You&apos;ve got a pension.
          <br />
          <span className="text-zinc-500">
            Do you know what it&apos;s actually worth in retirement?
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          Most UK retirement tools tell you whether you&apos;ve saved enough.
          None of them tell you which account to draw from first, when to take
          your State Pension, or how the 2028 NMPA change affects your plan.
          Horizon AI does.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#waitlist"
            className="w-full rounded-full bg-zinc-900 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-zinc-700 sm:w-auto"
          >
            Join the waitlist
          </a>
          <a
            href="#how-it-works"
            className="w-full rounded-full border border-zinc-200 px-8 py-3.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:w-auto"
          >
            See what it models
          </a>
        </div>
        <p className="mt-4 text-sm text-zinc-400">
          Free during beta · No credit card · FCA-compliant guidance, not
          regulated advice
        </p>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 sm:grid-cols-3">
          <Stat
            number="15M"
            label="UK adults who need financial guidance but can't afford an IFA"
          />
          <Stat
            number="5 years"
            label="Gap between when Brits want to retire (62) and when they think they can (67)"
            source="Standard Life 2025"
          />
          <Stat
            number="£0"
            label="Number of UK consumer tools that model SIPP/ISA drawdown sequencing"
          />
        </div>
        <blockquote className="mt-12 border-l-4 border-zinc-300 pl-6">
          <p className="text-lg leading-8 text-zinc-600">
            &ldquo;53% of UK adults claim to be knowledgeable about pensions.
            Only 34% could correctly identify what a Defined Contribution scheme
            is. 20% don&apos;t know what type of pension they have.&rdquo;
          </p>
          <footer className="mt-2 text-sm text-zinc-400">— Aviva, 2025</footer>
        </blockquote>
      </div>
    </section>
  );
}

function Stat({
  number,
  label,
  source,
}: {
  number: string;
  label: string;
  source?: string;
}) {
  return (
    <div>
      <p className="text-4xl font-bold text-zinc-900">{number}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{label}</p>
      {source && <p className="mt-1 text-xs text-zinc-400">{source}</p>}
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="how-it-works" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The six decisions no UK tool models
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Good IFAs charge £250/hour to model these interactions. Horizon AI
            does it in minutes.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
    </div>
  );
}

function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="border-t border-zinc-100 bg-zinc-900 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Be first when we launch
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          We&apos;re building in public, starting with the 2028 NMPA calculator.
          Join the waitlist and we&apos;ll send you early access when it&apos;s
          ready.
        </p>
        <div className="mt-8">
          <WaitlistForm />
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          No spam. Unsubscribe any time. We process your email under UK GDPR.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-100 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-zinc-400 sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-900">Horizon AI</span>
          <span className="text-zinc-300">·</span>
          <span>UK retirement planning</span>
        </div>
        <p className="max-w-md text-xs leading-5 text-zinc-400">
          Horizon AI provides financial guidance only. It is not regulated
          financial advice under the Financial Services and Markets Act 2000.
          Always consult a regulated IFA before making irreversible financial
          decisions.
        </p>
      </div>
    </footer>
  );
}
