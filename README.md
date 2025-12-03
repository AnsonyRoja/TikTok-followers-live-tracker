🎵 TikTok Followers Live Tracker

Visualiza en tiempo real tus seguidores, likes y progreso hacia una meta usando la API oficial de TikTok.

Este proyecto incluye:

✅ Frontend en React
✅ Backend en Express + Redis para manejar OAuth
✅ Animaciones suaves de conteo de seguidores
✅ Mensajes dinámicos cuando suben seguidores
✅ Barra de progreso hacia una meta
✅ React Query para obtener datos cada 2 segundos

🚀 Características principales
🔐 Login OAuth con TikTok

El backend gestiona la autorización mediante TikTok OAuth v2, almacena los tokens en Redis y refresca automáticamente el token.

📊 Estadísticas en tiempo real

El frontend obtiene cada 2 segundos la información:

Seguidores

Likes

Display Name

Username

Avatar

🎯 Meta progresiva

El usuario tiene una meta configurable (por defecto 1000 seguidores) y la app muestra:

Barra de progreso

Recompensas visuales

Alertas cuando estás cerca de llegar

Mensaje especial cuando se alcanza la meta

🎉 Animaciones y mensajes flotantes

Cuando suben los seguidores se muestra un mensaje aleatorio, y si la meta está cerca, aparece un mensaje especial.

🛠️ Tecnologías utilizadas
Frontend

React

Axios

React Query (@tanstack/react-query)

CSS Animations

Variables de entorno con .env

Backend

Node.js + Express

TikTok OAuth

Axios

Redis (para almacenar tokens)

Vercel Serverless

📂 Estructura del proyecto
/client
    ├── src
    │   ├── components
    │   │   └── FollowersBars.jsx
    │   ├── assets
    │   ├── App.jsx
    │   └── index.js
    ├── followers.css
    ├── .env
    └── package.json

/server
    ├── server.js
    ├── index.js
    ├── package.json
    └── .env (opcional)

⚙️ Variables de entorno del frontend

En React (Create React App), todas deben comenzar con REACT_APP_.

Crear archivo:
📄 /client/.env

REACT_APP_TIKTOK_API=https://url/tiktok/user-stats
REACT_APP_LOGIN_API=https://url/login/tiktok


Importación en React:

const TIKTOK_API = process.env.REACT_APP_TIKTOK_API;
const LOGIN_API = process.env.REACT_APP_LOGIN_API;

⚙️ Variables de entorno del backend

📄 /server/.env

CLIENT_KEY=TU_CLIENT_KEY
CLIENT_SECRET=TU_CLIENT_SECRET
REDIRECT_URI=https://url/callback
REDIS_URL=redis://usuario:pass@host:puerto

▶️ Cómo ejecutar el proyecto
1️⃣ Instalar dependencias
Frontend
cd client
npm install

Backend
cd server
npm install

2️⃣ Ejecutar el backend
npm start

3️⃣ Ejecutar el frontend
npm start


La app se abrirá en:

👉 http://localhost:3000

🌐 Deploy
✅ Backend en Vercel

Subes /server

Configuras las variables en Vercel Dashboard

Habilitas Serverless Functions

Redis se mantiene en la nube

✅ Frontend en Vercel o Netlify

Solo recuerda subir el archivo .env en el panel NO en el repositorio.

📸 Vista previa

👤 Avatar del usuario
📈 Conteo animado de seguidores
🎉 Mensajes flotantes cuando suben seguidores
🔥 Notificaciones cuando estás cerca de la meta
🎁 Recompensa cuando se alcanza el objetivo

📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes modificarlo o usarlo libremente.