import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Justdeal.NG</title>
        <meta
          name="description"
          content="A marketplace to buy and sell second-hand items to anyone anywhere."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
