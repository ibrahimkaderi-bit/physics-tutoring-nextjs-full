import "./globals.css";
export const metadata = { title: "فيزياء ببساطة مع إبراهيم بني بكّار", description: "دروس خصوصية فيزياء للمرحلة الثانوية — حضوري في أبوظبي أو أونلاين." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ar" dir="rtl"><body className="min-h-screen bg-gradient-to-br from-sky-900 via-slate-900 to-gray-800 text-white">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet" />
    <style>{`body{font-family: Tajawal, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;}`}</style>
    {children}
  </body></html>);
}