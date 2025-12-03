# 🎵 TikTok Followers Live Tracker

Visualiza en tiempo real tus seguidores, likes y progreso hacia una meta usando la **API oficial de TikTok**.

## Descripción del Proyecto

**TikTok Followers Live Tracker** es una aplicación que permite a los usuarios monitorear el crecimiento de sus seguidores y likes en TikTok en tiempo real, con animaciones y mensajes interactivos que hacen la experiencia más divertida y visual.

### Este proyecto incluye:

- ✅ Frontend en React  
- ✅ Backend en Express + Redis para manejar OAuth  
- ✅ Animaciones suaves de conteo de seguidores  
- ✅ Mensajes dinámicos cuando suben seguidores  
- ✅ Barra de progreso hacia una meta  
- ✅ React Query para obtener datos cada 2 segundos  

## 🚀 Características principales

### 🔐 Login OAuth con TikTok
El backend gestiona la autorización mediante **TikTok OAuth v2**, almacena los tokens en Redis y refresca automáticamente el token.

### 📊 Estadísticas en tiempo real
El frontend obtiene cada 2 segundos información como:

- Seguidores  
- Likes  
- Display Name  
- Username  
- Avatar  

### 🎯 Meta progresiva
El usuario tiene una meta configurable (por defecto 1000 seguidores) y la app muestra:

- Barra de progreso  
- Recompensas visuales  
- Alertas cuando estás cerca de llegar  
- Mensaje especial cuando se alcanza la meta  

### 🎉 Animaciones y mensajes flotantes
- Cuando suben los seguidores se muestra un mensaje aleatorio.  
- Si la meta está cerca, aparece un mensaje especial.  

## 🛠️ Tecnologías utilizadas

**Frontend:**

- React  
- Axios  
- React Query (@tanstack/react-query)  
- CSS Animations  
- Variables de entorno con `.env`  

**Backend:**

- Node.js + Express  
- TikTok OAuth  
- Axios  
- Redis (para almacenar tokens)  
- Vercel Serverless  

## 📂 Estructura del proyecto

/client
├── src
│ ├── components
│ │ └── FollowersBars.jsx
│ ├── assets
│ ├── App.jsx
│ └── index.js
├── followers.css
├── .env
└── package.json

/server
├── server.js
├── index.js
├── package.json
└── .env (opcional)