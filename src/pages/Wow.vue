<template>
  <navbar />
  <!-- ------------------------- -->
  <q-img class="gt-sm" src="~assets/won-cases-01-1920x670.jpg">
    <div class="text-center bg-transparent q-mt-lg">
      <div class="text-h4 q-my-lg text-white">Won cases</div>
      <div class="text-h3 text-weight-bold text-primary">
        In our long history of helping Texan people and businesses, we’ve
        accumulated a 98% of positive verdicts rate, which beats any of our
        local competitor’s margins by double digits…
      </div>
      <div class="text-h6 q-my-xl text-white">
        Even if we’ve tried to, it would have been an awfully long of a page to
        list all of the 98 hundred cases we won, helped to dismiss, drop or
        settle in those 27 years. These are our most recent victories, which
        we’ll be updating regularly with newer ones…
      </div>
    </div>
  </q-img>
  <q-img class="lt-sm" height="230px" src="~assets/won-cases-01-1920x670.jpg">
    <div class="text-center bg-transparent">
      <div class="text-body2 text-white">Won cases</div>
      <div class="text-caption text-weight-bold text-primary">
        In our long history of helping Texan people and businesses, we’ve
        accumulated a 98% of positive verdicts rate, which beats any of our
        local competitor’s margins by double digits…
      </div>
      <div class="text-overview text-white">
        Even if we’ve tried to, it would have been an awfully long of a page to
        list all of the 98 hundred cases we won, helped to dismiss, drop or
        settle in those 27 years. These are our most recent victories, which
        we’ll be updating regularly with newer ones…
      </div>
    </div>
  </q-img>
  <!-- ------------------------- -->
  <div class="row q-mt-xl q-pa-md q-col-gutter-md">
    <div class="col-xs-12 col-sm-12 col-md-4" v-for="item in card" :key="item">
      <q-card class="my-card text-center">
        <q-img class="q-mt-lg" :src="item.src" style="width: 230px" />
        <q-card-section>
          <div class="text-h4 text-primary">{{ item.name }}</div>
        </q-card-section>
        <q-card-section class="text-grey-6 text-subtitle1">
          {{ item.lorem }}
        </q-card-section>
        <q-card-section class="text-grey-6 text-subtitle1">
          {{ item.lorem1 }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <!-- ------------------------- -->
  <div style="text-align: center; margin-top: 40px">
    <div class="text-h4 q-my-lg">Latest news</div>
    <div class="text-h3 q-my-lg text-primary text-weight-bolder">
      The most recent info
    </div>
  </div>
  <!-- ------------------- -->
  <div class="row q-col-gutter-md q-pa-md">
    <div
      class="col-xs-12 col-sm-6 col-md-4 q-my-lg"
      v-for="item in manage"
      :key="item"
    >
      <q-card
        class="my-card bg-white text-black text-center bg-transparent no-shadow"
      >
        <q-img :src="item.src" />
        <q-card-section>
          <div class="text-h6 text-grey-6">
            <span class="text-primary">{{ item.title }} </span> {{ item.name }}
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h5 text-weight-light q-mb-md">{{ item.lorem }}</div>
          <q-btn
            class="bg-primary text-body1 q-mb-sm text-white q-py-sm q-px-lg"
            >Read More</q-btn
          >
        </q-card-section>
      </q-card>
    </div>
  </div>
  <!-- ------------------------- -->
  <LogPage />
  <!-- ------------------------- -->
  <down />
  <!-- ------------------------- -->
</template>

<script>
import down from "../components/down.vue";
import LogPage from "../components/LogPage.vue";
export default {
  components: {
    down,
    LogPage,
  },
  setup() {
    return {
      card: [
        {
          src: require("assets/clients-1-200x90.png"),
          name: "Boucheron",
          lorem:
            "While we were dealing with the patent lawsuits that the Boucheron company filed against their competitors in the market, we’ve had a long and arduous fight. As our whole intellectual property and patent rights division of lawyers and paralegals showcased their skills, we eventually were able to win.",
          lorem1: "Result: victory",
        },
        {
          src: require("assets/clients-2-200x90.png"),
          name: "Michelle Monaghan",
          lorem:
            "This case featured an African American Nurse subjected to a Mandatory unpaid Overtime at work and a Hostile Work Environment. She reported the organization and has been targeted against. Our firm fought that unlawful retaliation.",
          lorem1: "Result: We’ve achieved a verdict in the client’s favor.",
        },
        {
          src: require("assets/clients-3-200x90.png"),
          name: "Gary Winkler",
          lorem:
            "It was about a male employee being a subject to sexual harassment by another male colleague while on a business trip. The undesired and uncalled for touching and taunting was reported to supervisors who tried to keep the issue quiet. Our lawyers have sent a detailed offer letter to the company that their attorneys responded to favorably.",
          lorem1: "Result: Obtained a favorable confidential settlement..",
        },
        {
          src: require("assets/clients-4-200x90.png"),
          name: "Walter Mayham",
          lorem:
            "Our client with a mental health condition has been repeatedly accused of shoplifting the electronics and gadgets from a major shopping store chain. Our client continually stated his innocence. Negotiations proved difficult because the client had a prior history of thefts.",
          lorem1:
            "Result: Case dismissed on the first day of trial, thanks to the full analysis of the accusation we done…",
        },
        {
          src: require("assets/clients-5-200x90.png"),
          name: "Amy Adams",
          lorem:
            "In this particular case, a female employee has faced unfair and hostile treatment at her job on the basis of her race. The employee has thus been wrongfully terminated. Our team of lawyers was able to negotiate a reasonable settlement and her personnel record was amended by the employer…",
          lorem1: "Result: Obtained a favorable confidential settlement.",
        },
        {
          src: require("assets/clients-6-200x90.png"),
          name: "Moen",
          lorem:
            "The most recent case that we’ve worked at for this Internet giant’s company has been about the mergers & acquisition. That department, managed by our senior lawyer and managing partner Gerald Harrison worked on this specific case for over a year. But eventually, the legal facts and arguments that we have successfully gathered have proven our client’s claims.",
          lorem1: "Result: in favor of our client.",
        },
      ],
      manage: [
        {
          title: "18.05.2020",
          name: " | by admin",
          lorem:
            "Can you be fined with $1600 for missing a license plate decal?",
          src: require("assets/home-01-536x282.jpg"),
        },
        {
          title: "18.05.2020",
          name: " | by admin",
          lorem: "2020 Texas businesses and private employment law update",
          src: require("assets/home-02-536x282.jpg"),
        },
        {
          title: "18.05.2020",
          name: " | by admin",
          lorem:
            "What the federal legal consequences of Florida's shooting wlll be?",
          src: require("assets/home-03-536x282.jpg"),
        },
      ],
    };
  },
};
</script>
