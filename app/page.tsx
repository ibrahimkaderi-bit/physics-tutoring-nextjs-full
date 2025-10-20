'use client'
import { motion } from 'framer-motion'

export default function Page() {
  const waNumberIntl = "971509632593";
  const waMsg = encodeURIComponent("مرحبًا أستاذ إبراهيم، أود الاستفسار عن الدروس الخصوصية في الفيزياء (حضوري/أونلاين).");
  const openWhatsApp = () => { window.open(`https://wa.me/${waNumberIntl}?text=${waMsg}`, "_blank"); };

  const Card = ({ children }: { children: React.ReactNode }) => (<div className="bg-slate-800/70 border border-slate-700 shadow-xl rounded-2xl">{children}</div>);
  const Button = ({ children, onClick, className }: any) => (<button onClick={onClick} className={`rounded-2xl px-6 py-3 font-medium ${className||""}`}>{children}</button>);

  return (<div className="px-6 py-8 max-w-6xl mx-auto">
    <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-sky-500/20 grid place-items-center text-2xl">⚛️</div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">فيزياء ببساطة مع إبراهيم بني بكّار</h1>
      </div>
      <p className="max-w-2xl text-slate-200/90 text-lg md:text-xl">دروس خصوصية للمرحلة الثانوية — حضوري في أبوظبي أو أونلاين. شرح ممتع ومبسط، وتمارين مركزة على مسائل <span className="font-semibold">الامتحانات الوزارية</span>.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600 px-6 py-4">راسلني على واتساب</Button>
        <a href="#booking" className="inline-flex items-center rounded-2xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-base font-medium">احجز موعد تجربة مجانية</a>
      </div>
      <div className="text-sm text-slate-300">أبوظبي – الإمارات العربية المتحدة · واتساب/اتصال: <span className="font-bold text-blue-300">0509632593</span></div>
    </motion.div>

    <main className="pb-20">
      <section id="services" className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          { title: "💡 دروس فردية", body: "جلسات مصممة حسب احتياجات الطالب مع خطة تعلم أسبوعية ومهام قصيرة.", cta: "احجز الآن" },
          { title: "👨‍🏫 دروس جماعية", body: "مجموعات صغيرة (3–5 طلاب) لتعزيز التفاعل والمنافسة الودية.", cta: "انضم للمجموعة" },
          { title: "🧠 مراجعات امتحانات", body: "مراجعات مركزة لمسائل الامتحانات الوزارية مع بنك أسئلة وحلول نموذجية.", cta: "ابدأ المراجعة" },
        ].map((card, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 250 }}>
            <Card><div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
              <p className="opacity-85 mb-5 leading-relaxed">{card.body}</p>
              <Button onClick={openWhatsApp} className="bg-blue-600 hover:bg-blue-700">{card.cta}</Button>
            </div></Card>
          </motion.div>
        ))}
      </section>

      <section id="pricing" className="mt-12">
        <h3 className="text-3xl font-bold mb-6 text-center">الباقات والأسعار</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "أونلاين فردي", features: ["حصة 60 دقيقة عبر Google Meet/Zoom","واجب قصير + ملاحظات صوتية","مرونة في المواعيد"] },
            { name: "حضوري فردي (أبوظبي)", features: ["زيارة منزلية داخل أبوظبي","تجارب مبسطة وسبورة رقمية","خطة متابعة أسبوعية"] },
            { name: "مجموعة صغيرة", features: ["3–5 طلاب","سعر مخفّض لكل طالب","مسابقات وتمارين جماعية"] },
          ].map((p, i) => (
            <Card key={i}><div className="p-6">
              <div className="flex items-baseline justify-between">
                <h4 className="text-2xl font-semibold">{p.name}</h4>
                <span className="text-xl font-bold text-blue-300">اسأل عن السعر</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-200/90 list-disc pr-5">
                {p.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
              <div className="mt-6"><Button onClick={openWhatsApp} className="w-full bg-blue-600 hover:bg-blue-700">تواصل الآن</Button></div>
            </div></Card>
          ))}
        </div>
      </section>

      <section id="booking" className="mt-14">
        <h3 className="text-3xl font-bold mb-6 text-center">احجز تجربة مجانية 15 دقيقة</h3>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card><div className="p-6">
            <form onSubmit={(e)=>{e.preventDefault();openWhatsApp();}} className="space-y-4">
              <div><label htmlFor="name" className="block mb-1">اسم الطالب</label><input id="name" placeholder="اكتب اسم الطالب" className="w-full rounded-xl mt-2 bg-slate-900/60 border border-slate-700 px-3 py-2" required /></div>
              <div><label htmlFor="grade" className="block mb-1">الصف الدراسي</label><input id="grade" placeholder="مثال: الصف 10/11/12" className="w-full rounded-xl mt-2 bg-slate-900/60 border border-slate-700 px-3 py-2" required /></div>
              <div><label htmlFor="pref" className="block mb-1">نوع الدرس</label><input id="pref" placeholder="حضوري/أونلاين/مجموعة" className="w-full rounded-xl mt-2 bg-slate-900/60 border border-slate-700 px-3 py-2" /></div>
              <div><label htmlFor="note" className="block mb-1">ملاحظات</label><textarea id="note" placeholder="اذكر المفاهيم التي ترغب بمراجعتها أو مواعيدك المناسبة" className="w-full min-h-[120px] rounded-xl mt-2 bg-slate-900/60 border border-slate-700 px-3 py-2" /></div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">أرسل الطلب عبر واتساب</Button>
            </form>
          </div></Card>

          <Card><div className="p-6 space-y-3">
            <h4 className="text-xl font-semibold">المواعيد المقترحة</h4>
            <p className="text-slate-300">اختر فترة مناسبة وسأتواصل لتأكيد الموعد:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["السبت مساءً","الأحد مساءً","الاثنين مساءً","الثلاثاء مساءً","الأربعاء مساءً","الخميس مساءً"].map(slot => (
                <button key={slot} onClick={openWhatsApp} className="rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2 hover:bg-slate-900">{slot}</button>
              ))}
            </div>
            <a href="https://calendly.com/ibrahim-kaderi" target="_blank" rel="noopener noreferrer" className="inline-block rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white" title="احجز موعدك عبر Calendly">احجز عبر Calendly</a>
          </div></Card>
        </div>
      </section>

      <section id="testimonials" className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-center">آراء أولياء الأمور والطلاب</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "تحسن مستوى ابني بشكل ملحوظ خلال شهر واحد فقط، الشرح واضح وممتع والمتابعة دقيقة.", name: "ولي أمر – الصف 12" },
            { quote: "أفضل مدرس فيزياء تعاملت معه، يربط الأفكار بحياة الطالب ويعطي نماذج تشبه الامتحان.", name: "طالبة – الصف 11" },
            { quote: "الدروس الجماعية كانت مفيدة جدًا وزادت ثقتي في الحل السريع والمنظم.", name: "طالب – الصف 10" },
          ].map((t, i) => (
            <Card key={i}><div className="p-6">
              <p className="leading-8">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-300">{t.name}</div>
            </div></Card>
          ))}
        </div>
      </section>

      <section id="faq" className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-center">الأسئلة الشائعة</h3>
        <div className="space-y-3 max-w-3xl mx-auto">
          {[
            { q: "هل توجد حصة تعريفية مجانية؟", a: "نعم، جلسة تعريفية 15 دقيقة للتقييم وتحديد الخطة الأنسب للطالب." },
            { q: "هل توفر اوراق عمل وبنوك أسئلة؟", a: "نعم، يتم تزويد الطالب بأوراق عمل وتمارين شبيهة بالامتحانات الوزارية." },
            { q: "ما هي المناطق المغطاة حضوريًا؟", a: "أبوظبي وضواحيها، ويمكن التنسيق لباقي المناطق وفق التوفر." },
          ].map((f, i) => (
            <details key={i} className="bg-slate-800/70 border border-slate-700 rounded-2xl p-4">
              <summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
              <p className="mt-2 text-slate-200/90 leading-8">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>

    <footer className="border-t border-slate-800/60 bg-slate-900/40 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <div className="font-bold text-lg">⚛️ فيزياء ببساطة</div>
          <div className="text-slate-300 text-sm">مدرس فيزياء للمرحلة الثانوية — إبراهيم بني بكّار</div>
        </div>
        <div className="text-sm text-slate-300">
          أبوظبي – الإمارات العربية المتحدة
          <br /> واتساب/اتصال: <span className="font-bold text-blue-300">0509632593</span>
        </div>
        <div className="flex gap-3 justify-start md:justify-end">
          <Button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600">تواصل واتساب</Button>
          <a href="mailto:ibrahim.kaderi@gmail.com" className="rounded-2xl bg-slate-800 border border-slate-700 px-4 py-2 hover:bg-slate-700">راسلني عبر البريد</a>
        </div>
      </div>
    </footer>
  </div>);
}