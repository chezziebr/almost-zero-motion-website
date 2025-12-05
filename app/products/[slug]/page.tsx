'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useParams } from 'next/navigation';

// Product data from CSV
const products: Record<string, any> = {
  'the-walk-it-out-jogger': {
    sku: '400536',
    name: 'The Walk-It-Out Jogger',
    price: 94,
    rating: 4.5,
    reviews: 89,
    description: `someone called these "joggers" but let's be real - you're walking in these. post-walk errands? yes. couch time? absolutely. these drape perfectly off your butt and make you look effortlessly put-together. by vuori.`,
    inActiveRecovery: `let your legs breathe after all that movement 💨 the super soft fabric tells your brain "compression time is OVER." perfect for your recovery walk, coffee run, or full couch mode. pairs with anything fitted on top.`,
    fit: 'slim but relaxed. loose thighs, fitted calves.',
    showsOff: 'calves, glutes',
    microplasticLevel: 'medium',
    materials: '89% Recycled Polyester, 11% Elastane',
    care: 'Machine wash cold, tumble dry low, no bleach. Use Guppyfriend bag to catch microfibers.',
    suggestedPairings: ['the-walk-tank', 'the-shoulder-show-off'],
    colors: [
      { name: 'Pale Grey Heather', hex: '#E5E5E5', image: '400536 - heather gray.webp' },
      { name: 'Midnight Heather', hex: '#2C3E50', image: '400536 - midnight.webp' },
      { name: 'Spring Heather', hex: '#8FBC8F', image: '400536 - heather blue.webp' },
    ],
    images: [
      '400536 - heather gray.webp',
      '400536 - heather gray 2.webp',
      '400536 - midnight.webp',
      '400536 - midnight 2.webp',
      '400536 - heather blue.webp',
    ],
  },
  'the-walk-tank': {
    sku: '400532',
    name: 'The Walk Tank',
    price: 38,
    rating: 5,
    reviews: 127,
    description: `buttery soft + stretchy = your new fave. wear it solo when it's hot, layer it when it's not. perfect for walks, stretches, or yes, the couch. by beyond yoga.`,
    inActiveRecovery: `post-walk vibes only 🚶‍♀️ throw this on after you hit your steps and tell your body "we did the thing, now we chill." science says soft clothes = instant relaxation mode. your nervous system will thank you.`,
    fit: 'fitted but not tight. shirred sides = adapts to your shape.',
    showsOff: 'shoulders, arms, core',
    microplasticLevel: 'medium',
    materials: '94% Polyester, 6% Spandex',
    care: 'Machine wash cold, hang dry. Use Guppyfriend bag.',
    suggestedPairings: ['the-everyday-short', 'the-walk-it-out-jogger'],
    colors: [
      { name: 'Pink', hex: '#FFB6C1', image: '400532 - pink.webp' },
      { name: 'White', hex: '#FFFFFF', image: '400532 - white.webp' },
      { name: 'Navy', hex: '#000080', image: '400532 - navy.webp' },
    ],
    images: [
      '400532 - pink.webp',
      '400532 - white.webp',
      '400532 - white 2.webp',
      '400532 - navy.webp',
    ],
  },
  'the-everyday-short': {
    sku: '400533',
    name: 'The Everyday Short (yes, even bed)',
    price: 64,
    rating: 4.8,
    reviews: 156,
    description: `these shorts are so soft you'll want to sleep in them (we won't judge). breathable, lightweight, supportive without the gym vibes. moves with you. by vuori.`,
    inActiveRecovery: `your upper thighs need this 🦵 just enough compression to feel supported, but so soft your brain knows you're not working out. chase your dog in these? sure. walk 3 miles? yep. full horizontal on the couch? absolutely.`,
    fit: 'tight stretch fit, 4" inseam',
    showsOff: 'quads',
    microplasticLevel: 'medium',
    materials: '75% Recycled Polyamide, 25% Elastane',
    care: 'Machine wash cold, tumble dry low. Use Guppyfriend bag.',
    suggestedPairings: ['the-walk-tank', 'the-corset-fleece'],
    colors: [
      { name: 'Black', hex: '#000000', image: '400533 - black.webp' },
      { name: 'Magenta', hex: '#FF1493', image: '400533 - magenta.webp' },
    ],
    images: [
      '400533 - magenta.webp',
      '400533 - magenta 2.webp',
      '400533 - magenta 3.webp',
      '400533 - black.webp',
      '400533 - black 2.webp',
    ],
  },
  'the-off-duty-puffer': {
    sku: '400543',
    name: 'The Off-Duty Puffer',
    price: 198,
    rating: 4.7,
    reviews: 64,
    description: `nothing screams "i'm done moving" like a cropped puffer. zero chance you're working out in this, but you'll look cute and stay warm. by alo.`,
    inActiveRecovery: `your brain sees this puffer and immediately knows: we're off the clock 🛑 stay warm during your post-walk cooldown or when you're running errands looking effortlessly cool.`,
    fit: 'loose, cropped. hits at natural waist.',
    showsOff: 'core (when worn open)',
    microplasticLevel: 'medium',
    materials: '100% Polyester shell with down alternative fill',
    care: 'Machine wash cold, tumble dry low.',
    suggestedPairings: ['light-squeeze-leggings', 'the-everyday-short'],
    colors: [
      { name: 'Blue', hex: '#4682B4', image: '400543 - blue.webp' },
      { name: 'Navy', hex: '#000080', image: '400543 - navy.webp' },
      { name: 'Black', hex: '#000000', image: '400543 - black.webp' },
    ],
    images: [
      '400543 - blue.webp',
      '400543 - blue 2.webp',
      '400543 - navy.webp',
      '400543 - black.webp',
    ],
  },
  'the-corset-fleece': {
    sku: '400535',
    name: 'The Corset Fleece (for showing off a lil)',
    price: 188,
    rating: 4.9,
    reviews: 72,
    description: `boxy shoulders + snug abs = the perfect balance. cozy, cute, gives major athletic energy without trying. by alo.`,
    inActiveRecovery: `ready to hit the world after you've rested a bit 🌍 snug on the abs, room up top for big shoulders. still feels athletic, but make it cozy.`,
    fit: 'cropped corset, roomy shoulders',
    showsOff: 'core',
    microplasticLevel: 'low',
    materials: '100% Polyester',
    care: 'Machine wash cold, hang dry.',
    suggestedPairings: ['the-everyday-short', 'the-walk-tank'],
    colors: [
      { name: 'Navy', hex: '#000080', image: '400535 - navy.webp' },
      { name: 'Black', hex: '#000000', image: '400535 - black.webp' },
    ],
    images: [
      '400535 - navy.webp',
      '400535 - navy 2.webp',
      '400535 - black.webp',
      '400535 - black 2.webp',
    ],
  },
  'light-squeeze-leggings': {
    sku: '400537',
    name: 'Light Squeeze Leggings',
    price: 88,
    rating: 4.8,
    reviews: 203,
    description: `extremely soft with juuuust enough compression. high waist = less "gym" more "everyday." basically the leggings you live in when you're not working out. by beyond yoga.`,
    inActiveRecovery: `compression helps blood flow after you move your body (science! 🧪). these are level 1 - light squeeze for when you just need a little leg hug post-walk or post-whatever. so soft you'll forget you're wearing them.`,
    fit: 'tight throughout, high-waisted, 7/8 length',
    showsOff: 'glutes, quads, hamstrings, calves',
    microplasticLevel: 'high',
    materials: '87% Polyester, 13% Elastane',
    care: 'Machine wash cold, hang dry. Use Guppyfriend bag.',
    suggestedPairings: ['the-boxy-crop', 'the-corset-fleece'],
    colors: [
      { name: 'Black', hex: '#000000', image: '400537 - blue gem.webp' },
      { name: 'Blue Gem', hex: '#4682B4', image: '400537 - blue gem.webp' },
      { name: 'Powder Blue', hex: '#87CEEB', image: '400537 - powder blue.webp' },
    ],
    images: [
      '400537 - blue gem.webp',
      '400537 - blue gem 2.webp',
      '400537 - powder blue.webp',
      '400537 - powder blue 2.webp',
    ],
  },
  'the-puffer-booties': {
    sku: '400548',
    name: 'The Puffer Booties',
    price: 99,
    rating: 4.6,
    reviews: 89,
    description: `these boots feel so good you'll crave them every day. gold tech + rugged rubber sole = ultimate cold weather footwear. perfect for cabins, camping, après ski. by outdoor research.`,
    inActiveRecovery: `boots so cozy there's no way you're doing anything but recovering. soles so tough you can wear them out and about. basically slippers that can go outside 🥾`,
    fit: 'standard bootie fit',
    showsOff: 'nothing - pure comfort',
    microplasticLevel: 'low',
    materials: 'Pertex® Quantum Eco 100% Polyester (53% Recycled) shell, 100% Polyester Primaloft® Gold Insulation',
    care: 'Spot clean only.',
    suggestedPairings: ['the-everyday-short', 'the-off-duty-puffer', 'the-corset-fleece'],
    colors: [
      { name: 'Champagne', hex: '#FFD700', image: '400548 - champagne 2.jpg' },
    ],
    images: [
      '400548 - champagne 2.jpg',
      '400548 - champagne 3.jpg',
      '400548 - champagne 4.jpg',
    ],
  },
  'the-boxy-crop': {
    sku: '400534',
    name: 'The Boxy Crop',
    price: 58,
    rating: 4.7,
    reviews: 112,
    description: `crop tops but make it relaxed. room for big shoulders (swimmers we see you 👀), shows a lil core, doesn't cling. by vuori.`,
    inActiveRecovery: `loose + airy + soft = exactly what you want after tight workout clothes. perfect post-movement vibes.`,
    fit: 'loose in shoulders, cropped',
    showsOff: 'core',
    microplasticLevel: 'medium',
    materials: '96% Polyester, 4% Elastane',
    care: 'Machine wash cold, tumble dry low.',
    suggestedPairings: ['the-everyday-short'],
    colors: [
      { name: 'White', hex: '#FFFFFF', image: '400534 - white.webp' },
      { name: 'Sea Spray Heather', hex: '#8FBC8F', image: '400534 - sea spray 2.webp' },
    ],
    images: [
      '400534 - white.webp',
      '400534 - sea spray 2.webp',
    ],
  },
};

const relatedProducts = [
  {
    slug: 'the-walk-tank',
    name: 'The Walk Tank',
    price: 38,
    image: '400532 - pink.webp',
  },
  {
    slug: 'light-squeeze-leggings',
    name: 'Light Squeeze Leggings',
    price: 88,
    image: '400537 - blue gem.webp',
  },
  {
    slug: 'the-corset-fleece',
    name: 'The Corset Fleece',
    price: 188,
    image: '400535 - navy.webp',
  },
  {
    slug: 'the-boxy-crop',
    name: 'The Boxy Crop',
    price: 58,
    image: '400534 - white.webp',
  },
];

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products[slug];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [openAccordion, setOpenAccordion] = useState<string | null>('description');

  if (!product) {
    return <div>Product not found</div>;
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const getMicroplasticIndicator = (level: string) => {
    if (level === 'low') return { icon: '🟢', text: 'Low', color: 'text-green-600' };
    if (level === 'medium') return { icon: '🟡', text: 'Medium', color: 'text-yellow-600' };
    return { icon: '🔴', text: 'High', color: 'text-red-600' };
  };

  const microplastic = getMicroplasticIndicator(product.microplasticLevel);

  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-5 gap-12">
            {/* LEFT SIDE - Images (60%) */}
            <div className="md:col-span-3">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-4 relative group">
                <Image
                  src={`/images/products/${product.images[selectedImage]}`}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 transition-all ${
                      selectedImage === index
                        ? 'border-[#FF1493] scale-105'
                        : 'border-gray-200 hover:border-[#FF1493]'
                    }`}
                  >
                    <Image
                      src={`/images/products/${image}`}
                      alt={`${product.name} view ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - Product Info (40%) */}
            <div className="md:col-span-2">
              {/* Product Name */}
              <h1 className="text-3xl font-bold text-[#FF1493] mb-2">
                {product.name}
              </h1>

              {/* Price */}
              <p className="text-2xl font-bold text-black mb-3">
                ${product.price}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {'⭐'.repeat(Math.floor(product.rating))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Short Description */}
              <p className="text-base text-black leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-3">
                  Color
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedColor(index);
                        setSelectedImage(0);
                      }}
                      className={`w-10 h-10 rounded-full border-3 transition-all hover:scale-110 ${
                        selectedColor === index
                          ? 'border-[#FF1493] scale-110'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-3">
                  Size
                </label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-3 rounded border-2 font-semibold transition-all ${
                        selectedSize === size
                          ? 'bg-[#FF1493] text-white border-[#FF1493]'
                          : 'bg-white text-black border-gray-300 hover:border-[#FF1493]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Bag Button */}
              <button className="w-full py-4 bg-[#FF1493] text-white font-bold text-lg rounded-full hover:bg-[#E6127F] hover:scale-[1.02] transition-all mb-8">
                add to bag
              </button>

              {/* Accordions */}
              <div className="border-t border-gray-200">
                {/* Description */}
                <Accordion
                  id="description"
                  icon="✨"
                  title="description"
                  isOpen={openAccordion === 'description'}
                  onClick={() => toggleAccordion('description')}
                >
                  <p className="text-sm leading-relaxed">{product.description}</p>
                </Accordion>

                {/* In Active Recovery */}
                <Accordion
                  id="recovery"
                  icon="🚶‍♀️"
                  title="in active recovery"
                  isOpen={openAccordion === 'recovery'}
                  onClick={() => toggleAccordion('recovery')}
                >
                  <p className="text-sm leading-relaxed">{product.inActiveRecovery}</p>
                </Accordion>

                {/* Wear It With */}
                <Accordion
                  id="pairings"
                  icon="💕"
                  title="wear it with"
                  isOpen={openAccordion === 'pairings'}
                  onClick={() => toggleAccordion('pairings')}
                >
                  <p className="text-sm mb-2">Style this with:</p>
                  <ul className="space-y-1">
                    {product.suggestedPairings.map((pairing: string) => (
                      <li key={pairing}>
                        <Link
                          href={`/products/${pairing}`}
                          className="text-[#FF1493] hover:underline text-sm"
                        >
                          {products[pairing]?.name || pairing}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Accordion>

                {/* Fabric & Care */}
                <Accordion
                  id="fabric"
                  icon="🌍"
                  title="fabric & care"
                  isOpen={openAccordion === 'fabric'}
                  onClick={() => toggleAccordion('fabric')}
                >
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold mb-1">Materials:</p>
                      <p>{product.materials}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Microplastic Level:</p>
                      <p className={`${microplastic.color} font-medium`}>
                        {microplastic.icon} {microplastic.text}
                      </p>
                      {product.microplasticLevel !== 'low' && (
                        <p className="text-xs text-gray-600 mt-1">
                          This fabric sheds microplastics when washed. we recommend using a
                          guppyfriend bag to catch microfibers. because we care about the
                          planet (and so do you). 💚
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Care Instructions:</p>
                      <p>{product.care}</p>
                    </div>
                  </div>
                </Accordion>

                {/* Shipping & Returns */}
                <Accordion
                  id="shipping"
                  icon="📦"
                  title="shipping & returns"
                  isOpen={openAccordion === 'shipping'}
                  onClick={() => toggleAccordion('shipping')}
                >
                  <div className="space-y-2 text-sm">
                    <p>free shipping on orders over $75 ✨</p>
                    <p>
                      30-day returns, no questions asked (except maybe "did you look cute
                      in it?")
                    </p>
                    <p>exchanges? we got you.</p>
                    <p>
                      need help? hit us up:{' '}
                      <a
                        href="mailto:hello@almostzeromotion.com"
                        className="text-[#FF1493] hover:underline"
                      >
                        hello@almostzeromotion.com
                      </a>
                    </p>
                  </div>
                </Accordion>

                {/* Size Guide */}
                <Accordion
                  id="sizeguide"
                  icon="📏"
                  title="size guide"
                  isOpen={openAccordion === 'sizeguide'}
                  onClick={() => toggleAccordion('sizeguide')}
                >
                  <div className="text-sm">
                    <p className="font-semibold mb-2">Fit notes:</p>
                    <p className="mb-4">{product.fit}</p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="text-left py-2 pr-4">Size</th>
                            <th className="text-left py-2 pr-4">Chest</th>
                            <th className="text-left py-2 pr-4">Waist</th>
                            <th className="text-left py-2">Hip</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-2 pr-4 font-medium">XS</td>
                            <td className="py-2 pr-4">32-34"</td>
                            <td className="py-2 pr-4">24-26"</td>
                            <td className="py-2">34-36"</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-2 pr-4 font-medium">S</td>
                            <td className="py-2 pr-4">34-36"</td>
                            <td className="py-2 pr-4">26-28"</td>
                            <td className="py-2">36-38"</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-2 pr-4 font-medium">M</td>
                            <td className="py-2 pr-4">36-38"</td>
                            <td className="py-2 pr-4">28-30"</td>
                            <td className="py-2">38-40"</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-2 pr-4 font-medium">L</td>
                            <td className="py-2 pr-4">38-40"</td>
                            <td className="py-2 pr-4">30-32"</td>
                            <td className="py-2">40-42"</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-medium">XL</td>
                            <td className="py-2 pr-4">40-42"</td>
                            <td className="py-2 pr-4">32-34"</td>
                            <td className="py-2">42-44"</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Complete the Vibe Section */}
          <section className="mt-20 pt-16 border-t border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#FF1493] mb-2">
                complete the vibe
              </h2>
              <p className="text-xl text-gray-700">wear it with these ✨</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.slug} href={`/products/${related.slug}`}>
                  <Card hover padding="none" className="overflow-hidden group cursor-pointer">
                    <div className="aspect-square bg-white relative overflow-hidden">
                      <Image
                        src={`/images/products/${related.image}`}
                        alt={related.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full py-3 bg-[#FF1493] text-white font-semibold rounded-full hover:bg-[#E6127F]">
                          add to bag
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-sm mb-1 text-black">
                        {related.name}
                      </h3>
                      <p className="text-lg font-bold text-black">${related.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Accordion Component
function Accordion({
  id,
  icon,
  title,
  isOpen,
  onClick,
  children,
}: {
  id: string;
  icon: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="font-semibold text-base lowercase">{title}</span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 px-1 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}
