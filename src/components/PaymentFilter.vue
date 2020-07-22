<template>
    <div class="filter">
        <ul class="filter__category">
            <li class="active"><a href="#">E-money</a></li>
            <li class=""><a href="#">Mobile Payments</a></li>
            <li class=""><a href="#">Bank Cards</a></li>
            <li class=""><a href="#">Bank Transfers</a></li>
            <li class=""><a href="#">Terminals</a></li>
        </ul>
        <div class="filter__payments">
            <a href="#" class="filter__card card">
            <span class="card__bg">
              <img class="card__icon" src="../../public/img/icon-qiwi.svg" alt="icon">
            </span>
                <span class="card__name">Qiwi Walet</span>
                <span class="card__description">Payment Fees 1.5%</span>
            </a>
            <a href="#" class="filter__card card">
            <span class="card__bg">
              <img class="card__icon" src="../../public/img/icon-skrill.svg" alt="icon">
            </span>
                <span class="card__name">Skrill</span>
                <span class="card__description">Payment Fees 2.5%</span>
            </a>
            <a href="#" class="filter__card card">
            <span class="card__bg">
              <img class="card__icon" src="../../public/img/icon-payoneer.svg" alt="icon">
            </span>
                <span class="card__name">Payoneer</span>
                <span class="card__description">Payment Fees 5%</span>
            </a>
            <a href="#" class="filter__card card">
            <span class="card__bg">
              <img class="card__icon" src="../../public/img/icon-payza.svg" alt="icon">
            </span>
                <span class="card__name">Payza</span>
                <span class="card__description">Payment Fees 2.5%</span>
            </a>
            <a href="#" class="filter__card card card--active">
            <span class="card__bg">
              <img class="card__icon" src="../../public/img/icon-yandex.svg" alt="icon">
            </span>
                <span class="card__name">Yandex.Money</span>
                <span class="card__description">Payment Fees 2.5%</span>
            </a>
            <a href="#" class="filter__card card">
            <span class="card__bg">
              <img class="card__icon" src="../../public/img/icon-paypal.svg" alt="icon">
            </span>
                <span class="card__name">PayPal</span>
                <span class="card__description">Payment Fees 0.5%</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaymentFilter"
    }
</script>
