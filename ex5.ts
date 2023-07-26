// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
export function fibonacci() {
    let a: number = 0;
    let b: number = 1;

    for (let i = 1; i <= 10; i++) {
        console.log(a);
        let proximo: number = a + b;
        a = b;
        b = proximo;
    }
}




