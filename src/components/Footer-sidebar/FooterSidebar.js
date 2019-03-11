import React from 'react'

export default function FooterSidebar({text}) {
  return (
    <div className="footer-sidebar-wrapper">
      <div className="content">
        <div className="last-name" />
        <div className="info-container">
          <span>{text}</span>
        </div>
      </div>
    </div>
  )
}
