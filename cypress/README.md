# Cypress E2E Automation Framework – SauceDemo
 
Framework de automatización **E2E** desarrollado con **Cypress**, aplicando buenas prácticas reales de QA Automation utilizadas en proyectos **SaaS / e-commerce**.
 
El objetivo del proyecto es demostrar **criterio técnico**, **estructura escalable** y **decisiones conscientes** según el contexto del sistema bajo prueba.
 
---
 
## 🚀 Stack Tecnológico
 
- Cypress (E2E Testing)
- JavaScript
- Page Object Model (POM)
- Custom Commands (`Cypress.Commands`)
- Fixtures para datos de prueba
 
---
 
## 📁 Estructura del Proyecto
 
```text
cypress/
├── e2e/
│   ├── login.cy.js        # Tests de login
│   ├── cart.cy.js         # Tests de carrito
│   └── checkout.cy.js    # Flujo E2E completo
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── fixtures/
│   ├── users.json
│   └── checkout.json
└── support/
    ├── commands.js
    └── e2e.js
 
🔐 Estrategia de Login
Login por UI (cy.login())
 
Utilizado para:
-Tests funcionales de login
- Validaciones de error
- Sistemas sin API de autenticación (caso SauceDemo)
 
Implementado mediante Page Object Model.
- cy.login("standard");
SauceDemo no posee una API real de autenticación.
Por este motivo, el login por API se contempla a nivel conceptual, pero el flujo real utiliza UI.
 
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
- npx cypress run --spec "cypress/e2e/cart/*.cy.js" para ejecutar un solo spect


✅ Buenas Prácticas Aplicadas
- Separación de responsabilidades (POM)
- Datos desacoplados mediante fixtures
- Custom commands reutilizables
- Assertions funcionales (no visuales)
- Decisiones técnicas basadas en contexto real
 
🎯 Objetivo del Framework
 
Este proyecto no busca cubrir todos los casos posibles, sino demostrar:
- Capacidad de análisis
- Criterio técnico
- Diseño mantenible
 
Enfoque profesional orientado a negocio
 
👤 Autor
 
Ray Blanco
QA Analyst | QA Automation
Enfoque en pruebas funcionales, automatización y calidad en entornos SaaS