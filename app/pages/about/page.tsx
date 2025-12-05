import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About | (ALMOST) ZERO MOTION',
  description: 'We make clothes for gentle movement - because not every moment needs to be a training session.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        {/* HERO SECTION - Soft Pink */}
        <section className="bg-[#FFE4F0] py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FF1493] leading-tight">
              we make clothes for gentle movement 💕
            </h1>
            <p className="text-xl md:text-2xl text-black">
              because not every moment needs to be a training session
            </p>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-lg text-black leading-relaxed space-y-6">
              <p>
                (ALMOST) ZERO MOTION started with a simple observation:
              </p>

              <p>
                endurance athletes have amazing gear for training. compression
                tights, moisture-wicking everything, technical fabrics designed
                for performance.
              </p>

              <p>
                but what about the other 22 hours of the day?
              </p>

              <p>
                what about the recovery walk after your long run? the gentle
                stretch session on your living room floor? the coffee run in
                your "done training for today" outfit?
              </p>

              <p>
                we needed something between "full technical gear" and "giving up
                completely."
              </p>

              <p className="font-semibold text-xl text-[#FF1493]">
                enter: active recovery wear.
              </p>

              <p>
                clothes soft enough to signal to your nervous system that you're
                done training. but functional enough for the gentle movement that
                actually helps you recover.
              </p>

              <p>
                bright colors because recovery should be fun. soft fabrics because
                your body deserves it. playful vibes because we're not taking
                ourselves that seriously right now.
              </p>

              <p>
                we're (almost) at zero motion. but not quite. 😉
              </p>
            </div>
          </div>
        </section>

        {/* OUR VALUES - 3 Columns */}
        <section className="bg-[#FFE4F0] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Column 1: Playful Recovery */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-black">
                  playful recovery
                </h3>
                <p className="text-base text-black leading-relaxed">
                  recovery doesn't have to be serious. bright colors, soft fabrics,
                  and clothes that make you smile.
                </p>
              </div>

              {/* Column 2: Microplastic Transparency */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-black">
                  microplastic transparency
                </h3>
                <p className="text-base text-black leading-relaxed">
                  we're honest about fabric shedding. we recommend guppyfriend bags.
                  we're not perfect, but we're transparent.
                </p>
              </div>

              {/* Column 3: Body Positive */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">💕</div>
                <h3 className="text-2xl font-bold text-black">
                  body positive
                </h3>
                <p className="text-base text-black leading-relaxed">
                  our clothes are designed for athletic bodies. room for quads.
                  space for shoulders. fits that actually work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#FF1493] text-white py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              join the gentle movement 🚶‍♀️
            </h2>
            <div className="pt-4">
              <Link href="/shop">
                <button className="px-12 py-5 bg-white text-[#FF1493] font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300">
                  shop now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
