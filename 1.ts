import PromptSync from "prompt-sync";
import { onetoteen } from "./ex1";
import { par } from "./ex2";
import { impar } from "./ex3";
import { tabuada } from "./ex4";
import { fibonacci } from "./ex5";
import { pares20 } from "./ex6";

const prompt = PromptSync();

let exe: number;
let continuar: string;

do {
    exe = parseInt(prompt("Digite um número que represente um exercício de 1 a 6: "));

    switch (exe) {
        case 1:
            onetoteen();
            break;

        case 2:
            par();
            break;

        case 3:
            impar();
            break;

        case 4:
            tabuada();
            break;

        case 5:
            fibonacci();
            break;

        case 6:
            pares20();
            break;

        default:
            console.log("Digite uma opção valida!");
            break;
    }

    continuar = prompt("Deseja Continuar ver outros exercícios? Digite (S) para sim e (N) para não: ")

} while (continuar.toLocaleUpperCase() === "S");

