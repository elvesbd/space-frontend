import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import { DashBoard } from '../view/pages/dashboard';


export function Router() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />} />
      </Routes>
   </BrowserRouter>
  )
}