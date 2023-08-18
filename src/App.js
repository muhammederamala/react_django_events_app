import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
        <Route>
        <Route path='/' element={<HomeScreen />} exact />
        <Route path='/cart' element={<ProductScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
        </Route>
  )
)

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
