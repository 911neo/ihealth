import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (

 <div className="main-layout">
 <header>
 <h2>ihealth Labs</h2>
 <nav>
 <a href="/">Ihealth</a>
 <a href="/About">About us </a>
 <AccountsUI/>
 </nav>
 </header>
 <main>
 {content}
 </main>
</div>
)
