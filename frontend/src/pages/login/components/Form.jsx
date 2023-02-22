import React, {useState} from 'react'

export function Form() {
  const [data, setData] = useState({
    password: '',
    email: '',
  })

  return (
    <form>
      <div className="form-wrapper">
        <div className="title">
          <h2>Zaloguj się</h2>
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
          <button type="button">Zaloguj się</button>
        </div>
      </div>
    </form>
  );
}