let jogadores = require('../bancoDeDados');
let controleDeJogadas = 0;

const vezDeQuem = (req, res)=>{
    

    res.send(`É a vez de ${jogadores[controleDeJogadas]} jogar!`);
    if (controleDeJogadas >= (jogadores.length -  1)) {
        controleDeJogadas = 0;
    }
    controleDeJogadas ++;

};
const removerJogadores = (req, res)=>{

    let jogadorRemovido;
    const { indice } = req.query;

    if (indice) {

        if (indice > jogadores.length - 1) {

            res.send(`Não existe jogador no índice informado ${indice} para ser removido.`);

            return;

        }else{

            jogadorRemovido = jogadores.splice(indice , 1)
            res.send(`O jogador ${jogadorRemovido} foi removido ${jogadores}`)
            

        }
    }
    


};
const adicionarJogadores = (req, res)=>{
    const {nome, indice} = req.query;

    nome.slice(0,1, (nome[0].toUpperCase()))

    if (indice >= jogadores.length) {
        res.send(`O índice informado ${indice} não existe no array. Novo jogador não foi adicionado.`)
        return;
    }else{

        if (indice) {
            console.log(nome);
            jogadores.slice(indice, 0, nome);
            res.send(jogadores)
            
        }else{
            console.log(nome);

            jogadores.push(nome)
            res.send(jogadores)
        }
        
    };


   
};

module.exports = {
    vezDeQuem,
    removerJogadores,
    adicionarJogadores
}