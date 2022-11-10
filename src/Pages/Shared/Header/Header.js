import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import './Header.css';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Avatar from '../../../images/avatar.svg';
import logo from '../../../images/logo.svg';

const Header = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const headerAbsoluteRoutes = ['/', '/login', '/register'];
  const shouldBeAbsolute = headerAbsoluteRoutes.includes(location.pathname);

  const signOut = () => {
    logOut();
  };

  return (
    <header
      className={`header ${
        shouldBeAbsolute ? 'absolute w-full top-0' : 'bg-cdark'
      } p-5 py-8 text-white`}>
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="logo-container flex items-center justify-center gap-1">
            <img className="logo" src={logo} alt="" />
            <h4 className="text-2xl md:text-4xl font-bold">AwesomeShot</h4>
          </div>
        </Link>

        <div className="hidden lg:flex gap-4 items-center justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-1xl header-link font-semibold active-header-link'
                : 'text-1xl header-link font-semibold'
            }
            to="/services">
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-1xl header-link font-semibold active-header-link'
                : 'text-1xl header-link font-semibold'
            }
            to="/blog">
            Blog
          </NavLink>

          {user && user.uid && (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-1xl header-link font-semibold active-header-link'
                    : 'text-1xl header-link font-semibold'
                }
                to="/reviews">
                My Reviews
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-1xl header-link font-semibold active-header-link'
                    : 'text-1xl header-link font-semibold'
                }
                to="/add-service">
                Add Service
              </NavLink>
            </>
          )}
        </div>

        <div className="hidden lg:flex items-center justify-center gap-2">
          {user && user.uid ? (
            <>
              <div>
                <div className="relative">
                  <img
                    className="user-profile-pic w-10 h-10 rounded-full"
                    src={user.photoURL ? user.photoURL : Avatar}
                    alt="user"
                    height="60"
                  />
                </div>
              </div>

              <button
                onClick={signOut}
                className="btn border border-white text-white hover:bg-white hover:text-cdark">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn border border-white text-white hover:bg-white hover:text-cdark">
                Log In
              </Link>
              <Link
                to="/register"
                className="btn border border-white text-white hover:bg-white hover:text-cdark">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          onClick={toggleBurgerMenu}
          className={`btn ${
            burgerMenuOpen && 'bg-cgray text-cdark'
          } block lg:hidden btn-burger text-3xl hover:bg-cgray hover:text-cdark`}>
          <GoThreeBars></GoThreeBars>
        </button>
      </nav>

      <div
        className={`container ${
          !burgerMenuOpen && 'hidden'
        } bg-cdark p-5 rounded-lg mx-auto py-3  mt-2`}>
        <ul>
          <li className="mb-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-1xl header-link font-semibold active-header-link'
                  : 'text-1xl header-link font-semibold'
              }
              to="/services">
              Services
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-1xl header-link font-semibold active-header-link'
                  : 'text-1xl header-link font-semibold'
              }
              to="/blog">
              Blog
            </NavLink>
          </li>

          {user && user.uid && (
            <>
              <li className="mb-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-1xl header-link font-semibold active-header-link'
                      : 'text-1xl header-link font-semibold'
                  }
                  to="/reviews">
                  My Reviews
                </NavLink>
              </li>

              <li className="mb-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'text-1xl header-link font-semibold active-header-link'
                      : 'text-1xl header-link font-semibold'
                  }
                  to="/add-service">
                  Add Service
                </NavLink>
              </li>
            </>
          )}

          {user && user.uid ? (
            <>
              <li className="mb-4">
                <div>
                  <div className="relative">
                    <img
                      className="user-profile-pic w-10 h-10 rounded-full"
                      src={user.photoURL ? user.photoURL : Avatar}
                      alt="user"
                      height="60"
                    />
                  </div>
                </div>
              </li>

              <li className="mb-4">
                <button
                  onClick={signOut}
                  className="btn border border-white text-white hover:bg-white hover:text-cdark">
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="mb-6">
                <Link to="/login" className="btn border border-white text-white hover:bg-white hover:text-cdark">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/register" className="btn border border-white text-white hover:bg-white hover:text-cdark">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
