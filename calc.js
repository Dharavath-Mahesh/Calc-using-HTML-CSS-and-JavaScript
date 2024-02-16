window.onload = function(){
    let btn =  document.getElementsByClassName('operand');
    let showText = document.querySelector('[name="results"]');

    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener('click', function(){
            let resultElement = btn[i].value;
           //console.log(resultElement);
            showText.value += resultElement;
       
        });
        let equals = document.querySelector(".equals");
        equals.addEventListener('click', function(){
                //showText.value += resultElement;
                //console.log(showText.value);
                let display = eval(showText.value);
                showText.value = display;
        });
        let ac = document.querySelector(".AC");
        ac.addEventListener('click', function(){
            showText.value = "";
        });
        
    };
    let de = document.querySelector(".DE");
    de.addEventListener('click', function(){
        let finalResults = showText.value.toString().slice(0, -1);
        console.log(finalResults);
        showText.value = finalResults;
    });
    let percentile = document.querySelector(".percentile");
    percentile.addEventListener('click', function(){
        let peResults = (showText.value/100);
        console.log(peResults);
        showText.value = peResults;
    });
    
    // let executeValue = document.querySelector('.equals');
    // let opd = document.getElementsByClassName('opd');
    // // console.log(opd);
    // executeValue.addEventListener('click', function(){
    //     if(opd.innerText == "x"){
    //         console.log("this is multiplying");
    //     }
    // });






};

