// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque = '';

        // Estrutura de decisão para determinar o tipo de ataque
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque básico';
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}


const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
const heroi2 = new Heroi('Merlin', 150, 'mago');

heroi1.atacar(); 
heroi2.atacar(); 
