import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';

const ArViewer = dynamic(() => import('../components/ArViewer'), {
  ssr: false,
});

export default function Home() {
  // useEffect(()=>{

  // },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ArViewer />
      </main>
    </div>
  );
}