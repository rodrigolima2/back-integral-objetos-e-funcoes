const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;

        this.historicos.push({
            tipo: "Depósito",
            valor: ((valor) / 100).toFixed(2)
        });

        console.log(`Depósito de R$ ${((valor) / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo -= valor;

            this.historicos.push({
                tipo: "Saque",
                valor: ((valor) / 100).toFixed(2)
            });

            console.log(`Saque de R$ ${((valor) / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: ${((this.saldo) / 100).toFixed(2)}`);
        console.log("Histórico:");
        console.log(this.historicos);
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.depositar(20000);
contaBancaria.sacar(10000);
contaBancaria.depositar(100000);
contaBancaria.sacar(1000000);
contaBancaria.sacar(300000);
contaBancaria.sacar(20000);
contaBancaria.extrato();