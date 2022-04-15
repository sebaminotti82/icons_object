$(document).ready(function(){

  /*
    MILESTONE 1 CREO UN ARRAY DI OGGETTI ICONE , STAMPO A SCHERMO TRAMITE CICLO FOREACH TUTTE LE MIE ICONE
    AGGIUNGERE LA PROPRIETA' COLOR
  */
 
    //PASSO PERSONALE : PRIMA AGGIUNGO LA PROPRIETA' COLOR E POI STAMPO A SCHERMO !

    //PASSO 1 : CREO IL MIO ARRAY DI OGGETTI
    const icons = [
        {type:'animal',icon:'fa-solid fa-horse',nome:'horse'},
        {type:'animal',icon:'fa-solid fa-dog',nome:'dog'},
        {type:'animal',icon:'fa-solid fa-dragon',nome:'dragon'},
        {type:'animal',icon:'fa-solid fa-fish',nome:'fish'},
        {type:'animal',icon:'fa-solid fa-otter',nome:'otter'},
    
        {type:'user',icon:'fa-solid fa-user-doctor',nome:'doctor'},
        {type:'user',icon:'fa-solid fa-user-secret',nome:'secret-agent'},
        {type:'user',icon:'fa-solid fa-user-ninja',nome:'ninja'},
        {type:'user',icon:'fa-solid fa-user-astronaut',nome:'astronaut'},
        {type:'user',icon:'fa-solid fa-user-tie',nome:'tie'},
    
    
        {type:'tech',icon:'fa-solid fa-car-battery',nome:'battery'},
        {type:'tech',icon:'fa-solid fa-sim-card',nome:'sim-card'},
        {type:'tech',icon:'fa-brands fa-twitch',nome:'twitch'},
        {type:'tech',icon:'fa-solid fa-memory',nome:'memory'},
        {type:'tech',icon:'fa-solid fa-microchip',nome:'microchip'},
      
    
        {type:'healt',icon:'fa-solid fa-virus-covid',nome:'covid-virus'},
        {type:'healt',icon:'fa-solid fa-brain',nome:'brain'},
        {type:'healt',icon:'fa-solid fa-cannabis',nome:'cannabis'},
        {type:'healt',icon:'fa-solid fa-heart',nome:'heart'},
        {type:'healt',icon:'fa-solid fa-radiation',nome:'radiation'},
       
    ];
    console.log(icons);
    
    //PASSO 2 GENERO UN ARRAY CHE CONTERRA' I NOSTRI COLORI DA ABBINARE ALLE ICONE!!
    
       const select = $('#type')
       const container =$('#container')
    
        const colors = ['#4d4d4d','red','orange','purple'];
      
        let iconsColored = icons.map((element) =>{
          

            const {type,icon,nome}=element

            return{type,icon,nome,color:''}
        })
        console.log(iconsColored);


        let typeIcons = []
        console.log(typeIcons);
        iconsColored.forEach((element)=>{

            if(!typeIcons.includes(element.type)){
                typeIcons.push(element.type)
            }
        })
        
      console.log(typeIcons);

      for(let i = 0; i < iconsColored.length; i++){

        let icona = iconsColored[i]

        let indexType = typeIcons.indexOf(icona.type)
        console.log(indexType);
        icona.color=colors[indexType]
      }
      console.log(iconsColored);


    print(iconsColored,container)

    typeIcons.forEach(element => {
      
          select.append(`
          <option value="${element}">${element}</option>
          `)
    });


      console.log(select);

      
    select.change({container},function(event){
      console.log(event);
      const container = event.data.container
      const optionSelected = $(this).val()

      console.log(optionSelected);

      const filtered = iconsColored.filter((element)=>{

          return  element.type === optionSelected
      })
      
        if(filtered.length > 0){
          print(filtered,container)
        } else {
          print(iconsColored,container)
        }
        
        
    })



})


function print (array, container){
   container.html('')
  array.forEach(element => {
   
    container.append(`
       <div class="box">
          
           <i style="color:${element.color}" class="${element.icon}"></i>
         <div class="nome">
           <h4>${element.nome}</h4>
         </div>
       </div>
    `)
});
}