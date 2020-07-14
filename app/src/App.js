import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import Login from './screens/Login'
import Register from './screens/Register'
import TodoList from './screens/TodoList'
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={TodoList}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
