import React, { useState, useEffect } from 'react';
import './styles.css';
import Submission from './Submission.jsx';

export default function Fetchdata(props) {
  const { data, hasSearched } = props;
  const [userdata, setuserdata] = useState(null);


//   Infinite Loop Issue and the Role of useEffect
// Without useEffect
// If you call a function that updates state directly inside the component body, it can cause an infinite loop. Here’s why:

// Initial Render: The component renders for the first time.
// Fetch Call: The fetch function is called, which updates the state using setuserdata.
// State Update: The state update (setuserdata) triggers a re-render of the component.
// Re-render: The component re-renders, calling the fetch function again.
// Loop: This cycle repeats indefinitely, as the fetch function continues to be called on every render.
// Using useEffect
// useEffect allows you to perform side effects (like data fetching) in functional components. By default, useEffect runs after the first render and after every update. However, you can control when it runs by providing a dependency array.

// Here’s how useEffect solves the infinite loop problem:

// Initial Render: The component renders for the first time.
// useEffect with Dependencies: The useEffect hook runs only when its dependencies change (e.g., when data changes).
// Fetch Call: The fetch function is called inside useEffect, and state is updated with setuserdata.
// State Update: The state update triggers a re-render.
// No Infinite Loop: On re-render, useEffect doesn’t run again unless the dependencies have changed, preventing the infinite loop.

  useEffect(() => {
    if (data !== "") {
      const keys = '91f58dd5ac11703a2f6f885b40b7686b8548a2d3';
      const secrets = 'c997f713d2f98f216fce98cf422029e91375e4d7';
      const handle = data;

      const api = `https://codeforces.com/api/user.info?handles=${handle}&checkHistoricHandles=false&key=${keys}&secret=${secrets}`;
      
      async function fetchData() {
        try {
          const response = await fetch(api);
          if (response.ok) {
            const result = await response.json();
            setuserdata(result.result[0]);
          } else {
            setuserdata(null);
          }
        } catch (err) {
          console.log(err);
          setuserdata(null);
        }
      }

      fetchData();
    }
  }, [data]);

  if (!hasSearched) {
    return null;
  }

  if (userdata) {
    return (
      <div className="outer2">
        <div className="total_data">
          <div className="data_image">
            <img className="img" src={userdata.titlePhoto} alt="User Avatar" />
          </div>
          <div className="data_table">
          <div className="grid-item small">Name:</div>
          <div className="grid-item large">{userdata.firstName||'N/A'} {userdata.lastName||'N/A'}</div>
          <div className="grid-item small">Friend Count:</div>
          <div className="grid-item large">{userdata.friendOfCount}</div>
            <div className="grid-item small">Handle:</div>
            <div className="grid-item large">{userdata.handle}</div>
            <div className="grid-item small">Organization:</div>
            <div className="grid-item large">{userdata.organization || 'N/A'}</div>
            <div className="grid-item small">Location:</div>
            <div className="grid-item large">{userdata.city || 'N/A'}, {userdata.country || 'N/A'}</div>
            <div className="grid-item small">Max Rank:</div>
            <div className="grid-item large">{userdata.maxRank}</div>
            <div className="grid-item small">Current Rank:</div>
            <div className="grid-item large">{userdata.rank}</div>
            <div className="grid-item small">Current Rating:</div>
            <div className="grid-item large">{userdata.rating}</div>
            <div className="grid-item small">Max Rating:</div>
            <div className="grid-item large">{userdata.maxRating}</div>
          </div>
        </div>
        <Submission data={userdata.handle}></Submission>
      </div>
    );
  } else {
    return (
      <div className="z">
        <h3>Oops! Username not found</h3>
      </div>
    );
  }
}
