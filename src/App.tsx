import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store'

import GroupList from "./components/groupList/groupList"
import FilterBar from "./components/filterBar/filterBar"
import './app.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <FilterBar />
        <GroupList />
      </div>
    </Provider>
  );
}

export default App;
