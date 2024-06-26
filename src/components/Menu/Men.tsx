import { Menu } from '@headlessui/react';
import { FC } from 'react';
import Link from 'next/link';
import Feature from '@/components/Menu/Feature';

const Men: FC<{ menu: string }> = ({ menu }) => {
  const Trending = [
    {
      name: 'New Release',
      href: '/',
    },
    {
      name: 'Adapt Safari',
      href: '/',
    },
    {
      name: 'Sports Bro Guide',
      href: '/',
    },
    {
      name: 'Leggings & Shorts Guide',
      href: '/',
    },
    {
      name: 'Best Seller',
      href: '/',
    },
    {
      name: 'Matching Sets',
      href: '/',
    },
    {
      name: 'As Seen in Miami',
      href: '/',
    },
    {
      name: 'As Seen on Social',
      href: '/',
    },
    {
      name: 'Bouquet of Leggings',
      href: '/',
    },
    {
      name: 'Black Leggings',
      href: '/',
    },
    {
      name: 'Oversized',
      href: '/',
    },
    {
      name: 'E-Gift Card',
      href: '/',
    },
  ];
  const Product = [
    {
      name: 'All Products',
      href: '/',
    },
    {
      name: 'Leggings',
      href: '/',
    },
    {
      name: 'T-shirts & Tops',
      href: '/',
    },
    {
      name: 'Sports Bras',
      href: '/',
    },
    {
      name: 'Shorts',
      href: '/',
    },
    {
      name: 'Hoodies & Jackets',
      href: '/',
    },
    {
      name: 'Jogger & Sweatpants',
      href: '/',
    },
    {
      name: 'Skorts',
      href: '/',
    },
    {
      name: 'Crop Tops',
      href: '/',
    },
    {
      name: 'Tank Tops',
      href: '/',
    },
    {
      name: 'All in One',
      href: '/',
    },
    {
      name: 'Dresses',
      href: '/',
    },
    {
      name: 'Underwear',
      href: '/',
    },
  ];

  const Collection = [
    {
      name: 'Vital',
      href: '/',
    },
    {
      name: 'Sweat',
      href: '/',
    },
    {
      name: 'Adapt',
      href: '/',
    },
    {
      name: 'Legacy',
      href: '/',
    },
    {
      name: 'Graphics',
      href: '/',
    },
    {
      name: 'Elevate',
      href: '/',
    },
    {
      name: 'GS Power',
      href: '/',
    },
    {
      name: 'Seamless',
      href: '/',
    },
    {
      name: 'Essentials',
      href: '/',
    },
    {
      name: 'Key Fits',
      href: '/',
    },
    {
      name: 'Apex Limit',
      href: '/',
    },
    {
      name: 'Gymshark X Analis',
      href: '/',
    },
    {
      name: 'Gymshark X Anna',
      href: '/',
    },
    {
      name: 'React',
      href: '/',
    },
    {
      name: 'Arrival',
      href: '/',
    },
    {
      name: '315 collection',
      href: '/',
    },
    {
      name: 'Critical',
      href: '/',
    },
  ];

  const Gym = [
    {
      name: 'Conditioning ',
      href: '/',
    },
    {
      name: 'Lifting ',
      href: '/',
    },
    {
      name: 'Reset Day',
      href: '/',
    },
    {
      name: 'Running',
      href: '/',
    },
    {
      name: 'Pump Cover',
      href: '/',
    },
  ];
  const WomenSale = [
    {
      name: 'Sweat',
      href: '/',
    },
    {
      name: 'Sweat',
      href: '/',
    },
  ];

  return (
    <>
      <section
        className={`absolute left-20 z-20 w-[100%]  rounded-lg  bg-white px-6 py-6  `}
      >
        <div className='grid h-[500px] grid-flow-col gap-20'>
          <div>
            <h5 className=' font-bold uppercase'>Product</h5>
            {Product.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <Link href={item.href}>
                    <div
                      className='flex items-baseline	
  text-[#666] hover:text-[#000]  '
                    >
                      <h1 className='text-sm	font-semibold	 leading-6  '>
                        {item.name}
                      </h1>
                    </div>
                  </Link>
                </Menu.Item>
              );
            })}
          </div>
          <div>
            <div>
              <h5 className='font-bold uppercase'>Men's sales</h5>
              {WomenSale.map((item, i) => {
                return (
                  <Menu.Item key={i}>
                    <Link href={item.href}>
                      <div
                        className='flex items-baseline	
  text-[#666] hover:text-[#000]  '
                      >
                        <h1 className='text-sm	font-semibold	 leading-6    '>
                          {item.name}
                        </h1>
                      </div>
                    </Link>
                  </Menu.Item>
                );
              })}
            </div>
            <h5 className='mt-4 font-bold uppercase'>Trending</h5>
            {Trending.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <Link href={item.href}>
                    <div
                      className='flex items-baseline justify-between  text-[#666]
 hover:text-[#000]'
                    >
                      <h1 className='text-sm	font-semibold	 leading-6  '>
                        {item.name}
                      </h1>
                    </div>
                  </Link>
                </Menu.Item>
              );
            })}
          </div>

          <div>
            <h5 className='font-bold uppercase'>Collection</h5>
            {Collection.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <Link href={item.href}>
                    <div
                      className='flex items-baseline	
  text-[#666] hover:text-[#000]  '
                    >
                      <h1 className='text-sm	font-semibold	 leading-6  '>
                        {item.name}
                      </h1>
                    </div>
                  </Link>
                </Menu.Item>
              );
            })}
          </div>

          <div>
            <h5 className='font-bold uppercase'>Back to Gym Essential</h5>
            {Gym.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  <Link href={item.href}>
                    <div
                      className='flex items-baseline	
  text-[#666] hover:text-[#000]  '
                    >
                      <h1 className='text-sm	font-semibold	 leading-6  '>
                        {item.name}
                      </h1>
                    </div>
                  </Link>
                </Menu.Item>
              );
            })}
          </div>
          <div className='mr-10'>
            <Feature />
          </div>
        </div>
      </section>
    </>
  );
};
export default Men;
