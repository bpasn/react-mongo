import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import ProtectComponent from './components/ProtectComponent';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useAppSelector } from './redux/hook';

function App() {
  const { userInfo } = useAppSelector(state => state.userSignIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectComponent userInfo={userInfo} />}>
          <Route  element={<MainScreen userInfo={userInfo}/>}>
            <Route path="/" index element={<h2>Home</h2>} />
            <Route path="/dashboard" element={<h2>Dashboard</h2>} />
            <Route path="/profile" element={<h2>Profile</h2>} />
            <Route path="/setting" element={<h2>Setting</h2>} />
          </Route>
        </Route>
        <Route >
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="forgot-password" element={<>Forgot password</>} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
