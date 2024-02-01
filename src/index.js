import ReactDOMClient from 'react-dom/client';
import App from './App';
import './css/style.css'
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);