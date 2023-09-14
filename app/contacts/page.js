import Heading from '@/components/heading/heading';
import SvgMailLk from '@/components/assets/icons/mail.icon';
import SvgWwwLk from '@/components/assets/icons/www.icon';
import SvgPhoneLk from '@/components/assets/icons/phone.icon';
import SvgWhatsappLk from '@/components/assets/icons/whatsapp.icon';
import Link from 'next/link';

export default function Contacts() {
  return (
    <main className="flex-1 flex flex-col">
      <Heading text="Contacts" />

      <div className="grid grid-cols-3 mb-10 gap-5 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <ul className="text-black">
          <li className="mb-5 opacity-100 hover:opacity-70">
            <Link className="flex text-l " href="tel:+390209964090" target="_blank">
              <SvgPhoneLk className="mr-4" />
              +39 020 996-40-90
            </Link>
          </li>
          <li className="mb-5 opacity-100 hover:opacity-70">
            <Link className="flex text-l " href="https://wa.me/393757112192" target="_blank">
              <SvgWhatsappLk className="mr-4" />
              +39 375 711-21-92
            </Link>
          </li>
          <li className="mb-5 opacity-100 hover:opacity-70">
            <Link className="flex text-l " href="https://www.lindakristel.com" target="_blank">
              <SvgWwwLk className="mr-4" />
              www.lindakristel.com
            </Link>
          </li>
        </ul>

        <ul className="text-black">
          <li className="mb-5 opacity-100 hover:opacity-70">
            <Link className="flex  text-l " href="mailto:info@lindakristel.com">
              <SvgMailLk className="mr-4" />
              General info & sales
            </Link>
          </li>
          <li className="mb-5 opacity-100 hover:opacity-70">
            <Link className="flex  text-l " href="mailto:pr@lindakristel.com">
              <SvgMailLk className="mr-4" />
              PR & Marketing
            </Link>
          </li>
        </ul>
      </div>

      <ul className="">
        <li className="text-white text-l mb-4">Via Pantano, 26</li>
        <li className="text-white text-l">20122 Milano – Italy</li>
      </ul>
    </main>
  );
}
