# Invitacion XV - Web para GitHub Pages

Landing responsive para una invitacion virtual de XV anos con apertura de sobre, linternas flotantes, cuenta regresiva, secciones animadas al hacer scroll y estilo de cuento magico sin usar personajes ni imagenes oficiales.

## Archivos

- `index.html`: estructura de la invitacion.
- `styles.css`: diseno visual, responsive y animaciones.
- `script.js`: datos editables, cuenta regresiva, apertura del sobre, scroll reveal, parallax y enlaces.

## Que debes editar

Abre `script.js` y cambia el objeto `invitationData`:

```js
const invitationData = {
  name: "Kiara Melgar Taramona",
  signature: "Kiara Melgar Taramona",
  dateLabel: "Viernes, 31 de julio de 2026",
  timeLabel: "6:30 p.m.",
  eventDate: "2026-07-31T18:30:00",
  parents: "Aaron Melgar y Noelia Taramona",
  rsvpDeadline: "[fecha limite]",
  ceremonyPlace: "Centro Aeronautico de la FAP - Salon Revoredo",
  ceremonyAddress: "Av. Javier Prado Oeste 1081, San Isidro 15073",
  ceremonyMap: "https://maps.google.com/?q=Av.%20Javier%20Prado%20Oeste%201081%2C%20San%20Isidro%2015073",
  receptionPlace: "Centro Aeronautico de la FAP - Salon Revoredo",
  receptionAddress: "Av. Javier Prado Oeste 1081, San Isidro 15073",
  receptionMap: "https://maps.google.com/?q=Av.%20Javier%20Prado%20Oeste%201081%2C%20San%20Isidro%2015073",
  formLink: "https://forms.gle/",
  spotifyUrl: "https://open.spotify.com/playlist/...",
  spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/..."
};
```

El Google Forms debe pedir:

- Nombre completo.
- Asistencia si/no.
- Numero de acompanantes.
- Telefono.
- Mensaje.

## Como publicarlo en GitHub Pages

1. Sube `index.html`, `styles.css`, `script.js` y `README.md` a tu repositorio.
2. En GitHub, entra a `Settings` > `Pages`.
3. En `Branch`, selecciona `main` y carpeta `/root`.
4. Guarda los cambios.
5. GitHub generara un enlace parecido a `https://tuusuario.github.io/xv-invitacion/`.

## Vista local

Puedes abrir `index.html` directamente en el navegador. No necesita frameworks, build ni servidor.
