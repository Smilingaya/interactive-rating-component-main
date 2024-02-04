const cont1=document.querySelector('.container1');
const cont2=document.querySelector('.container2');
const eval1=document.querySelector('.eval1');
const eval2=document.querySelector('.eval2');
const eval3=document.querySelector('.eval3');
const eval4=document.querySelector('.eval4');
const eval5=document.querySelector('.eval5');
const submit=document.querySelector('.submit');
const nbr=document.getElementById('nbr');
const evo=document.querySelector('.evo');

submit.addEventListener('click',function onClick(){
cont1.style.display='none';
cont2.style.display='grid';
});
eval1.addEventListener('click',function onClick(){
    eval1.style.backgroundColor ='hsl(25, 97%, 53%)';
    eval2.style.backgroundColor='hsl(213, 19%, 18%)';
    eval3.style.backgroundColor='hsl(213, 19%, 18%)';
    eval4.style.backgroundColor='hsl(213, 19%, 18%)';
    eval5.style.backgroundColor='hsl(213, 19%, 18%)';
});
eval2.addEventListener('click',function onClick(){
    eval2.style.backgroundColor ='hsl(25, 97%, 53%)';
    eval3.style.backgroundColor='hsl(213, 19%, 18%)';
    eval4.style.backgroundColor='hsl(213, 19%, 18%)';
    eval5.style.backgroundColor='hsl(213, 19%, 18%)';
    eval1.style.backgroundColor ='hsl(213, 19%, 18%)';

});
eval3.addEventListener('click',function onClick(){
    eval3.style.backgroundColor ='hsl(25, 97%, 53%)';
    eval2.style.backgroundColor='hsl(213, 19%, 18%)';
    eval1.style.backgroundColor='hsl(213, 19%, 18%)';
    eval4.style.backgroundColor='hsl(213, 19%, 18%)';
    eval5.style.backgroundColor='hsl(213, 19%, 18%)';

});
eval4.addEventListener('click',function onClick(){
    eval4.style.backgroundColor ='hsl(25, 97%, 53%)';
    eval2.style.backgroundColor='hsl(213, 19%, 18%)';
    eval3.style.backgroundColor='hsl(213, 19%, 18%)';
    eval1.style.backgroundColor='hsl(213, 19%, 18%)';
    eval5.style.backgroundColor='hsl(213, 19%, 18%)';
});
eval5.addEventListener('click',function onClick(){
    eval5.style.backgroundColor ='hsl(25, 97%, 53%)'; 
    eval2.style.backgroundColor='hsl(213, 19%, 18%)';
    eval3.style.backgroundColor='hsl(213, 19%, 18%)';
    eval4.style.backgroundColor='hsl(213, 19%, 18%)';
    eval1.style.backgroundColor='hsl(213, 19%, 18%)';
});
eval1.addEventListener('click', function onClick(){
    nbr.textContent=1;
    });
    eval2.addEventListener('click', function onClick(){
        nbr.textContent=2;
    });
    eval3.addEventListener('click', function onClick(){
         nbr.textContent=3;
     });
    eval4.addEventListener('click', function onClick(){
          nbr.textContent=4;
    });
    eval5.addEventListener('click', function onClick(){
        nbr.textContent=5;
    });
    