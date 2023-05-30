import React from 'react';
import './style.css';

const TextComponent = ({ text, color }) => <p style={{ color }}>{text}</p>;

const ListComponent = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const FancyTable = ({ n }) => (
  <ul>
    {Array.from({ length: n }, (_, i) => (
      <li key={i}>{i + 1}</li>
    ))}
  </ul>
);

const Multiple = ({ name, number }) => (
  <>
    <h2>{name}</h2>
    <FancyTable n={number} />
  </>
);

export default function App() {
  const names = ['Wacław', 'Wojtek', 'Kunegunda', 'Eugenia'];

  return (
    <div>
      <TextComponent text="Użytkownicy:" color="blue" />
      <ListComponent items={names} />
      <Multiple name="Example" number={6} />
    </div>
  );
}