import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Header from "./Header";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  const handleAddItems = (item) => {
    setItems([...items, item]);
  };

  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItems={handleAddItems} />
        <GroceryList items={items} />
        <Footer />
      </div>
    </>
  );
}
