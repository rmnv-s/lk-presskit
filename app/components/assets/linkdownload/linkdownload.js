import React from 'react';
export default function LinkDownload({ href, alt, className }) {
  return (
    <a
      className={`uppercase text-m max-w-16 text-grey hover:text-white block ${className}`}
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
