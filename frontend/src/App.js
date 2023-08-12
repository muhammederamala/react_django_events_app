import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import Welcome from './pages/welcome';


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
    </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
