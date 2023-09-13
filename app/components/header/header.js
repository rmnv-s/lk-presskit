import SvgLogoLk from '@/components/assets/logo.icon';
import Image from 'next/image';
import logoMain from '../../../public/img/Logo_LK_main.png';
import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <Link href="/">
        {/* <SvgLogoLk className="opacity-50 mb-3 mt-5" /> */}
        <Image className="opacity-50 mb-3 mt-5" src={logoMain} width={65} alt="logo" priority />
      </Link>
      <span className="uppercase text-s text-white ">press kit </span>
    </header>
  );
}
