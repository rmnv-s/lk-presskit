'use client';
import Heading from '@/components/heading/heading';
import Video from '@/components/video/video';

export default function Intro() {
  return (
    <main className="flex-1 flex flex-col">
      <Heading text="Intro" />

      <Video video={'/video/LK_intro_Eng.mp4'} />
    </main>
  );
}
