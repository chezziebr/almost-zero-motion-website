import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        {/* 1. HERO SECTION - Hot Pink Background */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#FF1493] text-white overflow-hidden py-20">
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              (Get) Recovered.<br />
              Look cute 💕
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl font-normal leading-relaxed max-w-2xl mx-auto">
              active recovery wear for people who walk, stretch,<br />
              and yes... occasionally couch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/shop">
                <button className="px-10 py-4 bg-white text-[#FF1493] font-semibold text-base rounded-full hover:scale-105 transition-transform duration-300">
                  shop the vibe
                </button>
              </Link>
              <Link href="/pages/the-science">
                <button className="px-10 py-4 border-2 border-white text-white font-semibold text-base rounded-full hover:bg-white hover:text-[#FF1493] transition-all duration-300">
                  what's active recovery?
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Lifestyle Image */}
          <div className="mt-12 w-full max-w-5xl mx-auto px-4">
            <div className="aspect-[16/9] bg-white/10 rounded-2xl overflow-hidden">
              <img
                src="/images/lifestyle/hero-bikes.jpg"
                alt="Friends in bright activewear enjoying coffee after a bike ride"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* 2. MARQUEE TEXT BANNER */}
        <section className="bg-white py-6 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-2xl font-bold text-[#FF1493] inline-block px-4">
              ✨ walk it out ✨ stretch it out ✨ your couch misses you ✨ but first, walk ✨ gentle movement only ✨ no gym required ✨ walk it out ✨ stretch it out ✨ your couch misses you ✨ but first, walk ✨ gentle movement only ✨ no gym required ✨
            </span>
          </div>
        </section>

        {/* 3. SHOP BY VIBE */}
        <section className="py-20 md:py-32 bg-[#FFE4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493] text-center mb-16">
              what are you doing today?
            </h2>

            {/* Category Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <Link key={index} href={category.link}>
                  <div className="group cursor-pointer">
                    {/* Category Image */}
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-4">
                        [Bright product photo: {category.imageDesc}]
                      </div>
                    </div>
                    {/* Category Name */}
                    <h3 className="text-xl font-bold text-black text-center">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FEATURED PRODUCTS */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headline */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                the walk-it-out essentials
              </h2>
              <p className="text-xl text-gray-600">
                for when you're moving (gently)
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {featuredProducts.map((product) => (
                <Link key={product.sku} href={`/products/${product.slug}`}>
                  <Card hover padding="none" className="overflow-hidden group cursor-pointer">
                    {/* Product Image */}
                    <div className="aspect-square bg-white relative overflow-hidden">
                      <Image
                        src={`/images/products/${product.image}`}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {/* Add to Bag button on hover */}
                      <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full py-3 bg-[#FF1493] text-white font-semibold rounded-full hover:bg-[#E6127F]">
                          add to bag
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-base mb-1 text-black">
                        {product.name}
                      </h3>
                      <p className="text-xl font-bold text-black mb-2">
                        ${product.price}
                      </p>
                      {/* Color dots */}
                      <div className="flex gap-2">
                        {product.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/shop">
                <button className="px-10 py-4 bg-[#FF1493] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                  shop all
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. ACTIVE RECOVERY IS PLAYFUL */}
        <section className="py-20 md:py-32 bg-[#FFE4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT: Image */}
              <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/lifestyle/walking-friends.jpg"
                  alt="Friends in bright activewear walking and chatting"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* RIGHT: Text */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493]">
                  active recovery should be playful ✨
                </h2>

                <div className="text-lg text-black space-y-4 leading-relaxed">
                  <p>
                    here's the thing: we're not training for a marathon right now.
                    we're not in our suffering era. we're just... moving. gently.
                  </p>

                  <p>
                    and that means we get to have FUN with it.
                  </p>

                  <p>
                    softer fabrics. brighter colors. less serious technical wear.
                    clothes that soothe your body while you're still in motion.
                  </p>

                  <p>
                    walking. stretching. light yoga. the occasional couch session.
                    this is where recovery actually happens. and it should feel good.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/pages/the-science">
                    <button className="px-10 py-4 bg-[#FF1493] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                      learn more about active recovery
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. THE SCIENCE (BUT MAKE IT FUN) */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493] text-center mb-16">
              active recovery = actual science ✨
            </h2>

            {/* 3 Columns */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Column 1 */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-black">your nervous system</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your brain needs to know the workout is over. Soft clothes = instant chill mode. Science says so.
                </p>
              </div>

              {/* Column 2 */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🚶‍♀️</div>
                <h3 className="text-2xl font-bold text-black">gentle movement</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Walks, stretches, light yoga. Keeps blood flowing without adding fatigue. Zone 1-2 vibes only.
                </p>
              </div>

              {/* Column 3 */}
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">💕</div>
                <h3 className="text-2xl font-bold text-black">rest without guilt</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recovery is when your body actually gets stronger. Couch time = training time. We said what we said.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/pages/the-science">
                <button className="px-10 py-4 bg-[#FF1493] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                  the full science breakdown
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. TESTIMONIALS */}
        <section className="py-20 md:py-32 bg-[#FFE4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF1493] text-center mb-16">
              what people are saying 💬
            </h2>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                  <p className="text-lg text-black leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm text-gray-600">
                    — {testimonial.name}, {testimonial.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. INSTAGRAM SECTION */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headline */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                tag us in your walks 📸
              </h2>
              <p className="text-xl text-[#FF1493] font-semibold">
                @almostzeromotion
              </p>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 rounded-xl overflow-hidden"
                >
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-4">
                    [People in gear walking, stretching, casual vibes - bright & colorful]
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://instagram.com/almostzeromotion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-10 py-4 bg-[#FF1493] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
                  Follow Us on Instagram
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-32 bg-[#FF1493] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              ready to move gently?
            </h2>
            <Link href="/shop">
              <button className="px-12 py-5 bg-white text-[#FF1493] font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300">
                shop now
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Category Data
const categories = [
  {
    name: 'walking 🚶‍♀️',
    link: '/collections/walking-gear',
    imageDesc: 'Models in colorful walking gear',
  },
  {
    name: 'stretching 🧘',
    link: '/collections/stretching-gear',
    imageDesc: 'Models stretching in bright leggings and crops',
  },
  {
    name: 'light layers 🧥',
    link: '/collections/light-layers',
    imageDesc: 'Colorful puffers and cardigans',
  },
  {
    name: 'full couch mode 🛋️',
    link: '/collections/couch-mode',
    imageDesc: 'Cozy sweats and cardigans',
  },
  {
    name: 'accessories 🧦',
    link: '/collections/accessories',
    imageDesc: 'Puffer booties and accessories',
  },
];

// Featured Products (from CSV)
const featuredProducts = [
  {
    sku: '400536',
    slug: 'the-walk-it-out-jogger',
    name: 'The Walk-It-Out Jogger',
    price: 94,
    image: '400536 - heather gray.webp',
    colors: ['#E5E5E5', '#2C3E50', '#8FBC8F'],
  },
  {
    sku: '400532',
    slug: 'the-walk-tank',
    name: 'The Walk Tank',
    price: 38,
    image: '400532 - pink.webp',
    colors: ['#FFB6C1', '#FFFFFF', '#000080'],
  },
  {
    sku: '400533',
    slug: 'the-everyday-short',
    name: 'The Everyday Short',
    price: 64,
    image: '400533 - magenta.webp',
    colors: ['#000000', '#FF1493'],
  },
  {
    sku: '400537',
    slug: 'light-squeeze-leggings',
    name: 'Light Squeeze Leggings',
    price: 88,
    image: '400537 - blue gem.webp',
    colors: ['#000000', '#4682B4', '#87CEEB'],
  },
  {
    sku: '400543',
    slug: 'the-off-duty-puffer',
    name: 'The Off-Duty Puffer',
    price: 198,
    image: '400543 - blue.webp',
    colors: ['#4682B4', '#000080', '#000000'],
  },
  {
    sku: '400535',
    slug: 'the-corset-fleece',
    name: 'The Corset Fleece',
    price: 188,
    image: '400535 - navy.webp',
    colors: ['#000080', '#000000'],
  },
  {
    sku: '400548',
    slug: 'the-puffer-booties',
    name: 'The Puffer Booties',
    price: 99,
    image: '400548 - champagne 2.jpg',
    colors: ['#FFD700'],
  },
  {
    sku: '400534',
    slug: 'the-boxy-crop',
    name: 'The Boxy Crop',
    price: 58,
    image: '400534 - white.webp',
    colors: ['#FFFFFF', '#8FBC8F'],
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      'these joggers are so soft i wore them for a 5-mile walk AND a full netflix marathon. no regrets.',
    name: 'Sarah',
    role: 'hot girl walker',
  },
  {
    quote: "finally, clothes that get it. i'm active but i'm not THAT active.",
    name: 'Mike',
    role: 'weekend hiker',
  },
  {
    quote:
      'my post-yoga uniform. comfortable enough to nap in, cute enough for coffee runs.',
    name: 'Jess',
    role: 'yoga enthusiast',
  },
];
