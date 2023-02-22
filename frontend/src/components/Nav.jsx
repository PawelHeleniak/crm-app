import React from 'react'
import {Bookmark} from './Bookmark'

export function Nav() {
  const bookmarks = [
    {
      name: "Dashboard",
      active: true,
    },
    {
      name: "Konto",
      active: false,
    },
    {
      name: "Pracownicy",
      active: false,
    },
  ]
  const bookmark = bookmarks.map((val) => <Bookmark data={val} />);

  return (
    <header>
      <nav>
        <div className="user-permissions">
          <h1>Admin</h1>
        </div>
        <div className="user-informations">
          <h2>Imie Nazwisko</h2>
          <h3>Admin</h3>
        </div>
          <div className="bookmarks">
            {bookmark}
          </div>
      </nav>
    </header>
  );
}