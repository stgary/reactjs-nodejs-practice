import React from 'react'

export default function Toolbar() {
  return (
    <header className='tool-header'>
      <nav className='tool-nav'>
        <div className='tool-ul-container'>
          <ul className='tool-list'>
            <li className='list-item'>Scheduler</li>
            <li className='list-item'>Create Goals</li>
            <li className='list-item'>Performance Tracker</li>
            <li className='list-item'>Visualizations</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
