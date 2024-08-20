import Image from 'next/image';
import styles from './index.module.css';
import Link from 'next/link';
import { getPhotosFeed } from '@/server-actions/getPhotos';

export type Photo = {
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
  const data: Photo[] = await getPhotosFeed();
  
  return (
    <div className={styles.container}>
      <div className={styles['container-grid']}>
        {data.map((data, index) => (
          <Link
            href={`/photo/${data.id}`}
            key={data.id} className={styles.item}>
            <Image
              width={800}
              height={400}
              quality={75}
              sizes="80w"
              priority={index < 3}
              className={styles.item}
              src={data.src}
              alt={data.title}
            />
            <div className={styles.overlay}>
              <p>{data.acessos}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
