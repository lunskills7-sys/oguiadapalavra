import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Book, Target, Sparkles, MessageCircle, Calendar, Baby, Users, Brain, CheckCircle, Gift, Star, ArrowRight, Heart, Clock, Home } from "lucide-react";
import heroBible from "@/assets/hero-bible.jpg";
import metodo3p from "@/assets/metodo-3p.jpg";
import christmasBible from "@/assets/christmas-bible.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/37gygkk_677322";

const PaginaVendas = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero pattern-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-glow-pulse">
                <Gift className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Inclui: Devocional de Natal – 7 Dias de Esperança 🎄</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Comece 2026 com Deus:{" "}
                <span className="text-gradient-gold">O Método que transforma</span> seu estudo bíblico
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Entenda a Bíblia de forma simples e profunda com o Método 3P + Bônus especial de Natal.
              </p>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="ctaLarge" className="animate-fade-up-delay-1">
                  Quero Acessar Agora
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </a>
            </div>
            <div className="relative animate-fade-up-delay-2">
              <div className="relative rounded-3xl overflow-hidden glow-gold">
                <img 
                  src={heroBible} 
                  alt="Pessoa estudando a Bíblia no app" 
                  className="w-full h-auto rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
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
