# 📜 Códice Santo

> *Versículos para el Developer de Fe Dura*  
> Un santoral digital hecho con fe, humor y JavaScript.

Códice Santo es una aplicación web que genera versículos devocionales sagrados para programadores. Una mezcla irreverente de fe, frontend y filosofía de consola. Inspirada en Jesucripto, la religión paródica de los desarrolladores con burnout espiritual.

---

## ✨ Características

- 🔮 **Versículo aleatorio** en cada carga
- 🕶️ **Modo noche** para orar en la oscuridad
- 🎨 **Estilo divino** aleatorio por versículo
- 🐦 **Compartir en Twitter** con hashtag `#JesucriptoLives`
- 💸 **Donación PayPal** con botón “☕ Bendíceme con un café”
- 🧾 **Versículos con formato bíblico**: `Jesucripto 23:145 — "..."`
- 🔗 Enlace al sitio en `.env` para compartir en redes
- 🧠 Meta tags Open Graph y Twitter Card listos para evangelizar

---

## 🛠️ Tecnologías

- React + Vite + Tailwind CSS
- Axios para conexión con API
- Icons: react-icons (Twitter)
- Back: Node.js + MongoDB (API REST externa)

---

## ⚙️ Variables de entorno

En `.env` (en la raíz del proyecto):

```env
VITE_API_URL=http://localhost:3000
VITE_SITE_URL=https://www.codicesanto.dev
```

---

## 🌐 Imagen social (Open Graph)

La imagen para compartir se define en `index.html`:

```html
<meta property="og:image" content="https://www.codespatan.es/og-image.jpg" />
<meta name="twitter:image" content="www.codespatan.es/og-image.jpg" />
```

---

## 🚀 Cómo usar

1. Clona el repo
2. Instala las dependencias

```bash
npm install
```

3. Ejecuta la app

```bash
npm run dev
```

4. Predica.

---

## 🙏 Créditos

Creado por un dev tocado por la inspiración de los memes.  
Iconos, versos, estilos y backend todos con propósito divino.

---

## ⚠️ Disclaimer

No es una religión real (todavía). No uses esto en producción. Aunque... si lo haces, mándanos una foto. 😇

