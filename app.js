const eazy = new eazyHttp;

eazy.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
    if(err){
        console.log("error "+err);
    }else{
        console.log(response);
    }
});

