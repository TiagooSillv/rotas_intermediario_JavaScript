
const soma = (req, res)=>{
    let resultado = 0;
    const {num1, num2} = req.query;

    if (num1) {
        if (num2) {
            
            resultado = Number(num1) + Number(num2);
            
        }
    }
    res.send(String(resultado));
    
};
const subtrair = (req, res)=>{
    let resultado = 0;
    const {num1, num2} = req.query;

    if (num1) {
        if (num2) {
            
            resultado = Number(num1) - Number(num2);
            
        }
    }
    res.send(String(resultado));
    
};
const multiplicar = (req, res)=>{
    let resultado = 0;
    const {num1, num2} = req.query;

    if (num1) {
        if (num2) {
            
            resultado = Number(num1) * Number(num2);
            
        }
    }
    res.send(String(resultado));
    
};
const dividir = (req, res)=>{
    let resultado = 0;
    const {num1, num2} = req.query;

    if (num1) {
        if (num2) {
            
            resultado = Number(num1) / Number(num2);
            
        }
    }
    res.send(String(resultado));
    
};


module.exports = {
    soma,
    subtrair,
    multiplicar,
    dividir
}