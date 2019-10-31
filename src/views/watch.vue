<template>
  <div class="main">
    <nav class="navbar navbar-light bg-transparent">
      <router-link to="/" class="navbar-bran">
        <img src="../assets/pasadya_ph_logo.png" alt="" srcset="" width="20%" height="20%f" class="d-inline-block align-top">
      </router-link>
    </nav>
    <ul style="list-style:none;" class="nav-menu">
      <li><router-link to="/index">SHOES</router-link></li>
      <li><router-link to="/watch">WATCHES</router-link></li>
    </ul>
    <div class="product-content">
      <div class="row">
        <div class="col-md-6">
          <h4>MEN'S WATCH</h4>
          <h1>CUSTOM WATCH</h1>
          <br>
          <h1>DESIGN<small>₱ {{ sliderValue }}</small></h1>
          <h1><small>
            ₱ 7000
            <range-slider
              class="slider"
              min="7000"
              max="25000"
              step="10"
              v-model="sliderValue">
            </range-slider> ₱ 25000</small></h1>
          <h5>COSTUMIZE YOUR TIME.</h5>
          <br>
          <div class="row">
            <div class="col-md-6">
              <!-- FABRIC -->
              <!--Watch Movement Types-->
              <b-form-group label="CHOOSE YOUR WATCH STRAPS TYPES">
                <b-form-radio v-model="strap" name="strap" @change="GenPrice('leather'); " value="leather">Leather</b-form-radio>
                <b-form-radio v-model="strap" name="strap" @change="GenPrice('nato'); " value="nato">NATO Strap</b-form-radio>
              </b-form-group>
            </div>

            <div class="col-md-6">
              <b-form-group label="COUNTER">
                <b-form-radio v-model="counter" name="counter" value="dial">Dial</b-form-radio>
                <b-form-radio v-model="counter" name="counter" value="number">Number</b-form-radio>
              </b-form-group>
            </div>

            
          </div>

          <!--CHOOSE YOUR COUNTER-->
          <div class="row">
            <div class="col-md-6">
              <b-form-group label="CHOOSE YOUR FRAME">
                <b-form-radio v-model="frame" name="frame" value="gold">Gold</b-form-radio>
                <b-form-radio v-model="frame" name="frame" value="silver">Silver</b-form-radio>
              </b-form-group>
            </div>

            <div class="col-md-6">
              <!-- COLOR -->
              <!-- DESIGN COLOR -->
              <b-form-group label="BACKGROUND COLOR">
                <b-form-radio v-model="background" name="background" value="aqua">Aqua</b-form-radio>
                <b-form-radio v-model="background" name="background" value="blackhole">Black Hole</b-form-radio>
              </b-form-group>
            </div>
          </div>


          <div class="row">
            <div class="col-md-6">
              <b-form-group label="MOVEMENT TYPES">
                <b-form-radio v-model="movement" name="movement" @change="GenPrice1('quartz')" value="quartz">Quartz</b-form-radio>
                <b-form-radio v-model="movement" name="movement" @change="GenPrice1('mech')" value="mech">Mechanical</b-form-radio>
                <b-form-radio v-model="movement" name="movement" @change="GenPrice1('auto')" value="auto">Automatic</b-form-radio>
              </b-form-group>
            </div>
            <div class="col-md-6">
                <!-- QUANTITY -->
                <label for="">QUANTITY</label>
                <input type="number" name="" id="" v-model="quantity" class="form-control">
                <br>
                <a href="#" class="btn btn-primary" v-b-modal.modal-1>SUBMIT</a>
            </div>
          </div>
          
          
        </div>

        <!-- PRODUCT CANVAS -->
        <!--PRODUCT INNER PARTS TYPE-->

        <div class="col-md-6">
          <div class="product-canvas" v-if="strap ==='leather'">
            <img src="../assets/watches/leather_gold_blu.png" alt="" srcset="" width="90%" v-show="counter ==='dial'">
            <img src="../assets/watches/leather_gold_number_blue.png" alt="" srcset="" width="90%" v-show="counter ==='number'">
            <img src="../assets/watches/leather_gold_blu.png" alt="" srcset="" width="90%" v-show="counter ==='gold'">
            <img src="../assets/watches/leather_silver_black.png" alt="" srcset="" width="90%" v-show="counter ==='silver'">
          </div>

          <div class="product-canvas" v-if="strap ==='nato'">
            <img src="../assets/watches/nato_gold_blu.png" alt="" srcset="" width="90%" v-show="counter ==='dial'">
            <img src="../assets/watches/nato_gold_blu_number.png" alt="" srcset="" width="90%" v-show="counter ==='number'">
            <img src="../assets/watches/nato_gold_blu.png" alt="" srcset="" width="90%" v-show="counter ==='gold'">
            <img src="../assets/watches/nato_silver_black.png" alt="" srcset="" width="90%" v-show="counter ==='silver'">
          </div>

          <div class="product-canvas" v-show="goldFrame">
            <img src="../assets/watches/leather_gold_blu.png" alt="" srcset="" width="90%" v-show="counter ==='dial'">
          </div>
          
          <div class="product-canvas" v-show="silverFrame">
            <img src="../assets/watches/leather_silver_black.png" alt="" srcset="" width="90%" v-show="counter ==='dial'">
          </div>

        </div>
      </div>
    </div>



   <!-- The Modal -->
  
    <b-modal id="modal-1" title="Checkout" @ok="okSubmit">
      <div class="row">
        <div class="col-md-6">
          <h6>Name</h6>
          <input type="text" v-model="name" name="" id="" class="form-control" readonly>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <h6>Address</h6>
           <input type="text" v-model="address" name="" id="" class="form-control" readonly>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <h6>Contact No.</h6>
          <input type="text" v-model="contact" name="" id="" class="form-control" readonly>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <hr>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <h6>Category</h6>
          <p>watch</p>
        </div>
        <div class="col-md-6">
          <h6>Materials</h6>
          <p>{{this.strap}}</p>
        </div>
        <div class="col-md-6">
          <h6>Quantity</h6>
          <p>{{this.quantity}}</p>
        </div>
        <div class="col-md-6">
          <h6>Price</h6>
          <p>{{this.sliderValue}}</p>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
const axios = require('axios');
var localStorage = require('localStorage')
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '5d055714',
  apiSecret: 'gTZZw7IxuLzUeyvL',
});

const from = 'Nexmo';
const to = '639278960929';
const text = 'New produc request. Would you like to bid?';
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'
import $ from 'jquery'
export default {
  components: {
    RangeSlider
  },
  data() {
    return {
      x: 'gold',
      frame: 'gold',
      strap: 'leather',
      color: 'gold',
      counter: 'dial',
      background: 'blackhole',
      movement: 'quartz',
      goldFrame: false,
      silverFrame: false,
      total: '00.00',
      name: 'Joel Eya',
      address: 'Paraiso, Quezon City',
      contact: '63917867513',
      quantity: '',
      material: '',
      sliderValue: 7000
    }
  },
  created(){
    this.GenPrice1(this.movement);
    $(document).ready(function() {
      $('#submit').click(function() {
        $('#myModal').addClass('active')
      })
    })
  },
  methods: {
    okSubmit() {
      nexmo.message.sendSms(from, to, text);
        this.$toasted.show('Successfully submitted for bidding.', {duration: '5000', type: 'success'})
      // axios.post("https://ws.durusthr.com/ILM_WS_Dev/AddConsumerDetails", {
      //   consumerID: '1',
      //   consumerName: this.name,
      //   address: this.address,
      //   contactno: this.contact,
      //   PriceMin: '0',
      //   PriceMax: this.sliderValue
      // }).then(response => {
      //   console.log(response.data)
      // }).then(response => {
      //   axios.post("https://ws.durusthr.com/ILM_WS_Dev/AddOrderDetails", {
      //     consumerID: '1',
      //     itemType: 'watch',
      //     itemMaterials: this.strap,
      //     iteamDesign: this.quantity
      //   })
      // }).then(response => {
      //   nexmo.message.sendSms(from, to, text);
      //   this.$toasted.show('Successfully submitted for bidding.', {duration: '5000', type: 'success'})
      // })
    },
    GenPrice(s){
      if(s ==='leather'){
        this.total = 500
      }else{
        this.total = 300
      }
      if(this.frame ==='gold'){
        this.total += 300
      }else{
        this.total += 300
      }
      if(this.counter ==='dial'){
        this.total += 300
      }else{
        this.total += 300
      }
      if(this.background ==='blackhole'){
       this.total += 300
      }else{
        this.total += 300
      }
      if(this.movement ==='quartz'){
        this.total += 375.63
      }else{
        this.total += 459.81
      }
    },
    GenPrice1(a){
      if(a ==='quartz'){
        this.total = 375.63
      }else{
        this.total = 459.81
      }
      if(this.strap ==='leather'){
        this.total += 500
      }else{
        this.total += 300
      }
      if(this.frame ==='gold'){
        this.total += 300
      }else{
        this.total += 300
      }
      if(this.counter ==='dial'){
        this.total += 300
      }else{
        this.total += 300
      }
      if(this.background ==='blackhole'){
       this.total += 300
      }else{
        this.total += 300
      }
    }
  }
}
</script>

<style scoped>
.slider {
  /* overwrite slider styles */
  width: 200px;
}
</style>
