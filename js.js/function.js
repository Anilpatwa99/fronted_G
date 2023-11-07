
    let a = parseInt(prompt("Enter a positive number"))
    let isPrime = true
    if (a === 1){
        console.log(" 1 is not prime number")
    }
    else if(a > 1){
        for(let i =2 ; i< a ; i++){
            if (a% i == 0){
                isPrime = false
            }
        }
        if (isPrime) {
            console.log(`${a} is a prime number`);
            console.log('2')
            for(i = 3; i <= a; i++){
                for(j=2; j<=i; j++){
                    if(i%j==0){
                        break
                    }
                    if(j+1==i){
                        console.log(i)
                     }

                }
                
              
             }
            
        } else {
            console.log(`${a} is a not prime number`);
            console.log('2')
            for(i = 3; i <= a; i++){
                for(j=2; j<=i; j++){
                    if(i%j==0){
                        break
                    }
                    if(j+1==i){
                        console.log(i)
                     }

                }
                
              
             }
        }
    }
    else {
        console.log("The number is not a prime number.");
    }
   


