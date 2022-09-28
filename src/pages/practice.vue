<template>
  <!-- ------------------------ -->
  <q-img src="~assets/home-02-536x282.jpg" />
  <!-- ------------------------ -->
  <div class="text-center q-my-xl gt-xs">
    <div class="text-h3 q-my-md">Why choose us</div>
    <div class="text-h2 text-weight-bold text-primary q-mb-xl">
      Our advantages
    </div>
  </div>

  <div class="text-center q-my-md lt-sm">
    <div class="text-h5 q-my-md">Why choose us</div>
    <div class="text-h4 text-weight-bold text-primary q-mb-md">
      Our advantages
    </div>
  </div>
  <!-- ------------------------ -->
  <div class="row q-pa-md q-my-md q-col-gutter-md">
    <div
      class="col-xs-12 col-sm-12 col-md-4"
      v-for="cards in card"
      :key="cards"
    >
      <q-card class="my-card text-center full-height">
        <q-card-section>
          <div class="text-h2 text-weight-bold text-primary">
            {{ cards.num }}
          </div>
          <div class="text-h5 text-weight-bold q-mt-lg">{{ cards.name }}</div>
        </q-card-section>
        <q-card-section class="text-subtitle1 text-grey-6">
          {{ cards.lorem }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <!-- ------------------------ -->
  <div class="text-center q-my-xl gt-xs">
    <div class="text-h3 q-my-md">Our specialization</div>
    <div class="text-h2 text-weight-bold text-primary q-mb-xl">
      Practice areas
    </div>
  </div>
  <div class="text-center q-my-md lt-sm">
    <div class="text-h5 q-my-md">Our specialization</div>
    <div class="text-h4 text-weight-bold text-primary q-mb-md">
      Practice areas
    </div>
  </div>
  <!-- ------------------------ -->
  <div class="row q-col-gutter-md q-pa-md">
    <div
      class="col-xs-12 col-sm-6 col-md-4 q-my-lg"
      v-for="item in user"
      :key="item"
    >
      <q-card class="my-card full-height q-pa-md bg-white text-black">
        <q-icon
          class="q-pa-md bg-primary"
          style="margin-top: -70px; border-radius: 50px"
          color="white"
          size="25px"
          :name="item.icon"
        />
        <q-card-section>
          <div class="text-h4 text-weight-bold">{{ item.name }}</div>
        </q-card-section>
        <q-card-section>
          <div class="text-subtitle1 text-weight-light text-grey-7 q-mb-lg">
            {{ item.lorem }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <!-- ------------------------ -->
  <LogPage />
  <!-- ------------------------ -->
  <down />
  <!-- ------------------------ -->
</template>

<script>
import down from "../components/down.vue";
import LogPage from "../components/LogPage.vue";
import { ref } from "vue";
export default {
  components: {
    down,
    LogPage,
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
      card: [
        {
          num: "01.",
          name: "Any litigation",
          lorem:
            "It’s very hard to name an either civil or a commercial litigation field, in which we don’t provide our services yet. Starting with Labor & Employment laws, insurance & personal injuries fields for helping the individuals and finishing with the real estate law, business arbitration & mergers and acquisitions for the commercial and business entities, we have it all covered… Our vast team of lawyers and paralegals will be glad to provide you with a top-notch service and uphold your interests either in court or by reaching a confidential settlement in your favor…",
        },
        {
          num: "02.",
          name: "98% cases won",
          lorem:
            "Our track record is higher than that of the best MLB pitchers! We’ve won or settled cases in clients favor a whopping percentage of times we’ve handled – over 98%… That required us to put a lot of effort, timely diligence and an incredible range of legal wit, but we did it! So regardless of you needing a civil or commercial litigation services, be sure that with our company in charge of your legal interests the chance to win is 98 out of 100! We’ve never been settling for a defeat in any of our cases, sometimes fighting all the way, up to the state’s and country’s Supreme Courts, winning there!",
        },
        {
          num: "03.",
          name: "Timely & Affordable",
          lorem:
            "While we’ve already told you that we work with a whole multitude of civil and commercial litigation and win those cases literally all the time, there are two more advantages to hiring our law firm… Firstly, we never waste our clients time – either for redundant paperwork or for stockpiling their cases while doing hearings in the court. We have a vast team of lawyers and that resource always works to get your interests upheld and your case won in an as fast manner as only legally possible. Also, we’re proud to be one of the most affordable law firms both in Houston and in the state of Texas overall!",
        },
      ],
      user: [
        {
          icon: "fas fa-paperclip",
          name: "Labor & Employment Law",
          lorem:
            "We'll be glad to deal with any kind of employment litigation issues, such as unlawful termination, wage hack or discrimination of any kind, which you might have...",
        },
        {
          icon: "fas fa-home",
          name: "Real Estate Law",
          lorem:
            "The real property market nuances and the laws regulating it (such as estate taxing, e.g.) are one of our biggest fields of work. We will be protecting your best interest whatever the...",
        },
        {
          icon: "fas fa-paperclip",
          name: "Personal Injury",
          lorem:
            "We're working with personal injuries, which are basically minor wrongful conduct torts, thus being out of the criminal hearings reach. We will become your defenders in any...",
        },
        {
          icon: "fas fa-compass",
          name: "Insurance Law",
          lorem:
            "The insurance marketplace has a lot of restrictions and limitations, which the insurance companies oftentimes try to use as the loopholes for getting away with..",
        },
        {
          icon: "fas fa-star",
          name: "Business Litigation",
          lorem:
            "The field of commercially related litigation spans everything that your company might be suing others for or be sued by others against. We will make sure, that all the details...",
        },
        {
          icon: "fas fa-paperclip",
          name: "Mergers & Acquisitions",
          lorem:
            "The commercial world of mergers & acquisitions is a harsh one. You'd better have a just as harsh team of sharky lawyers so that your business emerges as the winner...",
        },
      ],
    };
  },
};
</script>
