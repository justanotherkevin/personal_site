import React, { Component } from 'react';

const RepoPreview = ({
  activeRepo,
  previewRepos,
  setStateActiveRepo,
  unsetActiveRepo,
  toggleActiveRepo,
  showActiveRepo,
}) => {
  const gridNumbesClass = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ],
    arr = Object.keys(previewRepos).map(
      key => previewRepos[key]
    ),
    classShowActiveRepo = showActiveRepo === true ? 'show-active' : '';

  return (
    <div
      className={`repo-preview-wrapper background ${activeRepo.name} ${classShowActiveRepo}`}>
      {arr.map((repo, i) => (
        <div
          key={i}
          className={`${gridNumbesClass[i]} grid-box`}
          onMouseEnter={() => setStateActiveRepo(repo.name)}
          onMouseLeave={unsetActiveRepo}
          data-name={repo.name}
        >
          <a
            href={repo.link}
            target="_blank"
            onClick={e => {
              e.preventDefault();
              toggleActiveRepo();
            }}
          >
            <img src={repo.imgSrc} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default RepoPreview;
