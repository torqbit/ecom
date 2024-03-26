import Whatsapp from '@/components/Logo/Whatsapp';
import Facebook from '@/components/Logo/Facebook';
import InstaGram from '@/components/Logo/Istagram';
import YouTube from '@/components/Logo/Youtube';
import Tiktok from '@/components/Logo/Tiktok';
import Linkedin from '@/components/Logo/Linkedin';
import AppleLogo from '@/components/Logo/AppleLogo';
import Mastercard from '@/components/Logo/Mastercard';
import Paypal from '@/components/Logo/Paypal';
import Visa from '@/components/Logo/Visa';
import DownArrow from '@/components/Logo/DownArrow';
import RowLogo from '@/components/Logo/RowLogo';

const Footer = () => {
  const Help = [
    {
      content: 'FAQ',
    },
    {
      content: 'Delivery Information',
    },
    {
      content: 'Return Policy',
    },
    {
      content: 'Make A Return',
    },
    {
      content: 'Orders',
    },
    {
      content: 'Submit a Fake',
    },
  ];
  const Account = [
    {
      content: 'Login',
    },
    {
      content: 'Register',
    },
  ];
  const Pages = [
    {
      content: 'Mzaa Central',
    },
    {
      content: 'Careers',
    },
    {
      content: 'About Us',
    },
    {
      content: 'Student Discount',
    },
    {
      content: 'Factory List',
    },
  ];
  const About = [
    {
      image: '/images/test1.jpg',
      name: 'blog',
    },
    {
      image: '/images/email.jpg',
      name: 'Email sign up',
    },
    {
      image: '/images/shopping.jpg',
      name: 'mzaa shopping',
    },
  ];
  return (
    <>
      <hr />
      <section>
        <div className='p-16'>
          <div className='flex justify-between'>
            <div>
              <div className='flex gap-16'>
                <div>
                  <h3 className='text-sm uppercase'>Help</h3>
                  {Help.map((item, i) => {
                    return (
                      <div key={i}>
                        <p className='mt-2 cursor-pointer text-sm font-medium text-[#666]'>
                          {item.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h3 className='text-sm uppercase'>My Account</h3>
                  {Account.map((item, i) => {
                    return (
                      <div key={i}>
                        <p className='mt-2 cursor-pointer text-sm font-medium text-[#666]'>
                          {item.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h3 className='text-sm uppercase'>Pages</h3>
                  {Pages.map((item, i) => {
                    return (
                      <div key={i}>
                        <p className='mt-2 cursor-pointer text-sm font-medium text-[#666]'>
                          {item.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-sm uppercase'>More about mzaa</h1>
              <div className='mt-4 flex cursor-pointer gap-3'>
                {About.map((item, i) => {
                  return (
                    <div key={i}>
                      <img
                        className='h-[100px] w-[180px] object-cover'
                        src={item.image}
                        alt=''
                      />
                      <p className='bg-[#eee] px-2 py-1  font-medium uppercase'>
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='mt-16 flex justify-between'>
            <div className='flex gap-2'>
              <AppleLogo />
              <Mastercard />
              <Paypal />
              <Visa />
            </div>

            <div className='flex cursor-pointer  gap-4'>
              <Facebook />
              <Whatsapp />
              <InstaGram />
              <YouTube />
              <Linkedin />
            </div>
          </div>
        </div>
        <hr />
        <div className='flex justify-between px-16 py-4	 text-sm  text-[#888]'>
          <div className='flex items-center gap-2'>
            <p className='flex items-center gap-1'>
              <svg
                width='15px'
                height='15px'
                viewBox='-0.5 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                stroke=''
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0' />

                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />

                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    d='M12 21.82C17.1086 21.82 21.25 17.6786 21.25 12.57C21.25 7.46137 17.1086 3.32001 12 3.32001C6.89137 3.32001 2.75 7.46137 2.75 12.57C2.75 17.6786 6.89137 21.82 12 21.82Z'
                    stroke='#888'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />{' '}
                  <path
                    d='M15.5291 9.03003C14.5937 8.09167 13.3241 7.56293 11.9991 7.56C11.1771 7.55982 10.3677 7.76234 9.6426 8.1496C8.9175 8.53685 8.29908 9.09687 7.84206 9.78015C7.38504 10.4634 7.10349 11.2489 7.02242 12.0669C6.94135 12.8849 7.06326 13.7103 7.37728 14.47C7.69129 15.2297 8.18779 15.9003 8.82277 16.4223C9.45776 16.9443 10.2116 17.3018 11.0177 17.463C11.8238 17.6241 12.6571 17.584 13.444 17.3463C14.231 17.1086 14.9471 16.6805 15.5291 16.1'
                    stroke='#888'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />{' '}
                </g>
              </svg>
              2024
            </p>
            <span className='h-4 w-[1px] bg-[#666]'></span>
            <p>MZAA Limited</p>
            <span className='h-4 w-[1px] bg-[#666]'></span>
            <p>All Right Reserved.</p>
            <span className='h-4 w-[1px] bg-[#666]'></span>
            <p>United We Sweat</p>
          </div>

          <div className='flex cursor-pointer items-center gap-4 font-medium '>
            <p className='hover:text-black'>Terms and Conditions</p>
            <p className='hover:text-black'>Terms of Use</p>
            <p className='hover:text-black'>Privacy Notice</p>
            <p className='hover:text-black'>Cookie Policy</p>
            <p className='hover:text-black'>Modern Slavery</p>
            <span className='h-6 w-[1px] bg-[#666]'></span>
            <div className='flex items-center gap-2 hover:text-black'>
              <RowLogo />
              <p>Row</p>
              <DownArrow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
