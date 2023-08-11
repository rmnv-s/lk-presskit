import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex-1 flex items-center ">
      <ul className="text-white grid grid-rows-2 gap-12 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
        <li className="flex flex-col opacity-70 hover:opacity-100">
          <span className="text-base font-bold mb-3 ">01</span>
          <Link className="text-2xl uppercase leading-12" href="/">
            Intro
          </Link>
        </li>
        <li className="flex flex-col opacity-70 hover:opacity-100">
          <span className="text-base font-bold mb-3 ">02</span>
          <Link className="text-2xl uppercase leading-12" href="/logos">
            Logos
          </Link>
        </li>
        <li className="flex flex-col opacity-70 hover:opacity-100">
          <span className="text-base font-bold mb-3 ">03</span>
          <Link className="text-2xl uppercase  leading-12" href="/mediafiles">
            Media files
          </Link>
        </li>
        <li className="flex flex-col opacity-70 hover:opacity-100">
          <span className="text-base font-bold mb-3 ">04</span>
          <Link className="text-2xl uppercase leading-12" href="/press">
            Press
          </Link>
        </li>
        <li className="flex flex-col opacity-70 hover:opacity-100">
          <span className="text-base font-bold mb-3 ">05</span>
          <Link className="text-2xl uppercase leading-12" href="/catalogs">
            Cotalogs
          </Link>
        </li>
        <li className="flex flex-col opacity-70 hover:opacity-100">
          <span className="text-base font-bold mb-3 ">06</span>
          <Link className="text-2xl uppercase leading-12" href="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </main>
  );
}
