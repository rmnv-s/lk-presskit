import SvgLogoLk from '@/components/assets/logo.icon';
import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <Link href="/">
        <SvgLogoLk className="opacity-50 mb-3 mt-5" />
      </Link>
      <span className="uppercase text-[20px] text-white">press kit </span>
    </header>
  );
}
