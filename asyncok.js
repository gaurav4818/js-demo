function fun1()
{
    let ans = new Promise(function(resolve,reject){
        setTimeout(() => {
            const error =false;
            if(!error)
            {
               // console.log("resolved!");
                resolve("Resolved");
            }
            else{
                //console.log("not resolved!");
                reject("Not Resolved!");
            }
        }, 2000);
    })
    console.log(ans);

}
fun1();