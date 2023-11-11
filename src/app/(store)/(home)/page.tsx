import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/home"
        className={`
          group relative col-span-6 row-span-6 rounded-lg overflow-hidden
          flex justify-center items-end bg-zinc-900
        `}
      >
        <Image
          src='/moletom-never-stop-learning.png'
          width={920}
          height={920}
          quality={100}
          alt='Product Image'
          className='group-hover:scale-105 transition-transform duration-500'
        />

        <div className={`
          absolute bottom-28 rigth-28 h-12 flex items-center gap-2 max-w-[280px]
          rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5
        `}>
          <span className='text-sm truncate'>Moletom Never Stop Learning</span>
          <span
            className={`
              flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'
            `}>
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/home"
        className={`
          group relative col-span-3 row-span-3 rounded-lg overflow-hidden
          flex justify-center items-end bg-zinc-900
        `}
      >
        <Image
          src='/moletom-java.png'
          width={920}
          height={920}
          quality={100}
          alt='Product Image'
          className='group-hover:scale-105 transition-transform duration-500'
        />

        <div className={`
          absolute bottom-10 rigth-10 h-12 flex items-center gap-2 max-w-[280px]
          rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5
        `}>
          <span className='text-sm truncate'>Moletom Never Stop Learning</span>
          <span
            className={`
              flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'
            `}>
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/home"
        className={`
          group relative col-span-3 row-span-3 rounded-lg overflow-hidden
          flex justify-center items-end bg-zinc-900
        `}
      >
        <Image
          src='/moletom-ia-p-devs.png'
          width={920}
          height={920}
          quality={100}
          alt='Product Image'
          className='group-hover:scale-105 transition-transform duration-500'
        />

        <div className={`
          absolute bottom-10 rigth-10 h-12 flex items-center gap-2 max-w-[280px]
          rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5
        `}>
          <span className='text-sm truncate'>Moletom Never Stop Learning</span>
          <span
            className={`
              flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'
            `}>
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
