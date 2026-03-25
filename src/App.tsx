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
    <div className="border-b border-stone-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-semibold text-stone-800"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-emerald-600" /> : <ChevronDown className="h-5 w-5 text-stone-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-stone-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
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
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Urgency Bar */}
      <div className="sticky top-0 z-50 bg-orange-500 py-2 text-center text-xs font-bold tracking-widest text-white uppercase shadow-md sm:text-sm">
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
                className="mb-6 font-display text-4xl font-extrabold leading-[1.1] text-stone-900 sm:text-6xl lg:text-7xl max-w-4xl"
              >
                +500 Moldes de Lembrancinhas <span className="text-emerald-600">Personalizáveis</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10 max-w-2xl text-lg text-stone-600 sm:text-xl"
              >
                Para Editar no Canva e Imprimir em Casa. Crie sacolinhas, kits e personalizados profissionais em poucos minutos — mesmo sem saber design.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center gap-4"
              >
                <button 
                  onClick={scrollToPricing}
                  className="group relative flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-5 text-xl font-black text-white shadow-xl shadow-emerald-200 transition-all hover:bg-emerald-700 hover:-translate-y-1 active:scale-95"
                >
                  QUERO ACESSO IMEDIATO
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-2 text-sm font-medium text-stone-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
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
                      <Gift className="h-12 w-12 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Infinite Carousel Section */}
        <section className="bg-stone-50 py-16 overflow-hidden">
          <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              O QUE VOCÊ PODE FAZER
            </h2>
            <div className="mt-2 h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative flex overflow-x-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_0.png",
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_1.png",
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_2.png",
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_3.png",
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_4.png",
                // Duplicate for seamless loop
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_0.png",
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_1.png",
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_2.png",
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_3.png",
                "https://ais-dev-c4iwywbeuiy42bkwitszmx-86421205923.us-west1.run.app/api/files/input_file_4.png",
              ].map((src, index) => (
                <div key={index} className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                  <img 
                    src={src} 
                    alt={`Exemplo ${index}`} 
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
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
                <div key={i} className="rounded-2xl border border-stone-100 bg-stone-50 p-8 transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-stone-900">{benefit.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you receive */}
        <section className="py-24 bg-stone-50">
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
                      <div className="mt-1 rounded-full bg-emerald-100 p-1">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <p className="text-lg font-medium text-stone-700">{item}</p>
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
        <section className="bg-stone-900 py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">Você NÃO precisa:</h2>
              <p className="text-stone-400">Esqueça as dificuldades do passado.</p>
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
                  <p className="text-stone-400 text-sm">{item.desc}</p>
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
              <p className="mt-4 text-stone-600">Simples como 1, 2, 3...</p>
            </div>
            <div className="grid gap-12 md:grid-cols-4">
              {[
                { step: "01", title: "Acesse", desc: "Abra os moldes diretamente no seu Canva." },
                { step: "02", title: "Edite", desc: "Mude nome, idade ou o tema da festa." },
                { step: "03", title: "Imprima", desc: "Use sua impressora caseira em papel A4." },
                { step: "04", title: "Monte", desc: "Recorte, cole e pronto! Sua festa está linda." }
              ].map((item, i) => (
                <div key={i} className="relative text-center">
                  <div className="mb-6 inline-block text-6xl font-black text-stone-100">{item.step}</div>
                  <h3 className="mb-2 text-xl font-bold text-stone-900">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                  {i < 3 && <ArrowRight className="absolute top-1/4 -right-6 hidden h-6 w-6 text-stone-200 md:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Whom */}
        <section className="py-24 bg-emerald-600 text-white">
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
                      <item.icon className="h-6 w-6 text-emerald-200" />
                      <span className="font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-white rounded-3xl p-8 text-stone-900 shadow-2xl">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Promessa de Valor</h3>
                <p className="text-lg text-stone-600 leading-relaxed italic">
                  "Com esses moldes, você pode transformar uma simples folha A4 em produtos que podem ser vendidos por R$20 ou mais."
                </p>
                <div className="mt-8 border-t border-stone-100 pt-8">
                  <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Oportunidade de Renda</p>
                  <p className="mt-2 text-stone-500">Milhares de pessoas já estão faturando alto com papelaria personalizada usando nossos moldes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-stone-900 p-8 md:p-16 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-bold text-emerald-400 ring-1 ring-emerald-500/30">
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
                      <div className="mb-4 text-emerald-400 font-black text-2xl">🎁</div>
                      <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                      <p className="text-stone-400 text-sm">{bonus.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain/Contrast */}
        <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="p-8 rounded-3xl bg-white border border-stone-200">
                <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  Se você tentar fazer do zero:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-stone-600">
                    <div className="mt-1 text-red-400">•</div>
                    Vai perder horas tentando acertar as medidas no Canva
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <div className="mt-1 text-red-400">•</div>
                    Vai ter dificuldade para montar as dobras corretamente
                  </li>
                  <li className="flex items-start gap-3 text-stone-600">
                    <div className="mt-1 text-red-400">•</div>
                    Pode não ficar com aparência profissional e frustrar seus clientes
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-emerald-600 text-white shadow-xl shadow-emerald-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6" />
                  Com nossos moldes prontos:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-emerald-200">•</div>
                    Você já recebe tudo com as medidas exatas e testadas
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-emerald-200">•</div>
                    É só arrastar suas fotos e mudar as cores em segundos
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-emerald-200">•</div>
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
            <div className="max-w-3xl mx-auto rounded-[2.5rem] border-4 border-emerald-600 bg-white p-8 md:p-16 text-center shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-8 py-2 rounded-full font-black text-sm tracking-widest uppercase">
                OFERTA POR TEMPO LIMITADO
              </div>
              
              <h2 className="font-display text-3xl font-bold mb-4">Acesso Vitalício aos +500 Moldes</h2>
              <p className="text-stone-500 mb-8">Tudo o que você precisa para dominar a papelaria personalizada.</p>
              
              <div className="mb-8">
                <span className="text-stone-400 line-through text-2xl">De R$ 97,00</span>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-stone-900 font-bold text-2xl">Por apenas</span>
                  <span className="text-emerald-600 font-black text-6xl sm:text-7xl">R$ 19,90</span>
                </div>
                <p className="text-stone-500 text-sm mt-4">Pagamento único. Sem mensalidades.</p>
              </div>

              <button className="w-full group relative flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-6 text-2xl font-black text-white shadow-xl shadow-emerald-200 transition-all hover:bg-emerald-700 hover:-translate-y-1 active:scale-95">
                QUERO ACESSO IMEDIATO
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  Compra Segura
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
                  <Zap className="h-5 w-5 text-emerald-600" />
                  Acesso Imediato
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  7 Dias de Garantia
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Dúvidas Frequentes</h2>
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
        <section className="py-24 bg-stone-900 text-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-3xl font-bold sm:text-5xl mb-8">A decisão final é sua...</h2>
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 opacity-50">
                <XCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Continuar gastando</p>
                <p className="text-stone-400 text-sm">Com personalizados caros e dependendo de outras pessoas.</p>
              </div>
              <div className="p-8 rounded-3xl bg-emerald-600/20 border border-emerald-500/30 ring-2 ring-emerald-500">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <p className="font-bold mb-2">Criar seus próprios</p>
                <p className="text-emerald-100 text-sm">Economizar muito e até ganhar dinheiro vendendo para outros.</p>
              </div>
            </div>
            <button 
              onClick={scrollToPricing}
              className="group relative inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-10 py-6 text-2xl font-black text-white shadow-xl shadow-emerald-500/20 transition-all hover:bg-emerald-700 hover:-translate-y-1 active:scale-95"
            >
              QUERO ACESSO AGORA
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-stone-50 py-12 border-t border-stone-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-600 text-white font-bold text-xs">M</div>
            <span className="font-display text-lg font-bold tracking-tight">Moldes<span className="text-emerald-600">Pro</span></span>
          </div>
          <p className="text-stone-500 text-sm mb-4">© 2026 MoldesPro. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-xs font-bold text-stone-400 uppercase tracking-widest">
            <a href="#" className="hover:text-stone-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
