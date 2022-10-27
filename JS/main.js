function App(str) {
    let arr = str.split('');
    let newArr = arr.sort().join('')
    if(newArr.includes('oo') == true || newArr.includes('xx') == true){
        console.log(true);

    }else{
        console.log(false);
    }
}
App('asbcgodjdjkox');


// join    massivdan string
// split   stringdan massiv
