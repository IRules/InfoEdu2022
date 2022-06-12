import { useRouter } from 'next/router';
import styles from '../../styles/Facultate.module.css';

const Facultate = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div className={styles.facultate}></div>;
};

export default Facultate;
