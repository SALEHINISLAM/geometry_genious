function getValueByInput(inputField1, inputField2){
    const firstInputField=document.getElementById(inputField1);
    const firstInputFieldValue=parseFloat(firstInputField.value);
    const secondInputField=document.getElementById(inputField2);
    const secondInputFieldValue=parseFloat(secondInputField.value);
    return firstInputFieldValue*secondInputFieldValue;
}
//triangle
document.getElementById('t-btn').addEventListener('click',function(event){
    const mul=getValueByInput('t-base','t-height');
    const area=0.5*mul;
    // alert(area);
    addToAreaContainer('Triangle',area);
})
//rectangle
document.getElementById('rec-btn').addEventListener('click',function(event){
    const mul=getValueByInput('rec-width','rec-length');
    const area=mul;
    // alert(area);
    addToAreaContainer('Rectangle',area);
})
//parallelogram
document.getElementById('para-btn').addEventListener('click',function(event){
    const mul=getValueByInput('para-base','para-height');
    const area=mul;
    // alert(area);
    addToAreaContainer('Parallelogram',area);
})
//rhombus
document.getElementById('rhombus-btn').addEventListener('click',function(event){
    const mul=getValueByInput('rhombus-dia1','rhombus-dia2');
    const area=0.5*mul;
    // alert(area);
    addToAreaContainer('Rhombus',area);
})
//pentagon
document.getElementById('penta-btn').addEventListener('click',function(event){
    const mul=getValueByInput('penta-base','penta-p');
    const area=0.5*mul;
    // alert(area);
    addToAreaContainer('Pentagon',area);
})
//ellips
document.getElementById('el-btn').addEventListener('click',function(event){
    const mul=getValueByInput('ela','elb');
    const area1=(Math.PI)*mul;
    const area=area1.toFixed(3);

    addToAreaContainer('Ellipse',area);

})
//clear btn
function addToAreaContainer(areaType, area){
    const entry=document.getElementById('area-container');
    const count=entry.childElementCount;
    const li=document.createElement('li');
    // li.classList.add('flex','flex-row','justify-between');
    li.innerHTML=`${count+1}.${areaType }  ${ area}cm<sup>2</sup><button class="btn btn-ghost" id="convert">Convert</button>`;
    entry.appendChild(li);
    document.getElementById('convert').addEventListener('click',function(){
        alert('Sorry! This feature is not implemented yet');
    })
}
document.getElementById('clear-btn').addEventListener('click',function(event){
    const ol=document.getElementById('area-container');
    const li=document.getElementsByTagName('li');
    for(const item of li){
        item.parentNode.removeChild(item);
    }
})
