import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import './Header.css';

const Header = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <header className="bg-slate-900 p-5 text-white">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="logo-container flex items-center justify-center gap-1">
            {/* <img className="logo" src={logo} height="30" alt="" /> */}
            <h4 className="text-4xl font-bold">AwesomeShot</h4>
          </div>
        </Link>
        <div className="hidden md:flex gap-4 items-center justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-1xl header-link font-semibold active-header-link'
                : 'text-1xl header-link font-semibold'
            }
            to="/courses/00">
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-1xl header-link font-semibold active-header-link'
                : 'text-1xl header-link font-semibold'
            }
            to="/courses/00">
            Blog
          </NavLink>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2">
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
        </div>

        <button
          onClick={toggleBurgerMenu}
          className={`btn ${
            burgerMenuOpen && 'bg-cgray text-cdark'
          } block md:hidden btn-burger text-3xl hover:bg-cgray hover:text-cdark`}>
          <GoThreeBars></GoThreeBars>
        </button>
      </nav>
      <div className={`container ${!burgerMenuOpen && 'hidden'} mx-auto py-3  mt-2`}>
        <ul>
          <li className="mb-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
              }
              to="/courses/00">
              Courses
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-1xl header-link active-header-link' : 'text-1xl header-link'
              }
              to="/blog">
              Blog
            </NavLink>
          </li>

          <li className="mb-6">
            <Link to="/login" className="btn bg-cpurple text-white hover:bg-violet-600">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/register" className="btn bg-cpurple text-white hover:bg-violet-600">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
