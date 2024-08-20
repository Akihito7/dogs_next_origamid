import styles from './index.module.css';
import { FormUploadPhoto } from '@/components/formUploadPhoto';

export default function Post() {
  return (
    <div className={styles.containerMain}>
      <FormUploadPhoto />
    </div>
  );
}
