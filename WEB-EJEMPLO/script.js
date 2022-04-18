console.log('Hola mundo');

/* let firstName = 'Miguel'

const lastName = 4 */

//diferencia entre var y let 

//su tipado es debil y dinamico

//7 tipos  string boolean  undefined null bigInt Symbol

//los primitivos son inmutables

//los objetos son mutalbes

console.log(restar(2,2))
const firstName = 'miguel'

firstName.toUpperCase()

console.log(firstName)

const list = []
list.push(1)
console.log(list)

const persona = {
    name:'Miguel',
    twittter:'@midudev',
    age:18,
    isDeveloper:true,
    links:['https://midu.tube','https://midudev.live']
}

console.log(persona.name)
console.log(persona.links[0])

const field = 'twittter'
console.log(persona['twittter'])

const sumar = (operando1 , operando2) => {
    console.log(operando1)
    console.log(operando2)
    return operando1+operando2
}

function restar(a,b){
    return a-b;
}



console.log(sumar(2,2))