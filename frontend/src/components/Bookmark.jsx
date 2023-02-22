import React from 'react'

export function Bookmark({data, handleActive}) {
  return (
    <div className={data.active ? 'bookmark active' : 'bookmark'}><p onClick={handleActive}>{data.name}</p></div>
  );
}