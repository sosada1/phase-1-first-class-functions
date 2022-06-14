 
 function receivesAFunction (callback){
     callback();
     return ('return something random' )
 }

 function returnsANamedFunction() {
     return function namedFunction(){
         return ('something random');
     }
 }

 function returnsAnAnonymousFunction(){
     return function () {
         return ('mysterous return');
     }
 }