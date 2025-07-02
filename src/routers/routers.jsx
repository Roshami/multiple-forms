import { Route, Routes } from 'react-router';
import Home from '../components/home/home';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routers;
