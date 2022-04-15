import React, { useState } from "react";

function App() {
  const [list, setList] = useState(["Banana", "Peapple", " Pear", "Grape"]);
  const [newItem, setNewItem] = useState("");

  function addToList() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  function removeFromList(item: string) {
    setList((state) => state.filter((opns) => opns !== item));
  }

  return (
    <>
      <input
        type="text"
        placeholder="New Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Add</button>
      <br />
      <ul>
        {list.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <button onClick={() => removeFromList(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
