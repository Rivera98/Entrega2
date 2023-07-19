import "./style.css";

interface Musica {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}

const musicaA: Musica = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
};
const musicaB: Musica =  {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: "🎸 Rock",
};
const musicaC: Musica = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: " 🤘 Hard Rock",
};
const musicaD: Musica = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: "🎼 Clásica",
};
const musicaE: Musica = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: "🎸 Rock",
};

console.log (musicaA);
console.log (musicaB);
console.log (musicaC);
console.log (musicaD);
console.log (musicaE);
