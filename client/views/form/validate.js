export default function validate (input){
    const errors = {};
    
    if(typeof input.name !== 'string'){
        errors.name =' Name can not contain numbers'
    }
    if (!input.name) {
        errors.name = "add a name";
      }

      if(!input.countries ){
        errors.places = 'add places'
      }
      if(input.time <=0 ){
        errors.time = 'add activity duration'
      }
      if(!input.season){
        errors.season = 'choose season'
      }
      if(!input.season){
        errors.season = 'choose season'
      }
      
      return errors;
}