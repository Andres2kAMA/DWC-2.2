var sudokuValido = [
    [5, 3, 4,   6, 7, 8,    9, 1, 2],
    [6, 7, 2,   1, 9, 5,    3, 4, 8],
    [1, 9, 8,   3, 4, 2,    5, 6, 7],

    [8, 5, 9,   7, 6, 1,  4, 2, 3],
    [4, 2, 6,   8, 5, 3,  7, 9, 1],
    [7, 1, 3,   9, 2, 4,  8, 5, 6],

    [9, 6, 1,   5, 3, 7,  2, 8, 4],
    [2, 8, 7,   4, 1, 9,  6, 3, 5],
    [3, 4, 5,   2, 8, 6,  1, 7, 9],
];


var sudokuInvalido = [
    [5, 3, 4,   6, 7, 9,    8, 1, 2],
    [6, 7, 2,   1, 9, 5,    3, 4, 7],
    [6, 9, 8,   3, 4, 2,    7, 6, 5],

    [8, 5, 9,   7, 6, 1,    4, 2, 1],
    [4, 2, 6,   8, 5, 3,    7, 8, 1],
    [7, 1, 3,   9, 2, 4,    8, 5, 6],

    [9, 6, 1,   5, 3, 7,    2, 8, 4],
    [2, 8, 7,   4, 1, 9,    6, 3, 5],
    [3, 4, 5,   2, 8, 6,    1, 8, 8],
];

function validarFilas(sudokuParaComprobar, nombreDelSudoku) {
    for (let i = 0; i < sudokuParaComprobar.length; i++) {

        for (let j = 0; j < sudokuParaComprobar[i].length; j++) {

            var filaNumeroElegido = i;
            var columnaNumeroElegido = j;

            for (let k = 0; k < sudokuParaComprobar[i].length; k++) {
                if (filaNumeroElegido == i && columnaNumeroElegido == k) {

                } else if (sudokuParaComprobar[filaNumeroElegido][columnaNumeroElegido] == sudokuParaComprobar[i][k]) {

                    console.log(nombreDelSudoku + ": error en la fila " + (i + 1) + " por la repetición del valor " + sudokuParaComprobar[i][k]);

                }
            }

        }
    }
}

function validarColumnas(sudokuParaComprobar, nombreDelSudoku) {
    for (let i = 0; i < sudokuParaComprobar.length; i++) {

        for (let j = 0; j < sudokuParaComprobar[i].length; j++) {

            var columnaNumeroElegido = j;
            var filaNumeroElegido = i;


            for (let k = 0; k < sudokuParaComprobar[i].length; k++) {
                if (filaNumeroElegido == i && columnaNumeroElegido == k) {

                } else if (sudokuParaComprobar[columnaNumeroElegido][filaNumeroElegido] == sudokuParaComprobar[k][i]) {

                    console.log(nombreDelSudoku + ": error en la columna " + (i + 1) + " por la repetición del valor " + sudokuParaComprobar[k][i]);

                }
            }
        }
    }
}

function validarCuadrante(sudokuParaComprobar, nombreDelSudoku) {
    for (let i = 0; i < sudokuParaComprobar.length; i++) {

        for (let j = 0; j < sudokuParaComprobar[i].length; j++) {
            var filaNumeroElegido = i;
            var columnaNumeroElegido = j;

            if (i >= 0 && i <= 2) {

                if (j >= 0 && j <= 2) {
                    comprobarCuadranteIndividual(0, 0, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 1,nombreDelSudoku);

                } else if (j >= 3 && j <= 5) {
                    comprobarCuadranteIndividual(0, 3, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 2,nombreDelSudoku);
                } else {
                    comprobarCuadranteIndividual(0, 6, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 3,nombreDelSudoku);
                }

            } else if (i >= 3 && i <= 5) {

                if (j >= 0 && j <= 2) {
                    comprobarCuadranteIndividual(3, 0, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 4,nombreDelSudoku);
                } else if (j >= 3 && j <= 5) {
                    comprobarCuadranteIndividual(3, 3, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 5,nombreDelSudoku);
                } else {
                    comprobarCuadranteIndividual(3, 6, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 6,nombreDelSudoku);
                }

            } else {

                if (j >= 0 && j <= 2) {
                    comprobarCuadranteIndividual(6, 0, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 7,nombreDelSudoku);
                } else if (j >= 3 && j <= 5) {
                    comprobarCuadranteIndividual(6, 3, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 8,nombreDelSudoku);
                } else {
                    comprobarCuadranteIndividual(6, 6, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, 9,nombreDelSudoku);
                }

            }
        }
    }
}

function comprobarCuadranteIndividual(filaCuadrante, columnaCuadrante, filaNumeroElegido, columnaNumeroElegido, sudokuParaComprobar, cuadrante,nombreDelSudoku) {


    for (let i = filaCuadrante; i < (filaCuadrante + 3); i++) {
        for (let j = columnaCuadrante; j < (columnaCuadrante + 3); j++) {
            if (filaNumeroElegido == i && columnaNumeroElegido == j) {

            } else if (sudokuParaComprobar[filaNumeroElegido][columnaNumeroElegido] == sudokuParaComprobar[i][j]) {

                console.log(nombreDelSudoku + ": error en cuadrante " + cuadrante + " por la repetición del valor " + sudokuParaComprobar[i][j]);

            }

        }
    }
}

class comprobadorSudoku {
    constructor(sudokuAComprobar, nombreDelSudoku) {
        this.sudokuAComprobar = sudokuAComprobar;
        this.nombreDelSudoku = nombreDelSudoku;
    }

    validarSudoku() {
        console.log(this.nombreDelSudoku);
        console.log("Procedemos a comprobar las filas del sudoku");
        validarFilas(this.sudokuAComprobar, this.nombreDelSudoku);
        console.log(' ');
        console.log("Procedemos a comprobar las columnas del sudoku");
        validarColumnas(this.sudokuAComprobar, this.nombreDelSudoku);
        console.log(' ');
        console.log("Procedemos a comprobar el cuadrante del sudoku");
        validarCuadrante(this.sudokuAComprobar, this.nombreDelSudoku);
        console.log(' ');
        console.log(' ');
    }
}

sudokuValido = new comprobadorSudoku(sudokuValido, "Sudoku válido");
sudokuValido.validarSudoku();

sudokuInvalido = new comprobadorSudoku(sudokuInvalido, "Sudoku inválido");
sudokuInvalido.validarSudoku();






