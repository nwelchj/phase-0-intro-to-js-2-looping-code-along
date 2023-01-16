startnumber == 10

function countDown () {
    for (let i = 0; i <=10; i++)
        console.log(i)
}



countDown ();

const names = [ "Guadalupe", "Ollie", "Aki"];

function writeCards ([names],x) {
    for (let i = 0; i <names.length; i++) {
    console.log (`"Thank you, ${names[i]},for the wonderful ${x} gift!"`);
    }
    names;
}
writeCards ([names], `Birthday`);
const  messages = [writeCards ([names],`Birthday`)];
messages[2];
