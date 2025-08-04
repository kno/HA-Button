# HA Button - Home Assistant Button for Zepp OS

Una aplicación para relojes Zepp OS que permite interactuar con Home Assistant para activar botones de entrada (input buttons) directamente desde tu reloj inteligente.

## 🚀 Características

- **Control remoto**: Activa botones de Home Assistant desde tu reloj Zepp OS
- **Configuración personalizada**: Configura tu URL de Home Assistant, token de acceso y entidad
- **Botón personalizable**: Define el texto que aparece en el botón
- **Ejecución automática**: Opción para ejecutar la acción al iniciar la aplicación
- **Compatibilidad**: Soporta relojes Zepp OS con pantallas redondas (480px) y cuadradas (390px)

## 📋 Requisitos

- Reloj compatible con Zepp OS API 4.0+
- Instancia de Home Assistant accesible
- Token de acceso de larga duración de Home Assistant
- Entidad `input_button` configurada en Home Assistant

## 🛠️ Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/kno/HA-Button.git
cd HA-Button
```

2. Instala las dependencias:
```bash
npm install
```

3. Construye la aplicación usando las herramientas de desarrollo de Zepp OS

## ⚙️ Configuración

### Home Assistant

1. Crea un token de acceso de larga duración en Home Assistant:
   - Ve a tu perfil en Home Assistant
   - Scroll hasta "Tokens de acceso de larga duración"
   - Crea un nuevo token y guárdalo

2. Configura un `input_button` en tu `configuration.yaml`:
```yaml
input_button:
  open_gate:
    name: "Abrir Verja"
    icon: mdi:gate
```

### Aplicación Zepp OS

1. Instala la aplicación en tu reloj Zepp OS
2. Ve a la configuración de la aplicación
3. Completa los siguientes campos:
   - **HA URL**: La URL de tu instancia de Home Assistant (ej: `https://mi-casa.duckdns.org`)
   - **Token**: El token de acceso de larga duración que creaste
   - **Button label**: El texto que aparecerá en el botón (ej: "Abrir Verja")
   - **Entity**: El ID de la entidad del botón (ej: `input_button.open_gate`)
   - **Run on start**: Activa si quieres que la acción se ejecute al abrir la app

## 🎯 Uso

1. Abre la aplicación "HA Button" en tu reloj
2. Toca el botón para activar la entidad configurada en Home Assistant
3. La aplicación mostrará la respuesta de Home Assistant en pantalla

## 🏗️ Estructura del Proyecto

```
├── app.js                 # Punto de entrada principal de la aplicación
├── app.json              # Configuración de la aplicación
├── package.json          # Dependencias y metadatos del proyecto
├── app-side/             # Lógica del lado de la aplicación
│   └── index.js          # Servicio que maneja las peticiones HTTP
├── page/                 # Interfaz de usuario principal
│   ├── index.js          # Lógica de la página principal
│   └── index.[pf].layout.js # Layouts para diferentes tamaños de pantalla
├── setting/              # Configuración de la aplicación
│   ├── index.js          # Página de configuración
│   └── styles.js         # Estilos para la configuración
├── assets/               # Recursos estáticos (iconos, imágenes)
└── utils/                # Utilidades y configuración
```

## 🔧 Desarrollo

### Requisitos de desarrollo

- Node.js >= 22.0.0
- npm >= 10.9.2
- Zepp OS SDK

### Dependencias principales

- `@zeppos/zml`: Framework de interfaz para Zepp OS
- `@zeppos/device-types`: Tipos de dispositivos compatibles

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia ISC. Ve el archivo `LICENSE` para más detalles.

## ⚠️ Notas importantes

- Asegúrate de que tu Home Assistant sea accesible desde internet o desde la red local de tu reloj
- El token de acceso debe tener permisos para controlar la entidad `input_button` especificada
- La aplicación está diseñada específicamente para entidades `input_button` de Home Assistant

## 🆘 Solución de problemas

### Error "ERROR" en la respuesta
- Verifica que la URL de Home Assistant sea correcta y accesible
- Comprueba que el token de acceso sea válido
- Asegúrate de que la entidad especificada existe en Home Assistant

### El botón no aparece o no funciona
- Revisa la configuración en la aplicación
- Verifica que todos los campos estén completados correctamente
- Comprueba los logs de Home Assistant para ver si llegan las peticiones

---

Desarrollado por kNo - Para más información sobre desarrollo en Zepp OS, visita la [documentación oficial](https://docs.zepp.com/).