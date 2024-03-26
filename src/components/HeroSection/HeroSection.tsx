import WeDoLogo from '@/components/logo/WeDoLodo';

const HeroSection = () => {
  return (
    <section>
      <div className=' relative z-10'>
        <img
          src='/images/hero.jpg'
          className='h-[100vh] w-[100vw] object-cover 		 '
          alt='image'
        />
      </div>
      <div className='absolute left-14 top-40 z-30 mt-5  text-white'>
        <div className=' uppercase'>
          <h1 className='text-5xl'>MZAA</h1>
          <h1 className='mt-2 text-6xl'>Believe in your art</h1>
        </div>
        <div>
          <p className='mt-6 text-lg font-medium'>
            I always said punk was an attitude And Creativity takes courage.
          </p>
          <button className='mt-6 rounded-full bg-white px-8 py-3  font-semibold uppercase text-black hover:opacity-95'>
            find out more
          </button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
