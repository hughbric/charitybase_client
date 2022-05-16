import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>A CharityBase Client</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>
          <div className="mx-8 mt-14">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
