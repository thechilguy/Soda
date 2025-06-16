import { useState } from "react";
import styles from "./App.module.scss";
import Card from "./components/Card/Card";
import btlOrange from "./assets/btl_orange.png";
import btlGreen from "./assets/btl_green.png";
import btlBerry from "./assets/btl_burry.png";
import btlStr from "./assets/btl_str.png";

const drinks = [
  {
    id: 1,
    name: "green",
    variant: "greenCard",
    image: btlGreen,
    label: "Green Energetic",
  },
  {
    id: 2,
    name: "berry",
    variant: "berryCard",
    image: btlBerry,
    label: "Berry Energetic",
  },
  {
    id: 3,
    name: "orange",
    variant: "orangeCard",
    image: btlOrange,
    label: "Orange Energetic",
  },
  {
    id: 4,
    name: "strawberry",
    variant: "strawberryCard",
    image: btlStr,
    label: "Strawberry Energetic",
  },
];

function App() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = (id: number) => {
    setActiveCardId(id);
    setIsExpanded(true);
  };
  const handleCollapse = () => {
    setIsExpanded(false);
    setActiveCardId(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        {drinks.map((drink) => (
          <Card
            key={drink.id}
            id={drink.id}
            name={drink.name}
            image={drink.image}
            label={drink.label}
            variant={drink.variant}
            isActive={activeCardId === drink.id}
            isExpanded={isExpanded}
            onClick={() => setActiveCardId(drink.id)}
            onExpand={() => handleExpand(drink.id)}
            disabled={activeCardId !== drink.id}
            onCollapse={handleCollapse}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
