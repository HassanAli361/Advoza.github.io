<template>

  <div class="text-center gt-xs" style="margin-top: 90px">
    <div class="text-h4">Get In Touch</div>
    <div class="text-h2 q-my-lg text-primary text-weight-bold">Contact Us</div>
    <div class="q-gutter-md q-mt-xl">
      <div class="row justify-center">
        <q-input dense filled v-model="text" type="text" label="Your Subject" label-color="primary"
          style="width:600px" />
      </div>
      <div class="row justify-center">
        <q-input dense filled v-model="text1" type="text" label="Your Name" label-color="primary" style="width:600px" />
      </div>
      <div class="row justify-center">
        <q-input dense filled v-model="textarea" type="textarea" label="Message" label-color="primary"
          style="width:600px" />
      </div>
    </div>
    <q-btn no-caps class="q-mt-xl text-weight-bold text-h6 q-px-xl" color="primary" label="Submit" />
  </div>

  <div class="text-center lt-sm" style="margin-top: 10px">
    <div class="text-h5">Get In Touch</div>
    <div class="text-h3 q-my-md text-primary text-weight-bold">Contact Us</div>
    <div class="q-mt-md">
      <div class="row justify-center q-gutter-md">
        <q-input dense filled v-model="text" type="text" label="Your Subject" label-color="primary" style="width: 300px" />
        <q-input dense filled v-model="text1" type="text" label="Your Name" label-color="primary" style="width: 300px" />
        <q-input dense filled v-model="textarea" type="textarea" label="Message" label-color="primary" style="width: 300px" />
    </div>
    </div>
    <q-btn no-caps dense class="q-my-md text-weight-bold text-h6 q-px-md" color="primary" label="Submit" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ContactPage",
  setup() {
    return {
      text: ref(""),
      text1: ref(""),
      textarea: ref(""),
    };
  },
};
</script>
