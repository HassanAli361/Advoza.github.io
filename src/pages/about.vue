<template>
  <!-- ---------------------------- -->
  <q-img :src="src"></q-img>
  <!-- ---------------------------- -->
  <div class="gt-sm">
    <div class="text-h5 q-my-md q-pa-md text-grey-9">{{ heading }}</div>
    <div class="text-h6 q-my-md q-pa-md text-grey-6">{{ heading1 }}</div>
  </div>
  <div class="lt-sm">
    <div class="text-h6 q-my-md q-pa-md text-grey-9">{{ heading }}</div>
    <div class="text-subtitle1 q-my-md q-pa-md text-grey-6">{{ heading1 }}</div>
  </div>
  <!-- ---------------------------- -->
  <div class="row q-pa-md q-mt-lg q-col-gutter-lg">
    <div class="col-xs-12 col-sm-12 col-md-6" v-for="item in head" :key="item">
      <div class="text-h5 text-weight-bold q-my-lg">{{ item.title }}</div>
      <div class="text-subtitle1 text-weight-light q-mb-md text-primary">
        {{ item.title1 }}
      </div>
      <div class="text-subtitle1 text-weight-light q-mb-md text-primary">
        {{ item.name }}
      </div>
      <div class="text-subtitle1 text-weight-light text-primary">
        {{ item.lorem }}
      </div>
    </div>
  </div>
  <!-- ---------------------------- -->
  <div class="text-h2 text-weight-bold text-primary text-center">
    We stand By
  </div>
  <!-- ---------------------------- -->
  <div class="row q-pa-md q-mt-lg q-col-gutter-md">
    <div class="col-xs-12 col-sm-12 col-md-4" v-for="cards in card" :key="cards">
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
  <!-- ---------------------------- -->
  <div class="q-my-xl gt-sm" style="background-color: #202f39; height: 400px">
    <div class="row">
      <div class="col-4 text-white text-center" style="margin-top: 40px">
        <q-circular-progress show-value font-size="50px" value="70" size="200px" :thickness="0.22" color="primary"
          track-color="grey-3" class="q-ma-md">
          70%
        </q-circular-progress>
        <div class="text-h6 text-weight-light">
          A percentage of<br />
          individual cases that we<br />
          take yearly, on average
        </div>
      </div>
      <div class="col-4 text-white text-center" style="margin-top: 40px">
        <q-circular-progress show-value font-size="50px" value="50" size="200px" :thickness="0.22" color="primary"
          track-color="grey-3" class="q-ma-md">
          50%
        </q-circular-progress>
        <div class="text-h6 text-weight-light">
          A share of commercial/business<br />
          cases that we process<br />
          yearly
        </div>
      </div>
      <div class="col-4 text-white text-center" style="margin-top: 40px">
        <q-circular-progress show-value font-size="50px" value="98" size="200px" :thickness="0.22" color="primary"
          track-color="grey-3" class="q-ma-md">
          98%
        </q-circular-progress>
        <div class="text-h6 text-weight-light">
          This is how many cases<br />
          we end up winning, either<br />
          civil or commercial
        </div>
      </div>
    </div>
  </div>
  <div class="q-my-xl lt-sm" style="background-color: #202f39; height: 1150px">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 text-white text-center" style="margin-top: 40px">
        <q-circular-progress show-value font-size="50px" value="70" size="200px" :thickness="0.22" color="primary"
          track-color="grey-3" class="q-ma-md">
          70%
        </q-circular-progress>
        <div class="text-h6 text-weight-light">
          A percentage of<br />
          individual cases that we<br />
          take yearly, on average
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 text-white text-center" style="margin-top: 40px">
        <q-circular-progress show-value font-size="50px" value="50" size="200px" :thickness="0.22" color="primary"
          track-color="grey-3" class="q-ma-md">
          50%
        </q-circular-progress>
        <div class="text-h6 text-weight-light">
          A share of commercial/business<br />
          cases that we process<br />
          yearly
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 text-white text-center" style="margin-top: 40px">
        <q-circular-progress show-value font-size="50px" value="98" size="200px" :thickness="0.22" color="primary"
          track-color="grey-3" class="q-ma-md">
          98%
        </q-circular-progress>
        <div class="text-h6 text-weight-light">
          This is how many cases<br />
          we end up winning, either<br />
          civil or commercial
        </div>
      </div>
    </div>
  </div>
  <!-- ---------------------------- -->
  <div class="text-center q-my-xl gt-xs">
    <div class="text-h4 q-my-md">People behind our success</div>
    <div class="text-h3 text-weight-bold text-primary q-mb-xl">
      Meet our team
    </div>
  </div>
  <div class="text-center q-my-md lt-sm">
    <div class="text-h5 q-mt-md">People behind our success</div>
    <div class="text-h4 text-weight-bold text-primary q-mb-xl">
      Meet our team
    </div>
  </div>
  <!-- ---------------------------- -->
  <div class="row q-pa-md q-col-gutter-md">
    <div class="col-xs-12 col-sm-12 col-md-3 text-center full-height" v-for="team in people" :key="team">
      <q-img :src="team.src" />
      <div class="text-h4 text-weight-bold q-mt-md q-mb-sm">{{ team.name }}</div>
      <div class="text-h6 text-weight-light text-grey-6">{{ team.lorem }}</div>
    </div>
  </div>
  <!-- ---------------------------- -->
  <q-img class="gt-xs" src="~assets/about-14-1920x670.jpg">
    <div class="text-center bg-transparent" style="margin-top: 90px">
      <div class="text-h3 text-weight-light">
        Are you a senior at a law school or a post-graduate with at least a
        Master’s degree in Law?<br />
        If either of the answers is yes, then we’ve got a job opening waiting
        for you to apply!
      </div>
      <q-btn no-caps class="text-h6 q-mt-md q-px-xl" color="primary" label="Careers" />
    </div>
  </q-img>
  <q-img class="lt-sm" height="150px" src="~assets/about-14-1920x670.jpg">
    <div class="text-center bg-transparent" style="margin-top: 10px">
      <div class="text-caption text-weight-light">
        Are you a senior at a law school or a post-graduate with at least a
        Master’s degree in Law?<br />
        If either of the answers is yes, then we’ve got a job opening waiting
        for you to apply!
      </div>
      <q-btn no-caps unelevated dense class="q-mt-xs q-px-lg" color="primary" label="Careers" />
    </div>
  </q-img>
  <!-- ---------------------------- -->
  <ContactPage />
  <!-- ---------------------------- -->
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

        <q-input class="bg-white" style="width:300px" filled v-model="email1" type="email" label-color="primary" label="Enter Your Email" />
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
      <q-input dense class="bg-white" filled v-model="email1" type="email" label-color="primary" label="Enter Your Email"
        style="width: 300px" />
    </div>
    <q-btn no-caps class="q-mt-md text-weight-bold text-subtitle1 bg-secondary text-primary q-px-xl"
      label="Subscribe" />
  </div>
  <!-- ---------------------------- -->
  <down />
  <!-- ---------------------------- -->
</template>

<script>
import down from "../components/down.vue";
import ContactPage from "../components/ContactPage.vue";
export default {
  components: {
    down,
    ContactPage,
  },
  setup() {
    return {
      value: 50,
      src: require("assets/slide-2.jpg"),
      heading:
        "Founded by Steven Pfeiffer, Lesley Dingle and Gerald Harrison back in 1989, today their Houston-based law firm is currently the #1 in both yearly cases dealt with and the percentage of all those cases being won.",
      heading1:
        "But that kind of success does not come by, just when you sit idly or do not have strict work ethic principles being put into practice…",
      head: [
        {
          title: "The principles of our work help us to:",
          title1: "- Earn our clients’ trust",
          name: "- Build our reputation",
          lorem:
            "- Attract thousands of individuals and businesses, all of whom (98%) have successfully dealt with their legal conundrums with our timely and diligent help…",
        },
        {
          title:
            "We’ve always cherished the three pillars which our company has always stood upon:",
          title1: "- A Commitment to Excellence",
          name: "- A Passion for Justice",
          lorem: "- An urge for fair pricing",
        },
      ],
      card: [
        {
          num: "01.",
          name: "A Commitment to Excellence",
          lorem:
            "While the yearly number of cases which we take totals to an insurmountable number, unparalleled by any other Houston, TX law firm, our percentage of wins is record-breaking too… Just to drop some statistics here, in more than 9000 cases that we have ever taken on, a whopping 98% of those (which is 9800+) were the cases which we eventually won…",
        },
        {
          num: "02.",
          name: "A Passion for Justice",
          lorem:
            "With our legal principles and our desire for justice being our first and foremost value, we always try to diversify the range of cases which we take on. That is perfectly shown when you notice that our civil/business cases are divided absolutely evenly. That means that besides helping good, big and small businesses we also help thousands of small men and women!",
        },
        {
          num: "03.",
          name: "An Urge for Fair Pricing",
          lorem:
            "On par with our passion for justice and excellence, the third work ethic which we stand by is the fair pricing. While we have the most winning cases as opposed to any other Houston, TX law firm, we’ve also got the lowest pricing among them all. That is due to the simple fact, that in our opinion, a decent lawyer should charge a price that is nation-wide affordable!",
        },
      ],
      people: [
        {
          src: require("assets/about-02-387x381.jpg"),
          name: "Richard Walker",
          lorem:
            "While Richard is our most experienced paralegal, he’s also our client’s favorite one. Working for some time as a legal mediator, he knows how to approach people in different walks of life…",
        },
        {
          src: require("assets/about-03-387x381.jpg"),
          name: "Gerald Harrison",
          lorem:
            "Gerald is Lesley’s brother, an Ivy League graduate and a proven lawyer, who’ve worked both in NYC and Texas during his 45 years long career…",
        },
        {
          src: require("assets/about-04-387x381.jpg"),
          name: "Mary Dime",
          lorem:
            "Mary comes from a real legal dynasty. Just like the previous 7 generations of her kin, she’s a lawyer and a pretty good one. Her commercial law acts are all short and winning!",
        },
        {
          src: require("assets/about-05-387x381.jpg"),
          name: "Carter Smith",
          lorem:
            "Carter is one of our senior lawyers. He’s with us since 1995 and he’s proven himself to be one of the most frequently winning civil litigation legal shark in the sea!",
        },
        {
          src: require("assets/about-06-387x381.jpg"),
          name: "Lesley Harrison",
          lorem:
            "Lesley is our managing partner, co-founder, and Texas’ leading civil litigation lawyer… She is a proof that female lawyers are just as good and sharky!",
        },
        {
          src: require("assets/about-07-387x381.jpg"),
          name: "James Howard",
          lorem:
            "James Howard has began his legal career in 1987, as an in-house legal intern in BerkshireHathaway… Since then, his 39 years long and counting career just became a primer for all young lawyers!",
        },
        {
          src: require("assets/about-08-387x381.jpg"),
          name: "Steven Pfeiffer",
          lorem:
            "Steven is one of our managing partners and firm’s co-founders. He boldly leads our effort to maintain our status as the Houston, TX leading legal firm!",
        },
        {
          src: require("assets/about-09-387x381.jpg"),
          name: "Andrew Nash",
          lorem:
            "Mr. Nash has moved to Houston from LA. There he’s been vocal in winning any Employment law cases, standing right behind workers’ rights all the time…",
        },
        {
          src: require("assets/about-10-387x381.jpg"),
          name: "Arthur Holmes",
          lorem:
            "Mr. Holmes never does anything in half… He’s always fully dedicated to a case (or cases) he’s on and he diligently manages to win them each time (198 cases out of 199)…",
        },
        {
          src: require("assets/about-11-387x381.jpg"),
          name: "Donald Brown",
          lorem:
            "Mr. Brown is probably one of the most well-known former judges in the state of Texas. Now he is a highly experienced and accomplished lawyer we are proud to house!",
        },
        {
          src: require("assets/about-12-387x381.jpg"),
          name: "Ben Edwards",
          lorem:
            "Though Benjamin is our youngest paralegal and lawyer, his assistance has proven to be priceless. In more than 300 cases he took part in so far, his contribution has always been really vital.",
        },
        {
          src: require("assets/about-13-387x381.jpg"),
          name: "Steven Hill",
          lorem:
            "Steven’s career have initially started out at a free legal consulting practice in Austin, TX. After some time, he switched to helping people within our team…",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.subscribe-input {
  margin-left: 520px;
}
</style>
