'use client';
import React, { useState } from 'react';
import Heading from '@/components/heading/heading';
import Image from 'next/image';
import Loader from '@/components/assets/loader/loader';
import LinkDownload from '@/components/assets/linkdownload/linkdownload';
import homeCareBody from '../../public/mediafiles/Home_care_body.jpg';
import lkMix from '../../public/mediafiles/LK_mix.jpg';
import lkMix2 from '../../public/mediafiles/LK_mix_2.jpg';
import lkProfBodyCare from '../../public/mediafiles/LK_prof_body_care.jpg';
import serumSpeciale from '../../public/mediafiles/Serum_speciale.jpg';

export default function Mediafiles() {
  const [loading, setLoading] = useState(true);
  const content = [
    {
      id: 'e1',
      img: homeCareBody,
      title: 'Home care body',
      download: '/mediafiles/Home_care_body.jpg',
    },
    {
      id: 'e2',
      img: lkMix,
      title: 'LK mix',
      download: '/mediafiles/LK_mix.jpg',
    },
    {
      id: 'e3',
      img: lkMix2,
      title: 'LK mix 2',
      download: '/mediafiles/LK_mix_2.jpg',
    },
    {
      id: 'e4',
      img: lkProfBodyCare,
      title: 'LK prof body care',
      download: '/mediafiles/LK_prof_body_care.jpg',
    },
    {
      id: 'e5',
      img: serumSpeciale,
      title: 'Serum speciale',
      download: '/mediafiles/Serum_speciale.jpg',
    },
  ];

  const handleImageLoad = () => {
    setLoading(false); // Устанавливаем loading в false после успешной загрузки
  };

  const handleImageError = () => {
    setLoading(false); // Устанавливаем loading в false в случае ошибки загрузки
  };

  return (
    <main className="flex-1 flex flex-col">
      <Heading text="Mediafiles" />

      <div className="">
        <ul>
          {content.map((item) => (
            <li className="mb-20 " key={item.id}>
              <p className="text-m text-white mb-4"> {item.title}</p>
              <Image
                className="object-contain"
                src={item.img}
                alt={item.title}
                placeholder="blur"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />

              {loading ? (
                <Loader />
              ) : (
                <LinkDownload className="mt-4" href={item.download} alt={item.title} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
