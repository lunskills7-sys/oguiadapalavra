import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Book, Target, Sparkles, MessageCircle, Calendar, Baby, Users, Brain, CheckCircle, Gift, Star, ArrowRight, Heart, Clock, Home, Timer, Flame, ShieldCheck } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";
import metodo3p from "@/assets/metodo-3p.jpg";
import christmasBible from "@/assets/christmas-bible.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/fr2mgut_677614";

const PaginaVendas = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Scarcity Bar */}
      <div className="w-full py-3 px-4 gradient-gold text-center animate-slide-down">
        <p className="text-sm md:text-base font-bold text-background flex items-center justify-center gap-2 flex-wrap">
          <Timer className="w-4 h-4" />
          <span>⏳ Oferta Especial de Natal: acesso com bônus exclusivo "7 Dias de Esperança" disponível somente até 31/12.</span>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero pattern-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="container relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-up">
              {/* HEADLINE → Dor + Desejo + Conexão emocional */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-muted-foreground mb-4 leading-tight">
                😔 Mais um ano tentando manter constância com Deus... <span className="text-foreground">e falhando?</span>
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-8">
                Chegou a hora de viver a Bíblia com{" "}
                <span className="text-gradient-gold">clareza, propósito e prática.</span>
              </p>
              
              {/* SUB-HEADLINE → Proposta + Sazonalidade + Tempo */}
              <div className="glass-card p-6 rounded-2xl mb-8 max-w-xl mx-auto lg:mx-0">
                <p className="text-lg md:text-xl font-semibold text-foreground mb-3 flex items-start gap-2">
                  <span className="text-2xl">📖</span>
                  <span>Comece 2026 com Deus no centro da sua rotina espiritual com o <span className="text-gradient-gold">Guia da Palavra</span>.</span>
                </p>
                <p className="text-base md:text-lg text-muted-foreground flex items-start gap-2">
                  <Gift className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span>Oferta especial com bônus de Natal <strong>"7 Dias de Esperança"</strong> disponível só até 31/12.</span>
                </p>
              </div>
              
              {/* Quick Benefits */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm md:text-base text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  🔓 <span>Acesso imediato</span>
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1.5">
                  📱 <span>Funciona em qualquer celular</span>
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1.5">
                  ✅ <span>Pagamento único e vitalício</span>
                </span>
              </div>
              
              {/* CTA */}
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="ctaLarge" className="animate-fade-up-delay-1">
                  QUERO COMEÇAR AGORA
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </a>
            </div>
            <div className="relative animate-fade-up-delay-2 flex justify-center lg:justify-end">
              <div className="relative max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
                <img 
                  src={heroMockup} 
                  alt="App Guia da Palavra no celular" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 md:py-20 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
              Por que <span className="text-gradient-gold">agora</span> é o melhor momento para entrar?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Clock,
                emoji: "🕒",
                title: "Tempo Limitado",
                text: "O devocional especial de Natal só estará disponível até 31/12."
              },
              {
                icon: Gift,
                emoji: "🎁",
                title: "Bônus Exclusivo",
                text: "Somente agora inclui o devocional 7 Dias de Esperança."
              },
              {
                icon: Flame,
                emoji: "🔥",
                title: "Acesso Vitalício",
                text: "Pague uma vez e use o método para sempre — sem mensalidade."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          
          {/* Reinforced CTA Block */}
          <div className="mt-12 text-center glass-card p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-extrabold mb-6">
              Garanta seu acesso <span className="text-gradient-gold">antes que o bônus acabe</span>
            </h3>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="ctaLarge" className="mb-4">
                Quero garantir agora
                <ArrowRight className="w-6 h-6" />
              </Button>
            </a>
            <div className="flex items-center justify-center gap-4 flex-wrap text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-secondary" /> Pagamento seguro
              </span>
              <span>•</span>
              <span>Acesso imediato</span>
              <span>•</span>
              <span>Funciona em qualquer celular</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Por que é tão difícil manter{" "}
              <span className="text-gradient-gold">constância com a Bíblia?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Book, text: "Você lê, mas sente que não entende o contexto." },
              { icon: Target, text: "Falta direção diária para saber o que estudar." },
              { icon: Calendar, text: "Falta disciplina e um método consistente." },
              { icon: MessageCircle, text: "Começa planos e para no meio do caminho." },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl flex items-start gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-lg text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl">
                Quero Resolver Isso Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Para quem é Section */}
      <section className="py-20 md:py-32 relative gradient-hero">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              Para quem é o{" "}
              <span className="text-gradient-gold">Guia da Palavra?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              O Guia da Palavra foi pensado para cristãos que querem ter mais constância com a Bíblia, 
              entender o que estão lendo e conseguir aplicar a Palavra no dia a dia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                icon: Calendar, 
                text: "Para quem começa planos de leitura e desiste na terceira semana." 
              },
              { 
                icon: Book, 
                text: "Para quem lê um versículo, mas sente que não entendeu de verdade o contexto." 
              },
              { 
                icon: MessageCircle, 
                text: "Para quem quer preparar mensagens, devocionais ou células, mas trava na hora de montar o esboço." 
              },
              { 
                icon: Clock, 
                text: "Para quem sente que a rotina está corrida, mas não quer deixar a vida com Deus para depois." 
              },
              { 
                icon: Home, 
                text: "Para pais e mães que querem ensinar a Bíblia para os filhos de forma simples." 
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl">
                Sim, Isso é Pra Mim!
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Method 3P Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              O Método 3P:{" "}
              <span className="text-gradient-gold">Palavra • Propósito • Prática</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um método simples para aplicar a Bíblia no dia a dia.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden glow-blue">
              <img src={metodo3p} alt="Método 3P - Três Pilares" className="w-full h-auto" />
            </div>
            <div className="grid gap-6">
              {[
                {
                  letter: "P",
                  title: "Palavra",
                  description: "Receba o trecho bíblico certo para o seu momento.",
                  color: "from-secondary/30 to-secondary/10",
                },
                {
                  letter: "P",
                  title: "Propósito",
                  description: "Entenda o contexto com clareza e profundidade.",
                  color: "from-primary/30 to-primary/10",
                },
                {
                  letter: "P",
                  title: "Prática",
                  description: "Aplique hoje o que Deus te mostrou na leitura.",
                  color: "from-secondary/30 to-secondary/10",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-2xl bg-gradient-to-r ${item.color} border-l-4 border-secondary`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-extrabold text-secondary">{item.letter}</span>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl">
                Quero Esse Método
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              O que você recebe ao entrar no{" "}
              <span className="text-gradient-gold">Guia da Palavra</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Book, title: "Devocionais Guiados", description: "Roteiros fixos para você seguir diariamente." },
              { icon: Sparkles, title: "Devocional Personalizado", description: "IA que adapta o estudo ao seu momento." },
              { icon: Target, title: "Versículo do Dia + Ação", description: "Uma palavra e uma ação prática diária." },
              { icon: Baby, title: "Estudaninho Infantil", description: "Devocionais especiais para crianças." },
              { icon: Calendar, title: "Planos Bíblicos", description: "Planos com explicação detalhada." },
              { icon: Users, title: "Sala do Pregador", badge: "Premium", description: "Recursos para quem prega a Palavra." },
              { icon: Brain, title: "Simulado Bíblico", badge: "Premium", description: "Teste seu conhecimento bíblico." },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl">
                Quero Tudo Isso por R$ 29,90
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Christmas Bonus Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-wine/10 to-background" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="glass-card-gold p-8 md:p-12 rounded-3xl glow-gold">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 mb-6">
                  <Gift className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Bônus Especial</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Bônus de Natal:{" "}
                  <span className="text-gradient-gold">7 Dias de Esperança 🎄</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Um devocional especial para fechar 2025 com fé, luz e propósito.
                  Prepare seu coração para o novo ano com reflexões profundas sobre esperança.
                </p>
                <div className="glass-card p-6 rounded-xl border-secondary/30">
                  <h3 className="text-xl font-bold mb-2">
                    E comece 2026 com Deus no centro da sua vida.
                  </h3>
                  <p className="text-muted-foreground">
                    O Guia da Palavra será seu companheiro diário de transformação espiritual.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden glow-gold">
                <img 
                  src={christmasBible} 
                  alt="Bíblia com decoração de Natal" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl">
                Garantir Meu Bônus de Natal
                <Gift className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 gradient-gold" />
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                Acesso Completo ao Método
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-8">
                Guia da Palavra
              </h3>
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl text-muted-foreground">R$</span>
                  <span className="text-6xl md:text-7xl font-extrabold text-secondary">29</span>
                  <span className="text-3xl font-bold text-secondary">,90</span>
                </div>
                <p className="text-muted-foreground mt-2">Pagamento único • Acesso vitalício</p>
              </div>
              <div className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                {[
                  "Acesso imediato a todo conteúdo",
                  "Devocional de Natal incluso",
                  "Instalação estilo app no celular",
                  "Atualizações gratuitas",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="ctaLarge" className="w-full">
                  Quero Garantir Meu Acesso
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                🔒 Pagamento 100% seguro • Acesso imediato após confirmação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Veja o que dizem nossos{" "}
              <span className="text-gradient-gold">usuários</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Maria Fernanda",
                image: testimonial1,
                text: "O Guia da Palavra transformou minha rotina devocional. Agora consigo entender o contexto das passagens e aplicar no meu dia a dia. Recomendo muito!",
              },
              {
                name: "Carlos Eduardo",
                image: testimonial2,
                text: "Depois de anos tentando manter consistência no estudo bíblico, finalmente encontrei um método que funciona. O Método 3P é simples e poderoso!",
              },
              {
                name: "Ana Paula",
                image: testimonial3,
                text: "O devocional infantil é maravilhoso! Meus filhos agora pedem para fazer o estudo bíblico comigo. Uma bênção para toda família.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl">
                Quero Ter Essa Transformação
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Perguntas{" "}
              <span className="text-gradient-gold">Frequentes</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Como funciona o acesso ao Guia da Palavra?",
                  answer: "Após a confirmação do pagamento, você recebe um link de acesso imediato. O Guia funciona como um webapp que pode ser instalado no celular como se fosse um app, sem precisar baixar nada da loja.",
                },
                {
                  question: "Preciso ter conhecimento bíblico prévio?",
                  answer: "Não! O Guia da Palavra foi criado para todos os níveis, desde iniciantes até quem já estuda há anos. O Método 3P torna o entendimento simples e acessível.",
                },
                {
                  question: "O acesso é vitalício mesmo?",
                  answer: "Sim! Com um único pagamento de R$ 29,90, você tem acesso permanente a todo o conteúdo, incluindo atualizações futuras.",
                },
                {
                  question: "Posso usar em mais de um dispositivo?",
                  answer: "Sim! Você pode acessar o Guia da Palavra em qualquer dispositivo com navegador: celular, tablet ou computador.",
                },
                {
                  question: "E se eu não gostar?",
                  answer: "Oferecemos garantia de satisfação. Se você não ficar satisfeito, é só entrar em contato que devolvemos seu investimento.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-2xl px-6 border-none">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/20 to-background" />
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">
            Se Deus te chamou para crescer na Palavra,{" "}
            <span className="text-gradient-gold">este é o próximo passo.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Não deixe mais um ano passar sem aprofundar sua intimidade com Deus.
            Comece 2026 transformado.
          </p>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ctaLarge" className="animate-glow-pulse">
              Quero Começar Agora
              <ArrowRight className="w-6 h-6" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Guia da Palavra. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PaginaVendas;
