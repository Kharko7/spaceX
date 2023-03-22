import styles from './IconButton.module.scss';

interface IconButtonProps {
  icon: React.ReactNode;
  size?: string;
  backgroundColor?: string;
  onClick: () => void;
}

const IconButton = ({ icon, size = '', backgroundColor = '', onClick }: IconButtonProps) => {

  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{
        width: size + 'px',
        height: size + 'px',
        backgroundColor
      }}>
      {icon}
    </button >
  );
};

export default IconButton; 