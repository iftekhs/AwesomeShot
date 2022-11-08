import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import setAuthToken from '../../api/auth';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);

  const location = useLocation();
  //   const navigate = useNavigate();
  //   const from = location.state?.from?.pathName || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        // const user = result.user;
        // const currentUser = {
        //   email: user.email,
        // };
        // setAuthToken(currentUser);
        console.log(result);
        // navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <section>
      <div className="auth-container flex items-center justify-center">
        <div className="auth-content bg-white rounded-lg px-4">
          <h2 className="text-center text-3xl mt-10 font-bold">Welcome to AwesomeShot</h2>
          <p className="text-center mt-5 text-gray-700">
            Use your email or another service to continue <br /> with AwesomeShot
          </p>

          <form onSubmit={handleLogin} className="my-5">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2.5"
                placeholder="example@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                Your password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <button className="w-full transition-all bg-blue-600 hover:bg-blue-800 text-white py-3 px-5 rounded-lg">
              Log In
            </button>
          </form>

          <button className="w-full transition-all hover:bg-gray-50 bg-white border border-gray-200 py-3 px-5 flex items-center justify-center gap-2 rounded-lg">
            <FaGoogle></FaGoogle> Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
