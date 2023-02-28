import Image from 'next/image'
import { Inter } from 'next/font/google'
import CloudinaryPatreon from '@/components/CloudinaryPatreon'
import Dropzone from '@/components/Dropzone'
const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
        <>
            <div style={inter.style} className="min-h-screen">
                <main className="relative container grid grid-cols-2 place-content-center min-h-screen mx-auto max-w-lg min-w-screen">
                    <h1 className="z-10 font-bold text-5xl md:text-6xl text-slate-700">
                        Edita tus Imagenes con{' '}
                        <span className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-t from-yellow-400 to-rose-600">
                            IA
                        </span>
                    </h1>
                    <img
                        className="z-0"
                        src="https://sb.kaleidousercontent.com/67418/658x756/361846cee7/all-pages-2.png "
                        alt=""
                    />

                    <CloudinaryPatreon />
                </main>
                <Dropzone/>
            </div>
        </>
  )
}
