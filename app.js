const eazy = new eazyHttp;

//GET Method - ALL Records
// eazy.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
//     if(err){
//         console.log("error "+err);
//     }else{
//         console.log(response);
//     }
// });

//GET Method -Single Record
eazy.get('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err){
        console.log("error "+err);
    }else{
        console.log(response);
    }
});
