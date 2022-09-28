<template>
  <!-- ------------------------- -->
  <div style="height: 10px"></div>
  <!-- ------------------------- -->
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6 q-pa-md">
      <q-img :src="src" />
    </div>
    <div class="gt-sm col-6">
      <div class="text-center">
        <div class="text-h4 q-mb-md">{{ name2 }}</div>
        <div class="text-h2 text-weight-bold text-primary q-mb-md">
          {{ name1 }}
        </div>
        <div class="text-h6 text-weight-light q-pa-md text-grey-6">
          {{ lorem }}
        </div>
        <div class="text-h5 text-weight-bold">I would like to discuss</div>

        <div class="q-ml-md q-mt-md">
          <div class="row justify-center q-gutter-md">
            <q-select dense filled v-model="model" :options="options" label="Choose Your Subject" style="width:600px" />
            <q-input dense filled v-model="text1" type="text" placeholder="Your Name" style="width:600px" />
            <q-input dense filled v-model="text2" type="textarea" placeholder="Message" style="width:600px" />
          </div>
        </div>

        <q-btn no-caps class="q-mt-xl text-weight-bold text-h6 q-px-xl" color="primary" label="Submit" />
      </div>
    </div>

    <div class="lt-sm">
      <div class="text-center">
        <div class="text-h5 q-mb-md">{{ name2 }}</div>
        <div class="text-h4 text-weight-bold text-primary">
          {{ name1 }}
        </div>
        <div class="text-subtitle2 text-weight-light q-pa-md text-grey-6">
          {{ lorem }}
        </div>
        <div class="text-h5 text-weight-bold">I would like to discuss</div>
        <div class="q-mt-md">
          <div class="row justify-center q-gutter-md">
            <q-select dense filled v-model="model" :options="options" label="Choose Your Subject" style="width:300px" />
            <q-input dense filled v-model="text1" type="text" placeholder="Your Name" style="width:300px" />
            <q-input dense filled v-model="text2" type="textarea" placeholder="Message" style="width:300px" />
          </div>
        </div>
        <q-btn no-caps class="q-mt-xl text-weight-bold text-h6 q-px-xl" color="primary" label="Submit" />
      </div>
    </div>
  </div>
  <!-- ------------------------- -->
  <div class="text-center q-my-xl gt-xs">
    <div class="text-h4 q-my-md">Why people choose us</div>
    <div class="text-h2 text-weight-bold text-primary q-mb-xl">
      Our advantages
    </div>
  </div>
  <div class="text-center q-my-sm lt-sm">
    <div class="text-h6 q-my-md">Why people choose us</div>
    <div class="text-h4 text-weight-bold text-primary q-mb-sm">
      Our advantages
    </div>
  </div>
  <!-- ------------------------- -->
  <div class="row gt-sm q-col-gutter-md q-pa-md">
    <div class="col-6">
      <q-img :src="img1">
        <div class="text-center bg-transparent absolute-center">
          <div class="text-h3 q-mb-lg">About Us</div>
          <q-btn dense unelevated no-caps class="q-px-xl text-h6" color="primary" label="Learn More" to="/About" />
        </div>
      </q-img>
    </div>
    <div class="col-6">
      <q-img :src="img2">
        <div class="text-center bg-transparent absolute-center">
          <div class="text-h3 q-mb-lg">Won Cases</div>
          <q-btn dense unelevated no-caps class="q-px-xl text-h6" color="primary" label="Learn More" to="/Wow" />
        </div>
      </q-img>
    </div>
  </div>

  <div class="row lt-sm q-col-gutter-md q-pa-md">
    <div class="col-xs-12 col-sm-12 col-md-6">
      <q-img :src="img1">
        <div class="text-center bg-transparent absolute-center">
          <div class="text-h5 q-mb-lg">About Us</div>
          <q-btn dense unelevated no-caps class="q-px-md text-caption" color="primary" label="Learn More" to="/About" />
        </div>
      </q-img>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6">
      <q-img :src="img2">
        <div class="text-center bg-transparent absolute-center">
          <div class="text-h5 q-mb-lg">Won Cases</div>
          <q-btn dense unelevated no-caps class="q-px-md text-caption" color="primary" label="Learn More" to="/Wow" />
        </div>
      </q-img>
    </div>
  </div>
  <!-- ------------------------- -->
  <div class="bg-primary gt-sm" style="height: 400px">
    <div class="text-center q-mt-md" style="padding-top: 30px">
      <div class="text-h3 text-weight-bold q-mt-lg text-white">
        Legal News Digest
      </div>
      <div class="text-h6 q-my-lg text-white">
        Sign up for our legal news digest. It is always informative of the current
        state of affairs in the state’s and federal legal systems.

      </div>
      <div class="row justify-center">

        <q-input class="bg-white" style="width:300px" filled v-model="email1" type="email" label-color="primary"
          label="Enter Your Email" />
      </div>
      <q-btn no-caps class="q-mt-xl text-weight-bold text-subtitle1 bg-secondary text-primary q-px-xl"
        label="Subscribe" />
    </div>
  </div>

  <div class="bg-primary lt-sm text-center q-pt-md" style="height: 290px">
    <div class="text-h4 text-weight-bold text-white">
      Legal News Digest
    </div>
    <div class="text-body2 q-my-lg text-white">
      Sign up for our legal news digest. It is always informative of the current
      state of affairs in the state’s and federal legal systems.
    </div>
    <div class="row justify-center">
      <q-input dense class="bg-white" filled v-model="email1" type="email" label-color="primary"
        label="Enter Your Email" style="width: 300px" />
    </div>
    <q-btn no-caps class="q-mt-md text-weight-bold text-subtitle1 bg-secondary text-primary q-px-xl"
      label="Subscribe" />
  </div>
  <!-- ------------------------- -->
  <down />
  <!-- ------------------------- -->
</template>

<script>
import down from "../components/down.vue";
import { ref } from "vue";
export default {
  components: {
    down,
  },
  setup() {
    return {
      model: ref(null),
      options: [
        "Human resources planning",
        "Business plan consulting",
        "Exit planning",
        "Interim managers",
        "Strategic planning",
        "Market research",
        "Conflict Management",
        "Governance",
        "Mergers",
        "Acquisitions",
      ],
      src: require("assets/free-consultation-01-834x573.jpg"),
      name2: "Request a consultation",
      name1: "Ask our attorneys",
      lorem:
        "Would you like to speak to one of our lawyers? Just submit your contact details and we’ll be in touch shortly. You can also email us if you prefer such type of communication.",
      img1: require("assets/free-consultation-02-834x573.jpg"),
      img2: require("assets/free-consultation-03-834x573.jpg"),
    };
  },
};
</script>
