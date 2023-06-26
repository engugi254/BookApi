import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../dashboard/dashboard.css";
import Home from "./Home";
import Borrow from "./Borrow";
import Members from "./Members";
import Return from "./Return";

const Dashboard = () => {
  return (
    <>
      <div className="topDiv">
        <div className="topLeftDiv">
          <h2>Dashboard</h2>
        </div>
        <div className="topRightDiv"></div>
      </div>
      <div className="centerDiv">
        <div className="centerLeftDiv">
          <div className="navbar">
            <Link to="/" className="site-title">
              Marvels
            </Link>
            <Link to="/characters">Characters</Link>
            <Link to="/comics">Comics</Link>
            <Link to="/creators">Creators</Link>
          </div>
        </div>
        <div className="centerRightDiv">
          <Routes>
            <Route path="/characters" element={<Home />} />

            <Route path="/" element={<Return />} />
            <Route path="/comics" element={<Borrow />} />
            <Route path="/creators" element={<Members />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
