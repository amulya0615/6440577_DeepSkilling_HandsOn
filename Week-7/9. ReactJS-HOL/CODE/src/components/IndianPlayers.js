import React from 'react';

const IndianPlayers = () => {
  const T20Players = ['Kohli', 'Rohit', 'Pant', 'Hardik'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Iyer'];

  const allPlayers = [...T20Players, ...RanjiPlayers];

  const [oddPlayers, evenPlayers] = allPlayers.reduce(
    (acc, player, index) => {
      if (index % 2 === 0) {
        acc[0].push(player);
      } else {
        acc[1].push(player);
      }
      return acc;
    },
    [[], []]
  );

  return (
    <div>
      <h2>All Players:</h2>
      <ul>{allPlayers.map((player, index) => <li key={index}>{player}</li>)}</ul>

      <h2>Odd Team Players:</h2>
      <ul>{oddPlayers.map((player, index) => <li key={index}>{player}</li>)}</ul>

      <h2>Even Team Players:</h2>
      <ul>{evenPlayers.map((player, index) => <li key={index}>{player}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
