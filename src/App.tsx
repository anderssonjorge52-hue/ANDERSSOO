import { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Gift, 
  Smartphone, 
  Printer, 
  Edit3, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  XCircle, 
  ArrowRight,
  Star,
  Users,
  DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-semibold text-slate-800"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-indigo-600" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const CHECKOUT_URL = 'https://pay.cakto.com.br/37s7mjh_813166';
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Simple countdown to end of day
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Urgency Bar */}
      <div className="bg-rose-600 py-2 text-center text-xs font-bold tracking-widest text-white uppercase sm:text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-4">
          <Zap className="h-4 w-4 text-white animate-pulse" />
          <span>OFERTA ESPECIAL DISPONÍVEL APENAS HOJE — 25/03/2026</span>
          <div className="hidden sm:flex items-center gap-1 font-mono text-white/90">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Header/Nav removed */}

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1 text-sm font-bold text-white shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 fill-white" />
                <span>COMPRA 100% SEGURA E PROTEGIDA</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 font-display text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl max-w-4xl"
              >
                +500 Moldes de Lembrancinhas <span className="text-indigo-600">Personalizáveis</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10 max-w-2xl text-lg text-slate-600 sm:text-xl"
              >
                Para Editar no Canva e Imprimir em Casa. Crie sacolinhas, kits e personalizados profissionais em poucos minutos — mesmo sem saber design.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center gap-4"
              >
                <a 
                  href={CHECKOUT_URL}
                  className="group relative flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-5 text-xl font-black text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:-translate-y-1 active:scale-95"
                >
                  QUERO ACESSO IMEDIATO
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-indigo-600" />
                  Garantia de 7 dias ou seu dinheiro de volta
                </div>
              </motion.div>

              {/* Mockup Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16 w-full max-w-5xl rounded-3xl border border-stone-200 bg-white p-4 shadow-2xl"
              >
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-stone-100 relative group">
                  <img 
                    src="https://picsum.photos/seed/crafts/1200/675" 
                    alt="Preview dos moldes" 
                    className="h-full w-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 p-6 shadow-xl backdrop-blur-sm">
                      <Gift className="h-12 w-12 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Infinite Carousel Section */}
        <section className="bg-slate-50 py-16 overflow-hidden">
          <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              O QUE VOCÊ PODE FAZER
            </h2>
            <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col gap-8 overflow-x-hidden">
            {/* Row 1 */}
            <div className="relative flex">
              <motion.div
                className="flex gap-8 px-4"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[
                  "https://i.ibb.co/q3FWqygV/Whats-App-Image-2019-08-03-at-15-38-50.jpg",
                  "https://i.ibb.co/TDrHb6Ny/46440346-335203063938969-4715876229901713408-n-jpg.jpg",
                  "https://i.ibb.co/zWHYY5bD/46439106-257066271633430-8424552478221008896-n-jpg.jpg",
                  "https://i.ibb.co/gMpDksW0/menina-baby-shark-0007-N-veis-1-copiar-12-1.png",
                  // Duplicate for seamless loop
                  "https://i.ibb.co/q3FWqygV/Whats-App-Image-2019-08-03-at-15-38-50.jpg",
                  "https://i.ibb.co/TDrHb6Ny/46440346-335203063938969-4715876229901713408-n-jpg.jpg",
                  "https://i.ibb.co/zWHYY5bD/46439106-257066271633430-8424552478221008896-n-jpg.jpg",
                  "https://i.ibb.co/gMpDksW0/menina-baby-shark-0007-N-veis-1-copiar-12-1.png",
                ].map((src, index) => (
                  <div key={index} className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                    <img 
                      src={src} 
                      alt={`Exemplo de Lembrancinha ${index + 1}`} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="relative flex">
              <motion.div
                className="flex gap-8 px-4"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35,
                    ease: "linear",
                  },
                }}
              >
                {[
                  "https://i.ibb.co/HpNF1FHR/Whats-App-Image-2019-08-24-at-15-55-14-1-1.jpg",
                  "https://i.ibb.co/LDZxmbDJ/Save-Clip-App-654756651-17852402097687347-5524506261009578550-n.jpg",
                  "https://i.ibb.co/nspMRBZ7/ARQUIVO-1.jpg",
                  "https://i.ibb.co/TDrHb6Ny/46440346-335203063938969-4715876229901713408-n-jpg.jpg",
                  // Duplicate for seamless loop
                  "https://i.ibb.co/HpNF1FHR/Whats-App-Image-2019-08-24-at-15-55-14-1-1.jpg",
                  "https://i.ibb.co/LDZxmbDJ/Save-Clip-App-654756651-17852402097687347-5524506261009578550-n.jpg",
                  "https://i.ibb.co/nspMRBZ7/ARQUIVO-1.jpg",
                  "https://i.ibb.co/TDrHb6Ny/46440346-335203063938969-4715876229901713408-n-jpg.jpg",
                ].map((src, index) => (
                  <div key={index} className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                    <img 
                      src={src} 
                      alt={`Exemplo de Lembrancinha ${index + 8}`} 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Por que escolher nossos moldes?</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Clock, title: "Acesso Imediato", desc: "Receba tudo por e-mail logo após a confirmação da compra." },
                { icon: Smartphone, title: "Celular ou PC", desc: "Edite de onde quiser. Funciona perfeitamente em qualquer dispositivo." },
                { icon: Printer, title: "Pronto para Imprimir", desc: "Arquivos adaptados para papel A4 comum. Imprima em casa." },
                { icon: Edit3, title: "100% Editável", desc: "Mude cores, textos, imagens e temas diretamente no Canva." }
              ].map((benefit, i) => (
                <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you receive */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="mb-8 font-display text-3xl font-bold sm:text-4xl">O que você vai receber hoje?</h2>
                <div className="space-y-6">
                  {[
                    "+500 moldes de lembrancinhas variadas",
                    "Arquivos 100% editáveis no Canva",
                    "Diversos temas infantis populares",
                    "Modelos prontos para imprimir e montar",
                    "Suporte exclusivo para alunos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-indigo-100 p-1">
                        <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                      </div>
                      <p className="text-lg font-medium text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/party1/400/500" className="rounded-2xl shadow-lg" alt="Exemplo 1" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/party2/400/300" className="rounded-2xl shadow-lg" alt="Exemplo 2" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://picsum.photos/seed/party3/400/300" className="rounded-2xl shadow-lg" alt="Exemplo 3" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/party4/400/500" className="rounded-2xl shadow-lg" alt="Exemplo 4" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objection Handling */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">Você NÃO precisa:</h2>
              <p className="text-slate-400">Esqueça as dificuldades do passado.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { title: "Saber design", desc: "Os moldes já vêm com a estrutura profissional pronta." },
                { title: "Programas caros", desc: "Nada de Photoshop ou Corel. Use apenas o Canva gratuito." },
                { title: "Gastar com gráficas", desc: "Economize centenas de reais imprimindo você mesma." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <XCircle className="h-10 w-10 text-red-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Como funciona?</h2>
              <p className="mt-4 text-slate-600">Simples como 1, 2, 3...</p>
            </div>
            <div className="grid gap-12 md:grid-cols-4">
              {[
                { step: "01", title: "Acesse", desc: "Abra os moldes diretamente no seu Canva." },
                { step: "02", title: "Edite", desc: "Mude nome, idade ou o tema da festa." },
                { step: "03", title: "Imprima", desc: "Use sua impressora caseira em papel A4." },
                { step: "04", title: "Monte", desc: "Recorte, cole e pronto! Sua festa está linda." }
              ].map((item, i) => (
                <div key={i} className="relative text-center">
                  <div className="mb-6 inline-block text-6xl font-black text-slate-100">{item.step}</div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                  {i < 3 && <ArrowRight className="absolute top-1/4 -right-6 hidden h-6 w-6 text-slate-200 md:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Whom */}
        <section className="py-24 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="font-display text-3xl font-bold sm:text-4xl mb-8">Para quem é este material?</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Users, text: "Quem quer economizar em festas" },
                    { icon: Gift, text: "Quem deseja fazer personalizados em casa" },
                    { icon: DollarSign, text: "Quem quer começar a vender lembrancinhas" },
                    { icon: Printer, text: "Gráficas e papelarias que buscam agilidade" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                      <item.icon className="h-6 w-6 text-indigo-200" />
                      <span className="font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Promessa de Valor</h3>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  "Com esses moldes, você pode transformar uma simples folha A4 em produtos que podem ser vendidos por R$20 ou mais."
                </p>
                <div className="mt-8 border-t border-slate-100 pt-8">
                  <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Oportunidade de Renda</p>
                  <p className="mt-2 text-slate-500">Milhares de pessoas já estão faturando alto com papelaria personalizada usando nossos moldes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-slate-900 p-8 md:p-16 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-1 text-sm font-bold text-indigo-400 ring-1 bg-indigo-500/30">
                  <Gift className="h-4 w-4" />
                  <span>BÔNUS EXCLUSIVOS</span>
                </div>
                <h2 className="mb-12 font-display text-3xl font-bold sm:text-5xl">Ao adquirir hoje, você também recebe:</h2>
                <div className="grid gap-8 sm:grid-cols-3">
                  {[
                    { title: "+100 tags prontas", desc: "Para diversos temas e ocasiões." },
                    { title: "Kit festa completo", desc: "Tudo o que você precisa para uma festa perfeita." },
                    { title: "Moldes estilo SUS", desc: "Os queridinhos do momento para lembrancinhas criativas." }
                  ].map((bonus, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="mb-4 text-indigo-400 font-black text-2xl">🎁</div>
                      <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                      <p className="text-slate-400 text-sm">{bonus.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain/Contrast */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="p-8 rounded-3xl bg-white border border-slate-200">
                <h3 className="text-2xl font-bold mb-6 text-rose-600 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  Se você tentar fazer do zero:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Vai perder horas tentando acertar as medidas no Canva
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Vai ter dificuldade para montar as dobras corretamente
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 text-rose-400">•</div>
                    Pode não ficar com aparência profissional e frustrar seus clientes
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  Com nossos moldes prontos:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-indigo-200">•</div>
                    Você já recebe tudo com as medidas exatas e testadas
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-indigo-200">•</div>
                    É só arrastar suas fotos e mudar as cores em segundos
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-indigo-200">•</div>
                    Resultado profissional garantido que encanta qualquer pessoa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto rounded-[3rem] bg-white p-1 md:p-1.5 shadow-[0_20px_50px_rgba(79,70,229,0.15)] relative overflow-hidden">
              {/* Animated Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-500 to-rose-500 animate-gradient-xy"></div>
              
              <div className="relative bg-white rounded-[2.8rem] p-8 md:p-16 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-600 text-white px-8 py-2.5 rounded-full font-black text-xs tracking-[0.2em] uppercase shadow-lg shadow-rose-200">
                  OFERTA POR TEMPO LIMITADO
                </div>
                
                <h2 className="font-display text-3xl font-black mb-4 text-slate-900 sm:text-4xl">Acesso Vitalício aos +500 Moldes</h2>
                <p className="text-slate-500 mb-10 text-lg">Tudo o que você precisa para dominar a papelaria personalizada.</p>
                
                <div className="mb-12 relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-400 line-through text-xl font-medium">De R$ 97,00</div>
                  <div className="flex flex-col items-center justify-center gap-1 mt-4">
                    <span className="text-slate-500 font-bold text-sm uppercase tracking-widest">Por apenas</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-indigo-600 font-black text-7xl sm:text-8xl tracking-tighter">R$ 19,90</span>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5" />
                    Pagamento único. Sem mensalidades.
                  </div>
                </div>

                <a 
                  href={CHECKOUT_URL}
                  className="w-full group relative flex items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-8 py-7 text-2xl font-black text-white shadow-2xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:-translate-y-1 active:scale-[0.98]"
                >
                  QUERO ACESSO IMEDIATO
                  <ArrowRight className="h-7 w-7 transition-transform group-hover:translate-x-2" />
                </a>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    <ShieldCheck className="h-4 w-4 text-indigo-500" />
                    Compra Segura
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    <Zap className="h-4 w-4 text-indigo-500" />
                    Acesso Imediato
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                    <Clock className="h-4 w-4 text-indigo-500" />
                    7 Dias de Garantia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl text-slate-900">Dúvidas Frequentes</h2>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="Preciso saber mexer no Canva?" 
                answer="Não! Os moldes são extremamente simples e intuitivos. Você só precisa clicar e arrastar para mudar cores e textos. Além disso, enviamos um guia rápido para te ajudar." 
              />
              <FAQItem 
                question="Funciona no celular?" 
                answer="Sim! Você pode editar tudo pelo aplicativo do Canva no seu celular ou pelo navegador. É 100% compatível." 
              />
              <FAQItem 
                question="Posso imprimir em casa?" 
                answer="Com certeza! Todos os arquivos foram adaptados para o formato de papel A4, que é o padrão das impressoras caseiras." 
              />
              <FAQItem 
                question="Posso vender os produtos?" 
                answer="Sim! Você tem total liberdade para usar os moldes para criar produtos físicos e vendê-los para seus clientes, gerando uma excelente renda extra." 
              />
              <FAQItem 
                question="O acesso é imediato?" 
                answer="Sim! Assim que o seu pagamento for confirmado, você receberá um e-mail com todos os links de acesso aos moldes." 
              />
              <FAQItem 
                question="E se eu não gostar?" 
                answer="Nós confiamos tanto no nosso material que oferecemos 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro." 
              />
            </div>
          </div>
        </section>

        {/* Final Decision */}
        <section className="py-24 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold sm:text-5xl mb-8">A decisão final é sua...</h2>
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 opacity-50">
                <XCircle className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Continuar gastando</p>
                <p className="text-slate-400 text-sm">Com personalizados caros e dependendo de outras pessoas.</p>
              </div>
              <div className="p-8 rounded-3xl bg-indigo-600/20 border border-indigo-500/30 ring-2 ring-indigo-500">
                <CheckCircle2 className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Criar seus próprios</p>
                <p className="text-indigo-100 text-sm">Economizar muito e até ganhar dinheiro vendendo para outros.</p>
              </div>
            </div>
            <a 
              href={CHECKOUT_URL}
              className="group relative inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-10 py-6 text-2xl font-black text-white shadow-xl shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:-translate-y-1 active:scale-95"
            >
              QUERO ACESSO AGORA
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-white font-bold text-xs">M</div>
            <span className="font-display text-lg font-bold tracking-tight">Moldes<span className="text-indigo-600">Pro</span></span>
          </div>
          <p className="text-slate-500 text-sm mb-4">© 2026 MoldesPro. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
