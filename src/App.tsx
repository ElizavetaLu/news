import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/root/RootLayout';
import NoMatch from './pages/no-match/NoMatch';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Routes>
      < Route path="/" element={< RootLayout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NoMatch />} />
      </Route >
    </Routes >
  );
}

export default App;
