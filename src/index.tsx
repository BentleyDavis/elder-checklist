import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}
