import Heading from '@/components/heading/heading';
import Image from 'next/image';
import LinkDownload from '@/components/assets/linkdownload/linkdownload';
import Video from '@/components/video/video';
import Link from 'next/link';

import focusBeauty from '../../public/press/Focus-beauty-skincare-prew.jpg';
import sanitaBenessereN3 from '../../public/press/Sanita_Benessere_n3-prew.jpg';
import sanitaBenessereN6 from '../../public/press/Sanita_Benessere_n6-prew.jpg';
import sanitaBenessereN8 from '../../public/press/Sanita_Benessere_n8-prew.jpg';

const press = [
  {
    title: 'Focus beauty e skincare ',
    href: '/press/Focus-beauty-skincare.pdf',
    image: focusBeauty,
  },
  {
    title: 'Sanita Benessere n°3 ',
    href: '/press/Sanita_Benessere_n°3-2021_(26_REPUB_Nord)_rev5_HR.pdf',
    image: sanitaBenessereN3,
  },

  {
    title: 'Sanita Benessere n°6 ',
    href: '/press/Sanita_Benessere_n6-202 1_(REPUB_Sud)_DGT.pdf',
    image: sanitaBenessereN6,
  },

  {
    title: 'Sanita Benessere n°8 ',
    href: '/press/Sanita_Benessere_n°8-2021_REPUB_Sud_WEB.pdf',
    image: sanitaBenessereN8,
  },
];
const pressVideo = [
  {
    title: 'Business24 ',
    subtitle: 'iterview Ignazio Pinelli',
    video: 'https://www.youtube.com/embed/ojIf3MyMLPc',
  },
  {
    title: 'Cosmoprof',
    subtitle: 'Bologna 2022',
    video: 'https://www.youtube.com/embed/Jm8rxjfrIPY',
  },
  {
    title: 'Cosmoprof ',
    subtitle: 'Bologna 2022',
    video: '/video/Cosmoprof-2022.mp4',
  },
];

const linksPress = [
  {
    title: 'La Repubblica article «Linda Kristel, un’eccellenza per dermatologia ed estetica» ',
    date: 'January 25th 2023',
    href: 'https://www.google.com/url?q=https://roma.repubblica.it/dossier-adv/eccellenze-lazio/2023/01/25/news/linda_kristel_uneccellenza_per_dermatologia_ed_estetica-385005696/?__vfz%3Dmedium%253Dsharebar&sa=D&source=apps-viewer-frontend&ust=1694761399268288&usg=AOvVaw3UBUXqOfVk2ZodAKKgSGRI&hl=ru',
  },
  {
    title: '«Hope in action» charity foundation',
    date: 'May 9th 2023 ',
    href: 'https://www.google.com/url?q=https://www.instagram.com/reel/CsQon9LAyoU/?igshid%3DNTc4MTIwNjQ2YQ%3D%3D&sa=D&source=apps-viewer-frontend&ust=1694761399268565&usg=AOvVaw1EaBfXKSb_jN5Rv9aWt1XC&hl=ru',
  },
  {
    title: 'FORTUNE Italia',
    date: 'July 30th 2020',
    href: 'https://www.fortuneita.com/2020/07/30/il-beauty-italiano-che-piace-allestero-linda-kristel/',
  },
  {
    title: 'Secondo me',
    date: 'April 8th 2019',
    href: 'https://www.google.com/url?q=https://www.secondome.me/2019/04/linda-kristel-una-storia-di-bellezza.html&sa=D&source=apps-viewer-frontend&ust=1694761399268655&usg=AOvVaw3PR3voJcQlCY75gCz7q-Vr&hl=ru',
  },
];

export default function Press() {
  return (
    <main className="flex-1 flex flex-col">
      <Heading text="Press" />

      <ul className="border-t border-grey py-10 ">
        {press.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-2 border-b border-grey mb-10 pb-10   lg:grid-cols-2 max-sm:grid-cols-1"
          >
            <div className="flex flex-col justify-between">
              <div className="max-sm:mb-6">
                <p className="text-l text-black mb-3">{item.title}</p>

                <a
                  className="text-white text-base hover:text-black "
                  href={item.href}
                  alt="alt text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </div>
            </div>
            <Image src={item.image} alt={item.title} priority />
          </li>
        ))}
        {pressVideo.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-2 border-b border-grey mb-10 pb-10   lg:grid-cols-2 max-sm:grid-cols-1"
          >
            <div className="flex flex-col justify-between">
              <div className="max-sm:mb-6">
                <p className="text-l text-black mb-3">{item.title}</p>
                <p className="text-m font-normal text-black mb-3">{item.subtitle}</p>
              </div>
            </div>
            <Video video={item.video} />
          </li>
        ))}
      </ul>

      <p className="text-xl mb-6">Other links</p>
      <ul className="mb-20">
        {linksPress.map((item, index) => (
          <li key={index} className="">
            <Link
              className="flex flex-col text-m text-black h-full block w-full py-5 border-y border-grey  hover:bg-black hover:text-white hover:pl-4 transition-all duration-500 ease-in-out"
              href={item.href}
            >
              {item.title}
              <span className="text-s">{item.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
