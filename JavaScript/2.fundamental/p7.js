/* nested loops 

1
1 2
1 2 3 
1 2 3 4
1 2 3 4 5

*/

for(let i=1; i <= 5; i++) {
    for(let j=1; j <= i; j++) {
        document.writeln(`<span> ${j} </span>`)
    }
    document.writeln(`<br>`)
}

/* 
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

for(let i=1; i <= 5; i++) {
    for(let j=1; j <= i; j++) {
        document.writeln(`<span> ${i} </span>`)
    }
    document.writeln(`<br>`)
}

/* 
1
2 3
4 5 6
7 8 9 10

*/

/* 
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
*/

/* 
         *
       *   *
     *   *   *
  *    *   *    *
*   *    *   *     *

*/


document.writeln(`<hr/>`)

for(let i=1; i<=5; i++) {
    for(let k=1;k<=(5-i);k++) {
        document.writeln(`&nbsp;&nbsp;`);
    }
        for(let j=1; j<= i; j++) {
            document.writeln(`* &nbsp;&nbsp;`);
        }
    document.writeln(`<br/>`);
}

/* 
    * * * * *
     * * * *
      * * *
       * *
        *  
*/