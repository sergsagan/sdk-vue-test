<template>
    <div class="payments-methods__payment payment">
        <div class="payment__group">
            <div class="payment__title">Payment method</div>
            <span class="payment__limits">Payment limits</span>
        </div>
        <PaymentFilter/>

        <select class="payment__select select" name="select">
            <option value="value1">Qiwi Walet</option>
            <option value="value2">Skrill</option>
            <option value="value3">Payoneer</option>
            <option value="value4">Payza</option>
            <option value="value5" selected>Yandex.Money</option>
            <option value="value6">PayPal</option>
        </select>
        <div class="payment__group">
            <div class="payment__title">Payment</div>
        </div>
        <Form/>
    </div>
</template>

<script>
    import PaymentFilter from "./PaymentFilter";
    import Form from "./Form";

    export default {
        name: "Payment",
        components: {
            PaymentFilter,
            Form
        }
    }
</script>
