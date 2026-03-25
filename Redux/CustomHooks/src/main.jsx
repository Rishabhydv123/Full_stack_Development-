import { createRoot } from 'react-dom/client';
import {OtherApp} from './otherApp.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <OtherApp />
  </>
);