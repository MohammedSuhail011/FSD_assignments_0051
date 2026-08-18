import React, { useState } from 'react';

function ProductCard({ image, name, price, rating }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="glass" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{width:'100%',maxWidth:'280px',borderRadius:'16px',overflow:'hidden',transition:'transform 0.3s ease, box-shadow 0.3s ease',transform:isHovered?'translateY(-8px)':'translateY(0)',boxShadow:isHovered?'0 20px 40px rgba(0,0,0,0.4)':'0 10px 30px rgba(0,0,0,0.2)'}}>
      <div style={{position:'relative',overflow:'hidden'}}>
        <img src={image} alt={name} style={{width:'100%',height:'220px',objectFit:'cover',transition:'transform 0.5s ease',transform:isHovered?'scale(1.05)':'scale(1)'}} />
        <div style={{position:'absolute',top:'12px',right:'12px',background:'rgba(0,0,0,0.6)',backdropFilter:'blur(4px)',padding:'4px 8px',borderRadius:'20px',fontSize:'0.8rem',fontWeight:'600',display:'flex',alignItems:'center',gap:'4px'}}>⭐ {rating}</div>
      </div>
      <div style={{padding:'20px'}}>
        <h3 style={{margin:'0 0 8px',fontSize:'1.1rem',fontWeight:'600'}}>{name}</h3>
        <p style={{margin:'0 0 16px',color:'var(--text-secondary)',fontSize:'0.9rem'}}>Premium quality audio experience.</p>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <p style={{margin:0,fontWeight:'700',fontSize:'1.25rem',color:'var(--accent)'}}>₹{price}</p>
          <button style={{padding:'8px 16px',border:'none',borderRadius:'8px',background:'var(--accent)',color:'#fff',fontWeight:'600',cursor:'pointer',transition:'background 0.2s'}} onMouseEnter={(e)=>e.target.style.background='var(--accent-hover)'} onMouseLeave={(e)=>e.target.style.background='var(--accent)'} onClick={()=>alert(`${name} added to cart!`)}>Add</button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
