import React from 'react';
import ProductCard from '../components/ProductCard';

function Shop() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "1499", rating: "4.5", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, name: "Smart Watch", price: "2999", rating: "4.8", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 3, name: "Bluetooth Speaker", price: "1999", rating: "4.6", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80" },
    { id: 4, name: "Mechanical Keyboard", price: "3499", rating: "4.9", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" }
  ];
  return (<div className="animate-fade-in container" style={{padding:'60px 24px'}}><div style={{marginBottom:'48px'}}><h1 style={{fontSize:'2.5rem',fontWeight:'700',marginBottom:'12px'}}>All Products</h1><p style={{color:'var(--text-secondary)',fontSize:'1.1rem'}}>Browse our latest arrivals and premium gadgets.</p></div><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))',gap:'32px'}}>{products.map(product=><ProductCard key={product.id} {...product} />)}</div></div>);
}
export default Shop;
