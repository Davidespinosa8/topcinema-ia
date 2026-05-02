import { PlayCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { LeadForm } from "@/components/ui/LeadForm";
import Image from "next/image";
import eliasImg from "@/public/Elias.png";
import logo from "@/public/Elias1.png";
import eliasCt from "@/public/eliasct.jpg";
import eliasCine from "@/public/eliascine.jpg";
import eliasMario from "@/public/eliascinemario.png";
import eliasYoshi from "@/public/eliascineyoshi.png";
import eliasMdg from "@/public/eliasmdg.png";

export default function Home() {
  
  const whatsappNumber = "5491164953107";
  const whatsappText =
    "Hola Eliaspro IA, quiero información sobre la preventa del curso de videos cinematográficos con IA.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <main className="relative min-h-screen overflow-hidden px-5 sm:px-6 md:px-10 lg:px-16">
      
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#38BDF8]/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-[#38BDF8]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,45,45,0.12),transparent_35%)]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between py-5 backdrop-blur-md">
        <a href="#" className="flex items-center gap-3 font-semibold tracking-wide">
          <div className="relative h-9 w-9">
            <Image
              src={logo}
              alt="Eliaspro IA"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-white">Eliaspro IA</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
          <a href="#modulos" className="hover:text-white transition">
            Módulos
          </a>
          <a href="#bonos" className="hover:text-white transition">
            Bonos
          </a>
          <a href={whatsappUrl} className="hover:text-white transition">
            Preventa
          </a>
        </nav>

        <a
          href={whatsappUrl}
          className="rounded-xl border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:bg-[#1A1A1A] sm:inline-flex"
        >
          Acceder
        </a>
      </header>

      {/* HERO */}
      <FadeIn>
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden py-24 text-center">

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-2 text-sm text-[#BAE6FD] backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
          Preventa abierta para creadores visuales
        </div>

        <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Creá videos con estética cinematográfica usando{" "}
          <span className="bg-gradient-to-r from-white via-[#7DD3FC] to-[#38BDF8] bg-clip-text text-transparent">
            inteligencia artificial
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-xl">
            Aprendé a usar IA como parte de un proceso creativo real: idea, dirección visual,
            generación de recursos, edición y acabado final. Menos prueba y error, más intención en cada pieza.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#38BDF8] px-7 py-4 font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:scale-[1.02] hover:opacity-90"
          >
            <PlayCircle size={20} />
            Quiero entrar a la preventa
          </a>

          <a
            href="#modulos"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-7 py-4 font-semibold text-neutral-300 transition hover:bg-[#1A1A1A]"
          >
            Ver contenido del curso
          </a>
        </div>

        <p className="mt-4 text-sm text-neutral-500">
          Preventa limitada · Curso práctico · Sin promesas irreales
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-neutral-400 sm:grid-cols-3">
          <span>IA aplicada</span>
          <span>Edición real</span>
          <span>Estética premium</span>
        </div>

        <div className="relative mt-14 w-full max-w-5xl overflow-hidden rounded-2xl border border-neutral-800 bg-black shadow-2xl shadow-sky-500/10">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/7AC62s3zU44"
            title="Top Cinema Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      
      </section>
      </FadeIn>

      {/* PROBLEMA */}
      <section className="py-20 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          El problema no es tu creatividad.
        </h2>

        <p className="text-neutral-400 text-lg max-w-3xl mx-auto mb-12">
          Es el tiempo que te lleva producir algo que realmente se vea bien.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <FeatureCard
            title="Editás durante horas"
            description="Pero el resultado sigue viéndose “normal”, sin impacto visual real."
          />

          <FeatureCard
            title="Dependés de recursos externos"
            description="Clips, presets o plantillas que no terminan de diferenciar tu contenido."
          />

          <FeatureCard
            title="Sentís que vas lento"
            description="Mientras otros creadores producen más y mejor usando nuevas herramientas."
          />
        </div>

      </section>

      {/* OPORTUNIDAD */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#111] text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            La forma de crear contenido ya cambió.
          </h2>

          <p className="text-neutral-400 text-lg mb-10">
            La diferencia ya no está solo en saber editar.
            <br />
            Está en saber dirigir herramientas nuevas con criterio visual.
          </p>

          <div className="bg-[#0F0F0F] border border-neutral-800 rounded-2xl p-8 text-left">

            <p className="text-neutral-300 mb-6">
              La IA no viene a reemplazarte.
              <br />
              Viene a eliminar el 80% del trabajo repetitivo.
            </p>

            <p className="text-neutral-300 mb-6">
              Eso te permite enfocarte en lo que realmente importa:
              <br />
              <span className="text-white font-medium">
                la dirección visual, el ritmo y el impacto.
              </span>
            </p>

            <p className="text-[#38BDF8] font-semibold">
              El resultado: contenido que parece de otro nivel,
              sin multiplicar las horas de trabajo.
            </p>
          </div>
        </div>

      </section>

      {/* SOLUCIÓN */}
      <section className="py-24 max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Un sistema pensado para creadores que quieren avanzar en serio
        </h2>

        <p className="text-neutral-400 text-lg max-w-3xl mx-auto mb-12">
          No es una lista de apps ni una colección de trucos.
          Es un flujo de trabajo para crear piezas con mejor estética, más orden
          y menos desgaste en el proceso.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <FeatureCard
            title="Flujo de trabajo claro"
            description="Vas a entender qué usar, cuándo usarlo y cómo integrarlo sin perder tiempo."
          />

          <FeatureCard
            title="IA aplicada de verdad"
            description="No teoría. Uso real para mejorar calidad visual y acelerar procesos."
          />

          <FeatureCard
            title="Enfoque cinematográfico"
            description="Aprendés a pensar como director, no solo como editor."
          />
        </div>

      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-[#111] text-center">

        <div className="max-w-6xl mx-auto">

          <SectionTitle
            eyebrow="Resultados"
            title="Convertí videos simples de IA en piezas audiovisuales de alto impacto"
            description="Lo que antes se veía como un simple video generado con IA, vas a poder trabajarlo como una producción audiovisual con intención, ritmo, sonido y look profesional."
          />

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FeatureCard
              title="Mejorar la calidad visual"
              description="Transformá ideas simples en piezas con mejor composición, atmósfera, iluminación y estética cinematográfica."
            />

            <FeatureCard
              title="Crear con más intención"
              description="Dejá de generar al azar. Aprendé a dirigir la IA con criterios visuales concretos: planos, ángulos, lentes, estilo y ritmo."
            />

            <FeatureCard
              title="Ahorrar créditos y tiempo"
              description="Evitá pruebas innecesarias entendiendo cómo pedir, ajustar, iterar y corregir resultados sin desperdiciar tantos intentos."
            />

            <FeatureCard
              title="Elevar el resultado final"
              description="Sumá edición, música, efectos de sonido, color y timing para que el video no parezca crudo, sino una pieza audiovisual terminada."
            />
          </div>
        </div>

      </section>

      {/* EJEMPLOS REALES */}
      <section className="py-24 max-w-6xl mx-auto">

        <SectionTitle
          eyebrow="Ejemplos reales"
          title="De una idea simple a una pieza audiovisual"
          description="Cada proyecto combina imágenes generadas con IA, criterio cinematográfico, edición, sonido y ritmo."
        />

        <div className="space-y-12">

          {/* PROYECTO MARIO */}
          <div className="rounded-3xl border border-neutral-800 bg-[#111]/80 p-5 md:p-8">

            <div className="mb-6">
              <span className="text-sm font-semibold text-[#38BDF8]">
                Proyecto 01
              </span>
              <h3 className="mt-2 text-2xl font-bold">
                Universo cinematográfico estilo Mario
              </h3>
              <p className="mt-3 max-w-3xl text-neutral-400">
                Exploración visual con personajes, atmósfera y consistencia estética aplicada a un video de IA.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start">

              {/* VIDEO VERTICAL */}
              <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-neutral-800 bg-black">
                <div className="aspect-[9/16]">
                  <iframe
                    className="h-full w-full"
                    src="https://www.instagram.com/reel/DWuCSXGjtal/embed"
                    title="Proyecto Mario - Eliaspro IA"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* IMÁGENES RELACIONADAS */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-800">
                  <Image
                    src={eliasCine}
                    alt="Imagen cinematográfica del proyecto Mario"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-800">
                  <Image
                    src={eliasMario}
                    alt="Mario generado con estética cinematográfica"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-800 sm:col-span">
                  <Image
                    src={eliasYoshi}
                    alt="Yoshi generado con estética cinematográfica"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* PROYECTO MÁQUINA DE GUERRA */}
          <div className="rounded-3xl border border-neutral-800 bg-[#111]/80 p-5 md:p-8">

            <div className="mb-6">
              <span className="text-sm font-semibold text-[#38BDF8]">
                Proyecto 02
              </span>
              <h3 className="mt-2 text-2xl font-bold">
                Máquina de guerra: IA con look realista
              </h3>
              <p className="mt-3 max-w-3xl text-neutral-400">
                Un ejemplo de cómo trabajar una imagen con intención visual, impacto, atmósfera y edición final.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-start">

              {/* VIDEO VERTICAL */}
              <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-neutral-800 bg-black">
                <div className="aspect-[9/16]">
                  <iframe
                    className="h-full w-full"
                    src="https://www.instagram.com/reel/DV4azvrDm-T/embed"
                    title="Proyecto Máquina de Guerra - Eliaspro IA"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* IMAGEN RELACIONADA */}
              <div className="grid gap-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-800">
                  <Image
                    src={eliasMdg}
                    alt="Máquina de guerra generada con IA"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-800">
                  <Image
                    src={eliasCt}
                    alt="Elias creador de contenido"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* MÓDULOS */}
      <FadeIn>
      <section id="modulos" className="py-24 max-w-6xl mx-auto">

        <SectionTitle
          eyebrow="Estructura del curso"
          title="De la idea al video final"
          description="Un recorrido práctico para pensar, generar, editar y terminar videos con estética cinematográfica usando IA y criterio audiovisual real."
        />

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            eyebrow="Módulo 01"
            title="Idea: la base que nadie enseña"
            description="Cómo pensar un video cinematográfico o realista, estructurar contenido, evitar lo genérico, reconocer errores típicos de IA y construir una idea real ejecutable."
          />

          <FeatureCard
            eyebrow="Módulo 02"
            title="IA + lenguaje cinematográfico"
            description="Prompts, lógica básica, planos, ángulos, lentes, iluminación, generación de imágenes y video realista, consistencia de estilo y personajes."
          />

          <FeatureCard
            eyebrow="Módulo 03"
            title="Look cinematográfico / realista"
            description="Edición básica, ritmo, color, música, efectos de sonido, timing, silencios, cortes y análisis del antes y después con y sin sonido."
          />

          <FeatureCard
            eyebrow="Resultado final"
            title="Armado de video completo"
            description="Aplicás todo el proceso para transformar una idea en una pieza audiovisual terminada, con estética profesional y criterio cinematográfico."
            className="md:col-span-2"
          />

          <FeatureCard
            eyebrow="Extra"
            title="Ahorro de créditos y hacks"
            description="Recursos prácticos para evitar intentos innecesarios, mejorar resultados y aprovechar mejor las herramientas de IA durante el proceso."
          />
        </div>
      </section>
      </FadeIn>

      {/* AUTORIDAD */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Imagen */}
          <div className="relative w-full h-[550px] rounded-2xl overflow-hidden ">
            <Image
              src={eliasImg}
              alt="Elias - Top Cinema"
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          {/* Texto */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No es teoría. Es lo que uso todos los días.
            </h2>

            <p className="text-neutral-400 mb-4">
              Este sistema nace de trabajar creando contenido para redes,
              probando herramientas de IA y encontrando qué realmente funciona
              y qué no.
            </p>

            <p className="text-neutral-400 mb-4">
              No se trata de usar mil apps.
              Se trata de usar las correctas, en el momento correcto.
            </p>

            <p className="text-neutral-300 font-medium">
              Todo lo que ves en este curso está aplicado en proyectos reales.
            </p>

          </div>

        </div>

      </section>

      {/* BONOS */}
      <section id="bonos" className="py-24 max-w-6xl mx-auto text-center">

        <SectionTitle
          eyebrow="Bonos"
          title="Además, en preventa accedés a recursos extra"
          description="Materiales pensados para que no arranques desde cero y puedas aplicar el método con más claridad."
        />

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <FeatureCard
            title="Biblioteca de prompts visuales"
            description="Ejemplos listos para adaptar a distintos estilos, escenas y formatos."
          />

          <FeatureCard
            title="Checklist de producción"
            description="Una guía simple para ordenar tus ideas antes de generar o editar."
          />

          <FeatureCard
            title="Flujo de trabajo base"
            description="Un esquema práctico para pasar de concepto a pieza final sin perderte."
          />
        </div>

      </section>

      {/* CONFIANZA */}
      <section className="py-20 max-w-5xl mx-auto text-center">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-[#111] p-6">
            <h3 className="mb-2 font-bold">Para creadores reales</h3>
            <p className="text-sm text-neutral-400">
              Pensado para quienes crean contenido, editan para clientes o quieren mejorar su estética visual.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-[#111] p-6">
            <h3 className="mb-2 font-bold">Aplicación práctica</h3>
            <p className="text-sm text-neutral-400">
              El foco está en procesos, ejemplos y decisiones visuales que puedas aplicar en tus propios videos.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-[#111] p-6">
            <h3 className="mb-2 font-bold">Sin promesas mágicas</h3>
            <p className="text-sm text-neutral-400">
              No se vende una fórmula para hacerte rico. Se enseña a producir mejor, más rápido y con más criterio.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="preventa" className="py-28 text-center">

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">

          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#38BDF8]/20 rounded-full blur-3xl" />

          <div className="relative z-10">

            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-sm font-semibold">
              Preventa abierta
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empezá a crear videos con una estética más cinematográfica
            </h2>

            <p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-8">
              Sumate a la preventa y accedé al curso para aprender un flujo
              de trabajo moderno con IA, criterio visual y edición real.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <a
                href="https://wa.me/549XXXXXXXXXX?text=Hola%20Top%20Cinema%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20preventa%20del%20curso"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-[#38BDF8] rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-sky-500/20"
              >
                Quiero entrar a la preventa
              </a>

              <a
                href="#"
                className="px-7 py-4 border border-neutral-700 rounded-xl text-neutral-300 hover:bg-[#1A1A1A] transition"
              >
                Tengo una consulta
              </a>

            </div>

            <p className="text-neutral-500 text-sm mt-6">
              Sin fórmulas mágicas. Un proceso práctico para crear con más criterio visual.
            </p>

            <LeadForm/>
          </div>
        </div>

      </section>
    </main>
  );
}