<template>
  <div class="payments-methods">
    <div class="payments-methods__info buy-info"
         v-bind:class="{'buy-info--open': openedItem }"
    >
      <div class="buy-info__container">
        <span class="buy-info__title">You are buying</span>
        <ul class="buy-info__list">
          <li>Flight in space /Jupiter Area</li>
          <li>From IO to GANIMED, J29, 2048, G5/42</li>
          <li>Spaceship "Queen of the Sun"</li>
        </ul>
        <span class="buy-info__amount">42350.00 <span>USD</span></span>
        <p class="buy-info__description">Amount to pay without the payment system commission</p>

        <span class="buy-info__title">Seller</span>
        <ul class="buy-info__list buy-info__list--small-text">
          <li>National Aeronautics and Space</li>
          <li>Space Administration (NASA) <img src="../../public/img/planet.svg" alt="icon"></li>
          <li>Headquarters 300 E. Street SW, Suite 5R30</li>
        </ul>
        <span class="buy-info__rating">Rating: <span>5</span></span>
        <span class="buy-info__reviews">Reviews: <span>308 042</span></span>
      </div>
      <a href="#">Provided by Onpay.ru</a>
      <a class="buy-info__click"
         href="#"
         v-on:click.prevent="openInfo">
      </a>
    </div>
    <Payment/>
  </div>
</template>

<script>
  import Payment from "./Payment";
  export default {
    name: "PaymentsMethods",
    components: {
      Payment
    },
    data() {
      return {
        openedItem: false
      };
    },
    methods: {
      openInfo() {
        this.openedItem = !this.openedItem;
      },
    }
  }
</script>
