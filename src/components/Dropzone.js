'use client'
import React from 'react'
import Uploady, { useItemProgressListener } from '@rpldy/uploady'
import UploadPreview from '@rpldy/upload-preview'
import UploadButton from '@rpldy/upload-button'
import UploadDropZone from "@rpldy/upload-drop-zone";

const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "midudev",
    },
    url: {
      secure: true,
    },
  })
//must be rendered inside <Uploady>
const LogProgress = () => {
    useItemProgressListener((item) => {
        console.log(`>>>>> (hook) File ${item.file.name} completed: ${item.completed}`);
    });

    return null;
}

function DropZone () {
  return (
    <Uploady
    destination={{ url: "https://my-server/upload" }}>
    <LogProgress/>   
    <UploadButton/>
</Uploady>
  )
}

export default DropZone
