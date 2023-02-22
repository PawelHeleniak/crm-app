import React from 'react'

export function Bookmark({data}) {
  return (
    <div className={data.active ? 'bookmark active' : 'bookmark'}><p>{data.name}</p></div>
  );
}