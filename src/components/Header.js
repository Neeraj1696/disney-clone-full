import React from "react";
import styled from "styled-components";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
    navigate("/home"); // Navigate to home after successful login
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>

      {!userName ? (
        <LogIn onClick={handleAuth}>Login</LogIn>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </Link>
            <Link to="/search">
              <img src="/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </Link>
            <Link to="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="watchlist" />
              <span>WATCHLIST</span>
            </Link>
            <Link to="/originals">
              <img src="/images/original-icon.svg" alt="originals" />
              <span>ORIGINALS</span>
            </Link>
            <Link to="/movie">
              <img src="/images/movie-icon.svg" alt="movie" />
              <span>MOVIE</span>
            </Link>
            <Link to="/series">
              <img src="/images/series-icon.svg" alt="series" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <UserImg src={userPhoto} alt={userName} />
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  /* background-color: #090b13; */
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      min-width: 20px;
      z-index: auto;
    }
    span {
      color: #f9f9f9;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 1);
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LogIn = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid #f9f9f9;
  border-radius: 100%;
`;

export default Header;
