import React from "react";
import Header from './Header';
import {useSiteMotion} from '../useSiteMotion';
function CursorGlow(){return <div className="cursor-glow"/>}
export default function Layout({children}){
  useSiteMotion();
  return <><CursorGlow/><Header/><main>{children}</main><footer><div className="footer-grid"><div><div className="brand footer-brand"><img src="src/logo.png"/></div><p>حلول أمن وحراسة مصممة للمواقع التي لا تقبل المخاطرة.</p></div><div><span className="foot-title">المكتب</span><p>التجمع الخامس، القاهرة الجديدة<br/>القاهرة، مصر</p></div><div><span className="foot-title">تواصل</span><p>19024<br/>info@eagles-security.com</p></div><div><span className="foot-title">ساعات التشغيل</span><p>24/7<br/>غرفة عمليات مركزية</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Eagles Security</span><span>❤️ made by reCreation with love</span></div></footer></>
}
