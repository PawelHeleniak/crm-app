import React from "react";
import { Nav } from "../../../components/Nav";
import user from "../../../assets/icon/user.png";

export function Account() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="section-container">
          <section>
            <div className="card-wrapper">
              <div className="user-info">
                <div className="img">
                  <img src={user} alt="user" />
                </div>
                <div className="info-box">
                  <div className="wrapper">
                    <div className="title">
                      <p>Imie i Nazwsiko</p>
                    </div>
                    <div className="data">
                      <p>Łukasz Wiśniewski</p>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="title">
                      <p>Zawód</p>
                    </div>
                    <div className="data">
                      <p>Administrator</p>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="title">
                      <p>Telefon kontaktowy</p>
                    </div>
                    <div className="data">
                      <p>787559330</p>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="title">
                      <p>Email</p>
                    </div>
                    <div className="data">
                      <p>admin@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="user-skills"></div>
            </div>
          </section>
          <section></section>
        </div>
      </main>
    </>
  );
}
