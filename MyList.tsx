import * as React from 'react';
import './style.css';

import ListItem from './ListItem';

export default function MyList(props) {
  const [allListItems, setAllListItems] = React.useState(props.toDos);
  let newTask = '';
  return (
    <div>
      <h1>Thing I Need To Do To Succeed:</h1>
      <ul>
        {allListItems.map((val, index) => (
          <ListItem doThis={val} />
        ))}
      </ul>
      <input
        type="text"
        id="textfield"
        placeholder="Enter task here"
        onChange={(e) => {
          newTask = e.target.value;
        }}
      />
      <button onClick={() => setAllListItems(allListItems.concat([newTask]))}>
        Add
      </button>
      <br />
      <button onClick={() => setAllListItems([])}>Finished the List</button>
    </div>
  );
}
