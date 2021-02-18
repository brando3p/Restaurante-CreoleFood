window.addEventListener('scroll', function(){
    
    var imagen = document.querySelectorAll('.img');
    for(var i=0; i<imagen.length;i++){
        
        
        
        
    var altura = window.innerHeight/1.3;
    var distancia = imagen[i].getBoundingClientRect().top;
    
    console.log(altura)
    console.log(distancia)
    
    
    imagen[i].classList.add('transform_up')
    if(distancia <= altura  ){
        
        imagen[i].classList.add('aparece')
        
    }
        else{
            
            imagen[i].classList.remove('aparece')
            
        }
    }
    
})

window.addEventListener('scroll', function(){
    
    var imagen = document.querySelectorAll('.bloques');
    for(var i=0; i<imagen.length;i++){
        
        
        
        
    var altura = window.innerHeight/1.3;
    var distancia = imagen[i].getBoundingClientRect().top;
    
    console.log(altura)
    console.log(distancia)
    
    
    imagen[i].classList.add('transform_up')
    if(distancia <= altura  ){
        
        imagen[i].classList.add('aparece')
        
    }
        else{
            
            imagen[i].classList.remove('aparece')
            
        }
    }
    
})