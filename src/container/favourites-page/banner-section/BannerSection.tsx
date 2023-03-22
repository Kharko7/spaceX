import styles from './BannerSection.module.scss';

const BannerSection = () => {

  return (
    <div className={styles.bannerBlock}>
      <div className={styles.bannerImg}>
        <h1 className={styles.bannerTitle}>favourites</h1>
      </div>
    </div>
  );
};

export default BannerSection;