console.log('Loaded!');
//counter code
var button=document.getElementById('counter');

button.onclick=function(){
    //make a request to counter end point
    var request=new XMLHttpRequest();
    //capture respose and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    
    //render the variable in correct span
  request.open('GET','http://prateektom111.imad.hasura-app.io/counter',true);
  request.send(null);
};