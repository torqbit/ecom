const BestSeller = () => {
  const Item = [
    {
      image: '/images/trouser.png',
      image2: '/images/trouserBack.png',
      name: 'EveryDay Trouser',
      detail: 'Body Fit',
      fitting: 'Medium Support',
      color: 'black',
      price: '$38',
      rating: '3.5',
    },
    {
      image: '/images/trouser.png',
      image2: '/images/trouserBack.png',
      name: 'EveryDay Trouser',
      detail: 'Body Fit',
      fitting: 'Slim Fit',
      color: 'black',
      price: '$38',
      rating: '4.5',
    },
    {
      image: '/images/trouser.png',
      image2: '/images/trouserBack.png',
      name: 'EveryDay Trouser',
      detail: 'Body Fit',
      color: 'black',
      price: '$38',
      fitting: 'Slim Fit',
      rating: '2.5',
    },
    {
      image: '/images/trouser.png',
      image2: '/images/trouserBack.png',
      name: 'EveryDay Trouser',
      detail: 'Body Fit',
      fitting: 'Slim Fit',
      color: 'black',
      price: '$38',
      rating: '5.0',
    },
  ];
  const Size = [
    { size1: 'xxs' },
    { size1: 'xs' },
    { size1: 's' },
    { size1: 'm' },
    { size1: 'l' },
    { size1: 'xl' },
    { size1: 'xxl' },
  ];

  return (
    <section className='p-16'>
      <div className='mt-8 flex items-baseline'>
        <h2 className='uppercase'>Best Seller</h2>
        <h4 className='ml-6 cursor-pointer underline'>View All</h4>
      </div>
      <div className='mt-6   grid h-[400px] grid-cols-4 gap-2 '>
        {Item.map((item, i) => {
          return (
            <div
              key={i}
              className='group  cursor-pointer bg-white text-[#666] '
            >
              <div className='  absolute ml-[250px] mt-2 rounded-full  bg-white p-1 text-right	'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                  />
                </svg>
              </div>
              <div className='  flex h-[400px] justify-center bg-[#eee]  '>
                <img
                  className='h-[400px]  w-[200px]  object-cover    group-hover:hidden '
                  src={item.image}
                  alt='img'
                />
                <img
                  className='	hidden h-[400px] w-[200px]  object-cover     group-hover:block '
                  src={item.image2}
                  alt='img'
                />
              </div>
              <div className=' relative hidden grid-cols-5 gap-1 bg-[#e7e7e7] p-8 uppercase transition-all group-hover:mt-[-148px] group-hover:grid '>
                {Size.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className='flex justify-center bg-white p-2 hover:bg-black hover:text-white'
                    >
                      <p>{item.size1}</p>
                    </div>
                  );
                })}
              </div>
              <div className='mt-1 text-sm capitalize'>
                <div className='flex justify-between'>
                  <p className=' font-medium'> {item.name}</p>
                  <span className=' flex items-center font-medium text-black'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='h-4 w-4 fill-black'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                      />
                    </svg>
                    {item.rating}
                  </span>
                </div>
                <p>{item.detail}</p>
                <p>{item.color}</p>
                <p>{item.fitting}</p>
                <h4>US{item.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default BestSeller;
