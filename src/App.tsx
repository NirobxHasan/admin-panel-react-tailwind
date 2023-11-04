import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import PrivateRoutes from './components/routes/PrivateRoutes';
import PublicRoutes from './components/routes/PublicRoutes';
import DashboardLayout from './layout/DashboardLayout';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PublicRoutes />}>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
        </Route>
        <Route element={<DashboardLayout />}>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

    // <Layout>
    //   <div>
    //     <SignIn />
    //   </div>
    // </Layout>
  );
}

export default App;
