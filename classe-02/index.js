const carro = {
    ligado: false,
    velocidade: 0,

    mensagens: function (option) {
        if (option == 0) {
            console.log("Este carro já está ligado.");
        } else if (option == 1) {
            console.log("Este carro já está desligado.");
        } else if (option == 2) {
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        } else if (option == 3) {
            console.log(`Carro desligado. Velocidade: ${this.velocidade}.`);
        } else if (option == 4) {
            console.log("Não é possível acelerar um carro desligado.");
        } else if (option == 5) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else if (option == 6) {
            console.log("Não é possível desligar o carro em velocidade.");
        } else {
            console.log("Ocorreu um erro.");
        }
    }, ligar: function () {
        if (this.ligado) {
            this.mensagens(0);
        } else {
            this.ligado = true;
            this.mensagens(2);
        }
    }, desligar: function () {
        if (!this.ligado) {
            this.mensagens(1);
        } else if (this.velocidade > 0) {
            this.mensagens(6);
        } else {
            this.ligado = false;
            this.velocidade = 0;
            this.mensagens(3);
        }
    }, acelerar: function () {
        if (!this.ligado) {
            this.start();
        } else {
            this.velocidade += 10;
            this.mensagens(2);
        }
    }, desacelerar: function () {
        if (!this.ligado) {
            this.mensagens(5);
        } else {
            if (this.velocidade == 0) {
                this.stop();
            }
            else {
                this.velocidade -= 10;
                this.mensagens(2);
            }
        }
    }, start: function () {
        if (!this.ligado) {
            this.ligado = true;
            this.velocidade += 10;
            this.mensagens(2);
        }
    }, stop: function () {
        if (this.velocidade == 0) {
            this.ligado = false;
            this.mensagens(3);
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();
carro.desacelerar();