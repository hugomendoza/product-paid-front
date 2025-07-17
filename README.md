# Product Paid Front

## 📋 Descripción

Product Paid Front es una aplicación de comercio electrónico desarrollada con React y TypeScript que permite a los usuarios comprar productos mediante un proceso de pago integrado con un proveedor externo. La aplicación ofrece una experiencia de usuario fluida con un sistema de pasos para completar la transacción.

## 🚀 Características principales

- **Catálogo de productos**: Visualización de productos con información detallada
- **Proceso de pago por pasos**: Sistema de checkout dividido en pasos intuitivos
- **Integración con pasarela de pago**: Integración completa con un proveedor externo para procesamiento de pagos
- **Gestión de estado global**: Manejo eficiente del estado de la aplicación
- **Diseño responsivo**: Interfaz adaptable a diferentes dispositivos
- **Validación de formularios**: Sistema robusto de validación de datos

## 🛠️ Tecnologías utilizadas

### Frontend

- **React**: Biblioteca principal para construcción de interfaces
- **TypeScript**: Superset de JavaScript con tipado estático
- **Vite**: Herramienta de construcción ultrarrápida
- **Tailwind CSS**: Framework de CSS utility-first
- **Zustand**: Librería de gestión de estado
- **Axios**: Cliente HTTP para comunicación con el backend
- **Zod**: Librería de validación de esquemas
- **Lucide React**: Iconos modernos para React
- **Class Variance Authority**: Utilidad para manejo de variantes de clases
- **Tailwind Merge**: Utilidad para combinar clases de Tailwind

### Herramientas de desarrollo

- **ESLint**: Linter para mantener la calidad del código
- **Prettier**: Formateador de código
- **TypeScript ESLint**: Integración de ESLint con TypeScript
- **Vite Plugin React SWC**: Plugin de React optimizado con SWC

## 📁 Estructura del proyecto

```
product-paid-front/
├── src/
│   ├── api/                    # Configuración de cliente HTTP
│   │   └── api.ts
│   ├── components/             # Componentes de React
│   │   ├── layouts/           # Layouts reutilizables
│   │   ├── modalTransaction/  # Componentes del modal de transacción
│   │   │   └── steps/        # Pasos del proceso de pago
│   │   ├── ui/               # Componentes UI reutilizables
│   │   └── views/            # Vistas principales
│   ├── hooks/                 # Custom hooks
│   ├── interfaces/            # Interfaces TypeScript
│   ├── services/              # Servicios para comunicación con API
│   ├── store/                 # Gestión de estado con Zustand
│   │   ├── card.slice.ts     # Estado de tarjeta de crédito
│   │   ├── customer.slice.ts # Estado del cliente
│   │   ├── product.slice.ts  # Estado del producto
│   │   ├── transaction.slice.ts # Estado de transacción
│   │   └── ui.slice.ts       # Estado de UI
│   ├── utils/                 # Utilidades
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── .env.template              # Plantilla de variables de entorno
├── .prettierrc.json          # Configuración de Prettier
├── eslint.config.js          # Configuración de ESLint
├── package.json              # Dependencias y scripts
├── tsconfig.json             # Configuración de TypeScript
├── vite.config.ts            # Configuración de Vite
└── README.md                 # Este archivo
```

## 🔧 Instalación

### Prerequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Git

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone git@github.com:hugomendoza/product-paid-front.git
   cd product-paid-front
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.template .env
   ```

   Editar el archivo `.env` con los valores correspondientes:

   ```env
   VITE_API_URL=http://localhost:3000/api
   VITE_ID_PRODUCT=ID_DEL_PRODUCTO_A_MOSTRAR
   ```

4. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

## 📝 Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción
- `npm run lint`: Ejecuta el linter para verificar el código
- `npm run type-check`: Verifica los tipos de TypeScript

## 🔄 Flujo de la aplicación

### 1. **Visualización del producto**

- El usuario ve la información del producto cargada desde el API
- Puede ajustar la cantidad deseada

### 2. **Proceso de pago (Modal de transacción)**

**Paso 1: Datos de pago**

- Información del cliente (nombre, email, teléfono)
- Datos de la tarjeta de crédito
- Validación en tiempo real con Zod

**Paso 2: Resumen**

- Confirmación de los datos ingresados
- Desglose del precio (producto, tarifa base, envío)

**Paso 3: Procesamiento**

- Creación del cliente en el backend
- Generación de la transacción local
- Procesamiento con proveedor externo
- Actualización del estado en tiempo real

**Paso 4: Resultado**

- Confirmación del estado de la transacción
- Opción de volver al inicio

## 🏗️ Arquitectura

### Gestión de estado

La aplicación utiliza **Zustand** para manejar el estado global, dividido en slices:

- **UI Slice**: Maneja el estado de la interfaz (modales, pasos)
- **Product Slice**: Información del producto y cantidad
- **Card Slice**: Datos de la tarjeta de crédito
- **Customer Slice**: Información del cliente
- **Transaction Slice**: Estado y datos de la transacción

### Servicios

Los servicios encapsulan las llamadas a la API:

- `creditCard.service.ts`: Tokenización de tarjetas
- `customer.service.ts`: Gestión de clientes
- `delivery.service.ts`: Información de envío
- `product.service.ts`: Obtención de productos
- `provider.service.ts`: Integración con Wompi
- `transaction.service.ts`: Gestión de transacciones

### Hooks personalizados

- `useFetch`: Carga inicial de datos
- `useForm`: Manejo de formularios
- `useCounter`: Gestión del contador de cantidad
- `useCreateTransaction`: Lógica de creación de transacciones
- `useStatusTransaction`: Verificación del estado de transacciones
- `useZod`: Integración con validación Zod

## 🎨 Estilos y diseño

La aplicación utiliza **Tailwind CSS v4** con configuración personalizada:

- Sistema de diseño consistente
- Componentes UI reutilizables con variantes (CVA)
- Diseño responsivo mobile-first
- Utilidades personalizadas con `tailwind-merge`

## 🔒 Seguridad

- Tokenización de tarjetas de crédito
- Validación de datos en el cliente
- Variables de entorno para configuración sensible

## 🚀 Despliegue

### Build de producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Estándares de código

- Seguir la configuración de ESLint
- Mantener el formato con Prettier
- Escribir código en TypeScript
- Agregar tipos para todas las funciones y componentes
- Documentar funciones complejas

Desarrollado con ❤️ usando React y TypeScript
