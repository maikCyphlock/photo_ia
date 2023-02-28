'use client'
import React from 'react'
import { Uploader } from 'uploader'
import { UploadDropzone } from 'react-uploader'

const uploader = Uploader({
  apiKey: 'free' // Get production API keys from Upload.io
})
const options = { multi: true }
function DropZone () {
  return (
    <UploadDropzone uploader={uploader}
    options={options}
    onUpdate={files => files.map(x => console.log(x.originalFile))}
    width="600px"
    height="375px" />
  )
}

export default DropZone
