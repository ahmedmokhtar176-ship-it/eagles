import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
gsap.registerPlugin(ScrollTrigger);

export function useSiteMotion(){
 const loc=useLocation();
 useEffect(()=>{
   window.scrollTo(0,0);
   const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   const lenis=new Lenis({duration:1.15,smoothWheel:true,smoothTouch:false});
   let rafId;
   const raf=t=>{lenis.raf(t);rafId=requestAnimationFrame(raf)};
   rafId=requestAnimationFrame(raf);

   const ctx=gsap.context(()=>{
     const revealItems=gsap.utils.toArray('.reveal');
     revealItems.forEach((el,index)=>{
       const rect=el.getBoundingClientRect();
       const absoluteTop=rect.top+window.scrollY;
       const pageProgress=Math.min(1,Math.max(0,absoluteTop/Math.max(document.documentElement.scrollHeight-window.innerHeight,1)));
       const direction=index%4;
       const travel=36+pageProgress*72;
       const from={opacity:0,filter:'blur(10px)',scale:.985};
       if(direction===0) from.y=travel;
       if(direction===1) from.x=travel*.72;
       if(direction===2) from.y=-travel*.65;
       if(direction===3) from.x=-travel*.72;
       if(reduceMotion){gsap.set(el,{opacity:1,x:0,y:0,scale:1,filter:'blur(0px)'});return;}
       gsap.fromTo(el,from,{opacity:1,x:0,y:0,scale:1,filter:'blur(0px)',duration:.8+pageProgress*.65,delay:Math.min((index%4)*.045,.14),ease:'power3.out',clearProps:'filter',scrollTrigger:{trigger:el,start:'top bottom',once:true,invalidateOnRefresh:true}});
     });

     gsap.utils.toArray('.parallax').forEach((el,index)=>{
       if(reduceMotion) return;
       const rect=el.getBoundingClientRect();
       const absoluteTop=rect.top+window.scrollY;
       const pageProgress=Math.min(1,Math.max(0,absoluteTop/Math.max(document.documentElement.scrollHeight-window.innerHeight,1)));
       const amount=10+pageProgress*12+(index%2)*3;
       gsap.fromTo(el,{yPercent:amount*.35,scale:1.04},{yPercent:-amount,scale:1.09,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:.8,invalidateOnRefresh:true}});
     });

     gsap.utils.toArray('.line-fill').forEach(el=>gsap.fromTo(el,{scaleX:0,transformOrigin:'right'},{scaleX:1,duration:1.1,ease:'power3.inOut',scrollTrigger:{trigger:el,start:'top bottom',once:true}}));
     gsap.utils.toArray('.float-card').forEach((el,i)=>{if(!reduceMotion) gsap.to(el,{y:i%2?18:-14,duration:2.4+i*.25,repeat:-1,yoyo:true,ease:'sine.inOut'})});
     gsap.utils.toArray('.magnetic').forEach(el=>{
       const move=e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.12;const y=(e.clientY-r.top-r.height/2)*.12;gsap.to(el,{x,y,duration:.35,ease:'power3.out'})};
       const leave=()=>gsap.to(el,{x:0,y:0,duration:.6,ease:'elastic.out(1,.5)'});
       el.addEventListener('mousemove',move);el.addEventListener('mouseleave',leave);
     });
   },document.body);
   lenis.on('scroll',ScrollTrigger.update);
   ScrollTrigger.refresh();
   return ()=>{cancelAnimationFrame(rafId);ctx.revert();lenis.destroy()};
 },[loc.pathname]);
}
