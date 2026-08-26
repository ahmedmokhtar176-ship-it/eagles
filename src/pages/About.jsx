import React from "react";
import {Clock3,Eye,ShieldCheck} from 'lucide-react';
import {img} from '../siteData';
import CinematicLayers from '../components/CinematicLayers';
import HeroMeta from '../components/HeroMeta';
import SectionLabel from '../components/SectionLabel';
import CTA from '../components/CTA';

export default function About(){return <>
<section className="page-hero page-hero-short"><div className="page-hero-bg parallax" style={{backgroundImage:`url(${img.team})`}}></div><div className="hero-overlay"></div><CinematicLayers/><HeroMeta/><div className="page-hero-side reveal"><span>ABOUT / 02</span><span>EAGLES SECURITY</span></div><div className="page-hero-content"><SectionLabel>عن Eagles</SectionLabel><h1 className="reveal">خبرة هادئة.<br/><em>حضور قوي.</em></h1><p className="reveal">شركة أمن وحراسة مصرية مقرها التجمع الخامس، متخصصة في حماية الأصول والمواقع ذات المتطلبات التشغيلية العالية.</p></div></section>
<section className="story section-pad"><div className="story-big reveal"><span>2012</span><h2 className="reveal">بدأنا بفكرة بسيطة:<br/><em>الأمن يجب أن يُدار.</em></h2></div><div className="story-copy"><p className="reveal">تطورت Eagles من فريق صغير لخدمة مجموعة من المواقع إلى منظومة أمن وتشغيل تخدم مشروعات في القاهرة والقري السياحية. ما لم يتغير هو نفس المبدأ: الانضباط أهم من الاستعراض.</p><p className="reveal">نؤمن بأن أفضل فريق أمني هو الفريق الذي يفهم المكان، يحترم العميل، ويعرف متى يتدخل ومتى يراقب.</p><div className="values"><div className="value reveal"><Clock3/><b>الانضباط</b><span>إجراءات واضحة وتنفيذ ثابت.</span></div><div className="value reveal"><Eye/><b>اليقظة</b><span>ملاحظة مبكرة قبل التصعيد.</span></div><div className="value reveal"><ShieldCheck/><b>المسؤولية</b><span>كل موقع له owner واضح.</span></div></div></div></section>
<section className="about-image section-pad"><div className="about-panel reveal"><img src={img.villa} alt="مشروع سكني" className="parallax"/><div className="panel-note"><span>01</span><b>RESIDENTIAL<br/>SECURITY</b><small>New Cairo / North Coast</small></div></div></section>
<section className="numbers dark-band"><div className="section-pad"><SectionLabel>أرقامنا</SectionLabel><div className="big-numbers"><div className="reveal"><strong>14</strong><span>عامًا من الخبرة</span></div><div className="reveal"><strong>45+</strong><span>موقعًا نشطًا</span></div><div className="reveal"><strong>11</strong><span>قطاعًا ومجالًا</span></div><div className="reveal"><strong>0</strong><span>حلول مؤقتة</span></div></div></div></section>
<CTA/>
</>}
