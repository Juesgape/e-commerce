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
import ProductsByCategory from '../../Components/ProductsByCategory'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/jewelery', element: <ProductsByCategory pathName={'jewelery'} />},
    { path: '/electronics', element: <ProductsByCategory pathName={'electronics'} />},
    { path: "/women's-clothing", element: <ProductsByCategory pathName={"women's clothing"} />},
    { path: "/men's-clothing", element: <ProductsByCategory pathName={"men's clothing"} />},
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
