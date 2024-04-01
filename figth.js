// Luta com Esqueletos

let nomeEsqueleto = "Esqueleto Arqueiro"
let poderEsqueleto = "Flexa"
let vidaEsqueleto = 800;
let danoEsqueleto = 50;
let danoEsqueleto2 = 70
let hp = vidaPersonagem;
let dano = danoPersonagem


while (vida > 0 && vidaEsqueleto > 0) {
    alert("Sua vez de jogar os dados");
    let dano = prompt(
        "Escolha entre: (1) - ataque normal, (2) - combo ou (3) - ataque especial "
    );
    console.log(Math.floor(Math.random() * 6 + 1));

    alert("Você jogou o dado. O número seu é:" + numero)

    if (dano <= "1") {
        vidaEsqueleto -= dano;
        alert(
            "Você deferiu um ataque simples com sucesso. Vida do Esqueleto:" + vidaEsqueleto
        );
    }

    if (dano == "2") {
        var chance = Match.random();
        if (dado > 2) {
            let danoE = dano * 1.5;
            let vidaE = vidaEsqueleto - dano * 1.5;

            alert(
                "Você deferiu um ataque combo com sucesso. O" + nomeEsqueleto + "sofreu" + danoE + "de dano. Vida restante:" + vidaE
            );
            vidaEsqueleto = vidaE
        } else {
            alert(
                "Você deferiu um atauqe no" + nomeEsqueleto + "mas errou. O" + nomeEsqueleto + "não sofreu dano! Na Proxima seja mais PRECISO" + vidaE
            );
        }
    }
    if (dano == "3") {
        var chance = Match.random();
        if (dado > 3) {
            let danoE = dano * 2;
            let vidaE = vidaEsqueleto - dano * 2;

            alert(
                "Você deferiu um ataque Especial com sucesso. O" + nomeEsqueleto + "sofreu" + danoE + "de dano. Vida restante:" + vidaE
            );
            vidaEsqueleto = vidaE
        } else {
            alert(
                "Você deferiu um ataque no" + nomeEsqueleto + "mas errou. O" + nomeEsqueleto + "não sofreu dano! Na Proxima seja mais PRECISO" + vidaE
            );
        }
    }

    alert(
        "É a Vez do" + nomeEsqueleto + ":"
    );
    var chance = Match.random() < 0.5;
    if (chance >= 0.5) {
        vidaPersonagem -= 60;
        alert(
            "O" + nomeEsqueleto + "lhe atacou. Sua vida" + nome + "é de" + vidaPersonagem
        );
    } else {
        alert(
            "O" + nomeEsqueleto + "atacou mas falhou! Vocè teve sorte e continua com" + vidaPersonagem + "de Vida"
        );
    }
}
if (vidaPersonagem <= 0) {
    alert(
        "Você perdeu essa batalha, Se fortalaca e volte novamente. Sua jornada acaba por aqui"
    );
    alert(
        "Tente Novamente!"
    );
} else {
    alert(
        "Recompensa pela vitória: colar de ossos que lhe dá + 200 de Hp e + 30 de dano"
    );
    hp = hp + 200;
    dano = dano + 30;

    alert(
        "Vida " + hp + " e seu dano é " + dano
    );
}

alert(
    "Finalmente o Exército foi conquistado! Uma sesação de paz invade cada centímetro da câmara... Num piscar de olhos você está em uma planície muito peculiar e ao mesmo tempo familiar também... você percebe que está diante de três portas..."

);



