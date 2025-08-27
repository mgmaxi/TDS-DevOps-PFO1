# Práctica Formativa Obligatoria N° 1

# Participantes: Haedo, Melani Ghirardi, Siares, Kalás

En esta práctica vamos a centrarnos en el flujo de trabajo colaborativo del control de versiones generando ramas (_branching_), mezclándolas (_merging_) y generando y resolviendo conflictos en el flujo de trabajo.

---

## Objetivos de la práctica

- Entender cómo se crean ramas de Git y se realiza un _switch_ entre las mismas
- Practicar el desarrollo en paralelo entre ramas separadas
- Identificar y resolver conflictos en el _merge_
- Entender la importancia de los mensajes claros en los _commit_
- Familiarizarse con el flujo de trabajo y los _pull request_

---

## Pasos de realización

### 1) Crear y configurar un repositorio

- Crear un nuevo repositorio en GitHub.
- Inicializar el repositorio con:
  - Un archivo `index.html` con un contenido básico a elección.
  - Un archivo `README.md` con el título **Práctica Formativa** y los apellidos de los participantes.
- Realizar un _commit_ de este contenido en la rama principal.

---

### 2) Crear una rama de la nueva característica

- Participante A (UI): crear la rama `feature/perfil-nuevo-ui`
- Participante B (Backend): crear la rama `feature/perfil-nuevo-backend`

---

### 3) Desarrollo independiente de ramas

**a) Participante A (UI)**

1. Modificar `index.html` agregando un formulario para el ingreso de datos personales (usuario + contraseña).
2. Realizar una llamada AJAX (o similar) para enviar los datos al backend.
3. Documentar la llamada con los parámetros enviados.
4. Commit con mensaje: `"Agregado de datos personales"`.

**b) Participante B (Backend)**

1. Crear un archivo `.php` que reciba los datos enviados por el frontend.
2. Verificar los datos en el backend.
3. Devolver respuesta al frontend (`ok` o `error`).
4. Commit con mensaje correspondiente.

---

### 4) Simulación de conflicto

**a) Participante A (UI)**

- Modificar `index.html`, agregando placeholders y cambiando nombres de elementos.
- Realizar _commit_.

**b) Participante B (Backend)**

- Modificar también `index.html`, agregando placeholders y cambiando nombres de elem
