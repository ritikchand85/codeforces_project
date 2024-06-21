// let ritik=new Promise((resolve,reject)=>{
//     resolve(console.log("my name is ritik"));
//     reject(new Error("error occured"));
// });

// ritik.then((response)=>{
// console.log("resolve");
// }).catch((error)=>{
//     console.log(error);
// });

/*async function greet(data){
return new Promise((resolve,reject)=>{
    resolve(data);
    reject(new Error("error occured"));
});
}

async function yes(){
    
    try{
        const p=await greet("hello");
       console.log(p);
    }
    catch(error){
         console.log(new Error("error occured"));
    }
}

yes();*/

// fetch(url).then((response)=>{
//     if(!response.ok){
//         throw new Error("error occured");
//     }
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch(err){
//     console.log(err);
// }
