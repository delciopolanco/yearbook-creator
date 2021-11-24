import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Orla Generartor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 mt-8">
        <Layout />
      </main>

      <footer className="flex items-center justify-center w-full border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Delcio Polanco'}        </a>
      </footer>
    </div>
  )
}
