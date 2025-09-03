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

**a) Crear un nuevo repositorio en GitHub**
**b) Inicializar el repositorio con:**
**c) Un archivo `index.html` con un contenido básico a elección.**
**d) Un archivo `README.md` con el título **Práctica Formativa** y los apellidos de los participantes.**
**e) Realizar un _commit_ de este contenido en la rama principal.**

---

### 2) Crear una rama de la nueva característica

**a) Participante A (UI): crear la rama `feature/perfil-nuevo-ui`**
**b) Participante B (Backend): crear la rama `feature/perfil-nuevo-backend`**

---

### 3) Desarrollo independiente de ramas

**a) Participante A (UI)**

- Modificar `index.html` agregando un formulario para el ingreso de datos personales (usuario + contraseña).
- Realizar una llamada AJAX (o similar) para enviar los datos al backend.
- Documentar la llamada con los parámetros enviados.
- Commit con mensaje: `"Agregado de datos personales"`.

**b) Participante B (Backend)**

- Crear un archivo `.php` que reciba los datos enviados por el frontend.
- Verificar los datos en el backend.
- Devolver respuesta al frontend (`ok` o `error`).
- Commit con mensaje correspondiente.

---

### 4) Simulación de conflicto

**a) Participante A (UI)**

- Modificar `index.html`, agregando placeholders y cambiando nombres de elementos.
- Realizar _commit_.

**b) Participante B (Backend)**

- Modificar también `index.html`, agregando placeholders y cambiando nombres de elementos
- Commitear los cambios realizados

---

### 5) Merging y resolución de conflictos

**a) Participante(UI)**

- Intenta hacer un merge a main de su rama

**b) Participante B (backend)**

- Intenta hacer un merge de su rama

**c) En este caso git deberá informar de un conflicto**
**d) Ambos deben generar un issue simulando el informe del conflicto**
**e) Ambos deberán acordar las modificaciones elegidas de las dos ramas respondiendo a los issues generados**
**f) Remover los conflictos y realizar un commit 0**

---

### 6) Push y pull request

**a) Ambos deben pushear cambios al repositorio remoto**
**b) Ambos deben crear pull request para mergear sus ramas a main**
**c) Se deben aprobar las pull request (simulando como si un equipo en una reunión las aprobará)**
**d) Nota: los pull request se realizan directamente desde github al igual que los issues**

---

### 7) Limpieza (Clean up)

**a) Una vez hechos los merge a main se deben eliminar las dos ramas del repositorio.**
