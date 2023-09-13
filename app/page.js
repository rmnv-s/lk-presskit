'use client';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const listItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 0.7, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="flex-1 flex items-center max-sm:my-10">
      <ul className="md:grid-cols-3 sm:grid-cols-2 max-sm:gap-10 lg:grid-cols-3 text-white grid grid-rows-2 gap-12 mb-[15%]">
        <motion.li
          className="flex flex-col opacity-70 "
          variants={listItemVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-base font-bold mb-3">01</span>
          <Link className="text-2xl uppercase leading-12" href="/intro">
            Intro
          </Link>
        </motion.li>

        <motion.li
          className="flex flex-col opacity-70"
          variants={listItemVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-base font-bold mb-3 ">02</span>
          <Link className="text-2xl uppercase leading-12" href="/logos">
            Logos
          </Link>
        </motion.li>

        <motion.li
          className="flex flex-col opacity-70"
          variants={listItemVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-base font-bold mb-3 ">03</span>
          <Link className="text-2xl uppercase  leading-12" href="/mediafiles">
            Media files
          </Link>
        </motion.li>

        <motion.li
          className="flex flex-col opacity-70"
          variants={listItemVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-base font-bold mb-3 ">04</span>
          <Link className="text-2xl uppercase leading-12" href="/press">
            Press
          </Link>
        </motion.li>

        <motion.li
          className="flex flex-col opacity-70"
          variants={listItemVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-base font-bold mb-3 ">05</span>
          <Link className="text-2xl uppercase leading-12" href="/catalogs">
            Catalogs
          </Link>
        </motion.li>

        <motion.li
          className="flex flex-col opacity-70"
          variants={listItemVariants}
          initial="initial"
          animate="animate"
        >
          <span className="text-base font-bold mb-3 ">06</span>
          <Link className="text-2xl uppercase leading-12" href="/contacts">
            Contacts
          </Link>
        </motion.li>
      </ul>
      <style jsx global>{`
        li:hover {
          opacity: 1 !important;
        }
      `}</style>
    </main>
  );
}
