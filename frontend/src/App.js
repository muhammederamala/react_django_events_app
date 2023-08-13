import { Container } from 'react-bootstrap'


// components
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import Welcome from './pages/welcome';
import CreateEvent from './pages/create_event/CreateEvent';


import { 
  createBrowserRouter, 
  RouterProvider, 
  Route, 
  createRoutesFromElements 
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<Login />} />
      <Route path='signup/' element={<SignUp />} />
      <Route path='welcome/' element={<Welcome />} />
      <Route path='create_event/' element={<CreateEvent />} />
    </Route>
  )
)

function App() {
  return (
    <div>
      <main className='py-3'>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </main>
    </div>
  );
}

export default App;
