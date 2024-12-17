'use client';

import { DotLottiePlayer } from '@dotlottie/react-player';
import Image from 'next/image';
import productImage from '@/assets/product-image.png';

const tabs = [
  {
    icon: '/assets/lottie/vroom.lottie',
    title: 'User-friendly dashboard',
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150
  },
  {
    icon: '/assets/lottie/click.lottie',
    title: 'One-click optimization',
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135
  },
  {
    icon: '/assets/lottie/stars.lottie',
    title: 'Smart keyword generator',
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177
  }
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-5xl text-center font-medium tracking-tight">
          Elevate your SEO efforts.
        </h2>
        <p className="text-center text-white/70 text-lg tracking-tight mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10">
          {tabs.map((tab, index) => (
            <div
              className="border border-white/15 flex gap-2.5 p-2.5 rounded-xl"
              key={index}
            >
              <DotLottiePlayer src={tab.icon} autoplay className="h-5 w-5" />

              <div>{tab.title}</div>
              {tab.isNew && <div>new</div>}
            </div>
          ))}
        </div>

        <Image src={productImage} alt="Product Image" />
      </div>
    </section>
  );
};
