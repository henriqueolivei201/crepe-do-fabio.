import React, { useEffect, useMemo, useState } from "react";
import {
  ChefHat,
  Phone,
  MapPin,
  Clock,
  Menu,
  X,
  Sparkles,
  Star,
  Flame,
  ShoppingBag,
  UtensilsCrossed,
  CreditCard,
  ChevronRight,
} from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

function IconBadge({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-deep-navy/10 bg-cream px-3 py-1 text-sm text-deep-navy shadow-sm">
      <Icon className="h-4 w-4 text-rouge" />
      <span>{label}</span>
    </span>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="h-1.5 w-8 rounded-full bg-rouge/80" />
          <p className="text-xs font-semibold uppercase tracking-widest text-deep-navy/70">
            {kicker}
          </p>
          <span className="h-1.5 w-8 rounded-full bg-rouge/80" />
        </div>
      ) : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-deep-navy sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-deep-navy/70 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative rounded-2xl border border-deep-navy/10 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-cream p-3 ring-1 ring-deep-navy/10">
          <Icon className="h-6 w-6 text-rouge transition-colors group-hover:text-rouge/90" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-deep-navy">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-deep-navy/70">
            {description}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-rouge/0 via-rouge/25 to-rouge/0 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

function MenuList({ title, items }) {
  return (
    <div className="rounded-3xl border border-deep-navy/10 bg-white/70 p-5 shadow-sm backdrop-blur sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-extrabold text-deep-navy">{title}</h3>
          <p className="mt-1 text-sm text-deep-navy/65">Opções cuidadosamente selecionadas.</p>
        </div>
        <div className="hidden sm:block">
          <ChevronRight className="h-5 w-5 text-rouge" />
        </div>
      </div>

      <ul className="mt-4 grid gap-3 text-sm text-deep-navy/80">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rouge/70" />
            <span>
              <span className="font-semibold text-deep-navy">{it.head}:</span>{" "}
              {it.tail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestimonialCard({ quote, name, meta }) {
  return (
    <div className="rounded-2xl border border-deep-navy/10 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed italic text-deep-navy/80">“{quote}”</p>
      <div className="mt-5">
        <p className="text-sm font-bold text-deep-navy">{name}</p>
        <p className="text-xs text-deep-navy/60">{meta}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const palette = useMemo(
    () => ({
      deepNavy: "#0B1B2B",
      cream: "#FFFDF9",
      cream2: "#F8FAFC",
      rouge: "#C1121F",
      gold: "#C9A227",
    }),
    []
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const whatsappHref = "https://wa.me/5591992982798?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento para o buffet de crepes.");

  const gallery = [
    { src: "/imagens/crepe-1.jpg", alt: "Crepes em preparo" },
    { src: "/imagens/crepe-2.jpg", alt: "Crepes sendo servidos" },
    { src: "/imagens/evento-1.jpg", alt: "Evento com buffet" },
    { src: "/imagens/evento-2.jpg", alt: "Mesa gourmet" },
    { src: "/imagens/crepe-3.jpg", alt: "Crepes doces" },
    { src: "/imagens/evento-3.jpg", alt: "Festa com crepes" },
  ];

  return (
    <div className="min-h-screen bg-cream2 text-deep-navy">
      {/* Theme CSS vars (minimal, not custom styling heavy) */}
      <style>{`
        :root{
          --deep-navy:${palette.deepNavy};
          --cream:${palette.cream};
          --cream2:${palette.cream2};
          --rouge:${palette.rouge};
          --gold:${palette.gold};
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-deep-navy/10 bg-cream2/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-rouge/40"
            aria-label="Crepe do Fábio"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-deep-navy/10">
              <ChefHat className="h-5 w-5 text-rouge" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-extrabold tracking-tight text-deep-navy sm:text-base">
                Crepe do Fábio
              </p>
              <p className="text-xs text-deep-navy/60">Buffet a domicílio</p>
            </div>
          </a>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+5561992982798"
              className="inline-flex items-center gap-2 rounded-full border border-deep-navy/15 bg-white/70 px-4 py-2 text-sm font-semibold text-deep-navy shadow-sm transition hover:bg-white"
            >
              <Phone className="h-4 w-4 text-rouge" />
              Ligar Agora
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-deep-navy px-5 py-2.5 text-sm font-extrabold text-cream shadow-sm transition hover:bg-deep-navy/90"
            >
              <Sparkles className="h-4 w-4" />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile menu */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-deep-navy/15 bg-white/70 p-2 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5 text-deep-navy" />
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen ? (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-deep-navy/60"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-cream2 backdrop-blur border-l border-deep-navy/10 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold text-deep-navy">Menu</p>
                <button
                  type="button"
                  className="rounded-xl border border-deep-navy/15 bg-white/70 p-2"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5 text-deep-navy" />
                </button>
              </div>

              <nav className="mt-4 grid gap-2">
                {[
                  { href: "#historia", label: "Nossa História" },
                  { href: "#servicos", label: "Serviços" },
                  { href: "#cardapio", label: "Cardápio" },
                  { href: "#galeria", label: "Galeria" },
                  { href: "#depoimentos", label: "Depoimentos" },
                  { href: "#contato", label: "Contato" },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl border border-deep-navy/10 bg-white/60 px-3 py-3 text-sm font-semibold text-deep-navy shadow-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="mt-5 grid gap-2">
                <a
                  href="tel:+5561992982798"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-deep-navy/15 bg-white/70 px-4 py-3 text-sm font-semibold text-deep-navy"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 text-rouge" />
                  Ligar Agora
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-deep-navy px-4 py-3 text-sm font-extrabold text-cream"
                >
                  <Sparkles className="h-4 w-4" />
                  Solicitar Orçamento
                </a>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-deep-navy/60">
                Atendimento em Brasília e região. Resposta rápida pelo WhatsApp.
              </p>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,27,43,0.75),rgba(11,27,43,0.75))]" />
            <img
              src="/imagens/hero-crepes.jpg"
              alt="Crepes finos sendo preparados"
              className="h-full w-full object-cover opacity-90"
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <IconBadge icon={Flame} label="Cozinha na medida" />
                <IconBadge icon={UtensilsCrossed} label="Buffet a domicílio" />
              </div>

              <h1 className="mt-7 text-3xl font-black tracking-tight text-cream sm:text-5xl">
                Crepe do Fábio em Brasília e Região
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
                Especializado em buffet de crepes em domicílio desde 2001
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-full bg-rouge px-6 py-3 text-base font-extrabold text-cream shadow-sm transition",
                    "hover:brightness-105 hover:-translate-y-[1px] hover:shadow",
                    reducedMotion ? "transition-none" : "",
                    "sm:w-auto"
                  )}
                >
                  <Sparkles className="h-5 w-5" />
                  Solicitar Orçamento
                </a>
                <a
                  href="#cardapio"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 bg-white/5 px-6 py-3 text-base font-bold text-cream/95 backdrop-blur transition hover:bg-white/10 sm:w-auto"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Ver Cardápio
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {["2001 - Tradição", "Ingredientes premium", "Atendimento impecável"].map((t, i) => (
                  <div key={i} className="rounded-2xl border border-cream/15 bg-white/5 p-4 text-left">
                    <p className="text-sm font-extrabold text-cream">{t}</p>
                    <p className="mt-1 text-xs text-cream/80">Experiência em eventos</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HISTÓRIA & SERVIÇOS */}
        <section id="historia" className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <SectionTitle
            kicker="Quem somos"
            title="Excelência em cada crepe — desde 2001"
            subtitle="Estrutura completa a domicílio para tornar seu evento leve, sofisticado e inesquecível."
          />

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-deep-navy/10 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
              <p className="text-base leading-relaxed text-deep-navy/80">
                Desde 2001, o Crepe do Fábio leva toda a estrutura até você. Atendemos Brasília e região
                com excelência e dedicação. Nossa busca permanente por excelência nos padrões de atendimento
                e serviços prestados, combinada com ingredientes de primeira linha cuidadosamente selecionados,
                garante a elegância dos seus eventos.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-bold text-deep-navy ring-1 ring-deep-navy/10">
                  <CreditCard className="h-4 w-4 text-rouge" />
                  Personalização
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-bold text-deep-navy ring-1 ring-deep-navy/10">
                  <Sparkles className="h-4 w-4 text-rouge" />
                  Apresentação elegante
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/imagens/torre-eiffel.jpg"
                alt="Ambiente gourmet em estilo bistrô"
                className="h-80 w-full object-cover sm:h-96"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-navy/70 to-transparent p-5">
                <p className="text-sm font-extrabold text-cream">Bistrô chic • sabor francês</p>
                <p className="mt-1 text-xs text-cream/85">Do preparo à mesa — com cuidado.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-6xl px-4 pb-14 sm:pb-18">
          <SectionTitle
            kicker="Serviços"
            title="Tudo o que você precisa, no seu evento"
            subtitle="Do setup ao atendimento premium — com agilidade, sabor e elegância."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ServiceCard
              icon={Sparkles}
              title="Festas e Eventos"
              description="Atendemos aniversários, casamentos, formaturas e eventos corporativos com todo o cuidado e elegância."
            />
            <ServiceCard
              icon={UtensilsCrossed}
              title="Buffet Completo"
              description="Oferecemos toda a estrutura necessária, incluindo equipamentos, utensílios e equipe especializada."
            />
            <ServiceCard
              icon={ChefHat}
              title="Atendimento Premium"
              description="Serviço personalizado e diferenciado para tornar seu evento ainda mais especial."
            />
          </div>
        </section>

        {/* CARDÁPIO */}
        <section id="cardapio" className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <SectionTitle
            kicker="Cardápio"
            title="Do salgado ao doce — a escolha é sua"
            subtitle="Listas claras para facilitar a decisão do seu evento."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <MenuList
              title="Crepes Salgados"
              items={[
                { head: "Proteínas", tail: "Frango desfiado ao molho, Presunto, Calabresa" },
                { head: "Queijos", tail: "Mussarela, Catupiry, Cheddar" },
                { head: "Complementos", tail: "Batata palha, Cebola, Tomate, Azeitona" },
              ]}
            />
            <MenuList
              title="Crepes Doces"
              items={[
                { head: "Banana", tail: "caramelizada com canela e açúcar" },
                { head: "Chocolate", tail: "Chocolate belga de alta qualidade" },
                { head: "Morango", tail: "Morangos frescos selecionados" },
              ]}
            />
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="mx-auto max-w-6xl px-4 pb-14 sm:pb-18">
          <SectionTitle
            kicker="Galeria"
            title="Momentos que viram lembrança"
            subtitle="Grid responsivo com imagens sempre visíveis no mobile."
          />

          <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, idx) => (
              <figure
                key={idx}
                className="overflow-hidden rounded-3xl border border-deep-navy/10 bg-white/70 shadow-sm"
              >
                <div className="aspect-square w-full sm:aspect-video">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <SectionTitle
            kicker="Depoimentos"
            title="Prova social que fala por si"
            subtitle="Experiências reais de quem contratou o Crepe do Fábio."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <TestimonialCard
              quote="Contratei para o aniversário da minha filha e foi um sucesso absoluto! Os crepes estavam deliciosos e o atendimento foi impecável. Todos os convidados elogiaram muito!"
              name="Ana Paula Silva"
              meta="Aniversário de 15 anos"
            />
            <TestimonialCard
              quote="Serviço excepcional! Contratamos para um evento corporativo e superou todas as expectativas. Profissionalismo, pontualidade e qualidade incomparáveis."
              name="Roberto Mendes"
              meta="Evento Empresarial"
            />
            <TestimonialCard
              quote="Os crepes doces são simplesmente divinos! Fiz meu casamento com eles e foi um diferencial incrível. Todos os convidados ficaram encantados com a apresentação e o sabor."
              name="Carla e Pedro"
              meta="Casamento"
            />
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="mx-auto max-w-6xl px-4 pb-14 sm:pb-18">
          <SectionTitle
            kicker="Contato"
            title="Vamos transformar seu evento em um momento gourmet"
            subtitle="Fale conosco e receba um orçamento rápido e personalizado."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-deep-navy/10 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
              <div className="grid gap-4 sm:grid-cols-1">
                <div className="flex items-start gap-3 rounded-2xl bg-cream px-4 py-4 ring-1 ring-deep-navy/10">
                  <MapPin className="mt-0.5 h-5 w-5 text-rouge" />
                  <div>
                    <p className="text-sm font-extrabold text-deep-navy">Localização</p>
                    <p className="mt-1 text-sm text-deep-navy/70">Brasília e região</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-cream px-4 py-4 ring-1 ring-deep-navy/10">
                  <Phone className="mt-0.5 h-5 w-5 text-rouge" />
                  <div>
                    <p className="text-sm font-extrabold text-deep-navy">Telefone</p>
                    <a href="tel:+5561992982798" className="mt-1 block text-sm font-bold text-deep-navy/80 hover:text-rouge">
                      (61) 99298-2798
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-cream px-4 py-4 ring-1 ring-deep-navy/10">
                  <Clock className="mt-0.5 h-5 w-5 text-rouge" />
                  <div>
                    <p className="text-sm font-extrabold text-deep-navy">Horário</p>
                    <p className="mt-1 text-sm text-deep-navy/70">Todos os dias, 09:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-deep-navy/10 bg-deep-navy p-6 shadow-sm sm:p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rouge/25 blur-2xl" aria-hidden="true" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-widest text-cream/80">
                  Solicitação de orçamento
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-cream">Atendimento rápido no WhatsApp</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/85">
                  Envie a data, tipo de evento e quantidade aproximada de convidados.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-1">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-rouge px-6 py-3 text-base font-extrabold text-cream shadow-sm transition hover:bg-rouge/95"
                  >
                    <Sparkles className="h-5 w-5" />
                    Solicitar Orçamento
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 bg-white/5 px-6 py-3 text-base font-bold text-cream/95 backdrop-blur transition hover:bg-white/10"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard?.writeText("(61) 99298-2798");
                    }}
                  >
                    <Phone className="h-5 w-5" />
                    Copiar Telefone
                  </a>
                </div>

                <p className="mt-5 text-xs text-cream/70">
                  *Conteúdo ilustrativo para demonstração.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-deep-navy/10 bg-deep-navy">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-extrabold text-cream">© 2026 Crepe do Fábio</p>
              <p className="mt-1 text-xs text-cream/70">Todos os direitos reservados.</p>
            </div>
            <div className="text-xs text-cream/70">
              Desenvolvido com foco em performance e responsividade (Vite + React + Tailwind).
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-cream/70">
            {["Política de Privacidade", "Termos de Uso", "Contato"].map((t) => (
              <a key={t} href="#" className="rounded-full border border-cream/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">
                {t}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

