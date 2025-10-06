// tailwind.config.js
module.exports = {
  // تفعيل الوضع الداكن (اختياري)
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // الألوان المخصصة من الهوية البصرية
        'charcoal': '#1C1C1C', // الأسود الفحمي للخلفية
        'gold-primary': '#D4AF37', // الذهبي الفاخر - للعناوين والأزرار الرئيسية
        'gold-light': '#E8A743', // للتوهج الخفيف
        'emerald-success': '#3BB273', // الأخضر الزمردي للنجاح
        'alert-orange': '#E89E4A', // البرتقالي الفاخر للتنبيه (لعداد اللحظة الأخيرة)
      },
      fontFamily: {
        // تعريف الخط (يفترض أن الخط Cairo تم استيراده عبر CSS خارجي)
        sans: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        // تأثير التوهج الذهبي (Golden Glow)
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.7)', 
      }
    },
  },
  plugins: [],
}