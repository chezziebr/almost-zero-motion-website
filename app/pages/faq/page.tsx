import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'FAQ | (ALMOST) ZERO MOTION',
  description: 'Frequently asked questions about active recovery gear and gentle movement.',
};

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        {/* HERO */}
        <section className="bg-[#FFE4F0] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FF1493] mb-4">
              frequently asked questions 💬
            </h1>
            <p className="text-xl text-black">
              everything you wanted to know about moving gently
            </p>
          </div>
        </section>

        {/* FAQ ITEMS */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FFE4F0] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-[#FF1493] mb-4">
                  {faq.question}
                </h2>
                <div className="text-base text-black leading-relaxed space-y-4">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STILL HAVE QUESTIONS? */}
        <section className="bg-[#FF1493] text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              still have questions? 💕
            </h2>
            <p className="text-lg mb-8">
              We're here to help! Email us at hello@almostzeromotion.com
            </p>
            <p className="text-base">
              We usually respond within 24 hours (unless we're on a recovery walk 😉)
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// FAQ Data
const faqs = [
  {
    question: "What is active recovery?",
    answer: (
      <>
        <p>
          Active recovery = gentle movement that helps your body actually recover. We're talking walks (not runs), stretching, light yoga, easy cycling - basically anything that keeps you moving in Zone 1-2 without adding training stress.
        </p>
        <p>
          The science is clear: gentle movement after hard workouts helps flush lactic acid, reduces stiffness, and speeds up recovery. Your body needs to move, just not intensely.
        </p>
        <p>
          <Link href="/pages/the-science" className="text-[#FF1493] font-semibold underline">
            Read more about the science →
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "What's with the parentheses in your name?",
    answer: (
      <>
        <p>
          Good question! We're (ALMOST) ZERO MOTION because you're not completely still - you're moving gently. Walking, stretching, light spinning. Almost zero. But not quite. 😉
        </p>
        <p>
          The parentheses represent the playful, not-too-serious vibe we're going for. Recovery doesn't have to be serious. It can be fun, colorful, and cute.
        </p>
      </>
    ),
  },
  {
    question: "Do you really support couch time?",
    answer: (
      <>
        <p>
          ABSOLUTELY. Couch time = recovery time = when your body actually gets stronger.
        </p>
        <p>
          Here's the thing: your body doesn't adapt during the workout. It adapts during recovery. That means rest is literally part of your training.
        </p>
        <p>
          We make gear that supports gentle movement (walks, stretches), but we also make gear that's perfect for full couch mode. Both matter. Both count.
        </p>
        <p>
          Rest without guilt. We said what we said. 🛋️
        </p>
      </>
    ),
  },
  {
    question: "How do I choose the right size?",
    answer: (
      <>
        <p>
          Check out our detailed size guide for measurements, but here's the short version: when in doubt, size up.
        </p>
        <p>
          Our gear is designed to feel soft and comfortable, not restrictive. If you're between sizes or prefer a more relaxed fit, go with the larger size.
        </p>
        <p>
          We design for athletic bodies - room in the shoulders, space for quads and glutes. Our fit notes on each product page will tell you if an item runs small, large, or true to size.
        </p>
        <p>
          <Link href="/pages/size-guide" className="text-[#FF1493] font-semibold underline">
            See full size guide →
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "What's a Guppyfriend bag?",
    answer: (
      <>
        <p>
          A Guppyfriend washing bag is a mesh laundry bag that catches microplastic fibers shed during washing. It reduces fiber shedding by up to 86% AND captures the fibers that do shed.
        </p>
        <p>
          Most athletic wear contains synthetic fabrics (nylon, polyester, spandex) which shed microplastics when washed. We can't avoid synthetics entirely - they're essential for the stretch and performance our gear needs - but we CAN be transparent about it and recommend tools like Guppyfriend bags.
        </p>
        <p>
          Just put your synthetic garments in the bag, zip it up, wash as normal, then wipe out the collected fibers and dispose of them in the trash (not down the drain).
        </p>
        <p>
          <Link href="/pages/care" className="text-[#FF1493] font-semibold underline">
            Learn more about garment care →
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Do you ship internationally?",
    answer: (
      <>
        <p>
          Currently we ship within the United States only. We're working on international shipping and hope to expand soon!
        </p>
        <p>
          If you're international and really want our gear, email us at hello@almostzeromotion.com and we'll add you to our waitlist. When we launch international shipping, you'll be the first to know.
        </p>
      </>
    ),
  },
  {
    question: "What's your return policy?",
    answer: (
      <>
        <p>
          <strong>Free returns within 30 days.</strong> No questions asked.
        </p>
        <p>
          We want you to love your gear. Try it on, walk in it, stretch in it. If it doesn't feel right, send it back for a full refund.
        </p>
        <p>
          Items must be unworn, unwashed, and have all original tags attached. We'll email you a prepaid return label as soon as you initiate your return.
        </p>
        <p>
          Refunds are processed within 5-7 business days of receiving your return.
        </p>
      </>
    ),
  },
  {
    question: "Is this the same as athleisure?",
    answer: (
      <>
        <p>
          Nope. We're not athleisure. We actually hate that word. 😅
        </p>
        <p>
          Athleisure is workout clothes you wear when you're not working out. It's about the aesthetic.
        </p>
        <p>
          We're active recovery wear - clothes specifically designed for gentle movement that aids recovery. There's actual science behind why soft fabrics, comfortable fits, and non-restrictive gear matter for your nervous system.
        </p>
        <p>
          This isn't just "cute gym clothes." This is functional recovery gear that happens to look good.
        </p>
        <p>
          <Link href="/pages/the-science" className="text-[#FF1493] font-semibold underline">
            Read the science behind it →
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Can I work out in this gear?",
    answer: (
      <>
        <p>
          You CAN, but that's not what it's designed for.
        </p>
        <p>
          Our gear is optimized for Zone 1-2 movement (gentle walks, stretching, light yoga, easy cycling). If you're doing high-intensity training, you'll want technical workout gear with compression and moisture-wicking.
        </p>
        <p>
          That said, some people love our gear for low-intensity workouts like walking or gentle yoga. If it feels good and works for you, go for it!
        </p>
        <p>
          Just know that it's designed to signal to your nervous system that you're in recovery mode, not training mode.
        </p>
      </>
    ),
  },
  {
    question: "How is this different from regular loungewear?",
    answer: (
      <>
        <p>
          Regular loungewear is designed for sitting. We're designed for gentle MOVEMENT.
        </p>
        <p>
          Our gear has light compression, stretch, and structure that supports walking, stretching, and active recovery activities. But it's soft and comfortable enough that you can absolutely lounge in it too.
        </p>
        <p>
          Think of it as the middle ground between "full technical workout gear" and "pajamas." You're still moving, just gently.
        </p>
      </>
    ),
  },
  {
    question: "Do you have men's gear?",
    answer: (
      <>
        <p>
          Not yet, but it's coming! We're launching with women's gear first, but men's active recovery wear is on our roadmap.
        </p>
        <p>
          Email us at hello@almostzeromotion.com if you want to be notified when men's gear launches. We'll add you to the waitlist!
        </p>
      </>
    ),
  },
];
