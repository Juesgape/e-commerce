import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home/index.jsx'
import MyAccount from '../MyAccount/index.jsx'
import MyOrder from '../MyOrder/index.jsx'
import MyOrders from '../MyOrders/index.jsx'
import NotFound from '../NotFound/index.jsx'
import SignIn from '../SignIn/index.jsx'
import Navbar from '../../Components/Navbar/index.jsx'
import Layout from '../../Components/Layout/index.jsx'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/*', element: <NotFound/>}
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
