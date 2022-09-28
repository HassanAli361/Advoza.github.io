<template>
  <div class="text-center gt-xs" style="margin-top: 120px">
    <div class="text-h4">Request a consultation</div>
    <div class="text-h2 text-primary text-weight-bold">Ask our attorneys</div>
    <div class="text-h6 q-my-lg text-weight-light text-grey-7">
      Would you like to speak to one of our lawyers? Just submit your contact
      details and we’ll be in touch shortly. You <br />
      can also email us if you prefer that type of communication.
    </div>
    <div class="text-h5 text-weight-bold">I would like to discuss</div>
    <div class="q-mt-xl">
      <div class="q-gutter-md text-center">
        <div class="row justify-center">
          <q-input filled v-model="text" type="text" label="Your Subject" label-color="primary" stack-label style="width:600px" />
        </div>
        <div class="row justify-center">
      <q-input filled v-model="text1" type="text" label="Your Name" label-color="primary" stack-label style="width:600px" />
      </div>
      <div class="row justify-center">
      <q-input filled v-model="text2" type="email" label="Your Email" label-color="primary" stack-label style="width:600px" />
      </div>
    </div>
    </div>
    <q-btn
      no-caps
      class="q-mt-xl text-weight-bold text-subtitle1 q-px-xl"
      color="primary"
      label="Submit"
    />
  </div>



  <div class="text-center lt-sm" style="margin-top: 50px">
    <div class="text-h6">Request a consultation</div>
    <div class="text-h4 text-primary text-weight-bold">Ask our attorneys</div>
    <div class="text-body1 q-my-lg text-weight-light text-grey-7">
      Would you like to speak to one of our lawyers? Just submit your contact
      details and we’ll be in touch shortly. You <br />
      can also email us if you prefer that type of communication.
    </div>
    <div class="text-subtitle1 text-weight-bold">I would like to discuss</div>
    <div class="q-gutter-md q-mt-md">
      <div class="row justify-center">
        <q-input dense filled v-model="text" type="text" label="Your Subject" label-color="primary" stack-label style="width:300px" />
      </div>
      <div class="row justify-center">
      <q-input dense filled v-model="text1" type="text" label="Your Name" label-color="primary" stack-label style="width:300px" />
      </div>
      <div class="row justify-center">
      <q-input dense filled v-model="text2" type="email" label="Your Email" label-color="primary" stack-label style="width:300px" />
      </div>
    </div>
    <q-btn
      no-caps
      class="q-mt-md text-weight-bold text-subtitle1 q-px-md"
      color="primary"
      label="Submit"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LogPage",
  setup() {
    return {
      text: ref(""),
      text1: ref(""),
      text2: ref(""),
    };
  },
};
</script>
