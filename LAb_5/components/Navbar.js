import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="glass" style={{position:'sticky',top:0,zIndex:100,padding:'16px 0',borderBottom:'1px solid var(--border)'}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link to="/" style={{fontSize:'1.5rem',fontWeight:'700',color:'var(--text-primary)',textDecoration:'none',letterSpacing:'-0.5px'}}>Aura<span style={{color:'var(--accent)'}}>.</span></Link>
        <div style={{display:'flex',gap:'24px'}}>
          <Link to="/" style={{color:isActive('/')?'var(--accent)':'var(--text-primary)',textDecoration:'none',fontWeight:'500',transition:'color 0.2s'}}>Home</Link>
          <Link to="/shop" style={{color:isActive('/shop')?'var(--accent)':'var(--text-primary)',textDecoration:'none',fontWeight:'500',transition:'color 0.2s'}}>Shop</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
