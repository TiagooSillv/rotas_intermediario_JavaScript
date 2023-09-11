const imoveis = require('../dados/imoveis')

const getPorId = (req, res) => {
    const { id } = req.params;
    console.log('passou aque');
    const buscadorDeImoveis = imoveis.find((imovel)=>{
        return imovel.id == id;
    });
    res.send(buscadorDeImoveis);
};
const get = (req, res)=>{
    
};


module.exports = {

    getPorId,
    get,
}