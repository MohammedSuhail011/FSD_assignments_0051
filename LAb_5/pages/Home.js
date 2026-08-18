import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="animate-fade-in" style={{ padding: '80px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{display:'inline-block',padding:'8px 16px',borderRadius:'20px',background:'rgba(59, 130, 246, 0.1)',color:'var(--accent)',fontWeight:'600',fontSize:'0.875rem',marginBottom:'24px'}}>✨ Welcome to the Future of Shopping</div>
        <h1 style={{fontSize:'4rem',fontWeight:'800',letterSpacing:'-1.5px',lineHeight:'1.1',marginBottom:'24px',background:'linear-gradient(to right, #fff, #94a3b8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Elevate Your <br /> Everyday Experience.</h1>
        <p style={{fontSize:'1.25rem',color:'var(--text-secondary)',maxWidth:'600px',margin:'0 auto 40px',lineHeight:'1.8'}}>Discover our curated collection of premium products designed to integrate seamlessly into your lifestyle. Uncompromised quality meets stunning design.</p>
        <div style={{display:'flex',justifyContent:'center',gap:'16px'}}>
          <Link to="/shop" style={{padding:'16px 32px',background:'var(--accent)',color:'#fff',textDecoration:'none',borderRadius:'12px',fontWeight:'600',fontSize:'1.1rem',transition:'transform 0.2s, background 0.2s',boxShadow:'0 10px 20px rgba(59, 130, 246, 0.3)'}}>Explore Collection</Link>
          <button style={{padding:'16px 32px',background:'var(--glass-bg)',border:'1px solid var(--border)',color:'var(--text-primary)',borderRadius:'12px',fontWeight:'600',fontSize:'1.1rem',cursor:'pointer'}}>Learn More</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:'24px',marginTop:'80px',textAlign:'left'}}>
          {[{title:'Free Shipping',desc:'On all orders over ₹5000.'},{title:'24/7 Support',desc:'Round the clock assistance.'},{title:'Secure Returns',desc:'30-day money-back guarantee.'}].map((feature,idx)=>(<div key={idx} className="glass" style={{padding:'32px',borderRadius:'16px'}}><div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(59, 130, 246, 0.2)',marginBottom:'16px'}} /><h3 style={{fontSize:'1.25rem',marginBottom:'8px'}}>{feature.title}</h3><p style={{color:'var(--text-secondary)'}}>{feature.desc}</p></div>))}
        </div>
      </div>
    </div>
  );
}
export default Home;
