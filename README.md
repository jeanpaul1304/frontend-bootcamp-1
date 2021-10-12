# Detalle

Desarrolle una interfaz para resolver la siguiente casuistica:

Se requiere clasificar a un grupo de maestros en 2 rangos bajo su experiencia laboral:

- Se deberá generar una interfaz que permita ingresar los siguientes datos del maestro:
    - Nombres
    - Apellidos
    - Edad
    - Especialidad (selector)
        - Matematica (3 unidades)
        - Programación (4 unidades)
        - Física (3 unidades)
        - Arte (3 unidades)
        - Química (2 unidades)
    - Años de experiencia
    - URL de LinkedIn (opcional)
- Una vez ingresados los datos, estos serán validados, todos los campos deben ser llenados a excepción de "URL de LinkedIn".
- Se multiplicarán los años de experiencia por las unidades que refleja cada especialidad y este será el **Indice** del maestro. Se agregarán 10 puntos al Indice si el usuario ingreso la URL de su LinkedIn.
- Cada maestro será agregado/mostrado en un listado donde se mostrarán su Nombre, Especialidad, Indice y una sección de acciones.
- La sección de acciones mostrara 4 botones:
    - Subir Indice: El cual agregará 10% de su indice actual y será representado por un "+".
    - Bajar Indice de maestro: El cual disminuirá 10% de su indice actual y será representado por un "-".
    - Eliminar registro: Se quitará el registro de la lista.
    - Enviar a validación: Enviará un servicio POST al endpoint de prueba. Se evaluará si el indice del maestro se encuentra por encima de 20, en caso de ser mayor se enviará la data del maestro al servicio con el método POST y se mostrará una ventana de felicitación. En caso de ser menor se recomendará volver a evaluarlo.
- Al hacer mouse over sobre la fila, se mostrarán los datos ocultos del profesor.

### Notas:

- Las validaciones se pueden realizar a nivel javascript o nivel html
- El Indice del maestro es clave en el ejercicio ya que sobre el se efectuan las diferentes condicionales
- El endpoint a utilizar es el siguiente: https://jsonplaceholder.typicode.com/todos/
- Iniciaremos compartiendo el link del repositorio base sobre el que trabajaremos y se considerará como respuesta hasta el ultimo commit entregado dentro de la hora y media de prueba (1.5h)

## Recomendaciones:

- Intente usar buenas practicas de programación y separar su código en commits.
- La interfaz puede ser realizada a su discreción, en esta etapa, se valorará mas su calidad de código, métodos usados y aplicación de las características de javascript aprendidas.
- Do your best! 💪
