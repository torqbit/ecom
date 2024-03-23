import { Menu } from '@headlessui/react';
import { FC } from 'react';
import Link from 'next/link';

const Accessories: FC<{ menu: string }> = ({ menu }) => {
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
  ];
  const Sock = [
    {
      name: 'All Socks',
      href: '/',
    },
    {
      name: 'Crew Socks',
      href: '/',
    },
    {
      name: 'Quater Socks',
      href: '/',
    },
    {
      name: 'No Show Socks',
      href: '/',
    },
  ];

  const Headwear = [
    {
      name: 'All Headwear',
      href: '/',
    },
    {
      name: 'Cap',
      href: '/',
    },
    {
      name: 'Beanies',
      href: '/',
    },
    {
      name: 'Hair Accessories',
      href: '/',
    },
  ];

  const Accessories = [
    {
      name: 'All Accessories Sale',
      href: '/',
    },
  ];
  const Underwear = [
    {
      name: 'Womens Underwear',
      href: '/',
    },
    {
      name: 'Mens Underwear',
      href: '/',
    },
  ];
  const Equipment = [
    {
      name: 'All Equipment',
      href: '/',
    },
    {
      name: 'All Bottles',
      href: '/',
    },
    {
      name: 'Lifting Equipment',
      href: '/',
    },
  ];
  const Footwear = [
    {
      name: 'All Slides',
      href: '/',
    },
  ];
  const Bag = [
    {
      name: 'All Bags',
      href: '/',
    },
    {
      name: 'Backpacks',
      href: '/',
    },
    {
      name: 'Duffel Bags',
      href: '/',
    },
    {
      name: 'Tote Bags',
      href: '/',
    },
    {
      name: 'Small Bags',
      href: '/',
    },
  ];

  return (
    <>
      <section
        className={`absolute z-20 w-[100%]  rounded-lg  bg-white  py-6   `}
      >
        <div className='flex justify-between'>
          <div className='ml-[250px] grid h-[300px] grid-cols-4 gap-4'>
            <div>
              <h5 className='font-bold uppercase'>Trending</h5>
              {Trending.map((item, i) => {
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
              <h5 className='font-bold uppercase'>Bags</h5>
              {Bag.map((item, i) => {
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
              <h5 className='font-bold uppercase'>Socks</h5>
              {Sock.map((item, i) => {
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
              <h5 className='font-bold uppercase'>Headwear</h5>
              {Headwear.map((item, i) => {
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
              <h5 className='font-bold uppercase'>Accessories</h5>
              {Accessories.map((item, i) => {
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
              <h5 className='font-bold uppercase'>Footwear</h5>
              {Footwear.map((item, i) => {
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
              <h5 className='font-bold uppercase'>Underwear</h5>
              {Underwear.map((item, i) => {
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
              <h5 className='font-bold uppercase'>Equipment</h5>
              {Equipment.map((item, i) => {
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
          </div>
          <div className='mr-[-30px] mt-[-30px] h-[500px] bg-[#eee] p-10 '>
            <div className='  flex flex-col gap-6  '>
              <h5 className='font-bold uppercase'>featured</h5>
              <img
                className=' rounded-md'
                src='https://placehold.co/200x150'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Accessories;
