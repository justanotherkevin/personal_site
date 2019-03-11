import React from 'react';

const RepoDetailed = ({ activeRepo }) => {
  return (
    <div className="repo-detailed">




      <div className="content-wrapper">
        <div
          className={`sample-container ${activeRepo.title ? 'show' : ''}`}
        >
          {activeRepo.title && <h3>{activeRepo.title}</h3>}
          {activeRepo.description && <p>{activeRepo.description}</p>}
        </div>
      </div>

    </div>
  )
}
export default RepoDetailed;
