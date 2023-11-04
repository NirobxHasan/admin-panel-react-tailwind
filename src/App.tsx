import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<SignIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
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
