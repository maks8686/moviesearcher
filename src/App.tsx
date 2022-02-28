import React from 'react';
import { HeaderWithSearch } from './components/headerWithSearch/headerWithSearch';
import { CardHolder } from './components/cardHolder/cardHolder';

export const App=()=> {
  return (
    <div>
    <HeaderWithSearch/>
    <CardHolder/>
    </div>
  );
}

export default App;
