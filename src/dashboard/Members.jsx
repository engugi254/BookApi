import React, { useEffect, useState } from "react";

import axios from "axios";

import book1 from "./imagess/book1.webp";

import book2 from "./imagess/book2.jpeg";

import book3 from "./imagess/book3.jpeg";

import book4 from "./imagess/book5.jpeg";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNZW1iZXJJRCI6NDIsInJvbGVzIjoiYWRtaW4iLCJpYXQiOjE2ODc3Njk4MjMsImV4cCI6MTY4Nzc3MzQyM30.Jl-UatSjN77yK8UbuK0au290uJHhQJrScGKPOdrlgPc"; // Replace with your actual JWT token

localStorage.setItem("token", token);

const App = () => {
  const [data, setData] = useState([]);

  const [Member, setMember] = useState([]);

  const [book, setBook] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchMember();
  }, []);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/books"); // Replace '/api/data' with your actual backend API endpoint

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMember = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming you have stored the JWT token in localStorage

      const response = await axios.get("http://localhost:5002/allmembers", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
        },
      });

      setMember(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBook = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:5002/books", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="header">
        <h1> WELCOME TO YOUR FAVOURITE LIBRARY</h1>

        <div className="search-bar">
          <input type="text" placeholder="Search your favourite book.." />
        </div>

        <ol>
          <li>
            <a href="characters">HOME</a>
          </li>

          <li>
            <a href="movies">cATEGORIES</a>
          </li>

          <li>
            <a href="tvshows">FICTION</a>
          </li>

          <li>
            <a href="games">SELF HELP</a>
          </li>

          <li>
            <a href="videos">GET A GUIDE</a>
          </li>
        </ol>

        <ul>
          <li>
            <img src={book1} alt="book" />
          </li>

          <li>
            <img src={book2} alt="book" />
          </li>

          <li>
            <img src={book3} alt="book" />
          </li>

          <li>
            <img src={book4} alt="book" />
          </li>
        </ul>
      </div>

      <h1>Data from Backend</h1>

      <div className="back">
        <ul>
          <li>
            <a href="movies">VIEW ALL MEMBERS</a>

            <li>
              <img src={book1} alt="book" />
            </li>

            <h3>
              here youll be able to have acces to all the members who have
              logged in in this website, all thos who have registerd and their
              details
            </h3>
          </li>

          <li>
            <a href="tvshows">VIEW ALL BORROWED BOOKS</a>{" "}
            <li>
              <img src={book2} alt="book" />{" "}
              <h3>
                here youll be able to have acces to all the members who have
                logged in in this website, all thos who have registerd and their
                details
              </h3>
            </li>
          </li>

          <li>
            <a href="games">DELETE A BOOK</a>{" "}
            <li>
              <img src={book3} alt="book" />{" "}
              <h3>
                here youll be able to have acces to all the members who have
                logged in in this website, all thos who have registerd and their
                details
              </h3>
            </li>
          </li>

          <li>
            <a href="videos">ADD A BOOK</a>{" "}
            <li>
              <img src={book4} alt="book" />{" "}
              <h3>
                here youll be able to have acces to all the members who have
                logged in in this website, all thos who have registerd and their
                details
              </h3>
            </li>
          </li>

          <li>
            <a href="videos">VIEW ALL BOOKS</a>
            <li>
              <img src={book1} alt="book" />{" "}
              <h3>
                here youll be able to have acces to all the members who have
                logged in in this website, all thos who have registerd and their
                details
              </h3>
            </li>
          </li>
        </ul>
      </div>

      <div className="product">
        {data.map((book) => (
          <div key={book.ID}>
            <h3>{book.Title}</h3>

            <p>Author: {book.Author}</p>

            <p>Status: {book.Status}</p>

            <p>PublicationYear:{book.PublicationYear}</p>
          </div>
        ))}
      </div>

      <h1>All MEMBERS WHO HAVE REGISTERD IN OUR LIBRARY SYSTEM</h1>

      <div className="Members">
        {Member.map((Member) => (
          <div key={Member.ID}>
            <h3>{Member.Name}</h3>

            <p>Address: {Member.Address}</p>

            <p>Status: {Member.Roles}</p>
          </div>
        ))}
      </div>

      <div className="Books">
        {data.map((Book) => (
          <div key={Book.ID}>
            <h3>{Book.Title}</h3>

            <p>Author: {Book.Author}</p>

            <p>Status: {Book.Status}</p>

            <p>PublicationYear:{Book.PublicationYear}</p>

            <p>PublicationYear:{book.Password}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
