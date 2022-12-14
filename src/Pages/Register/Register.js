import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import setAuthToken from '../../api/auth';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(null);
  const { createUser, providerLogin, trigger, setTrigger, updateUserProfile } =
    useContext(AuthContext);

  useTitle('Register');

  const navigate = useNavigate();

  //    Providers
  const googleProvider = new GoogleAuthProvider();

  const handleUpdateUserProfile = (name, photoURL, currentUser) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        setTrigger(!trigger);
        setAuthToken(currentUser)
          .then(() => {
            navigate('/');
          })
          .catch(console.error)
          .finally(() => {
            setBtnLoading(false);
          });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setBtnLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBtnLoading(true);
    setError(null);
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        form.reset();
        handleUpdateUserProfile(name, photoURL, currentUser);
      })
      .catch((e) => setError(e.message));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        setAuthToken(currentUser)
          .then(() => {
            navigate('/');
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  return (
    <section>
      <div className="auth-container flex items-center justify-center px-2">
        <div className="auth-content bg-white rounded-lg px-4">
          <h2 className="text-center text-3xl mt-10 font-bold">Welcome to AwesomeShot</h2>
          <p className="text-center mt-5 text-gray-700">
            Use your email or another service to continue <br /> with AwesomeShot
          </p>

          <form onSubmit={handleSubmit} className="my-5">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">
                Your name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 ">
                Your Photo URL
              </label>
              <input
                name="photoURL"
                type="text"
                id="photoURL"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

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

            <p className="mb-3 text-rose-500">{error}</p>

            <button
              disabled={btnLoading}
              className="w-full transition-all bg-blue-600 hover:bg-blue-800 text-white py-3 px-5 rounded-lg">
              {btnLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="mr-2 w-6 h-6 text-blue-600 fill-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : (
                'Sign Up'
              )}
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="w-full transition-all hover:bg-gray-50 bg-white border border-gray-200 py-3 px-5 flex items-center justify-center gap-2 rounded-lg">
            <FaGoogle></FaGoogle> Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
