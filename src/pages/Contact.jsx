import React from "react";
import {Phone,Mail,MapPin,ArrowUpLeft} from 'lucide-react';
import {img} from '../siteData';
import CinematicLayers from '../components/CinematicLayers';
import HeroMeta from '../components/HeroMeta';
import SectionLabel from '../components/SectionLabel';

export default function Contact(){
 const submit=e=>{e.preventDefault(); alert('تم استلام طلبك. سيتواصل معك فريق Eagles قريبًا.');};
 return <>
<section className="contact-hero cinematic-contact"><div className="contact-bg parallax" style={{backgroundImage:`url(${img.cameras})`}}></div><div className="contact-overlay"></div><CinematicLayers/><HeroMeta/><div className="contact-copy"><SectionLabel>تواصل معنا</SectionLabel><h1 className="reveal">خلينا نأمّن<br/><em>المكان صح.</em></h1><p className="reveal">أرسل تفاصيل المشروع، وسنرتب معاينة مبدئية لفهم احتياجاتك الأمنية وتقديم تصور مناسب.</p><div className="contact-details"><a href="#" className="reveal"><Phone/><span>19024<small>هاتف</small></span></a><a href="mailto:info@eagles-security.com" className="reveal"><Mail/><span>info@eagles-security.com<small>البريد الإلكتروني</small></span></a><div className="reveal"><MapPin/><span>التجمع الخامس، القاهرة الجديدة<small>المقر الرئيسي</small></span></div></div></div><div className="contact-card reveal"><div className="card-top"><span>01 / PROJECT BRIEF</span><span>EAGLES</span></div><h2>طلب معاينة</h2><form onSubmit={submit}><label>الاسم<input required placeholder="اسمك بالكامل"/></label><label>الشركة<input placeholder="اسم الشركة / المشروع"/></label><label>نوع المشروع<select><option>مبنى إداري</option><option>كمباوند سكني</option><option>قرية / فندق</option><option>فعالية</option><option>أخرى</option></select></label><label>التفاصيل<textarea rows="4" placeholder="احكِ لنا عن الموقع، المساحة، وعدد نقاط الدخول..."></textarea></label><button className="primary magnetic" type="submit">إرسال الطلب <ArrowUpLeft/></button></form></div></section>
<section className="map-strip" aria-label="موقع Eagles في التجمع الخامس">
  <div className="map-art map-live reveal">
    <iframe
      className="map-frame"
      title="Eagles Security — Fifth Settlement, New Cairo"
      src="https://www.openstreetmap.org/export/embed.html?bbox=31.3910%2C29.9780%2C31.4635%2C30.0295&amp;layer=mapnik&amp;marker=30.00392%2C31.42737"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <div className="map-cinema-overlay" aria-hidden="true"></div>
    <div className="map-grid-overlay" aria-hidden="true"></div>
    <div className="map-location-card">
      <span className="map-location-kicker">HEADQUARTERS / CAIRO</span>
      <strong>التجمع الخامس، القاهرة الجديدة</strong>
      <a
        className="map-directions magnetic"
        href="https://www.openstreetmap.org/?mlat=30.00392&amp;mlon=31.42737#map=14/30.00392/31.42737"
        target="_blank"
        rel="noreferrer"
      >
        فتح الخريطة <ArrowUpLeft/>
      </a>
    </div>
    <div className="map-label">30.00392° N / 31.42737° E</div>
  </div>
</section></>}
