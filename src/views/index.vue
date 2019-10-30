<template>
  <div class="main">
    <nav class="navbar navbar-light bg-transparent">
      <router-link to="/" class="navbar-bran">
        <img src="../assets/pasadya_ph_logo.png" alt="" srcset="" width="20%" height="20%" class="d-inline-block align-top">
      </router-link>
    </nav>
    <ul style="list-style:none;" class="nav-menu">
      <li><router-link to="/index">SHOES</router-link></li>
      <li><router-link to="/watch">WATCHES</router-link></li>
    </ul>
    <div class="product-content">
      <div class="row">
        <div class="col-md-6">
          <h4>MEN'S FASHION</h4>
          <h1>SLIP ON</h1>
          <br>
          <h1>SHOES<small>₱ {{ price }}</small></h1>
          <br>
          <h5>CUSTOMIZE YOUR FASHION</h5>
          
          <div class="customize-section">
            <div class="row">
              <div class="col-md-6">
                <b-form-group label="Change View">
                  <b-form-radio v-model="x" name="some-radios" value="A">Perspective</b-form-radio>
                  <b-form-radio v-model="x" name="some-radios" value="B">Back</b-form-radio>
                  <b-form-radio v-model="x" name="some-radios" value="C">Top</b-form-radio>
                  <b-form-radio v-model="x" name="some-radios" value="D">Side</b-form-radio>
              </b-form-group>
              </div>
              <div class="col-md-6">
                <label for="Choose your size">Choose your size</label>
                  <table class="table table-responsive borderless">
                    <thead>
                      <tr>
                        <th></th>
                        <th>UK SIZE</th>
                        <th>EU SIZE</th>
                        <th>US SIZE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="radio" name="radioGroup"></td>
                        <td>3</td>
                        <td>35.5</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td><input type="radio" name="radioGroup"></td>
                        <td>4</td>
                        <td>37</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td><input type="radio" name="radioGroup"></td>
                        <td>5</td>
                        <td>38</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td><input type="radio" name="radioGroup"></td>
                        <td>6</td>
                        <td>39</td>
                        <td>7</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div>
            
            <div class="row">
              <!-- DESIGN PATTERN -->
              <div class="col-md-4">
                <label for="">Choose Design</label>
                <ul style="list-style:none;" class="design-rd">
                  <li>
                    <a href="#" @click="design='plain';plain_price()">
                      <img src="../assets/shoes/design_plain.png" alt="" width="16%">
                    </a>
                  </li>
                  <li>
                    <a href="#" @click="design='black';plain_price()">
                      <img src="../assets/shoes/design_black.png" alt="" width="16%">
                    </a>
                  </li>
                  <li>
                    <a href="#" @click="design='chckrd';checkered_price()">
                      <img src="../assets/shoes/design_chckrd.png" alt="" width="16%">
                    </a>
                  </li>
                </ul>
              </div>
              
              <!-- SOLE COLOR -->
              <div class="col-md-4">
                <label for="">Choose Sole Color</label>
                <ul style="list-style:none;" class="design-rd">
                  <li>
                    <a href="#" @click="brownsole()">
                      <img src="../assets/shoes/sole_brown.png" alt="" srcset="" width="16%">
                    </a>
                  </li>
                  <li>
                    <a href="#" @click="purplesole()">
                      <img src="../assets/shoes/sole_purple.png" alt="" srcset="" width="16%">
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-4">
                <label for="">Quantity</label>
                <input type="number" name="" id="" class="form-control"/>
              </div>
            </div>

          </div>
        </div>
        <!-- PRODUCT CANVAS -->
        <div class="col-md-6" style="padding-right:0;">
          <!-- PLAIN -->
          <div class="product-canvas" v-if="design === 'plain'">
            <img src="../assets/shoes/shoe_perspective.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <!-- BLACK -->
          <div class="product-canvas" v-if="design === 'black'">
            <img src="../assets/shoes/shoe_perspective_black.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back_black.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top_black.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side_black.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <!-- CHECKERED -->
          <div class="product-canvas" v-if="design === 'chckrd'">
            <img src="../assets/shoes/shoe_perspective_chckrd.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back_chckrd.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top_chckrd.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side_chckrd.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <!-- BLACK-BROWN-SOLE -->
          <div class="product-canvas" v-if="design === 'blck_brown'">
            <img src="../assets/shoes/shoe_perspective_black_brwnsole.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back_black_brwnsole.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top_black_brwnsole.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side_black_brwnsole.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <!-- BLACK-PURPLE-SOLE -->
          <div class="product-canvas" v-if="design === 'black_purple'">
            <img src="../assets/shoes/shoe_perspective_black_purplesole.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back_black_purplesole.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top_black_purplesole.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side_black_purplesole.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <!-- PLAIN-PURPLE-SOLE -->
          <div class="product-canvas" v-else-if="design === 'plain_purple'">
            <img src="../assets/shoes/shoe_perspective_plain_purplesole.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back_plain_purplesole.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top_plain_purplesole.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side_plain_purplesole.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <!-- PLAIN-BROWN-SOLE -->
          <div class="product-canvas" v-else-if="design === 'plain_brown'">
            <img src="../assets/shoes/shoe_perspective_plain_brwnsole.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back_plain_brwnsole.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top_plain_brwnsole.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side_plain_brwnsole.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <!-- CHECKERED-PURPLE-SOLE -->
          <div class="product-canvas" v-else-if="design === 'chckrd_purple'">
            <img src="../assets/shoes/shoe_perspective_chckrd_purplesole.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back_chckrd_purplesole.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top_chckrd_purplesole.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side_chckrd_purplesole.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <!-- CHECKERD-BROWN-SOLE -->
          <div class="product-canvas" v-else-if="design === 'chckrd_brown'">
            <img src="../assets/shoes/shoe_perspective_chckrd_brwnsole.png" alt="" width="90%" v-show="x === 'A'">
            <img src="../assets/shoes/shoe_back_chckrd_brwnsole.png" alt="" width="90%" v-show="x === 'B'">
            <img src="../assets/shoes/shoe_top_chckrd_brwnsole.png" alt="" width="90%" v-show="x === 'C'">
            <img src="../assets/shoes/shoe_side_chckrd_brwnsole.png" alt="" width="90%" v-show="x === 'D'">
          </div>

          <a href="#" target="#" class="btn btn-primary" @click="test">CRAFT</a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      x: 'A',
      design: 'plain',
      sole: '',
      price: '00.00'
    }
  },
  methods: {
    brownsole() {
      if (this.design === 'black') {
        this.design = 'blck_brown'
      } else if (this.design === 'chckrd') {
        this.design = 'chckrd_brown'
      } else if (this.design === 'plain') {
        this.design = 'plain_brown'
      } else if (this.design === 'black_purple') {
        this.design = 'blck_brown'
      } else if (this.design === 'blck_purple') {
        this.design = 'black_brown'
      } else if (this.design === 'plain_purple') {
        this.design = 'plain_brown'
      } else if (this.design === 'chckrd_purple') {
        this.design = 'chckrd_brown'
      }
    },

    purplesole() {
      if (this.design === 'black') {
        this.design = 'black_purple'
      } else if (this.design === 'chckrd') {
        this.design = 'chckrd_purple'
      } else if (this.design === 'plain') {
        this.design = 'plain_purple'
      } else if (this.design === 'black_purple') {
        this.design = 'blck_brown'
      } else if (this.design === 'blck_brown') {
        this.design = 'black_purple'
      } else if (this.design === 'plain_brown') {
        this.design = 'plain_purple'
      } else if (this.design === 'chckrd_purple') {
        this.design = 'chckrd_brown'
      } else if (this.design === 'chckrd_brown') {
        this.design = 'chckrd_purple'
      }
    },
    plain_price() {
      this.price = 2325.55
    },
    checkered_price() {
      this.price = 2825.55
    },
    test() {
      this.$toasted.show('Successfully Crafted.', {duration: '3000', type: 'success'})
    }

  }
}
</script>

