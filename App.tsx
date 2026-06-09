import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  Quote,
  ArrowRight,
  Check,
  Award,
  Heart,
  Beef,
  CakeSlice,
  MessageCircle,
} from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-cream backdrop-blur-md transition hover:bg-white/15">
      <Icon className="h-3.5 w-3.5 text-gold" />
      <span>{label}</span>
    </span>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle,
  light = false,
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold/60" />
          <p className={cn("text-[11px] font-semibold uppercase tracking-[0.25em]", light ? "text-gold" : "text-rouge")}>
            {kicker}
          </p>
          <span className="h-px w-10 bg-gold/60" />
        </div>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          light ? "text-cream" : "text-deep-navy"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-balance sm:text-lg",
            light ? "text-cream/75" : "text-deep-navy/65"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: any;
  title: string;
  description: string;
  features: string[];
}) {
return (
    <div className="group relative flex flex-col rounded-3xl border border-deep-navy/10 bg-white p-7 shadow-[0_1px_2px_rgba(11,27,43,0.04)] transition-all duration-300 ease-in-out md:hover:-translate-y-1.5 md:hover:border-rouge/20 md:hover:shadow-xl sm:p-8">
      <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cream to-cream2 ring-1 ring-deep-navy/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-6 w-6 text-rouge" />
        <span className="absolute -inset-1 -z-10 rounded-2xl bg-rouge/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <h3 className="font-display text-xl font-bold text-deep-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-deep-navy/65">{description}</p>

      <ul className="mt-6 space-y-2 border-t border-deep-navy/5 pt-5">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-deep-navy/75">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuList({
  title,
  caption,
  items,
  icon: Icon,
}: {
  title: string;
  caption: string;
  items: Array<{ head: string; tail: string }>;
  icon?: React.ElementType;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-deep-navy/10 bg-white p-7 transition-all duration-300 ease-in-out md:hover:-translate-y-1.5 md:hover:border-gold/40 md:hover:shadow-xl sm:p-9">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rouge/5 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rouge">{caption}</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-deep-navy sm:text-3xl">{title}</h3>
          </div>
          {Icon ? (
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream2 ring-1 ring-deep-navy/10 transition-transform duration-500 group-hover:scale-110">
              <Icon className="h-5 w-5 text-rouge" />
            </div>
          ) : (
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream2 ring-1 ring-deep-navy/10 transition-transform duration-500 group-hover:translate-x-1">
              <ChevronRight className="h-5 w-5 text-rouge" />
            </div>
          )}
        </div>

        <ul className="mt-7 space-y-4">
          {items.map((it, idx) => (
            <li
              key={idx}
              className="group/item flex items-start gap-4 border-b border-deep-navy/5 pb-4 last:border-b-0 last:pb-0"
            >
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rouge/10 text-[11px] font-bold text-rouge transition-colors duration-300 group-hover/item:bg-rouge group-hover/item:text-cream">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="text-sm leading-relaxed text-deep-navy/75">
                <span className="font-semibold text-deep-navy">{it.head}</span>
                <span className="text-deep-navy/60"> — {it.tail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  meta,
}: {
  quote: string;
  name: string;
  meta: string;
}) {
  return (
    <figure className="group relative flex h-full flex-col rounded-3xl border border-deep-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-20px_rgba(11,27,43,0.2)]">
      <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20 transition-colors duration-500 group-hover:text-gold/40" />
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-deep-navy/80">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-deep-navy/10 pt-5">
        <p className="font-display text-base font-bold text-deep-navy">{name}</p>
        <p className="mt-0.5 text-xs uppercase tracking-wider text-rouge/80">{meta}</p>
      </figcaption>
    </figure>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const whatsappHref =
    "https://wa.me/5591992982798?text=" +
    encodeURIComponent("Olá! Gostaria de solicitar um orçamento para o buffet de crepes.");

  const gallery = [
    { src: "/imagens/crepe-1.jpg", alt: "Crepes em preparo" },
    { src: "/imagens/crepe-2.jpg", alt: "Crepes sendo servidos" },
    { src: "/imagens/evento-1.jpg", alt: "Evento com buffet" },
    { src: "/imagens/evento-2.jpg", alt: "Mesa gourmet" },
    { src: "/imagens/crepe-3.jpg", alt: "Crepes doces" },
    { src: "/imagens/evento-3.jpg", alt: "Festa com crepes" },
  ];

  const nav = [
    { href: "#historia", label: "Nossa História" },
    { href: "#servicos", label: "Serviços" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#galeria", label: "Galeria" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-cream2 text-deep-navy selection:bg-rouge/20 selection:text-deep-navy">
      {/* HEADER */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-cream2/80 backdrop-blur-md transition-all duration-300",
          scrolled ? "border-deep-navy/10 shadow-sm" : "border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#"
            className="group flex items-center gap-3 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-rouge/40"
            aria-label="Crepe do Fábio"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-deep-navy ring-1 ring-deep-navy/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
              <ChefHat className="h-5 w-5 text-gold" />
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rouge ring-2 ring-cream2" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-base font-bold tracking-tight text-deep-navy sm:text-lg">
                Crepe do Fábio
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-rouge/80">
                Buffet a domicílio
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.slice(0, 5).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-deep-navy/70 transition-colors hover:text-deep-navy"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-rouge transition-transform duration-300 hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="tel:+5561992982798"
              className="inline-flex items-center gap-2 rounded-full border border-deep-navy/15 bg-white/60 px-4 py-2 text-sm font-semibold text-deep-navy shadow-sm transition-all hover:-translate-y-px hover:bg-white hover:shadow"
            >
              <Phone className="h-4 w-4 text-rouge" />
              Ligar
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-deep-navy px-5 py-2.5 text-sm font-bold text-cream shadow-[0_6px_20px_-8px_rgba(11,27,43,0.6)] transition-all duration-300 hover:-translate-y-px hover:bg-rouge hover:shadow-[0_10px_30px_-10px_rgba(193,18,31,0.7)]"
            >
              <Sparkles className="h-4 w-4 text-gold transition-transform duration-500 group-hover:rotate-12" />
              Orçamento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-deep-navy/15 bg-white/70 p-2.5 transition hover:bg-white md:hidden"
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
              className="absolute inset-0 bg-deep-navy/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-deep-navy/10 bg-cream2 p-5 shadow-2xl animate-fade-up">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-bold text-deep-navy">Menu</p>
                <button
                  type="button"
                  className="rounded-xl border border-deep-navy/15 bg-white p-2 transition hover:bg-cream"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5 text-deep-navy" />
                </button>
              </div>

              <nav className="mt-6 grid gap-1.5">
                {nav.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="group flex items-center justify-between rounded-2xl border border-deep-navy/10 bg-white px-4 py-3.5 text-sm font-semibold text-deep-navy shadow-sm transition hover:border-rouge/30 hover:bg-cream"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4 text-rouge transition-transform group-hover:translate-x-0.5" />
                  </a>
                ))}
              </nav>

              <div className="mt-6 grid gap-2">
                <a
                  href="tel:+5561992982798"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-deep-navy/15 bg-white px-4 py-3 text-sm font-semibold text-deep-navy"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone className="h-4 w-4 text-rouge" />
                  Ligar Agora
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-deep-navy px-4 py-3 text-sm font-bold text-cream"
                >
                  <Sparkles className="h-4 w-4 text-gold" />
                  Solicitar Orçamento
                </a>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-deep-navy/60">
                Atendimento em Brasília e região. Resposta rápida pelo WhatsApp.
              </p>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="/imagens/hero-crepes.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-deep-navy/85 via-deep-navy/75 to-deep-navy/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.15),transparent_60%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center animate-fade-up">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <IconBadge icon={Flame} label="Cozinha na medida" />
                <IconBadge icon={UtensilsCrossed} label="Buffet a domicílio" />
                <IconBadge icon={Award} label="Desde 2001" />
              </div>

              <h1 className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-cream text-balance sm:text-6xl lg:text-7xl">
                Crepe do Fábio em{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-cream/90">Brasília</span>
                  <span className="absolute inset-x-0 bottom-1 h-2 bg-rouge/40 blur-sm" aria-hidden="true" />
                </span>{" "}
                e Região
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
                Especializado em buffet de crepes em domicílio desde 2001
              </p>

              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-rouge px-7 py-3.5 text-base font-bold text-cream shadow-[0_12px_40px_-12px_rgba(193,18,31,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-rouge/95 hover:shadow-[0_16px_50px_-12px_rgba(193,18,31,0.85)] sm:w-auto"
                >
                  <Sparkles className="h-5 w-5 text-gold transition-transform duration-500 group-hover:rotate-12" />
                  Solicitar Orçamento
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#cardapio"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-cream backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/60 hover:bg-white/15 sm:w-auto"
                >
                  <ShoppingBag className="h-5 w-5 text-gold" />
                  Ver Cardápio
                </a>
              </div>

              <div className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { t: "Desde 2001", s: "Mais de duas décadas de tradição", icon: Award },
                  { t: "Ingredientes premium", s: "Seleção criteriosa", icon: Star },
                  { t: "Atendimento impecável", s: "Equipe especializada", icon: Heart },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-cream/15 bg-white/5 p-5 text-left backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
                  >
                    <item.icon className="h-5 w-5 text-gold transition-transform duration-500 group-hover:scale-110" />
                    <p className="mt-3 font-display text-base font-bold text-cream">{item.t}</p>
                    <p className="mt-1 text-xs text-cream/70">{item.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom fade into next section */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-cream2" />
        </section>

        {/* HISTÓRIA */}
        <section id="historia" className="relative mx-auto max-w-6xl px-4 py-20 animate-reveal sm:px-6 sm:py-28">
          <SectionTitle
            kicker="Quem somos"
            title="Excelência em cada crepe — desde 2001"
            subtitle="Estrutura completa a domicílio para tornar seu evento leve, sofisticado e inesquecível."
          />

          <div className="mt-16 grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="relative rounded-[32px] border border-deep-navy/10 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(11,27,43,0.25)] sm:p-10">
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-rouge px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream">
                  <Heart className="h-3 w-3 fill-cream" /> Nossa história
                </span>
                <p className="text-[15px] leading-[1.75] text-deep-navy/80 sm:text-base">
                  Desde 2001, o Crepe do Fábio leva toda a estrutura até você. Atendemos Brasília e
                  região com excelência e dedicação. Nossa busca permanente por excelência nos
                  padrões de atendimento e serviços prestados, combinada com ingredientes de
                  primeira linha cuidadosamente selecionados, garante a elegância dos seus eventos.
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream2 px-4 py-2 text-sm font-semibold text-deep-navy ring-1 ring-deep-navy/10 transition hover:ring-gold/40">
                    <CreditCard className="h-4 w-4 text-rouge" />
                    Personalização
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream2 px-4 py-2 text-sm font-semibold text-deep-navy ring-1 ring-deep-navy/10 transition hover:ring-gold/40">
                    <Sparkles className="h-4 w-4 text-rouge" />
                    Apresentação elegante
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-cream2 px-4 py-2 text-sm font-semibold text-deep-navy ring-1 ring-deep-navy/10 transition hover:ring-gold/40">
                    <Award className="h-4 w-4 text-rouge" />
                    +20 anos
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-[32px] shadow-[0_30px_80px_-40px_rgba(11,27,43,0.4)]">
                <img
                  src="/imagens/torre-eiffel.jpg"
                  alt="Ambiente gourmet em estilo bistrô"
                  className="h-96 w-full object-cover transition-transform duration-[1200ms] hover:scale-105 lg:h-[28rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Sabor francês
                  </p>
                  <p className="mt-2 font-display text-xl font-bold text-cream">Bistrô chic</p>
                  <p className="mt-1 text-sm text-cream/80">Do preparo à mesa — com cuidado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-6xl px-4 pb-20 animate-reveal sm:px-6 sm:pb-28">
          <SectionTitle
            kicker="Serviços"
            title="Tudo o que você precisa, no seu evento"
            subtitle="Do setup ao atendimento premium — com agilidade, sabor e elegância."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <ServiceCard
              icon={Sparkles}
              title="Festas e Eventos"
              description="Atendemos aniversários, casamentos, formaturas e eventos corporativos com todo o cuidado e elegância."
              features={["Casamentos", "Aniversários", "Formaturas"]}
            />
            <ServiceCard
              icon={UtensilsCrossed}
              title="Buffet Completo"
              description="Oferecemos toda a estrutura necessária, incluindo equipamentos, utensílios e equipe especializada."
              features={["Equipamentos", "Utensílios", "Equipe especializada"]}
            />
            <ServiceCard
              icon={ChefHat}
              title="Atendimento Premium"
              description="Serviço personalizado e diferenciado para tornar seu evento ainda mais especial."
              features={["Personalizado", "Pontualidade", "Sofisticação"]}
            />
          </div>
        </section>

        {/* CARDÁPIO */}
        <section
          id="cardapio"
          className="relative overflow-hidden border-y border-deep-navy/10 bg-gradient-to-b from-cream to-cream2 py-20 animate-reveal sm:py-28"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #0B1B2B 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              kicker="Cardápio"
              title={
                <>
                  Do salgado ao doce
                  <span className="mt-1 block text-[0.65em] font-normal leading-snug text-deep-navy/55 sm:inline sm:ml-3">
                    — a escolha é sua
                  </span>
                </>
              }
              subtitle="Opções cuidadosamente selecionadas para harmonizar com cada momento do seu evento."
            />

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              <MenuList
                icon={Beef}
                caption="Linha salgada"
                title="Crepes Salgados"
                items={[
                  {
                    head: "Proteínas",
                    tail: "Frango desfiado ao molho, Presunto, Calabresa",
                  },
                  { head: "Queijos", tail: "Mussarela, Catupiry, Cheddar" },
                  {
                    head: "Complementos",
                    tail: "Batata palha, Cebola, Tomate, Azeitona",
                  },
                ]}
              />
              <MenuList
                icon={CakeSlice}
                caption="Linha doce"
                title="Crepes Doces"
                items={[
                  { head: "Banana", tail: "caramelizada com canela e açúcar" },
                  { head: "Chocolate", tail: "Chocolate belga de alta qualidade" },
                  { head: "Morango", tail: "Morangos frescos selecionados" },
                ]}
              />
            </div>

            <div className="mx-auto mt-12 max-w-2xl text-center">
              <p className="text-sm text-deep-navy/65">
                Personalizamos o cardápio conforme seu evento.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-rouge transition hover:text-deep-navy"
              >
                Solicitar cardápio personalizado
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="mx-auto max-w-6xl px-4 py-20 animate-reveal sm:px-6 sm:py-28">
          <SectionTitle
            kicker="Galeria"
            title="Momentos que viram lembrança"
            subtitle="Cliques reais de eventos servidos pela nossa equipe."
          />

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, idx) => (
              <figure
                key={idx}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-deep-navy/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(11,27,43,0.25)]",
                  idx === 0 && "lg:col-span-2 lg:row-span-2"
                )}
              >
                <div className={cn("w-full overflow-hidden", idx === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-square sm:aspect-[4/3]")}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 text-sm font-semibold text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section
          id="depoimentos"
          className="relative overflow-hidden bg-deep-navy py-20 animate-reveal sm:py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.15),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(193,18,31,0.18),transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
            <SectionTitle
              light
              kicker="Depoimentos"
              title="Prova social que fala por si"
              subtitle="Experiências reais de quem contratou o Crepe do Fábio."
            />

            <div className="mt-16 grid gap-5 md:grid-cols-3">
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
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="mx-auto max-w-6xl px-6 py-20 animate-reveal sm:px-8 sm:py-28">
          <SectionTitle
            kicker="Contato"
            title="Vamos transformar seu evento em um momento gourmet"
            subtitle="Fale conosco e receba um orçamento rápido e personalizado."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="rounded-[32px] border border-deep-navy/10 bg-white p-7 shadow-sm sm:p-8">
                <h3 className="font-display text-xl font-bold text-deep-navy">
                  Informações
                </h3>
                <p className="mt-1 text-sm text-deep-navy/60">
                  Estamos prontos para atender.
                </p>

                <div className="mt-7 grid gap-3">
                  {[
                    {
                      icon: MapPin,
                      label: "Localização",
                      value: "Brasília e região",
                      href: undefined,
                    },
                    {
                      icon: Phone,
                      label: "Telefone",
                      value: "(61) 99298-2798",
                      href: "tel:+5561992982798",
                    },
                    {
                      icon: Clock,
                      label: "Horário",
                      value: "Todos os dias, 09:00 - 22:00",
                      href: undefined,
                    },
                  ].map((item, idx) => {
                    const Cmp: any = item.href ? "a" : "div";
                    return (
                      <Cmp
                        key={idx}
                        {...(item.href ? { href: item.href } : {})}
                        className={cn(
                          "group flex items-start gap-4 rounded-2xl border border-deep-navy/10 bg-cream2 px-4 py-4 transition-all duration-300",
                          item.href && "hover:-translate-y-0.5 hover:border-rouge/30 hover:bg-cream"
                        )}
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-deep-navy/10 transition-transform duration-300 group-hover:scale-105">
                          <item.icon className="h-5 w-5 text-rouge" />
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-deep-navy/55">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-bold text-deep-navy">
                            {item.value}
                          </p>
                        </div>
                      </Cmp>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-[32px] border border-deep-navy/10 bg-deep-navy p-8 shadow-[0_30px_80px_-30px_rgba(11,27,43,0.6)] sm:p-12">
                <div
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rouge/30 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                    Solicitação de orçamento
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl">
                    Atendimento rápido <br className="hidden sm:block" />
                    no <span className="italic text-gold">WhatsApp</span>
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
                    Envie a data, tipo de evento e quantidade aproximada de convidados.
                  </p>

                  <ul className="mt-7 grid gap-2.5 text-sm text-cream/85">
                    {[
                      "Resposta em minutos",
                      "Orçamento sem compromisso",
                      "Cardápio personalizado",
                    ].map((t, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 text-gold" strokeWidth={2.5} />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-rouge px-7 py-3.5 text-base font-bold text-cream shadow-[0_12px_40px_-12px_rgba(193,18,31,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-rouge/95 hover:shadow-[0_16px_50px_-12px_rgba(193,18,31,0.9)]"
                    >
                      <Sparkles className="h-5 w-5 text-gold transition-transform duration-500 group-hover:rotate-12" />
                      Solicitar Orçamento
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-cream backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/10"
                      onClick={() => {
                        navigator.clipboard?.writeText("(61) 99298-2798");
                      }}
                    >
                      <Phone className="h-5 w-5 text-gold" />
                      Copiar Telefone
                    </button>
                  </div>

                  <p className="mt-6 text-xs text-cream/55">
                    *Conteúdo ilustrativo para demonstração.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-deep-navy/10 bg-deep-navy">
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #FFFDF9 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-cream/15">
                  <ChefHat className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-cream">Crepe do Fábio</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gold">
                    Desde 2001
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/65">
                Buffet de crepes premium em Brasília e região, com atendimento impecável e
                ingredientes selecionados.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Navegação
              </p>
              <ul className="mt-5 grid gap-2.5 text-sm text-cream/75">
                {nav.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="inline-flex items-center gap-1.5 transition hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Contato
              </p>
              <ul className="mt-5 grid gap-3 text-sm text-cream/75">
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-gold" />
                  <a href="tel:+5561992982798" className="transition hover:text-cream">
                    (61) 99298-2798
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-gold" />
                  Brasília e região
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-gold" />
                  09:00 - 22:00
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-cream/55">
              © 2026 Crepe do Fábio. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {["Política de Privacidade", "Termos de Uso", "Contato"].map((t) => (
                <a
                  key={t}
                  href="#"
                  className="rounded-full border border-cream/15 bg-white/5 px-3 py-1.5 text-xs text-cream/70 transition hover:border-gold/40 hover:text-cream"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition-colors md:hover:bg-emerald-700"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}