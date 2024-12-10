
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';
function App() {
  return (
    <> 
      <BrowserRouter>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<h2>About page..</h2>} />
          <Route path='/ourcommunity' element={<h2>Our community page..</h2>} />
          <Route path='/mycommunity' element={<h2>My community page..</h2>} />
          <Route path='/blog' element={<h2>Blog page..</h2>} />
          <Route path='/reference' element={<h2>Reference page..</h2>} />
          <Route path='/ourreference' element={<h2>Our Reference page..</h2>} />
          <Route path='/myreference' element={<h2>My Reference page..</h2>} />
          <Route path='/aboutreference' element={<h2>About Reference page..</h2>} />
          <Route path='/contact' element={<h2>Contact page..</h2>} />
          <Route path='/register' element={<h2>Register page..</h2>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
