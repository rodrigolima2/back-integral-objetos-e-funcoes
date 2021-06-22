const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ], imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$ ${((this.calcularTotalAPagar()) / 100).toFixed(2)}`);
        console.log(`Desconto: R$ ${((this.calcularDesconto()) / 100).toFixed(2)}`)
    }, addProduto(produto) {
        let jaTemNoCarrinho = false;

        for (item of this.produtos) {
            if (item.id == produto.id) {
                item.qtd += produto.qtd;
                jaTemNoCarrinho = true;
            }
        }

        if (!jaTemNoCarrinho) {
            this.produtos.push(produto);
        }
    }, imprimirDetalhes: function () {
        for (item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} und - ${((item.precoUnit * item.qtd) / 100).toFixed(2)}`);
        }

        this.imprimirResumo();
    }, calcularTotalDeItens: function () {
        let res = 0;
        for (item of this.produtos) {
            res += item.qtd;
        }
        return res;
    }, calcularTotalAPagar: function () {
        let res = 0;
        for (item of this.produtos) {
            res += item.precoUnit * item.qtd;
        }
        return res;
    }, calcularDesconto: function () {
        let desconto1 = 0;
        let desconto2 = this.calcularTotalAPagar();

        if (desconto2 > 10000) {
            desconto2 *= 0.10;
        } else {
            desconto2 = 0;
        }

        if (this.calcularTotalDeItens() > 3) {
            desconto1 = this.produtos[0].precoUnit;

            for (item of this.produtos) {
                if (desconto1 > item.precoUnit) {
                    desconto1 = item.precoUnit;
                }
            }
        }

        if (desconto1 > desconto2) {
            return desconto1;
        } else {
            return desconto2;
        }
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.imprimirResumo();
carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();