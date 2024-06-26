import React, { useEffect, useState } from 'react';
import '../App.css';
import { getConnectionLists, humanizeConnectionList } from '../helpers/connections';
import charactersData from '../data/characters.json';

const CharacterInfoFurthestConnections = ({ character }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const connectionLists = getConnectionLists(character)

  useEffect(() => {
    setSelectedItem(0);
  }, [character])

  return (
    <div className="two-pane-window">
      <div className="left-pane">
        <ul>
          {connectionLists.map((item, index) => (
            <li
              key={index}
              className={selectedItem === index ? 'selected' : ''}
              onClick={() => setSelectedItem(index)}
            >
              {charactersData[item.at(-1)].name}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-pane">
        {humanizeConnectionList(connectionLists?.[selectedItem] || []).map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default CharacterInfoFurthestConnections;
