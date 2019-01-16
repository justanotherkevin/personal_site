import React, { Component } from 'react';

const PreviewRepos = ({ previewRepos, setStateActiveRepo }) => {
  const gridNumbesClass = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seve'
  ];
  let arr = Object.keys(previewRepos).map(key => previewRepos[key]);

  return (
    <div className="grid-container">
      {arr.map((repo, i) => (
        <div
          key={i}
          className={`${gridNumbesClass[i]} grid-box`}
          onMouseEnter={() => setStateActiveRepo(repo.name)}
          data-name={repo.name}
        >
          <a href={repo.link} target="_blank">
            <img src={repo.imgSrc} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default PreviewRepos;
