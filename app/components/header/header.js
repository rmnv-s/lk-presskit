// import SvgLogoLk from '@/components/assets/logo.icon';
import Image from 'next/image';
import Link from 'next/link';
// import logoMain from '../../../public/img/Logo_LK_main.png';
import logoMain from '../../../public/img/Logo_LK_main_black.png';
// import SvgLeaf1 from '@/components/assets/icons/leaf1.icon';

export default function Header() {
  return (
    <header className="flex justify-between overflow-hidden">
      <div>
        <Link href="/">
          {/* <SvgLogoLk className="opacity-50 mb-3 mt-5" /> */}
          <Image className=" mb-3 mt-5" src={logoMain} width={65} alt="logo" priority />
        </Link>
        <span className="uppercase text-s text-white ">press kit </span>
      </div>
      {/* <div className="w-[380px] ">
        <SvgLeaf1 />
      </div> */}
    </header>
  );
}
