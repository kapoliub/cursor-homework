let sum = 0;
let N = Math.floor(+prompt('Enter number #1 (empty field = 0)'));
console.log(N)

while(isNaN(N)){
    N = +prompt('Enter number #1');
}

let M = Math.floor(+prompt('Enter number #2 (bigger than #1)'));

while(isNaN(M) || M <= N){
    M = +prompt('Enter number #2 (bigger than #1)');
}

let skipEvenNumbers = confirm('Skip even numbers?\n "Cancel" - no \n "Ok" - yes')

if(skipEvenNumbers){
    for(let i = N; i <= M; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }

}
else{
    for(let i = N; i <= M; i++){
        sum += i;
    }
}

console.log(sum)



