import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Size Guide | (ALMOST) ZERO MOTION',
  description: 'Find your perfect fit - sizing charts and measurement guide for active recovery wear.',
};

export default function SizeGuidePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        {/* HERO */}
        <section className="bg-[#FFE4F0] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#FF1493] mb-4">
              size guide 📏
            </h1>
            <p className="text-xl text-black">
              find your perfect fit for gentle movement
            </p>
          </div>
        </section>

        {/* HOW TO MEASURE */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-8 text-center">
              how to measure yourself
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">🫶 Bust/Chest</h3>
                  <p className="text-base text-gray-700">
                    Measure around the fullest part of your chest, keeping the tape level and comfortable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">📍 Waist</h3>
                  <p className="text-base text-gray-700">
                    Measure around your natural waistline - the narrowest part of your torso, usually just above your belly button.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">🍑 Hips</h3>
                  <p className="text-base text-gray-700">
                    Measure around the fullest part of your hips and glutes, keeping the tape parallel to the floor.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">📐 Inseam</h3>
                  <p className="text-base text-gray-700">
                    Measure from the top of your inner thigh down to your ankle bone (or where you want pants to hit).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFE4F0] rounded-2xl p-6">
              <p className="text-base text-black">
                <strong>Pro tip:</strong> When in doubt, size up! Our recovery wear is designed to feel soft and comfortable, not restrictive. If you're between sizes or prefer a more relaxed fit, go with the larger size.
              </p>
            </div>
          </div>
        </section>

        {/* WOMEN'S TOPS */}
        <section className="bg-[#FFE4F0] py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-8 text-center">
              women's tops
            </h2>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <table className="w-full">
                <thead className="bg-[#FF1493] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Size</th>
                    <th className="px-6 py-4 text-left font-bold">Bust</th>
                    <th className="px-6 py-4 text-left font-bold">Waist</th>
                    <th className="px-6 py-4 text-left font-bold">Hips</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold">XS</td>
                    <td className="px-6 py-4">30-32"</td>
                    <td className="px-6 py-4">24-26"</td>
                    <td className="px-6 py-4">33-35"</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#FFE4F0]/30">
                    <td className="px-6 py-4 font-semibold">S</td>
                    <td className="px-6 py-4">32-34"</td>
                    <td className="px-6 py-4">26-28"</td>
                    <td className="px-6 py-4">35-37"</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold">M</td>
                    <td className="px-6 py-4">34-36"</td>
                    <td className="px-6 py-4">28-30"</td>
                    <td className="px-6 py-4">37-39"</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#FFE4F0]/30">
                    <td className="px-6 py-4 font-semibold">L</td>
                    <td className="px-6 py-4">36-38"</td>
                    <td className="px-6 py-4">30-32"</td>
                    <td className="px-6 py-4">39-41"</td>
                  </tr>
                  <tr className="bg-[#FFE4F0]/30">
                    <td className="px-6 py-4 font-semibold">XL</td>
                    <td className="px-6 py-4">38-40"</td>
                    <td className="px-6 py-4">32-34"</td>
                    <td className="px-6 py-4">41-43"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <p className="text-base text-black">
                <strong>Fit note:</strong> Our tops are designed with room in the shoulders and lats for athletic builds. They're meant to feel relaxed and comfortable.
              </p>
            </div>
          </div>
        </section>

        {/* WOMEN'S BOTTOMS */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-8 text-center">
              women's bottoms
            </h2>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <table className="w-full">
                <thead className="bg-[#FF1493] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Size</th>
                    <th className="px-6 py-4 text-left font-bold">Waist</th>
                    <th className="px-6 py-4 text-left font-bold">Hips</th>
                    <th className="px-6 py-4 text-left font-bold">Inseam</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold">XS</td>
                    <td className="px-6 py-4">24-26"</td>
                    <td className="px-6 py-4">33-35"</td>
                    <td className="px-6 py-4">28"</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#FFE4F0]/30">
                    <td className="px-6 py-4 font-semibold">S</td>
                    <td className="px-6 py-4">26-28"</td>
                    <td className="px-6 py-4">35-37"</td>
                    <td className="px-6 py-4">28.5"</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold">M</td>
                    <td className="px-6 py-4">28-30"</td>
                    <td className="px-6 py-4">37-39"</td>
                    <td className="px-6 py-4">29"</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-[#FFE4F0]/30">
                    <td className="px-6 py-4 font-semibold">L</td>
                    <td className="px-6 py-4">30-32"</td>
                    <td className="px-6 py-4">39-41"</td>
                    <td className="px-6 py-4">29.5"</td>
                  </tr>
                  <tr className="bg-[#FFE4F0]/30">
                    <td className="px-6 py-4 font-semibold">XL</td>
                    <td className="px-6 py-4">32-34"</td>
                    <td className="px-6 py-4">41-43"</td>
                    <td className="px-6 py-4">30"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <p className="text-base text-black">
                <strong>Fit note:</strong> Our bottoms have extra room in the quads and glutes. If you have muscular legs, you'll love the fit. When in doubt, size up for maximum comfort.
              </p>
            </div>
          </div>
        </section>

        {/* FIT PHILOSOPHY */}
        <section className="bg-[#FFE4F0] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#FF1493] mb-6">
              our fit philosophy
            </h2>
            <div className="text-lg text-black leading-relaxed space-y-4">
              <p>
                recovery wear should feel good. not tight. not restrictive. just... comfortable.
              </p>
              <p>
                we design for athletic bodies - room where you need it, tailored where you want it.
              </p>
              <p>
                if you're between sizes, size up. gentle movement requires gentle fits.
              </p>
            </div>
          </div>
        </section>

        {/* STILL NOT SURE? */}
        <section className="bg-[#FF1493] text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              still not sure? 💕
            </h2>
            <p className="text-lg mb-8">
              Email us at hello@almostzeromotion.com and we'll help you find your perfect fit.
            </p>
            <p className="text-base">
              Free returns on all orders. Try it, walk in it, stretch in it. If it doesn't feel right, send it back.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
