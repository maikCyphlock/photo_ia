'use client'
import { API_KEY, CLOUD_NAME, UPLOAD_PRESET } from '@/consts/settings'
import { Cloudinary } from '@cloudinary/url-gen'
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'
import { useEffect, useRef } from 'react'

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: CLOUD_NAME
  },
  url: {
    secure: true
  }
})

export default function DropZone () {
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current === null) {
      inputRef.current = new Dropzone('#dropzone', {
        uploadMultiple: false,
        acceptedFiles: '.jpg,.png,.webp',
        maxFiles: 1,
        addRemoveLinks: true
      })
    }
    console.log(inputRef)
  }, [])
  useEffect(() => {
    console.log({ UPLOAD_PRESET, CLOUD_NAME, API_KEY })
    inputRef.current.on('sending', (file, xhr, formData) => {
      formData.append('upload_preset', UPLOAD_PRESET)
      formData.append('timestamp', Date.now() / 1000)
      formData.append('api_key', API_KEY)
    })
    inputRef.current.on('error', (file, response) => {
      console.log('HA IDO MAL')
      console.log(response)
    })
    inputRef.current.on('success', (file, response) => {
      const { public_id: publicId, secure_url: url } = response

      console.log({ publicId, url })
    })
  }, [inputRef])

  return (
    <div className="m-12 lg:m-44">
      <form
        id="dropzone"
        className="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col"
        action={`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUDNAME}/image/upload`}
      >
        <button className="m-4 font-bold pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4">
          Upload files
        </button>
      </form>
    </div>
  )
}

/* TODO: Remove
function DropZone () {
  const handleSubmit = (event) => {
    // Prevent default behavior
    event.preventDefault()

    const data = new FormData(event.target)
    console.log(data.getAll("file"))
    // Access FormData fields with `data.get(fieldName)`
    // For example, converting to upper case
    data.append('upload_preset', 'j67o9iln')
    data.append('timestamp', Date.now() / 1000)
    data.append('api_key', 717733438377878)
    fetch('https://api.cloudinary.com/v1_1/midudev/image/upload', {

      method: 'POST',
      body: data
    }).then(response => response).then(r => console.log(r.json()))
    // Do your Axios stuff here
  }
  return (
    <form onSubmit={handleSubmit} >
        <input type='file' name='file'></input>
        <button>enviar</button>
    </form>
  )
}

export default DropZone
*/
