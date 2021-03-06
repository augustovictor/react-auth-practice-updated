## Workflow
- Create folders actions, components and reducers;
- Install `redux react-redux react-router react-router-dom redux-form redux-thunk axios lodash babel-preset-stage-1`;
- Install as dev depencency `babel-preset-es2015`;
- Create `.babelrc` with `{ "presets": ["react", "es2015", "stage-1"] }`;
- Import in `index.js`:
  - `Provider` from `react-redux`;
  - `createStore, applyMiddleware` from `redux`;
  - `reduxThunk` from `redux-thunk`;
    - Create `store` with middleware;
  - `Router, Route` from `react-router`;
  - `BrowserRouter` from `react-router-dom`;
- Actions
  - Create `types`;
  - Create `actionCreators`;
- Reducers:
  - `specific_reducer.js`: `export (state = {}, action)`;
  - `index.js`: `combineReducers from 'redux'`, `reducer as formReducer from 'redux-form'`;
- Components form:
  - `{ Field, reduxForm } from 'redux-form'`;
  - `{ connect } from 'react-redux'`;
  - `{ actionABC } from '../actions'`;