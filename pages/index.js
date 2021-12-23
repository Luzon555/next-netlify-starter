import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Luzon app!" />
        <p className="description">
          my first page in <code> netlify.com </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
