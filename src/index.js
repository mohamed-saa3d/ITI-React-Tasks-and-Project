// نقطة البداية + ربط React بالـ HTML
// يتم استيراد React و ReactDOM لإنشاء التطبيق وعرضه في المتصفح. يتم استيراد ملف CSS لتنسيق التطبيق، واستيراد المكون الرئيسي App الذي يحتوي على محتوى التطبيق. يتم إنشاء جذر للتطبيق باستخدام ReactDOM.createRoot وربطه بعنصر HTML له id "root". ثم يتم عرض المكون App داخل هذا الجذر باستخدام root.render. في النهاية، يتم استدعاء reportWebVitals لقياس أداء التطبيق إذا كان ذلك مطلوبًا.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// بستدعي جزء من الريل دوم وهو عنصر الروت وجواه بحط التغيرات اللي عايزها تظهر في المتصفح وهي ناتج مقارنه الفرشوال دوم القديم بالجديد وبعرض التغيرات فقط في المتصفح
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Virtual DOM */}
<h3>Welcome to React</h3>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
