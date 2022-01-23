import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room-chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
