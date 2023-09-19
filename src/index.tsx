import { createRoot } from 'react-dom/client';

import { Counter } from './components/Counter';

const rootNode = document.getElementById('app')!;
const root = createRoot(rootNode);
root.render(<Counter />);
