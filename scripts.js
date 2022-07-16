function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let ServiceQual = document.getElementById('serviceQual').value;
    let numOfpeople = document.getElementById('people').value;
    
    if(bill == '' | ServiceQual == 0){
        alert("preencha os valores")
        return;
    }
    
    if(numOfpeople == "" | numOfpeople <=1 ){
        numOfpeople =1;
        document.getElementById('each').style.display = "none";
    }else{
        document.getElementById('each').style.display = "block";
    }
    console.log(numOfpeople)
   

    let total =  (bill * (ServiceQual/100))/ numOfpeople ;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip)