'use client';
import Heading from '@/components/heading/heading';
import Video from '@/components/video/video';
import LinkDownload from '@/components/assets/linkdownload/linkdownload';

export default function Intro() {
  return (
    <main className="flex-1 flex flex-col">
      <Heading text="Intro" />

      <Video />
      <LinkDownload className="mt-4" href="/video/LK_intro_Eng.mp4" alt="cataloge" />
    </main>
  );
}
