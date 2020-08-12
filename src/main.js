import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  
  _data: {
    form: {
      id:0,
      errors: [],
      VehicleName: '',
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

      }
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
      if(!this.Model) this.errors.push("Age required.");
      if(!this.LicensePlate) this.errors.push("Age required.");
      if(!this.LastRegistration) this.errors.push("Age required.");
      if(!this.DateofRegistration) this.errors.push("Age required.");
      e.preventDefault();
    }
  }
}).$mount('#app')
