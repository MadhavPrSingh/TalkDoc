const docSearch = () =>{
  let filter = document.getElementById("docInput").value.toUpperCase();

  let p = document.getElementsByClassName("speciality");
  for(var i = 0; i < p.length; i++){
    let a = p[i][0];
     let textVal = a.textContent || a.innerHTML;
     if(textVal.toUpperCase().indexOf(filter) > -1){
        p[i].style.display = '';
     }else{
        p[i].style.display = 'none';
     }
  }

}
