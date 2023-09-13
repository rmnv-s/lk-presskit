import SvgInstagram from '@/components/assets/icons/instagram.icon';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className=" flex justify-between border border-t border-0 border-grey pb-10 pt-6">
      <p className="text-sm font-normal text-grey ">
        © 2023 Linda Kristel. <br />
        All rights reserved.
      </p>
      <Link className="" href="https://www.instagram.com/lindakristel.official/" target="_blank">
        <SvgInstagram className="cursor-pointer hover:fill-white transition-all duration-500 ease-in-out" />
      </Link>
    </footer>
  );
}
