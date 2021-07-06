const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const dis= new Schema({
  states:{
      type: String,
      
  }, 
  districts:{ type:[]
}
 
});

const Vaccination = new Schema({
 day:{
   type: String
 },
 registrations:{ type:Number},
 eighteen:{ type:Number},
 fortyfive:{type:Number},
 dosel1:{ type:Number},
 dose2:{ type:Number},
 stateConducting:{ type:Number},
 private:{ type:Number}


})


const VaccinationRaj= mongoose.model('RajasthanVaccination',Vaccination,'RajasthanVaccination');

const VaccinationSikkim= mongoose.model('SikkimVaccination',Vaccination,'SikkimVaccination');

const VaccinationTamilNadu= mongoose.model('TamilNaduVaccination',Vaccination,'TamilNaduVaccination');

const VaccinationUttarPardesh= mongoose.model('UttarPardeshVaccination',Vaccination,'UttarPardeshVaccination');

const VaccinationTelangana= mongoose.model('TelanganaVaccination',Vaccination,'TelanganaVaccination');

const VaccinationWest= mongoose.model('WestBengalVaccination',Vaccination,'WestBengalVaccination');
const VaccinationPunjab= mongoose.model('punjabVaccination',Vaccination,'punjabVaccination');

const districtmodel = mongoose.model('districts', dis);

module.exports= {districtmodel:districtmodel,VaccinationRaj:VaccinationRaj,VaccinationSikkim,
  VaccinationTamilNadu:VaccinationTamilNadu,VaccinationUttarPardesh:VaccinationUttarPardesh, VaccinationTelangana: VaccinationTelangana,
  VaccinationWest:VaccinationWest,VaccinationPunjab}