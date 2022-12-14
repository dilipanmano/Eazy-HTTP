function eazyHttp(){
    this.http = new XMLHttpRequest();
}

//GET Method
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

//POST Method
eazyHttp.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('content-type','application/json');
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

//PUT Method
eazyHttp.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('content-type','application/json');
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

//DELETE Method
eazyHttp.prototype.delete = function(url,callback){
    this.http.open('DELETE',url,true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status===200){
            callback(null,'Post Deleted');
        }else{
            callback(self.http.status);
        }
    }
    this.http.send();
}