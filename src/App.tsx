import { useState } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card/Card";

const drinks = [
  { id: 1, name: "green", variant: "greenCard" },
  { id: 2, name: "berry", variant: "berryCard" },
  { id: 3, name: "orange", variant: "orangeCard" },
  { id: 4, name: "strawberry", variant: "strawberryCard" },
];

function App() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = (id: number) => {
    setActiveCardId(id);
    setIsExpanded(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        {drinks.map((drink) => (
          <Card
            key={drink.id}
            id={drink.id}
            name={drink.name}
            variant={drink.variant}
            isActive={activeCardId === drink.id}
            isExpanded={isExpanded}
            onClick={() => setActiveCardId(drink.id)}
            onExpand={() => handleExpand(drink.id)}
            disabled={activeCardId !== drink.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
