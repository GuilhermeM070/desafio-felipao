let nome = "Guilherme";
let experienciaXp = 7000;
let nivel = "";

if (experienciaXp < 1000) {
    nivel = "Ferro"
} else if (experienciaXp >= 1001 && experienciaXp <= 2000) {
    nivel = "Bronze"
} else if (experienciaXp >= 2001 && experienciaXp <= 5000) {
    nivel = "Prata"	
} else if (experienciaXp >= 5001 && experienciaXp <= 7000) {
    nivel = "Ouro"
} else if (experienciaXp >= 7001 && experienciaXp <= 8000) {
    nivel = "Platina"
} else if (experienciaXp >= 8001 && experienciaXp <= 9000) {
    nivel = "Ascendente"
} else if (experienciaXp >= 9001 && experienciaXp <= 10000) {
    nivel = "Imortal"
} else if (experienciaXp >= 10001) {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);
