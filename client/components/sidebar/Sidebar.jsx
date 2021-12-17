import React from 'react'
import { Contact } from '../UI/contant/Contact'
import { Searchbar } from '../UI/searchbar/Searchbar'

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="navbar-left">
        <div className="navbar-left-items">
          <img src="https://images.unsplash.com/photo-1549351512-c5e12b11e283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="dev"/>
          <p className="navbar-item-name">
            Beta
          </p>
          <div>
            <span className="material-icons-outlined">motion_photos_on</span>
          </div>
          <div>
            <span className="material-icons">chat</span>
          </div>
          <div>
            <span className="material-icons">more_vert</span>
          </div>
        </div>
      </div>

      <Searchbar/>
      <Contact/>
    </div>
  )
}
