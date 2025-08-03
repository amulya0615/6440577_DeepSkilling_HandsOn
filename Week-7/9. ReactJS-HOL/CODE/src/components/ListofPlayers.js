import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Rahul', score: 45 },
    { name: 'Jadeja', score: 78 },
    { name: 'Dhoni', score: 92 },
    { name: 'Gill', score: 67 },
    { name: 'Pant', score: 55 },
    { name: 'Kohli', score: 100 },
    { name: 'Bumrah', score: 85 },
    { name: 'Ashwin', score: 69 },
    { name: 'Iyer', score: 60 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <h2>Players with score below 70:</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
