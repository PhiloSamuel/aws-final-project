import React from 'react';
import './App.css';

function App() {
  const teamMembers = [
    // { name: 'Philopateer', imageUrl: 'https://webprojectpics.s3.amazonaws.com/philooo.png' },
    { name: 'Philo', imageUrl: 'https://webprojectpics.s3.amazonaws.com/philooo.png' },
    { name: 'Belal', imageUrl: '' },
    { name: 'Mostafa', imageUrl: '' },
    { name: 'Marwan', imageUrl: '' },
    { name: 'Moatasem', imageUrl: '' },


  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>AWS Final Project</h1>
      </header>

      <section className="team-members">
        <h2>Team Members</h2>
        <div className="card-container">
          {teamMembers.map((member, index) => (
            <div className="card" key={index}>
              <img src={member.imageUrl} alt={`${member.name}'s avatar`} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
