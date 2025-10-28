  /* 
             lexico graphical comparision
            a  b
            a > b     1    a-z
            a < b    -1
            a === b   0
        */

         function compare(a,b) {
            if(a > b) {
                return 1;
            } else if ( a < b ) {
                return -1;
            } else if (a === b) {
                return 0;
            } else {
                return "Check your input";
            }
        }

         console.log('compare("hello","world") =', compare("hello", "world"))
        console.log('compare("world","hello") =', compare("world", "hello"))
        console.log('compare("world","world") =', compare("world", "world"))
