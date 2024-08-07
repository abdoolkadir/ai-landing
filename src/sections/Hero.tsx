import Button from '@/components/Button';
import StarsBg from '@/assets/stars.png';

/* eslint-disable react/no-unescaped-entities */
export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden h-[492px] md:h-[800px] flex items-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${StarsBg.src})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgba(140,69,255,.5)_15%,rgba(14,0,36,.5)_78%,transparent)]" />
      <CenterOrb />
      <OrbRingOne />
      <OrbOuterRings />

      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none text-transparent text-center font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.5))] bg-clip-text">
          AI SEO
        </h1>
        <p className="mt-5 text-lg md:text-xl text-white/70 text-center max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="mt-5 flex justify-center">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};

const CenterOrb = () => {
  return (
    <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />
  );
};

const OrbRingOne = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full">
      <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />

      <div className="absolute h-2 w-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />

      <div className="absolute h-5 w-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white rounded-full inline-flex justify-center items-center">
        <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

const OrbOuterRings = () => {
  return (
    <>
      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />

        <div className="absolute h-2 w-2 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
      </div>
    </>
  );
};
