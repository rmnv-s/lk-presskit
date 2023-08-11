export default function LinkDownload({ href, alt }) {
  return (
    <a
      className="uppercase text-m max-w-16 text-grey hover:text-white max-sm:mt-6"
      download
      href={href}
      alt={alt}
      target="_blank"
      rel="noopener noreferrer"
    >
      Download
    </a>
  );
}
