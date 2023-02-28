import React from 'react'
import CloudinaryLogo from '@/components/CloudinaryLogo'
function CloudinaryPatreon () {
  return (
    <footer className="flex justify-center col-span-2 items-center gap-x-2 font-semibold pt-10">
    Patrocinado por
    <a
        href="https://cloudinary.com"
        target="_blank"
        rel="noreferrer"
    >
        <CloudinaryLogo />
    </a>
</footer>
  )
}

export default CloudinaryPatreon
