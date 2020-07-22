<template>
    <div class="form" >
        <div class="form__row">
            <label for="input-amount"
                   class="form__label"
            >
                Amount with commission
            </label>
            <div class="form__wrap--amount">
                <span class="form__input--icon-lang">USD</span>
                <input type="text"
                       class="form__input form__input-amount"
                       id="input-amount"
                       placeholder=""
                >
            </div>
            <span class="form__description">payment system fees 2.5% (+$1058.75)</span>
        </div>
        <div class="form__row">
            <label for="input-account"
                   class="form__label"
            > Yandex.Money account
            </label>
            <input type="text"
                   class="form__input"
                   id="input-account"
                   placeholder=""
            >
            <span class="form__description"></span>
        </div>
        <div class="form__row">
            <label for="input-phone"
                   class="form__label"
            > Phone
            </label>
            <input type="text"
                   class="form__input"
                   id="input-phone"
                   placeholder=""
            >
            <span class="form__description"></span>
        </div>
        <div class="form__row form__row-textarea">
            <label for="input-message"
                   class="form__label"
            > Message for seller
            </label>
            <textarea type="text"
                      class="form__input"
                      id="input-message"
                      placeholder="If you need additional services, please inform the seller about this"
            ></textarea>
        </div>
        <div class="form__row form__row-captcha">
            <label for="input-captcha"
                   class="form__label"
            > Enter captcha
            </label>
            <div class="form__wrap">
                <input type="text"
                       class="form__input form__input-captcha"
                       id="input-captcha"
                       placeholder=""
                >
                <span class="form__captcha-code">
            <img src="../../public/img/captcha.svg" alt="icon">
          </span>
            </div>
            <span class="form__description"></span>
        </div>
        <div class="form__row form__row-agreement">
            <label class="form__label"></label>
            <span class="form__agreement">
            By clicking "Confirm payment" I realize that the seller is responsible for the quality of the product/services and accept the terms of the
            <a href="#">terms of the agreement</a>
          </span>
        </div>
        <div class="form__row">
            <label class="form__label"></label>
            <a href="#"
               type="submit"
               class="form__btn btn">
                Confirm payment
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Form"
    }
</script>