import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import SignUp from './component/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path='/' element={<h1>Product</h1>} />
        <Route path='/add' element={<h1>Add Product</h1>} />
        <Route path='/update' element={<h1>Update Product</h1>} />
        <Route path='/logout' element={<h1>Logout</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
        <Route path='/signup' element={<SignUp />} />
        
       </Routes>
       <Footer />
     </BrowserRouter>
     
    </div>
  );
}

export default App;
