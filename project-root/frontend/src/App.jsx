import { Routes, Route } from 'react-router-dom';
import Index from './index';
import Hotels from './pages/Hotels';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/hotel/:id" element={<Hotels />} />
    </Routes>
  );
}

export default App;