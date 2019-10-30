<template>
  <div class="retailPage">
    <nav class="navbar navbar-light bg-transparent">
      <router-link to="/" class="navbar-bran">
        <img src="../assets/pasadya_ph_logo.png" alt="" srcset="" width="20%" height="20%" class="d-inline-block align-top">
      </router-link>
    </nav>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <h1>Bidding Queue</h1>
          <p>This page displays active buyers/consumers willing to accept retailer bidds. From here, you can edit, review and track competitors
            bidding price.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src="../assets/watches/leather_gold_blu.png" alt="" srcset="" width="80%">
            </div>

            <div class="col-md-8">
              <h3>Attributes</h3>
              <hr>
              <div class="row">
                <div class="col-md-4">
                  <h6>Consumer Name</h6>
                  <p>{{ConsumerName}}</p>
                  <h6>Category</h6>
                  <p>{{ItemType}}</p>
                  <h6>Product Name</h6>
                  <p>2019-Mar-14-00098</p>
                  <h6>Product ID</h6>
                  <p>WEUNFJ313JH3GHJ</p>
                  <h6>Movement</h6>
                  <p>Quartz</p>
                </div>
                <div class="col-md-4">
                  <h6>Strap</h6>
                  <p>Leather</p>
                  <h6>Frame</h6>
                  <p>Gold</p>
                  <!-- <h6>Color</h6>
                  <p>Counter Style</p> -->
                  <h6>Counter Style</h6>
                  <p>Dial</p>
                </div>
                <div class="col-md-4">
                  <h6>Quantity</h6>
                  <p>{{ItemDesign}}</p>
                  <h6>Shipping</h6>
                  <p>Cavite</p>
                  <h6>Status</h6>
                  <span class="badge badge-pill badge-warning"><i>Pending</i></span>
                </div>
              </div>
              
              <hr>
              <div class="row">
                <div class="col-md-6">
                  <h6>Total Bidding Price</h6>
                  <span>₱ {{totalPrice}}</span>
                </div> 
                <div class="col-md-6">
                  <a href="#" class="btn btn-outline-success btn-lg" style="float: right;" @click="accept()">ACCEPT</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src="../assets/shirt/shirt_floral.png" alt="" srcset="" width="80%">
            </div>

            <div class="col-md-8">
              <h3>Attributes</h3>
              <hr>
              <div class="row">
                <div class="col-md-4">
                  <h6>Consumer Name</h6>
                  <p>{{ConsumerName}}</p>
                  <h6>Category</h6>
                  <p>{{ItemType}}</p>
                  <h6>Product Name</h6>
                  <p>2019-Mar-14-00346</p>
                  <h6>Product ID</h6>
                  <p>JJQEFNDNSFJFO</p>
                  <h6>SIZE</h6>
                  <p>Medium</p>
                </div>
                <div class="col-md-4">
                  <h6>Material Type</h6>
                  <p>Cotton</p>
                  <h6>Material Design</h6>
                  <p>Floral</p>
                  <h6>Color</h6>
                  <p>-</p>
                  <h6>Quantity</h6>
                  <p>{{ItemDesign}}</p>
                </div>
                <div class="col-md-4">
                  <h6>Design Type</h6>
                  <p>With pocket</p>
                  <h6>Shipping</h6>
                  <p>Cavite</p>
                  <h6>Status</h6>
                  <span class="badge badge-pill badge-warning"><i>Pending</i></span>
                </div>
              </div>
              
              <hr>
              <div class="row">
                <div class="col-md-6">
                  <h6>Total Bidding Price</h6>
                  <span>₱ 150.00</span>
                </div> 
                <div class="col-md-6">
                  <a href="#" class="btn btn-outline-success btn-lg" style="float: right;">ACCEPT</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div> -->
    
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
const text = 'You recieved a new BID for your product. Please check with your Pasadya.PH Account.';
import RangeSlider from 'vue-range-slider'
export default {
  data() {
    return {
      ItemType:'',
      ConsumerName: '',
      ItemDesign: '',
      totalPrice: '00.00'
    }
  },
  created() {
    axios.post('https://ws.durusthr.com/ILM_WS_Dev/getOrderDetails', {
    }).then(response => {
      this.ItemType = response.data.OrderDetails[0].ItemType
      this.ConsumerName = response.data.OrderDetails[0].ConsumerName
      this.ItemDesign = response.data.OrderDetails[0].ItemDesign
      this.totalPrice = response.data.OrderDetails[0].PriceMax
      console.log(response.data)
      console.log(response.data.OrderDetails[0].ConsumerName)
    })
  },
  methods: {
    accept() {
      nexmo.message.sendSms(from, to, text);
      this.$toasted.show('Successfully submitted for bidding.', {duration: '5000', type: 'success'})
    }
  }
  
}
</script>



<style scoped>
.row {
  margin-bottom: 20px;
}
</style>
