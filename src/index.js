import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss'
import store from './reducers/store'
import { Provider } from 'react-redux'
import Root from './router';
function hotRender() {
    ReactDOM.render(
        <Provider store={store}>
            <Root />
        </Provider>
        , document.getElementById('root'));
}
hotRender()
store.subscribe(hotRender)
serviceWorker.unregister();
