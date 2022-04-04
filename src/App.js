import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const allCat =  [ 'all',    ...new Set(  items.map( (cat) => cat.category)) ]
  console.log(allCat);

  const [menuItem, setMenuItem] = useState(items)
  const [category, setCategory] = useState([])

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
            <h2> our menu </h2>
        </div>
      </section>


      <Categories allCat={allCat}  filterItems={filterItems}/>

      <Menu item={menuItem}/>

    
    <h2>menu project setup</h2>
    </main>
  )
}

export default App;
