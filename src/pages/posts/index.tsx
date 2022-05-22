import Head from 'next/head';
import styles from './styles.module.scss';
export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>22 de maio de 2022</time>
            <strong>
              Upload de imagens no Front End com ReactJS e Context API
            </strong>
            <p>
              Sempre queremos entregar a melhor experiência para nossa
              audiência. Para continuar com a leitura, certifique-se de cumprir
              os seguintes requisitos:
            </p>
          </a>
          <a href='#'>
            <time>22 de maio de 2022</time>
            <strong>
              Upload de imagens no Front End com ReactJS e Context API
            </strong>
            <p>
              Sempre queremos entregar a melhor experiência para nossa
              audiência. Para continuar com a leitura, certifique-se de cumprir
              os seguintes requisitos:
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
