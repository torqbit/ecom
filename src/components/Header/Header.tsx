import { FC, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Women from '@/components/buttons/Menu/Women';
import Men from '@/components/buttons/Menu/Men';
import Accessories from '@/components/buttons/Menu/Accessories';

const Header: FC<{
  menuActive: { active: boolean; menu: string };
  onMenuActive: (value: boolean, name: string) => void;
}> = ({ menuActive, onMenuActive }) => {
  const [showSideNav, setSideNav] = useState<boolean>(false);
  const [active, setActive] = useState(false);

  const onAnchorClick = () => {
    setSideNav(false);
  };

  return (
    <header
      className='  fixed left-0 right-0 z-[1000]  h-[60px] bg-white  '
      onClick={() => {
        menuActive.active && onMenuActive(false, '');
      }}
      onMouseLeave={() => {
        menuActive.active && onMenuActive(false, '');
      }}
    >
      <div className='  h-[78px]  border-b-2 border-[#eee] '>
        <div className=' flex items-center justify-between p-1'>
          <div>
            <Link
              onMouseOver={() => onMenuActive(false, '')}
              href='/'
              className='ml-6 flex items-center gap-1 text-lg font-[600] '
            >
              <img src='https://placehold.co/100x30' alt='' />
            </Link>
          </div>
          <div className='relative z-[2000] ml-[200px]  flex h-[70px] items-center gap-8  uppercase transition-all'>
            <Link
              onMouseOver={() => onMenuActive(true, 'women')}
              href='#'
              className='block h-[30px]  items-center text-center'
            >
              <h4
                className={` 
             h-[49px]  font-[500]
              ${
                menuActive.menu === 'women' && menuActive.active
                  ? 'text-black'
                  : 'text-gray-400'
              }
              `}
              >
                Women
              </h4>
              <span
                className={`relative
     h-1
              ${
                menuActive.menu === 'women' && menuActive.active
                  ? '  flex w-[100%]	bg-black	  transition-all  '
                  : ' ml-10 flex h-1 w-2 origin-center	border-none bg-white text-center	transition-all	 	'
              }
              `}
              ></span>
            </Link>
            <Link
              onMouseOver={() => onMenuActive(true, 'men')}
              href='#'
              className='block h-[30px]  items-center text-center'
            >
              <h4
                className={` 
             h-[49px]  font-[500]
              ${
                menuActive.menu === 'men' && menuActive.active
                  ? 'text-black'
                  : 'text-gray-400'
              }
              `}
              >
                Men
              </h4>
              <span
                className={`relative
     h-1
              ${
                menuActive.menu === 'men' && menuActive.active
                  ? '  flex w-[100%]	bg-black	  transition-all  '
                  : ' ml-5 flex h-1 w-2 origin-center	border-none bg-white text-center	transition-all	 	'
              }
              `}
              ></span>
            </Link>
            <Link
              onMouseOver={() => onMenuActive(true, 'accessories')}
              href='#'
              className='block h-[30px]  items-center text-center'
            >
              <h4
                className={` 
             h-[49px]  font-[500]
              ${
                menuActive.menu === 'accessories' && menuActive.active
                  ? 'text-black'
                  : 'text-gray-400'
              }
              `}
              >
                Accessories
              </h4>
              <span
                className={`relative
     h-1
              ${
                menuActive.menu === 'accessories' && menuActive.active
                  ? '  flex w-[100%]	bg-black	  transition-all  '
                  : ' ml-10 flex h-1 w-2 origin-center	border-none bg-white text-center	transition-all	 	'
              }
              `}
              ></span>
            </Link>
          </div>
          <div className='mr-6'>
            <div className='flex items-center justify-between gap-4'>
              <div className='flex items-center  justify-between bg-[#eee] p-4'>
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
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
                <p className='ml-2 mr-8 text-[#666]'>Search For a Product</p>
              </div>
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
                  d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                />
              </svg>
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
                  d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
            </div>
          </div>
        </div>
        {/**
         * responsive
         */}

        <div className=' relative  lg:hidden'></div>
        <img
          src='/images/formbit-logo.png'
          className='absolute left-8 top-3  text-black lg:hidden '
          alt=''
        />
      </div>

      {
        <div
          className={`
          
          ${
            menuActive.active && menuActive.menu === 'women'
              ? `  translate-y-1 transform opacity-100 transition-all duration-300	 ease-in-out  `
              : ` -translate-y-4 transform opacity-0 transition-all duration-300	 `
          }`}
        >
          <Menu
            as='div'
            className={' absolute -left-[10px]  z-10  h-full w-full '}
          >
            <Transition
              show={menuActive.active && menuActive.menu === 'women'}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-100'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-100'
            >
              <Menu.Items>
                <Women menu={menuActive.menu} />
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      }
      {
        <div
          className={`
        ${
          menuActive.active && menuActive.menu === 'men'
            ? `  translate-y-1 transform opacity-100 transition-all duration-300	 ease-out  `
            : ` -translate-y-4 transform opacity-0 transition-all duration-300	 `
        }`}
        >
          <Menu
            as='div'
            className={' absolute -left-[10px]  z-10  h-full w-full'}
          >
            <Transition
              show={menuActive.active && menuActive.menu === 'men'}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-100'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-100'
            >
              <Menu.Items>
                <Men menu={menuActive.menu} />
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      }
      <div
        className={`
          
        ${
          menuActive.active && menuActive.menu === 'accessories'
            ? `  translate-y-1 transform  opacity-100 transition-all duration-300	 ease-in-out  `
            : ` -translate-y-4 transform  opacity-0 transition-all duration-300	 `
        }`}
      >
        <Menu
          as='div'
          className={' absolute -left-[10px]  z-10  h-full w-full'}
        >
          <Transition
            show={menuActive.active && menuActive.menu === 'accessories'}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-100'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-100'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-100'
          >
            <Menu.Items>
              <Accessories menu={menuActive.menu} />
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
