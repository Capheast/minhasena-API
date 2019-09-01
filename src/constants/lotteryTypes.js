export const lotofacil = {
    title: 'Lotofácil',
    color: '#930089',
    constant: 'lotofacil',
    howToPlay: 'A Mega-Sena paga milhões para o acertador dos 6 números sorteados. Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre os 60 disponíveis no volante de apostas. Para realizar o sonho de ser o próximo milionário, você deve marcar de 6 a 15 números do volante, podendo deixar que o sistema escolha os números para você (Surpresinha) e/ou concorrer com a mesma aposta por 2, 4 ou 8 concursos consecutivos (Teimosinha).',
    configs: {
        min: 1,
        max: 25,
        tries: [11, 15]
    }

}
export const megaSena = {
    title: 'Mega Sena',
    color: '#209869',
    howToPlay: "A Lotofácil é, como o próprio nome diz, fácil de apostar e principalmente de ganhar. Você marca" +
        " entre 15 a 18 números, dentre os 25 disponíveis no volante, e fatura o prêmio se acertar 11, 12, 13, 14 ou 15 números. Pode ainda deixar que o sistema escolha os números para você por meio da Surpresinha, ou concorrer com a mesma aposta por 3, 6, 9 ou 12 concursos consecutivos através da Teimosinha.",
    constant: 'mega-sena',
    configs: {
        min: 1,
        max: 60,
        tries: [6, 15]
    }
}
export const quina = {
    title: 'Quina',
    color: '#260085',
    howToPlay: "Concorra a prêmios grandiosos com a Quina: basta marcar de 5 a 15 números dentre os 80 disponíveis no volante e torcer. Caso prefira o sistema pode escolher os números para você através da Surpresinha." +
        +"Ganham prêmios os acertadores de 2, 3, 4 ou 5 números. Você ainda pode concorrer com a mesma aposta por 3, 6, 12, 18 ou 24 concursos consecutivos com a Teimosinha.",
    constant: 'quina',
    configs: {
        min: 1,
        max: 80,
        tries: [5, 15]
    }
}
export const duplaSena = {
    title: 'Dupla Sena',
    color: '#a61324',
    constant: 'dupla-sena',
    configs: {
        min: 1,
        max: 50,
        tries: [6, 15]
    }
}
export const lotomania = {
    title: 'Lotomania',
    color: '#f78100',
    constant: 'lotomania',
    configs: {
        min: 0,
        max: 99,
        tries: [15, 20]
    }
}
export const timenania = {
    title: 'Timemania',
    color: '#00ff48',
    constant: 'timemania',
    configs: {
        min: 3,
        max: 10,
    }
}
export const diaDeSorte = {
    title: 'Dia de Sorte',
    color: '#cb852b',
    constant: 'dia-de-sorte',
    configs: {
        min: 7,
        max: 15,
    }
}
