This# Fresh Coffee ☕

> **English below**

## Descripción
Fresh Coffee es una plataforma web moderna para la gestión y venta de productos de cafetería, diseñada con enfoque profesional y escalable. Permite a administradores gestionar productos, órdenes y categorías, mientras los usuarios pueden explorar y comprar de manera intuitiva.

## Tecnologías principales
- **Next.js 15** (App Router, SSR/SSG)
- **React 19**
- **Prisma ORM** (PostgreSQL)
- **TailwindCSS**
- **TypeScript**
- **Cloudinary** (gestión de imágenes)
- **Zustand, SWR, Zod** (estado, data fetching, validación)

## Estructura del proyecto
```
repo/
├── app/              # Páginas y rutas principales (Next.js)
│   ├── admin/        # Panel administrativo (productos, órdenes)
│   ├── orders/       # Órdenes de usuario
│   ├── page.tsx      # Página principal
│   └── ...
├── components/       # Componentes reutilizables UI
├── prisma/           # Esquema y seed de base de datos
├── public/           # Recursos públicos (imágenes, iconos)
├── src/              # Lógica compartida (utils, types, store)
├── package.json      # Dependencias y scripts
└── ...
```

## Funcionalidades principales
- Gestión CRUD de productos, categorías y órdenes (admin)
- Visualización y compra de productos (usuario)
- Upload seguro de imágenes (Cloudinary)
- Notificaciones y validaciones en tiempo real
- Panel administrativo con filtros y búsquedas

## Instalación y uso
1. Clona el repositorio y ejecuta:
   ```bash
   npm install
   ```
2. Configura tu archivo `.env` con la `DATABASE_URL` de tu base de datos PostgreSQL.
3. Aplica migraciones y pobla la base de datos:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```
4. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```

## Motivación personal
Este proyecto nace de la pasión por desarrollar soluciones reales y escalables, integrando tecnologías modernas y mejores prácticas. Fresh Coffee es una muestra de mis habilidades fullstack y mi interés en la arquitectura limpia y la experiencia de usuario.

## Retos superados
- Integración avanzada de Cloudinary y manejo seguro de imágenes.
- Diseño de un panel administrativo robusto y flexible.
- Validación y manejo de formularios complejos con Zod y React.
- Automatización del seed y migraciones con Prisma.

## Autor
Omar Caiguan Ojeda  
[LinkedIn](https://www.linkedin.com/in/tu-linkedin)

---

# Fresh Coffee ☕ (ENGLISH)

## Description
Fresh Coffee is a modern web platform for coffee shop product management and sales, designed to be scalable and professional. Admins can manage products, orders, and categories, while users can easily browse and purchase.

## Main Technologies
- **Next.js 15** (App Router, SSR/SSG)
- **React 19**
- **Prisma ORM** (PostgreSQL)
- **TailwindCSS**
- **TypeScript**
- **Cloudinary** (image management)
- **Zustand, SWR, Zod** (state, data fetching, validation)

## Project Structure
```
repo/
├── app/              # Main pages and routes (Next.js)
│   ├── admin/        # Admin panel (products, orders)
│   ├── orders/       # User orders
│   ├── page.tsx      # Main page
│   └── ...
├── components/       # Reusable UI components
├── prisma/           # Database schema and seed
├── public/           # Public assets (images, icons)
├── src/              # Shared logic (utils, types, store)
├── package.json      # Dependencies and scripts
└── ...
```

## Main Features
- CRUD management for products, categories, and orders (admin)
- Product browsing and purchase (user)
- Secure image upload (Cloudinary)
- Real-time notifications and validations
- Admin panel with filters and search

## Installation & Usage
1. Clone the repo and run:
   ```bash
   npm install
   ```
2. Set up your `.env` file with your PostgreSQL `DATABASE_URL`.
3. Apply migrations and seed the database:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```
4. Run in development:
   ```bash
   npm run dev
   ```

## Personal Motivation
This project was born from my passion for building real, scalable solutions using modern technologies and best practices. Fresh Coffee showcases my fullstack skills and my interest in clean architecture and user experience.

## Challenges Overcome
- Advanced Cloudinary integration and secure image handling.
- Robust and flexible admin panel design.
- Complex form validation and handling with Zod and React.
- Automated seed and migrations with Prisma.

## Author
Omar Caiguan Ojeda  
[LinkedIn](https://www.linkedin.com/in/your-linkedin)
