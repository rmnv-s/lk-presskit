import Heading from '@/components/heading/heading';
import SvgMailLk from '@/components/assets/icons/mail.icon';
import SvgWwwLk from '@/components/assets/icons/www.icon';
import SvgPhoneLk from '@/components/assets/icons/phone.icon';
import SvgWhatsappLk from '@/components/assets/icons/whatsapp.icon';
import Link from 'next/link';

export default function Contacts() {
  return (
    <main className='flex-1 flex flex-col'>
      <Heading text='Contacts' />

      <div className='grid grid-cols-3 mb-10 gap-5 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        <ul className=' '>
          <li className='mb-5 opacity-70 hover:opacity-100'>
            <Link className='flex text-l text-white' href='tel:+390209964090'>
              <SvgPhoneLk className='mr-4' />
              +39 020 996-40-90
            </Link>
          </li>
          <li className='mb-5 opacity-70 hover:opacity-100'>
            <Link className='flex text-l text-white' href='tel:+393757112192'>
              <SvgWhatsappLk className='mr-4' />
              +39 375 711-21-92
            </Link>
          </li>
        </ul>

        <ul className=''>
          <li className='mb-5 opacity-70 hover:opacity-100'>
            <Link
              className='flex text-l text-white'
              href='mailto:info@lindakristel.com'
            >
              <SvgMailLk className='mr-4' />
              info@lindakristel.com
            </Link>
          </li>
          <li className='mb-5 opacity-70 hover:opacity-100'>
            <Link
              className='flex text-l text-white'
              href='https://www.lindakristel.com'
              target='_blank'
            >
              <SvgWwwLk className='mr-4' />
              www.lindakristel.it
            </Link>
          </li>
        </ul>
      </div>

      <ul className=''>
        <li className='text-white text-l mb-4'>Via Pantano, 26</li>
        <li className='text-white text-l'>20122 Milano – Italy</li>
      </ul>
    </main>
  );
}
