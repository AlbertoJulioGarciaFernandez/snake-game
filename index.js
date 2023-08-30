/* Función constructora para crear instancias de la serpiente. */
function Snake(x, y) {
    this.x = x;
    this.y = y;

    /* Método que dibuja la serpiente en el tablero. */
    this.draw = function() {
        // Usamos las comillas francesas para situar a la serpiente 
        // según las coordenadas pasadas por parámetro.
        var snakeCell = document.querySelector(`.row${this.x} .col${this.y}`);
        // Añadimos la clase snake
        snakeCell.classList.add('snake');
    }
}

var snake = new Snake(10, 10);
snake.draw();