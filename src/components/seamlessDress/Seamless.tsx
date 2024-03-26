const Seamless = () => {
  return (
    <section>
      <div>
        <img
          className=' h-[100vh] object-cover'
          src='/images/seamless.webp'
          alt=''
        />
      </div>
      <div className='absolute left-20 top-[200px] z-30 w-[400px]'>
        <h1 className='text-5xl'>40% off New Arrival Seamless</h1>
        <p className='mt-4 text-base text-[#666]'>
          Dressed to be adored And it’s all just gone on sale
        </p>
        <button className='mt-5 cursor-pointer rounded-full bg-black px-8 py-2  font-semibold uppercase text-white hover:opacity-70'>
          Shop Now
        </button>
      </div>
    </section>
  );
};
export default Seamless;