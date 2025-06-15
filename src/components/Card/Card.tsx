import classNames from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
  name: string;
  id: number;
  variant: string;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
  onExpand: () => void;
  onCollapse?: () => void;
  disabled: boolean;
}

export default function Card({
  name,
  variant,
  isActive,
  isExpanded,
  onClick,
  onExpand,
  onCollapse,
  disabled,
}: CardProps) {
  const cardClass = classNames(
    styles.card,
    {
      [styles.default]: !isActive && !isExpanded,
      [styles.active]: isActive && !isExpanded,
      [styles.expanded]: isActive && isExpanded,
      [styles.inactive]: !isActive && isExpanded,
    },
    styles[variant] // <-- завжди додається, але стилі кольору керуються через parent-класи
  );

  return (
    <div className={cardClass} onClick={onClick}>
      <div className={styles.content}>
        <h3>{name}</h3>
        {isExpanded ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCollapse?.();
            }}
            className={styles.button}
          >
            ← Back
          </button>
        ) : (
          <button
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              if (!disabled) onExpand();
            }}
            className={classNames(styles.button, {
              [styles.disabledBtn]: disabled,
            })}
          >
            View more →
          </button>
        )}
      </div>
    </div>
  );
}
