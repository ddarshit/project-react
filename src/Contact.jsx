import React, { useState } from 'react';

const Contact = () => {
  // Sample item data
  const itemsData = [
    { id: 1, name: 'cake' },
    { id: 2, name: 'pizza ' },
    { id: 3, name: 'dosha' },
    // Add more item objects here
  ];

  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = itemsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
