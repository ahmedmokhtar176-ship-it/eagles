import React from 'react';
import logo from '../logo.png';
import { Phone, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const nav = useNavigate();
  const loc = useLocation();

  const go = (p) => {
    setOpen(false);
    nav(p);
  };

  const links = [
    ['/', 'الرئيسية'],
    ['/services', 'خدماتنا'],
    ['/about', 'عن الشركة'],
    ['/contact', 'تواصل معنا']
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <button className="brand" onClick={() => go('/')}>
          <img src={logo} alt="Eagles" />
        </button>

        <nav className={open ? 'nav open' : 'nav'}>
          {links.map(([p, t]) => (
            <button
              key={p}
              className={loc.pathname === p ? 'active' : ''}
              onClick={() => go(p)}
            >
              {t}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <a className="call-pill" href="tel:19024">
            <Phone size={15} />
            19024
          </a>

          <button className="menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
