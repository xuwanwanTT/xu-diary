import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { RouterList } from './RouterList';

function App() {
  return (
    <div className="App">
      <Switch>
        {
          RouterList.map((s, i) => {
            let PageModule = s.component;
            return <Route key={'router' + i}
              path={s.pathname}
              exact={!Boolean(s.children)}
              render={(props) => <PageModule {...props} />}
            />
          })
        }
      </Switch>
    </div>
  );
}

export default App;
