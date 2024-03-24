const BestSeller = () => {
  const Item = [
    {
      image: '/images/dress1.webp',
      name: 'EveryDay Seamless Leggings',
      detail: 'Body Fit',
      color: 'black',
      price: '$38',
    },
    {
      image: '/images/GymDress.jpg',
      name: 'EveryDay Seamless Leggings',
      detail: 'Body Fit',
      color: 'black',
      price: '$38',
    },
  ];

  return (
    <section>
      <div className='flex items-center'>
        <h1 className='uppercase'>Best Seller</h1>
        <h3 className='ml-6 underline'>View All</h3>
      </div>
      <div className='relative grid grid-cols-3 grid-rows-5 gap-2 bg-red-500'>
        {Item.map((item, i) => {
          return (
            <div key={i}>
              <div className='h-[400px] bg-[#e7e7e7]  bg-transparent p-4'>
                <img
                  className='absolute	h-[400px] w-[200px] bg-transparent bg-opacity-10  object-cover '
                  src={item.image}
                  alt='img'
                />
              </div>
              <h1>{item.name}</h1>
              <p>{item.detail}</p>
              <p>{item.color}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default BestSeller;
