import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'The Science of Moving Gently | (ALMOST) ZERO MOTION',
  description: 'Why what you wear after matters as much as what you wear during - the science behind active recovery.',
};

export default function SciencePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        {/* HERO SECTION - Hot Pink */}
        <section className="bg-[#FF1493] text-white py-32 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              the science of moving gently ✨
            </h1>
            <p className="text-xl md:text-2xl font-normal leading-relaxed">
              why what you wear after matters as much as what you wear during
            </p>
          </div>
        </section>

        {/* SECTION 1: WHAT IS ACTIVE RECOVERY? */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493]">
              so... what is active recovery? 🤔
            </h2>

            <div className="text-lg text-black leading-relaxed text-left space-y-4 pt-4">
              <p>
                active recovery = gentle movement that helps your body actually recover.
              </p>

              <p>we're talking:</p>
              <ul className="space-y-2 pl-6">
                <li>• walks (not runs. walks.)</li>
                <li>• stretching (yoga counts)</li>
                <li>• light yoga or mobility work</li>
                <li>• easy spinning or cycling</li>
                <li>• basically anything that keeps you moving without adding fatigue</li>
              </ul>

              <p>
                it's not sitting perfectly still on the couch (though we support that too).
                and it's definitely not going hard. we're talking zone 1-2 movement.
                gentle. easy. almost... zero motion. 😉
              </p>

              <p>
                the science is clear: gentle movement after hard workouts helps flush
                lactic acid, reduces stiffness, and speeds up recovery. your body needs
                to move, just not intensely.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY IT SHOULD BE PLAYFUL */}
        <section className="bg-[#FFE4F0] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT: Image */}
              <div className="aspect-[4/3] bg-white/50 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm text-center p-4">
                  [Person in bright (ALMOST) ZERO MOTION gear, walking with coffee, smiling]
                </div>
              </div>

              {/* RIGHT: Text */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493]">
                  active recovery should be playful ✨
                </h2>

                <div className="text-base text-black leading-relaxed space-y-4">
                  <p>
                    here's the thing: we're not training for a marathon right now.
                    we're not in our suffering era. we're just... moving. gently.
                  </p>

                  <p>and that means we get to have FUN with it.</p>

                  <p>
                    softer fabrics. brighter colors. less serious technical wear.
                    clothes that soothe your body while you're still in motion.
                  </p>

                  <p>
                    when you're doing the hard training? sure, go ahead and wear
                    your compression tights and moisture-wicking everything.
                  </p>

                  <p>
                    but when you're walking to the coffee shop after your workout?
                    or stretching on your living room floor? or doing a gentle
                    spin on the bike?
                  </p>

                  <p>
                    you get to wear clothes that feel good. look cute. make you smile.
                  </p>

                  <p>
                    recovery is when your body actually gets stronger. it should feel good.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE ACTUAL SCIENCE - 3 COLUMNS */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493] text-center mb-16">
              the actual science 🧪
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Column 1: Nervous System */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-black">
                  your nervous system
                </h3>
                <p className="text-base text-black leading-relaxed">
                  your brain needs clear signals that workout time is over.
                </p>
                <p className="text-base text-black leading-relaxed">
                  when you change into soft, non-technical clothes, your nervous
                  system shifts from "fight or flight" to "rest and digest" mode.
                </p>
                <p className="text-base text-black leading-relaxed">
                  this is when repair actually happens. cortisol drops. endorphins
                  increase. your body knows: we're safe now. time to recover.
                </p>
                <p className="text-base text-black leading-relaxed">
                  the clothes you wear literally tell your brain what mode to be in.
                </p>
              </div>

              {/* Column 2: Gentle Movement */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🚶‍♀️</div>
                <h3 className="text-xl font-bold text-black">
                  gentle movement
                </h3>
                <p className="text-base text-black leading-relaxed">
                  zone 1-2 movement (where you can easily hold a conversation) helps
                  flush metabolic waste from your muscles without adding fatigue.
                </p>
                <p className="text-base text-black leading-relaxed">
                  walks, gentle stretching, easy cycling - these all increase blood
                  flow to tired muscles, speeding up recovery.
                </p>
                <p className="text-base text-black leading-relaxed">
                  the key? you need to move gently enough that you're not adding
                  stress. that's why comfortable, non-restrictive clothes matter.
                </p>
                <p className="text-base text-black leading-relaxed">
                  if your clothes are too tight or technical, your body thinks:
                  we're still training.
                </p>
              </div>

              {/* Column 3: Rest Without Guilt */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">💕</div>
                <h3 className="text-xl font-bold text-black">
                  rest without guilt
                </h3>
                <p className="text-base text-black leading-relaxed">
                  recovery is when adaptation happens. your body doesn't get stronger
                  during the workout - it gets stronger during recovery.
                </p>
                <p className="text-base text-black leading-relaxed">
                  that means couch time = training time. (we said what we said.)
                </p>
                <p className="text-base text-black leading-relaxed">
                  but so many athletes struggle with guilt when they're not moving
                  hard. soft clothes that support gentle movement help bridge the gap.
                </p>
                <p className="text-base text-black leading-relaxed">
                  you're still active. you're still an athlete. you're just moving
                  gently. and that's exactly what your body needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE ZONES */}
        <section className="bg-[#FFE4F0] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493] text-center mb-12">
              what does "zone 1-2" even mean? 📊
            </h2>

            <div className="space-y-8">
              {/* Zone 1 */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  ZONE 1 - Recovery / Very Light
                </h3>
                <ul className="space-y-2 text-base text-black">
                  <li>• Can sing while moving</li>
                  <li>• Barely breaking a sweat</li>
                  <li>• Examples: slow walk, gentle stretching</li>
                  <li>• This is prime (ALMOST) ZERO MOTION territory</li>
                </ul>
              </div>

              {/* Zone 2 */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  ZONE 2 - Light Activity
                </h3>
                <ul className="space-y-2 text-base text-black">
                  <li>• Can have a full conversation easily</li>
                  <li>• Light sweat after a while</li>
                  <li>• Examples: brisk walk, easy bike ride, light yoga</li>
                  <li>• Still (ALMOST) ZERO MOTION approved</li>
                </ul>
              </div>

              {/* Zone 3+ */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  ZONE 3+ - Training
                </h3>
                <ul className="space-y-2 text-base text-black">
                  <li>• Can only speak in short sentences</li>
                  <li>• Sweating, breathing hard</li>
                  <li>• This is NOT what we're talking about</li>
                  <li>• This is when you wear the technical gear</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FABRIC MATTERS */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
              {/* LEFT: Text (60%) */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493]">
                  why soft fabrics matter 🧵
                </h2>

                <div className="text-base text-black leading-relaxed space-y-4">
                  <p>
                    technical workout fabrics are designed to wick sweat, compress
                    muscles, and support high-intensity movement.
                  </p>

                  <p>
                    they're amazing for training. but they keep your nervous system
                    in "go" mode.
                  </p>

                  <p className="font-semibold">recovery fabrics should be:</p>
                  <ul className="space-y-2 pl-6">
                    <li>✓ soft against skin (signals safety to nervous system)</li>
                    <li>✓ breathable (but not moisture-wicking - you're not sweating)</li>
                    <li>✓ gently compressive at most (not performance-level tight)</li>
                    <li>✓ comfortable enough to actually relax in</li>
                  </ul>

                  <p>
                    when your clothes feel good, your body relaxes faster.
                    faster relaxation = faster recovery. science.
                  </p>
                </div>
              </div>

              {/* RIGHT: Image (40%) */}
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm text-center p-4">
                  [Close-up of soft fabric, hands touching it]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#FF1493] text-white py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              ready to move gently?
            </h2>
            <p className="text-xl md:text-2xl">
              shop clothes that soothe your body while you're still in motion
            </p>
            <div className="pt-4">
              <Link href="/shop">
                <button className="px-12 py-5 bg-white text-[#FF1493] font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300">
                  shop active recovery gear
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
