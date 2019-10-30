<template>
    <div class="landing">
        <div class="content-wrapper">
             <img src="../assets/pasadya_ph_logo_white.png" width="80%" alt="" srcset="" style="margin: 0 10%;">
            <ul style="list-style:none;text-align: center" class="nav-menu">
                <li><router-link to="/index" class="ghost-button">HI-END CONSUMERS</router-link></li>
                <li><router-link to="/retail" class="ghost-button">RETAILER</router-link></li>
            </ul>
        </div>
       
    </div>
</template>

<style scoped>
.landing {
    background-image: url('../assets/landing_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
.content-wrapper {
    padding: 50px 420px;
    height: 100vh;
}

.nav-menu {
  margin: 20% 0;
}

.ghost-button {
  font-size: 25px;
  display: inline-block;
  width: 300px;
  padding: 8px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: color 0.3s ease-out,
              background-color 0.3s ease-out,
              border-color 0.3s ease-out;
}
.ghost-button:hover,
.ghost-button:active {
  background-color: #e67e22;
  border-color: #e67e22;
  color: #fff;
  transition: color 0.3s ease-in,
              background-color 0.3s ease-in,
              border-color 0.3s ease-in;
}
</style>
