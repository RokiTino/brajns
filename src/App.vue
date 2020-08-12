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
          <autocomplete  :source="[{id:1,name:'Audi'},{id:2,name:'BMW'},{id:3,name:'Citroen'},{id:4,name:'Honda'},{id:5,name:'Hyundai'},{id:6,name:'Mercedes'},{id:7,name:'Nissan'},{id:8,name:'Opel'},{id:9,name:'Suzuki'},{id:10,name:'Toyota'},{id:11,name:'VolksWagen'}]" v-if="this.id == null" value='unknown'></autocomplete>
         
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
export default {
  name: 'App',
  components: {
  // VueDropdown,
  Multiselect,
  Autocomplete,
  Vuelidate  
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
      this.VehicleName = VehicleNameLocal;
      let VehicleType = document.getElementsByClassName("dropdown").value;
      this.VehicleType = VehicleType;
    },
    checkForm:function(e) {
      if(this.VehicleName && this.VehicleType && this.Model && this.LicensePlate && this.LastRegistration && this.DateofRegistration ) return true;
      else {
        this.storeMethod();
        console.log(this.VehicleName);
      }
      this.errors = [];
       if(!this.VehicleName) this.errors.push("Name required.");
      if(!this.VehicleType) this.errors.push("Age required.");
      e.preventDefault();
    }
  }

}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 10px;
    padding: 10px;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1,4;
  }
  .autocomplete {
    position: relative;
    width: 130px;
  }
  #license{
    position: relative;
    width: 100%;
  }
  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }
 
  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }

#app {
  max-width: 30em;
  margin: 1em auto;
}

#app .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1)
}

#app .dropdown li:last-child {
  border-bottom: none;
}

#app .dropdown li a {
  padding: 10px 20px;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.25em;
}

#app .dropdown li a .fa {
  padding-right: 0.5em;
}

  
</style>
