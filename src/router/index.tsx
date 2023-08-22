import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import { Dashboard } from '../view/pages/dashboard';

export function Router() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
   </BrowserRouter>
  )
}