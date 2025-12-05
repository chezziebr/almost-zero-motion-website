import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Care Instructions | (ALMOST) ZERO MOTION',
  description: 'How to care for your active recovery wear and reduce microplastic shedding.',
};

export default function CarePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        {/* HERO */}
        <section className="bg-[#FFE4F0] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FF1493] mb-4">
              care instructions 🧼
            </h1>
            <p className="text-xl text-black">
              take care of your gear (and the planet) 🌍
            </p>
          </div>
        </section>

        {/* WHY WE CARE */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-8 text-center">
              why we care about this
            </h2>

            <div className="text-lg text-black leading-relaxed space-y-6">
              <p>
                here's the truth: most athletic wear contains synthetic fabrics. they're amazing for performance - moisture-wicking, durable, stretchy. but they shed microplastics when you wash them.
              </p>

              <p>
                we can't avoid synthetics entirely (they're essential for the gentle compression and stretch our gear needs). but we CAN be transparent about it and give you tools to reduce microplastic shedding.
              </p>

              <p className="font-semibold text-xl text-[#FF1493]">
                that's why proper care matters.
              </p>

              <p>
                washing your gear the right way extends its life AND reduces environmental impact. win-win.
              </p>
            </div>
          </div>
        </section>

        {/* GENERAL CARE INSTRUCTIONS */}
        <section className="bg-[#FFE4F0] py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-12 text-center">
              general care instructions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DO's */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
                  <span>✓</span> DO
                </h3>
                <ul className="space-y-4 text-base text-black">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Wash in cold water (saves energy and protects fabrics)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Use a Guppyfriend bag or similar microfiber filter</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Wash with similar colors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Air dry when possible (dryers wear out fabrics faster)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Turn garments inside out before washing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Use gentle/delicate cycle</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Wash only when needed (not after every wear!)</span>
                  </li>
                </ul>
              </div>

              {/* DON'Ts */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                  <span>✗</span> DON'T
                </h3>
                <ul className="space-y-4 text-base text-black">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Use fabric softener (breaks down technical fabrics)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Wash in hot water (shrinks and damages fibers)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Dry clean (harsh chemicals damage fabrics)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Use bleach</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Iron (most of our fabrics are heat-sensitive)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Wring out wet garments (stretches fabrics)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Overload the washing machine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FABRIC-SPECIFIC CARE */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-12 text-center">
              fabric-specific care
            </h2>

            <div className="space-y-8">
              {/* Soft Stretch Fabrics */}
              <div className="bg-[#FFE4F0] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  🧘 Soft Stretch Fabrics (Leggings, Joggers, Tanks)
                </h3>
                <p className="text-base text-black mb-4">
                  <strong>Fabrics:</strong> Nylon/Spandex blends, Polyester/Spandex
                </p>
                <ul className="space-y-2 text-base text-black">
                  <li>• Cold water wash, gentle cycle</li>
                  <li>• Always use a Guppyfriend bag</li>
                  <li>• Air dry flat or hang (no dryer!)</li>
                  <li>• Don't wash after every wear - spot clean if needed</li>
                </ul>
              </div>

              {/* Fleece & Sweatshirt Fabrics */}
              <div className="bg-[#FFE4F0] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  🧥 Fleece & Sweatshirt Fabrics
                </h3>
                <p className="text-base text-black mb-4">
                  <strong>Fabrics:</strong> Cotton blends, Fleece, French Terry
                </p>
                <ul className="space-y-2 text-base text-black">
                  <li>• Cold or warm water (check care tag)</li>
                  <li>• Turn inside out to preserve color</li>
                  <li>• Tumble dry low or air dry</li>
                  <li>• Remove from dryer while slightly damp to prevent shrinking</li>
                </ul>
              </div>

              {/* Puffer Jackets & Down */}
              <div className="bg-[#FFE4F0] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  ☁️ Puffer Jackets & Down Items
                </h3>
                <p className="text-base text-black mb-4">
                  <strong>Fabrics:</strong> Down-filled, Synthetic insulation
                </p>
                <ul className="space-y-2 text-base text-black">
                  <li>• Wash infrequently (spot clean when possible)</li>
                  <li>• When washing: use gentle cycle, cold water</li>
                  <li>• Use down-specific detergent if available</li>
                  <li>• Tumble dry low with tennis balls to restore loft</li>
                  <li>• May take several hours to fully dry - be patient!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GUPPYFRIEND BAGS */}
        <section className="bg-[#FF1493] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              what's a Guppyfriend bag? 🐟
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                A Guppyfriend washing bag is a simple mesh laundry bag that catches microplastic fibers shed during washing. It reduces fiber shedding by up to 86% AND captures the fibers that do shed.
              </p>

              <p>
                <strong>How to use it:</strong>
              </p>
              <ul className="space-y-2 pl-6">
                <li>• Put your synthetic garments in the bag (don't overfill!)</li>
                <li>• Zip it up and wash as normal</li>
                <li>• After washing, wipe collected fibers from inside corners</li>
                <li>• Dispose of fibers in trash (not down the drain)</li>
              </ul>

              <p>
                We recommend Guppyfriend bags, Cora Ball, or similar microfiber filters. They're a small investment that makes a big difference.
              </p>

              <div className="bg-white/20 rounded-2xl p-6 mt-8">
                <p className="text-center text-lg">
                  <strong>we're not sponsored by Guppyfriend.</strong><br />
                  we just think everyone should use them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXTENDING GARMENT LIFE */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-8 text-center">
              make your gear last longer
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">
                  Wash less often
                </h3>
                <p className="text-base text-black leading-relaxed">
                  Recovery wear doesn't get as sweaty as workout gear. Unless it's visibly dirty or smells, you can wear it multiple times before washing. Air it out between wears.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">
                  Spot clean first
                </h3>
                <p className="text-base text-black leading-relaxed">
                  Got a small stain? Spot clean it instead of washing the whole garment. Use cold water and a gentle detergent, dab (don't rub), and air dry.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">
                  Store properly
                </h3>
                <p className="text-base text-black leading-relaxed">
                  Hang or fold (don't crumple). Keep away from direct sunlight, which can fade colors. Make sure items are completely dry before storing.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">
                  Rotate your gear
                </h3>
                <p className="text-base text-black leading-relaxed">
                  Don't wear the same piece every day. Rotating through multiple items gives fabrics time to rest and recover (just like you!).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUESTIONS? */}
        <section className="bg-[#FFE4F0] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-6">
              questions about care?
            </h2>
            <p className="text-lg text-black mb-4">
              Every product page includes specific fabric content and care instructions. When in doubt, check the care tag sewn into your garment.
            </p>
            <p className="text-lg text-black">
              Still not sure? Email us at hello@almostzeromotion.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
