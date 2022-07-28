"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let heroesFuerza;
    (function (heroesFuerza) {
        heroesFuerza[heroesFuerza["Acuaman"] = 0] = "Acuaman";
        heroesFuerza[heroesFuerza["Batman"] = 1] = "Batman";
        heroesFuerza[heroesFuerza["Flash"] = 5] = "Flash";
        heroesFuerza[heroesFuerza["Superman"] = 100] = "Superman";
    })(heroesFuerza || (heroesFuerza = {}));
    const fuerzaFlas = heroesFuerza.Flash;
    const fuerzaSuperman = heroesFuerza.Superman;
    const fuerzaBatman = heroesFuerza.Batman;
    const fuerzaAcuaman = heroesFuerza.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
