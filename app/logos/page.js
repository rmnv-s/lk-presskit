import Heading from '@/components/heading/heading';
import LinkDownload from '@/components/assets/linkdownload/linkdownload';
import Image from 'next/image';
import logoBlack from '../../public/img/Logo_black.png';
import logoGraphyte from '../../public/img/Logo_graphyte.png';
import logoWhite from '../../public/img/Logo_white.png';
export default function Logos() {
  return (
    <main className="flex-1 flex flex-col">
      <Heading text="Logos" />

      <ul className="border-t border-b border-grey py-10 grid  gap-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
        <li className="">
          <div className="flex flex-col justify-between">
            <Image className="mb-6 max-sm:mb-2" src={logoBlack} alt="logo" priority />
            <LinkDownload
              className="max-sm:mt-5"
              href="/logos/Logo_LK_no_frame_black.png"
              alt="logo"
            />
          </div>
        </li>
        <li className="">
          <div className="flex flex-col justify-between">
            <Image className="mb-6 max-sm:mb-2" src={logoGraphyte} alt="logo" priority />
            <LinkDownload
              className="max-sm:mt-5"
              href="/logos/Logo_LK_no_frame_graphyte.png"
              alt="logo"
            />
          </div>
        </li>
        <li className="">
          <div className="flex flex-col justify-between">
            <Image className="mb-6 max-sm:mb-2" src={logoWhite} alt="logo" priority />
            <LinkDownload
              className="max-sm:mt-5"
              href="/logos/Logo_LK_no_frame_white.png"
              alt="logo"
            />
          </div>
        </li>
      </ul>
    </main>
  );
}
