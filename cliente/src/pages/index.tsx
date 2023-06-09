//Import prime
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ListaTask from '@/components/listaTask'
import AgregarTask from "@/components/agregarTask";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <main className={styles.main}>
        
        
         <AgregarTask titulo="Agregar tarea"/>

        <ListaTask titulo="Lista de tareas" />

        
        
      </main>
    </>

    
    

  )
}
