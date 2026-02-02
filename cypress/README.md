# Cypress E2E Automation Framework – SauceDemo

Proyecto de automatización **End-to-End (E2E)** utilizando **Cypress** y **JavaScript**, enfocado en buenas prácticas de **QA Automation** y **Page Object Model (POM)**.

El objetivo de este proyecto es demostrar habilidades prácticas en automatización de pruebas web, diseño de framework, manejo de datos de prueba y ejecución de flujos completos de negocio.

---

## 🚀 Aplicación bajo prueba (AUT)

- **URL:** https://www.saucedemo.com/
- **Tipo:** Web e-commerce demo
- **Funcionalidades cubiertas:**
  - Login (válido e inválido)
  - Gestión de productos
  - Carrito de compras
  - Checkout completo

---

## 🛠 Stack Tecnológico

- **Cypress**
- **JavaScript**
- **Node.js**
- **Page Object Model (POM)**
- **Fixtures (datos externos)**
- **Custom Commands**
- **E2E Testing**

---

## 📂 Estructura del Proyecto

```text
cypress/
├── e2e/
│   ├── cart.cy.js         # Tests de carrito
│   ├── checkout.cy.js    # Flujo E2E completo
│   └── login.cy.js        # Tests de login
├── fixtures/
│   ├── checkout.json
│   └── users.json 
├── pages/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── InventoryPage.js
│   └── LoginPage.js
└── support/
    ├── commands.js
    └── e2e.js
 
## 🧩 Buenas Prácticas Aplicadas

- ✔ Uso de **Page Object Model (POM)** para desacoplar lógica y selectores
- ✔ Selectores robustos con `data-test`
- ✔ Datos de prueba externalizados con **fixtures**
- ✔ **Custom command `cy.login()`** para reutilizar lógica
- ✔ Tests independientes y repetibles
- ✔ Validaciones basadas en comportamiento de negocio
- ✔ Proyecto preparado para ejecución en CI/CD

---

## 🧪 Casos de Prueba Automatizados

### 🔐 Autenticación
- Login exitoso con usuario válido
- Login fallido con credenciales inválidas
- Validación de mensajes de error

### 🛒 Carrito
- Agregar uno o varios productos al carrito
- Validación del badge del carrito
- Validación del contenido del carrito

### 💳 Checkout (E2E)
- Completar información del comprador
- Validar resumen de compra
- Finalizar orden exitosamente
- Confirmación de compra completada

---

🧪 Tipos de Tests Implementados
Smoke Tests
 
Validan que el core del negocio esté operativo:
- Login exitoso
- Agregar producto al carrito
- Eliminar producto del carrito
- End-to-End (E2E)
 
Simulan el comportamiento real del usuario:
- Login
- Agregar productos
- Checkout completo
- Confirmación de compra
 
▶️ Ejecución del Proyecto
Instalación
- npm install
Abrir Cypress
- npx cypress open
ejecutar Somoke Tests
- npx cypress run --env grepTags=@somoke
Ejecutar Suite Completa
- npx cypress run
- npx cypress run --spec "cypress/e2e/cart/*.cy.js" 

 
🎯 Objetivo del Framework
 
Este proyecto no busca cubrir todos los casos posibles, sino demostrar:
- Capacidad de análisis
- Criterio técnico
- Diseño mantenible
 
Enfoque profesional orientado a negocio
 
👤 Autor
Esteban Ogadri 
QA Analyst | QA Automation
Enfoque en pruebas funcionales, automatización y calidad en entornos SaaS