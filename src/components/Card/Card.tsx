import classNames from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
  name: string;
  id: number;
  variant: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Card({ name, variant, isActive, onClick }: CardProps) {
  const cardClass = classNames(
    styles.card,
    isActive ? styles[variant] : styles.inactive
  );

  return (
    <div className={cardClass} onClick={onClick}>
      <div className={styles.content}>
        <h3>{name}</h3>
        <button>View more →</button>
      </div>
    </div>
  );
}
