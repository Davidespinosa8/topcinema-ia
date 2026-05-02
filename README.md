# 🎬 Top Cinema — Landing Page

Landing page desarrollada para la preventa de un curso de creación de contenido cinematográfico utilizando inteligencia artificial.

## 🚀 Objetivo

Diseñar una landing moderna, clara y orientada a conversión que:

- Explique el cambio de paradigma (IA + edición)
- Posicione el curso como un sistema real, no teoría
- Genere leads mediante WhatsApp
- Transmita estética premium y profesional

---

## 🧠 Enfoque estratégico

La landing está estructurada siguiendo un flujo de conversión:

1. **Hero** → impacto + propuesta clara  
2. **Problema** → identificación del usuario  
3. **Oportunidad** → cambio de paradigma (IA)  
4. **Solución** → sistema estructurado  
5. **Beneficios** → resultados concretos  
6. **Módulos** → contenido organizado  
7. **Autoridad** → validación del creador  
8. **Bonos** → aumento de valor percibido  
9. **CTA final** → acción directa (WhatsApp + formulario)

---

## 🎨 Diseño y UI

- Estilo: **cinematográfico / dark mode**
- Paleta:
  - Fondo: `#0B0B0B`
  - Primario: `#FF2D2D`
  - Secundario: `#FFFFFF`
- Componentes:
  - Bordes redondeados (`rounded-2xl`)
  - Glow rojo sutil
  - Gradientes oscuros
  - Tipografía: **Inter**

---

## 🛠️ Stack tecnológico

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Framer Motion** (animaciones)
- **Lucide Icons**
- **next/image** (optimización de imágenes)

---

## 📦 Componentes reutilizables

- `SectionTitle` → títulos de sección
- `FeatureCard` → cards de contenido
- `FadeIn` → animaciones suaves
- `LeadForm` → formulario conectado a WhatsApp

---

## 📽️ Multimedia

- Video de YouTube embebido en el Hero
- Imagen real del creador (`Elias.png`)
- Logo (`Topcinema.svg`)

---

## 📲 Captación de leads

Se utilizan dos caminos:

### 1. WhatsApp directo
Botones CTA que abren conversación con mensaje pre-armado.

### 2. Formulario
El usuario completa datos y se redirige a WhatsApp con información estructurada.

👉 Esto evita backend y simplifica la validación en preventa.

---

## ⚙️ Instalación

```bash
npm install
npm run dev