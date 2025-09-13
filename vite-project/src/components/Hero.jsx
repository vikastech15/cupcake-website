import React, { useLayoutEffect, useRef } from 'react';
import './Hero.css';
import Navbar from './Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lenis from '../utils/ lenis-init';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const heroRef = useRef(null);
  const hero1Ref = useRef(null);
  const section1Ref = useRef(null);
  const section3Ref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    
      const tl = gsap.timeline({ delay: 0.3 });
  
      tl.from('.hero-left h1', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from('.hero-left p', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from('#cta-btn', {
        x: -100,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
  
  
    }, heroRef);
  
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const h1 = document.querySelector('.section1-text h1');
      const p = document.querySelector('.section1-text p');
      const section1 = section1Ref.current;
      const section2 = document.querySelector('.section2');
      const section3 = document.querySelector('.section3');
  
      if (!h1 || !p || !section1 || !section2 || !section3) return;
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section1,
          start: 'top center',
          endTrigger: section3,
          end: 'top center',
          scrub: true,
        },
      });
  
      tl.to(hero1Ref.current, {
        x: -460,
        y: 730,
        scale: 0.38,
        rotation: -3,
        ease: 'power2.out',
      });
  
      tl.to(hero1Ref.current, {
        x: -810,
        y: 1340,
        scale: 2.1,
        rotation: -30,
        ease: 'power2.inOut',
      });
  
      tl.to(hero1Ref.current, {
        x: -380,
        y: 2040, 
        scale: 0.8,
        rotation: -0,
        height: 500,       
  width: 460,
  zIndex: 20, 
        ease: 'power2.Out',
        
      });
  
      gsap.from(h1, {
        scrollTrigger: {
          trigger: section1,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      });
  
      gsap.from(p, {
        scrollTrigger: {
          trigger: section1,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });
  
      ScrollTrigger.refresh();
    }, heroRef);
  
    return () => ctx.revert();
  }, []);
  
  
  useLayoutEffect(() => {
    const lemonImg = document.querySelector('.lemon-img');
    const blueberryImg = document.querySelector('.blueberry-img');
    const section3 = document.querySelector('.section3');
  
    if (!lemonImg || !blueberryImg || !section3) return;
  
    gsap.fromTo(lemonImg, 
      { rotation: -50 }, 
      {
        rotation: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section3,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  
    gsap.fromTo(blueberryImg, 
      { rotation: 50 }, 
      {
        rotation: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section3,
          start: 'top 70%', 
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  

  return (
    <>
    <div className="hero" ref={heroRef}>
      <Navbar />
      <div className="heroq">
        <div className="hero-left">
          <h1>Delight in Every Bite</h1>
          <p>
            Discover the softest, most whimsical cupcakes made with love and pastel dreams.<br />
            Each bite is a swirl of joy, handcrafted with delicate flavors and a touch of magic.
          </p>
          <div id="cta-btn">Explore Cupcakes</div>
        </div>
        <div className="hero-right">
          <img src="/images/hero.png" alt="Cupcake Hero"  className='hero2'/>
          <img src="./images/hero1.png" alt=""  className='hero1'   ref={hero1Ref}/>
        </div>
      </div>
    </div>
    <div className="section1" ref={section1Ref}>
  <div className="section1-text">
    <h1>Fresh From the Oven</h1>
    <p>
      Explore our delightful selection of pastel cupcakes, creamy frostings, and charming treats — all nestled on dreamy bakery shelves.
    </p>
  </div>
  <div className="section1-image">
    <img src="/images/section1.png" alt="Bakery Shelf" />
  </div>
</div>
<div className="section2">
  <div className="section2-img">
    <img src="/images/bg1.png" alt="Peach Cupcake" />
  </div>
  <div className="section2-text">
    <h1>About Our Peach Cupcake</h1>
    <p>
      Our signature peach cupcake is a soft, pastel dream — made with fresh peach purée,
      fluffy sponge, and whipped vanilla frosting. It's a perfect balance of fruitiness,
      sweetness, and charm. Try our seasonal specials topped with sugar flowers and edible glitter!
    </p>
    <button>Buy Our Peach Cake</button>
  </div>
</div>
<div className="section3">
  <div className="section3-text">
    <h1>Pick your sweetest flavor!</h1>
    <p>Mine’s lemon — zesty, soft, and always a mood. </p>
  </div>

  <div className="cupcake-cards">
    <div className="cupcake-card lemon">
      <img src="/images/lemon.png" alt="Lemon Cupcake" className="lemon-img"/>
      <h3>Lemon Delight</h3>
      <p>Lemon zest, sunshine-fresh, and perfectly tangy! </p>
    </div>

    <div className="cupcake-card peach">
      <h3>Peach Blossom</h3>
      <p>Soft peachy swirl, dreamy & sweet like summer! </p>
    </div>


  <div className="cupcake-card blueberry">
      <img src="/images/blue.png" alt="Blueberry Cupcake" className="blueberry-img"/>
      <h3>Blueberry Bliss</h3>
      <p>Berry burst with a soft vanilla cloud! </p>
    </div>
  </div>
</div>


    </>
  );
};

export default Hero;
