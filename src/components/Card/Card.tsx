import classNames from "classnames";
import styles from "../../App.module.scss";

interface CardProps {
  name: string;
  image: string;
  id: number;
  label: string;
  variant: string;
  isActive: boolean;
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse?: () => void;
  onHover: () => void;
  onLeave: () => void;
  disabled: boolean;
}

export default function Card({
  name,
  image,
  variant,
  isActive,
  isExpanded,
  label,
  onExpand,
  onCollapse,
  onHover,
  onLeave,
  disabled,
}: CardProps) {
  const cardClass = classNames(
    styles.card,
    {
      [styles.active]: isActive && !isExpanded,
      [styles.expanded]: isActive && isExpanded,
      [styles.inactive]: !isActive && isExpanded,
    },
    styles[variant]
  );

  return (
    <div className={cardClass} onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.blockImage}>
            <img src={image} alt="" />
            <div className={styles.whiteDot}></div>
          </div>

          <div className={styles.conteiner}>
            <div className={styles.discription}>
              <h1>{label}</h1>
              <div className={styles.text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit...
                </p>
              </div>
            </div>

            <div className={styles.price}>79$</div>
          </div>
        </div>

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
