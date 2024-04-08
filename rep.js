let num = "";
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function stars(){
    
   
        rl.question('숫자를 입력하세요', (answer) => {
            let i=0;
            while(i++<Number(answer)){
             num+="*";
            }
            console.log(num);
            rl.close();
          });
}

stars();
    