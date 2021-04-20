import { start } from './api/server';
start();

// /**
//  * Obtiene la media de tres números
//  * @param a - Primer número
//  * @param b - Segundo número
//  * @param c - Tercer número
//  * 
//  * @public
//  */
// export function avg(a: number, b: number, c: number): number {
//     return sum3(a, b, c) / 3;
// }

// /**
//  * Suma tres números
//  * @param a - Primer número
//  * @param b - Segundo número
//  * @param c - Tercer número
//  * 
//  * @beta
//  */
// export function sum3(a: number, b: number, c: number): number {
//     return sum2(a, sum2(b, c));
// }

// /**
//  * Suma dos números
//  * @param a - Primer número
//  * @param b - Segundo número
//  * 
//  * @internal
//  */
// export function sum2(a: number, b: number): number {
//     const sum = a + b;
//     return sum;
// }

// import { prueba } from './db/connection';

// void prueba.pruebaConexion();
