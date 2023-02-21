import React, {useState} from 'react'

export function Form() {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    password: '',
    email: '',
  })

  return (
    <form>
      <div className="form-wrapper">
        <div className="title">
          <h2>Załóż konto</h2>
        </div>
        <div className="input-container">
          <input type="text" name="name" id="name" required value={data.name} onChange={e=>setData({ ...data, name: e.target.value })}/> 
          <label htmlFor="name">Imię</label>
        </div>
        <div className="input-container">
        <input type="text" name="lastName" id="lastName" required value={data.lastName} onChange={e=>setData({ ...data, lastName: e.target.value })}/> 
          <label htmlFor="lastName">Nazwisko</label>
        </div>
        <div className="input-container">
        <input type="text" name="email" id="email" required value={data.email} onChange={e=>setData({ ...data, email: e.target.value })}/> 
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-container">
        <input type="text" name="password" id="password" required value={data.password} onChange={e=>setData({ ...data, password: e.target.value })}/> 
          <label htmlFor="password">Hasło</label>
        </div>
        <div className="button-container">
          <button type="button">Załóż konto</button>
        </div>
      </div>
    </form>
  );
}