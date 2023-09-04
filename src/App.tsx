import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/root/RootLayout';
import NoMatch from './pages/no-match/NoMatch';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import SelectedTopic from './pages/selected-topic/SelectedTopic';
import SelectedNews from './pages/selected-news/SelectedNews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={< RootLayout />}>

        <Route index element={<Home />} />
        
        <Route path='search' element={<Search />} />

        <Route path='/news/:name' element={<SelectedNews />} />

        <Route path='/topic/:title' element={<SelectedTopic />} /> 

        <Route path='*' element={<NoMatch />} />
      </Route >
    </Routes >
  );
}

export default App;
