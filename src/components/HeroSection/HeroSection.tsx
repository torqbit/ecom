import WeDoLogo from '@/components/logo/WeDoLodo';

const HeroSection = () => {
  return (
    <section>
      <div className=' relative z-10'>
        <img
          src='/images/bg-gym1.webp'
          className='h-[100vh] w-[100vw] object-cover 		 '
          alt='image'
        />
      </div>
      <div className='absolute left-14 top-40 z-30 text-white'>
        <WeDoLogo />
        <p className='mt-12 text-lg'>
          We don’t do everything good, we do one thing great.
        </p>
        <button className='mt-6 rounded-full bg-white px-6 py-3 font-semibold uppercase text-black'>
          find out more
        </button>
      </div>
    </section>
  );
};
export default HeroSection;
