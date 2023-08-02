export default function validate (input){
    const errors = {};
    
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
    
      return errors;
}