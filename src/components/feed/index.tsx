import Image from 'next/image';
import styles from './index.module.css';

type Photo = {
  id: number;
  author: string;
  title: string;
  data: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

export async function Feed() {
  const response = await fetch('https://dogsapi.origamid.dev/json/api/photo/?page=1&total=6&user=0', {
    next: {
      revalidate: 100,
    },
  });
  const data: Photo[] = await response.json();

  return (
    <div className={styles.container}>
      <div className={styles['container-grid']}>
        {data.map((photo) => (
          <div key={photo.id} className={styles.item}>
            <Image
              width={800}
              height={400}
              quality={75}
              sizes="80w"
              className={styles.item}
              src={photo.src}
              alt={photo.title}
            />
            <div className={styles.overlay}>
              <p>{photo.acessos}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
