import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MyList from './MyList';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const toDos = ['Eat Lunch', 'Buy ice cream', 'Eat ice cream', 'Go to the gym'];

root.render(
  <StrictMode>
    <MyList toDos={toDos} />
  </StrictMode>
);
