<template>
  <div id="app">
    
      <form id="app" @submit="checkForm" action="/something" method="post">
        <section>
          <h3 >Enter Vehicle Name.</h3>
          <input type="text" placeholder="Vehicle Name" v-model="VehicleName" @change="storeMethod" id="VehicleName" value="" class="form-control fortm-control-lg">
    <input class="form__input" v-model.trim="$v.VehicleName.$model"/>

          <h3>Enter your Vehicle Type!</h3>
          <multiselect id="dropdown" v-model="value" :options="options" :searchable="false" :close-on-select="true" :show-labels="true" placeholder="Select a Type"></multiselect>
         
          <h3>Enter the model</h3>
          <autocomplete id="model" :source="[{id:1,name:'Audi'},{id:2,name:'BMW'},{id:3,name:'Citroen'},{id:4,name:'Honda'},{id:5,name:'Hyundai'},{id:6,name:'Mercedes'},{id:7,name:'Nissan'},{id:8,name:'Opel'},{id:9,name:'Suzuki'},{id:10,name:'Toyota'},{id:11,name:'VolksWagen'}]" v-if="this.id == null" value='unknown'></autocomplete>
         
          <h3>Enter the License Plate</h3>
          <input type="text" class="licenceplate" id="license" value="" placeholder="Please enter in this format XX-NNN-XX">
         
          <h3>Enter registration date.</h3>
          <input type="date" id="regDate" value="" placeholder="Please enter the Registration Date">
          
          <h3> Date of registration </h3>
          <input type="date" id="dateOFReg" value="" placeholder="Please enter the Date of Registration submission">

        </section> 
      </form>
      <button class="btn-clasic" id="submit">Submit</button>
  </div>
</template>

<script>
// import VueDropdown from 'vue-dynamic-dropdown';
import Autocomplete from 'vuejs-auto-complete'
import Multiselect from 'vue-multiselect'
import Vuelidate from 'vuelidate'
import vehicles from 'Vehicles/vehicle.js'

export default {
  name: 'App',
  components: {
  // VueDropdown,
  Multiselect,
  Autocomplete,
  Vuelidate,  
  Vehicles
},
  _data: {
    form: {
      id:0,
      errors: [],
      VehicleName: null,
      VehicleType: null,
      Model: null,
      LicensePlate: null,
      LastRegistration: null,
      DateofRegistration: null
    },
  },
  validations: {
    form: {
      VehicleName: {
        required: validations.required
      },
      VehicleType: {
        required: validations.required,
        string: validations.string
      },
      Model: {
        required: validations.required,
      },
      LicensePlate: {

      },
      LastRegistration: {

      },
      DateofRegistration: {

      },
    },
  },
   data () {
    return {
      value: null,
      options: ['Car', 'Van', 'Truck', 'Container', 'Trailer', 'Dupmer']
    }
  },
  methods:{
    storeMethod:function(){
      let VehicleNameLocal =  document.getElementById("VehicleName").value ;
      Object.defineProperty(this,VehicleName ,{
        set() {
          vehicles.vehicleName = VehicleNameLocal;
        }
      });
      let VehicleType = document.getElementsByClassName("dropdown").value;
      Object.defineProperty(this,VehicleType ,{
        set() {
          vehicles.vehicleType = VehicleType;
        }
      });
      let Model = document.getElementById("model").value;
    },
    checkForm:function(e) {
      if(this.VehicleName && this.VehicleType && this.Model && this.LicensePlate && this.LastRegistration && this.DateofRegistration ) return true;
      else {
        this.storeMethod();
        console.log(this.VehicleName);
      }
      this.errors = [];
       if(!this.VehicleName) this.errors.push("Vehicle Name is required.");
      if(!this.VehicleType) this.errors.push("Vehicle Type is required.");
      e.preventDefault();
    }
  }

}
</script>

<style src="style.css"></style>
