/* loops 
    1. for loop
    2. while
    3. do while

    - array, object, entry 
    iterators 
        for-each
        for-of
        for-in
    generators
        map
*/

// for(initilization;condition;inc/dec)

for(let i=3; i <= 9; i++) {
    document.writeln(`<p>  ${i} paragraph </p>`);
}

/* 
    init;
    while(condition) {
        statement
        inc/dec
    }
*/

let x = 12;
let j =1;
while(j <= 10) {
document.writeln(`<p> ${x} * ${j} = ${ x * j} </p>`)
    j++;
};

/* 
    init;
    do {
        code
        inc/dec
    }while(condition)
*/

let y = 34;
let k = 1;
do {
    document.writeln(`<p> ${y} * ${k} = ${ y * k} </p>`)
    k++;
}while(k <= 10);