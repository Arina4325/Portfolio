import React from 'react'

const Contacts = () => {
  return (
    <div>
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Rishon-Le-Zion, Israel</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+972506863169">+(972) 50-686-3169</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:arina4325@gmail.com">arina4325@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main> 
    </div>
  )
}

export default Contacts