import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Loader from './Loader/Loader';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login"><ContactsPage /></PrivateRoute>} />
            <Route path="/login" element={<RestrictedRoute redirectTo="/contacts"><LoginPage /></RestrictedRoute>} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/contacts"><RegistrationPage /></RestrictedRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
};

export default App;
