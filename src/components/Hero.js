import React from 'react'
import '../index.css';
import logo from '../logo.svg';

const Hero = () => (
    <main className='main-hero'>
        <div className='hero-content'>
            <h1 className='text-title'>BUAT DAN LUNCURKAN APLIKASI MU <br /><span>SEKARANG</span></h1>
            <p className='text-large'>Fireship.io is a gateway drug for developers who want to build awesome web & mobile apps.</p>
            <p className='hero-button'>
                <a href="#" className='button red'>KURSUS GRATIS</a>
                <a href="#" className='button blue'>KURSUS PREMIUM</a>
            </p>
        </div>
        <div className='hero-image'>
            <img src={logo} alt="" className='Hero-logo' />
        </div>
    </main>

);

export default Hero;