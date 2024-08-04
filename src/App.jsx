// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'event 1', RSVP : true },
    { name: 'event 2', RSVP : false },
    { name: 'event 3', RSVP : true },
  ];

  return (
    <>
      <h1>event attendees List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.RSVP ? 'RSVP' : 'not-RSVP'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
