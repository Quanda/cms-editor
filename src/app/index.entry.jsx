import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { registerServiceWorker } from '../utils/sw';
import Application from './template';
import '../style/main.scss';

library.add(fas);

const app = new Application();
ReactDOM.render(app.entrypoint(), document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}
