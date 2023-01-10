import Head from 'next/head'
import TechStack from '../components/TechStack'
import Header from '../components/Header'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {

  const { data, error } = useSWR('/api/staticdata', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const techno = JSON.parse(data)

  return (
    <>
    <Header/>
    <main>
      <Head>
        <title>G Spasova</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <TechStack technologies={techno}/>
    </main>
    </>
  )
}