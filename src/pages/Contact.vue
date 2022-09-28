<template>
  <!-- -------------------------- -->
  <div class="text-center q-my-md gt-xs">
    <div class="text-h3 q-mb-lg">We are ready to help you</div>
    <div class="text-h2 text-primary q-mb-lg text-weight-bold">
      Our contacts
    </div>
    <div class="text-h6 q-mb-lg text-grey-6">
      87 Tennesee hwy., Alexandria, VA USA, 22303
    </div>
    <div class="text-h6 text-weight-bold text-grey-6">
      <q-icon color="primary" name="fas fa-phone" /> 800-2345-6789
    </div>
  </div>

  <div class="text-center q-mt-md lt-sm">
    <div class="text-h5">We are ready to help you</div>
    <div class="text-h4 text-primary q-mb-xs text-weight-bold">
      Our contacts
    </div>
    <div class="text-h6 q-mb-sm text-grey-6">
      87 Tennesee hwy., Alexandria, VA USA, 22303
    </div>
    <div class="text-h6 text-weight-bold text-grey-6">
      <q-icon color="primary" name="fas fa-phone" /> 800-2345-6789
    </div>
  </div>
  <!-- -------------------------- -->
  <ContactPage />
  <!-- -------------------------- -->
  <down />
  <!-- -------------------------- -->
</template>

<script>
import down from "../components/down.vue";
import ContactPage from "../components/ContactPage.vue";
export default {
  components: {
    down,
    ContactPage,
  },
};
</script>
