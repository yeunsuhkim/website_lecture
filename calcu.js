
const readLine = require('readline');
var err = true;
var ans = 0;

    const rl = readLine.createInterface({
        input : process.stdin,
        output : process.stdout,
    });
    let input = []
    console.log("계산기\n========");
    console.log("입력마다 공백처리를 해주세요.\n EX) 1 plu 1");
    console.log("plu min mul sub 지원\n");
    
    
    rl.on("line", (line) => {
        // 공백을 기준으로 
        input = line.split(' ');
        rl.close();
    });

    rl.on('close', () => {
        if (input.length == 3) {
            if (!isNaN(input[0]) && (input[1] == 'plu' || input[1] == 'min' || input[1] == 'mul' || input[1] == 'div'||input[1]=='mod') && !isNaN(input[2])) {
                switch (input[1]) {
                    case 'plu':
                        ans = Number(input[0]) + Number(input[2]);
                        break;
                    case 'min':
                        ans = Number(input[0]) - Number(input[2]);
                        break;
                    case 'mul':
                        ans = Number(input[0]) * Number(input[2]);
                        break;
                    case 'div':
                        ans = Number(input[0]) / Number(input[2]);
                        break;
                    case 'mod':
                        ans = Number(input[0]) % Number(input[2]);
                        break;
                }
                console.log("답 : "+ans);
                err = false;
                process.exit;
            } 
        } 
        if(err)console.log("Error : 잘못 입력하셨습니다.");
    });