function eazyHttp(){
    this.http = new XMLHttpRequest();
}

eazyHttp.prototype.get = function(url,callback){
    this.http.open('GET',url,true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status===200){
            callback(null,self.http.responseText);
        }else{
            callback(self.http.status);
        }
    }
    this.http.send();
}