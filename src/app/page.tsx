import { Navbar } from '@/components/Navbar'

// Export default function
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='p-10'>
        <div className='mockup-window bg-base-300 border'>
          <div className='bg-base-200 flex justify-center px-4 py-16'>สวัสดีชาวโลก นี้คือ NextJS v.15</div>
        </div>
      </div>
    </>
  )
}
