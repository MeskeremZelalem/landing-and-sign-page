import React from "react";

export default function FooterLink({text, url}) {
  return (
    <a href={url} className="block text-white font-light mt-3 hover:underline">
      {text}
    </a>
  );
}
