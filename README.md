# Nombre del Proyecto

Este repositorio contiene una aplicación Node.js desarrollada en TypeScript y construida utilizando Bazel. La aplicación utiliza el framework Express y está configurada para un desarrollo eficiente y una construcción reproducible con Bazel.

## Características

- Escrito en TypeScript.
- Uso del framework Express para el servidor web.
- Configuración de Bazel para la construcción y gestión de dependencias.
- Desarrollo interactivo con `ibazel` para la recarga en caliente.

## Pre-requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes:

- [Node.js](https://nodejs.org/)
- [Bazel](https://bazel.build/install)
- `ibazel` para desarrollo interactivo: `npm i --save-dev @bazel/ibazel`

## Instalación y Configuración

1. **Clona el Repositorio:**

```bash
git clone [URL_DEL_REPOSITORIO]
cd [NOMBRE_DEL_REPOSITORIO]
```

# Instala las Dependencias:

```bash
pnpm install
pnpm update
```

# Construye la Aplicación:
bazel build ...


# Desarrollo Interactivo:
ibazel run //app:main


# Estructura del Proyecto
WORKSPACE y BUILD: Archivos de configuración de Bazel.
app/: Contiene el código fuente de la aplicación Express en TypeScript.
app.ts: Archivo principal de la aplicación Express.
