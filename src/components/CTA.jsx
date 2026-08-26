import React from "react";
import {ArrowUpLeft} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import SectionLabel from './SectionLabel';
export default function CTA({dark=false}){
  const navigate=useNavigate();
  return <section className={dark?'cta dark':'cta'}><div className="cta-inner"><div><SectionLabel>تحدث معنا</SectionLabel><h2 className="reveal">جاهزون لحماية<br/><em>مساحتك القادمة.</em></h2></div><button className="round-cta magnetic" onClick={()=>navigate('/contact')}>ابدأ المحادثة <ArrowUpLeft/></button></div></section>
}
