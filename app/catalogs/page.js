'use client';
import Heading from '@/components/heading/heading';
import Image from 'next/image';
import LinkDownload from '@/components/assets/linkdownload/linkdownload';
import catalogueProf from '../../public/img/catalogue_prof_it.jpg';
import catalogue from '../../public/img/catalogue_it.jpg';

export default function Cotalogs() {
  return (
    <main className="flex-1 flex flex-col">
      <Heading text="Cotalogs" />

      <ul className="border-t border-b border-grey py-10 ">
        <li className="grid grid-cols-2 border-b border-grey mb-10 pb-10   lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col justify-between">
            <div className="max-sm:mb-6">
              <p className="text-l text-black mb-3">LK catalogue professionale Italy</p>
              <span className="block text-s text-black mb-3"> Size: 180x180</span>
              <a
                className="text-white text-base hover:text-black "
                href="/catalogs/LK_Catalogue_Prof_ita_180х180_web.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
          <Image src={catalogueProf} alt="catalogue" priority />
          <LinkDownload href="/catalogs/LK_Catalogue_Prof_ita_180х180_web.pdf" alt="cataloge" />
        </li>

        <li className="grid grid-cols-2 lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col justify-between">
            <div className="max-sm:mb-6">
              <p className="text-l text-black mb-3">LK catalogue Italy</p>
              <span className="block text-s text-black mb-3"> Size: 180x180</span>
              <a
                className="text-white text-base hover:text-black"
                href="/catalogs/LK_Catalogue_ita_180х180_web.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>
          </div>
          <Image src={catalogue} alt="catalogue" priority />
          <LinkDownload href="/catalogs/LK_Catalogue_ita_180х180_web.pdf" alt="cataloge" />
        </li>
      </ul>
    </main>
  );
}
