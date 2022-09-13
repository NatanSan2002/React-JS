import Bloco from "../componentes/bloco/bloco";

function Ordenar (array,attr,comparision,num,func) {

    const maior = "maior";
    const menor = "menor";
    const igual = "igual"

    const filter = "filter";
    const ordem = "ordem";

    

    if(comparision == maior){
     if (func == filter) {
      array = array.filter( (i) => i[attr] > num ? true : false )
     } else if (func == ordem){
      array.sort(( a, b ) => {
        if ( a[attr] > b[attr] ){
          return -1;} else if ( a[attr] < b[attr]){
          return true;
    }})   
     }
    }else if (comparision == menor){
      if (func == filter) {
        array = array.filter( (i) => i[attr] < num ? true : false)
        
      /*  array.map((i) => {
            return array 
        }) */
     
        
       } else if (func == ordem){
        array.sort(( a, b ) => {
          if ( a[attr] < b[attr] ){
            return -1;} else if ( a[attr] < b[attr]){
            return true;
      }})   
       }
    } else if(comparision == igual){
        if (func == filter) {
            array = array.filter( (i) => i[attr] == num ? true : false )
           } else if (func == ordem){
            array.sort(( a, b ) => {
              if ( a[attr] == num ){
                return -1;} else if ( a[attr] != num){
                return true;
          }})   
           }
    }

   return array.map( (t) => 
<Bloco name={t.name} ano={t.ano} raridade={t.rar} price={t.price} img={t.img}/>
 )

 
      } 

export default Ordenar;
     