import React from "react";

const NameCountFormatter = ({ inputString }) => {
  const processString = (str) => {
    const separatedCart = str.split(/,?\s+/);
    const nameCounts = {};

    separatedCart.forEach((name) => {
      if (name.trim() !== "") {
        nameCounts[name] = (nameCounts[name] || 0) + 1;
      }
    });

    return Object.entries(nameCounts).map(
      ([name, count]) => `${name} (${count} kgs)`
    );
  };

  const result = processString(inputString);

  return (
    <div>
      {result.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default NameCountFormatter;
