'use client'
import React from 'react'
import Uploady from '@rpldy/uploady'
import UploadPreview from '@rpldy/upload-preview'
import UploadButton from '@rpldy/upload-button'

function DropZone () {
  return (
        <Uploady destination={{ url: 'https://my-server.com/upload' }}>
            <UploadButton />

            
   
        </Uploady>
  )
}

export default DropZone
