import React from "react";
import {ShieldCheck,CarFront,Radio,Eye,Crosshair,LockKeyhole,ArrowUpLeft} from 'lucide-react';
import {img} from '../siteData';
import CinematicLayers from '../components/CinematicLayers';
import HeroMeta from '../components/HeroMeta';
import SectionLabel from '../components/SectionLabel';
import CTA from '../components/CTA';

export default function Services(){
 const services=[
  ['الحراسة الثابتة','فرق أمن مدربة لتأمين البوابات، المداخل، ومناطق الخدمة مع نظام ورديات وإشراف مستمر.',ShieldCheck],
  ['الدوريات الأمنية','دوريات راجلة ومتحركة مصممة حسب خريطة المخاطر وساعات الذروة ونقاط الحساسية.',CarFront],
  ['غرفة العمليات','متابعة على مدار الساعة، تقارير فورية، escalation protocol وربط كامل بين الموقع والإدارة.',Radio],
  ['المراقبة بالكاميرات','تشغيل ومتابعة منظومات CCTV وتحليل نقاط الرؤية الحرجة وتقليل blind spots.',Eye],
  ['تأمين الفعاليات','خطة دخول وخروج، crowd control، screening، وإدارة مواقف السيارات للفعاليات الكبيرة.',Crosshair],
  ['إدارة المخاطر','تقييم للموقع، سيناريوهات طوارئ، خطط إخلاء واستجابة، وتدريب دوري للفريق.',LockKeyhole]
 ];
 return <>
<section className="page-hero"><div className="page-hero-bg parallax" style={{backgroundImage:`url(${img.control})`}}></div><div className="hero-overlay"></div><CinematicLayers/><HeroMeta/><div className="page-hero-side reveal"><span>SERVICES / 01</span><span>CONTROLLED SECURITY</span></div><div className="page-hero-content"><SectionLabel>خدماتنا</SectionLabel><h1 className="reveal">منظومة أمن<br/><em>بلا ثغرات.</em></h1><p className="reveal">كل خدمة جزء من نظام واحد. الهدف ليس وجود حارس فقط، بل بناء بيئة يصعب اختراقها وتستجيب بسرعة عند الحاجة.</p></div></section>
<section className="services-grid section-pad"><div className="services-intro reveal"><SectionLabel>What we do</SectionLabel><h2 className="reveal">خدمات متكاملة<br/><span>بمعايير تشغيلية.</span></h2></div><div className="service-list">{services.map(([title,text,Icon],i)=><div className="service-row reveal" key={title}><span className="service-num">0{i+1}</span><Icon className="service-icon"/><div><h3>{title}</h3><p>{text}</p></div><ArrowUpLeft className="row-arrow"/></div>)}</div></section>
<section className="process section-pad"><SectionLabel>كيف نعمل</SectionLabel><div className="process-head"><h2 className="reveal">من أول زيارة<br/><em>إلى أول تقرير.</em></h2><p className="reveal">نحوّل الأمن إلى عملية قابلة للقياس: نحدد، نخطط، ننفذ، ثم نراجع.</p></div><div className="process-track reveal-group">{[['01','Survey','معاينة وتحليل الموقع'],['02','Design','تشكيل خطة الحماية'],['03','Deploy','تجهيز ونشر الفريق'],['04','Monitor','متابعة وتحسين مستمر']].map(s=><div className="process-step reveal" key={s[0]}><span>{s[0]}</span><b>{s[1]}</b><small>{s[2]}</small><div className="line-fill"></div></div>)}</div></section>
<CTA dark/>
</>}
