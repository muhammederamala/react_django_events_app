import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route index element={<HomeScreen />} />
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
