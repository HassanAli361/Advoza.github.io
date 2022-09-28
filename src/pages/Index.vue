<template>
  <!-- ------------------- -->
  <q-carousel class="q-mb-lg gt-xs" animated v-model="slide" infinite autoplay arrows height="500px">
    <q-carousel-slide :name="1" img-src="~assets/slide-1.jpg">
      <div class="text-white" style="text-align: center; margin-top: 100px">
        <div class="text-h3 text-weight-bolder">An Affordable Legal help</div>
        <p class="text-h6 q-mt-md">
          {{ heading1 }}
        </p>
        <q-btn no-caps class="bg-primary text-body1 text-weight-bold text-white q-py-sm q-px-lg">Read More</q-btn>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="~assets/slide-2.jpg">
      <div class="text-white" style="text-align: center; margin-top: 100px">
        <div class="text-h3 text-weight-bolder">Maritime Law</div>
        <p class="text-h6">
          {{ heading2 }}
        </p>
        <q-btn class="bg-primary text-body1 text-weight-bold text-white q-py-sm q-px-lg">Read More</q-btn>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="~assets/slide-3.jpg">
      <div class="text-white" style="text-align: center; margin-top: 100px">
        <div class="text-h3 text-weight-bolder">Construction Business Law</div>
        <p class="text-h6 q-mt-lg">
          {{ heading3 }}
        </p>
        <q-btn no-caps class="bg-primary text-body1 text-weight-bold text-white q-py-sm q-px-lg">Read More</q-btn>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <q-carousel class="q-mb-lg lt-sm" animated v-model="slide" infinite autoplay height="500px">
    <q-carousel-slide :name="1" img-src="~assets/slide-1.jpg">
      <div class="text-white q-mt-xl" style="text-align: center">
        <div class="text-h3 text-weight-bolder">An Affordable Legal help</div>
        <p class="text-subtitle2 q-mt-lg">
          {{ heading1 }}
        </p>
        <q-btn no-caps class="bg-primary text-body1 text-weight-bold text-white q-py-sm q-px-lg">Read More</q-btn>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="~assets/slide-2.jpg">
      <div class="text-white q-mt-xl" style="text-align: center">
        <div class="text-h3 text-weight-bolder">Maritime Law</div>
        <p class="text-subtitle2 q-mt-lg">
          {{ heading2 }}
        </p>
        <q-btn class="bg-primary text-body1 text-weight-bold text-white q-py-sm q-px-lg">Read More</q-btn>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="~assets/slide-3.jpg">
      <div class="text-white q-mt-xl" style="text-align: center">
        <div class="text-h3 text-weight-bolder">Construction Business Law</div>
        <p class="text-subtitle2 q-mt-lg">
          {{ heading3 }}
        </p>
        <q-btn no-caps class="bg-primary text-body1 text-weight-bold text-white q-py-sm q-px-lg">Read More</q-btn>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <!-- ------------------- -->
  <div class="text-h4 q-mt-xl" style="text-align: center; margin-top: 100px">
    Our specialization
  </div>
  <div class="q-mt-md text-h2 text-weight-bold text-primary" style="text-align: center">
    Practice areas
  </div>
  <!-- ------------------- -->
  <div class="row q-col-gutter-md q-pa-md" style="margin-top: 40px">
    <div class="col-xs-12 col-sm-6 col-md-4 q-my-lg" v-for="item in user" :key="item">
      <q-card class="my-card full-height q-pa-md bg-white text-black">
        <q-icon class="q-pa-md bg-primary" style="margin-top: -70px; border-radius: 50px" color="white" size="25px"
          :name="item.icon" />
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
  <div style="text-align: center">
    <q-btn no-caps class="bg-primary text-body1 q-mt-lg q-mb-xl text-weight-bold text-white q-py-sm q-px-lg">View More
    </q-btn>
  </div>
  <!-- ------------------- -->
  <div class="row q-mt-xl q-pa-md q-col-gutter-md bg-info">
    <div class="col-xs-12 col-sm-12 col-md-6 q-my-xl">
      <q-img src="~assets/SharedScreenshot.jpg" />
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6 q-my-xl">
      <div class="text-h3">
        <span class="text-weight-bolder">Winning</span> is easier than you
        think...
      </div>
      <div class="text-h6 text-weight-light q-mt-lg text-grey-7">
        {{ video }}
      </div>
      <q-btn no-caps class="bg-primary text-body1 q-mt-lg q-mb-xl text-weight-bold text-white q-py-sm q-px-lg">View More
      </q-btn>
    </div>
  </div>
  <!-- ------------------- -->
  <q-img class="gt-xs" src="~assets/home-parallax-01.jpg">
    <div class="bg-transparent text-center absolute-center">
      <div class="text-h4 q-my-lg">Facts & Statistics</div>
      <div class="text-h3 q-my-lg text-weight-bolder">
        Take a look at our achievements
      </div>
      <div class="row q-my-md q-col-gutter-xl">
        <div class="col-3" v-for="info in trad" :key="info">
          <div class="text-h3" style="border: 2px solid gold; border-radius: 10px">
            {{ info.num }}
          </div>
        </div>
      </div>
    </div>
  </q-img>

  <q-img class="lt-sm" height="150px" src="~assets/home-parallax-01.jpg">
    <div class="bg-transparent" style="text-align: center; margin-left: 30px;">
      <div class="text-subtitle2 q-pb-sm">Facts & Statistics</div>
      <div class="text-subtitle2 q-py-sm text-weight-bolder">
        Take a look at our achievements
      </div>
      <div class="row q-col-gutter-xl">
        <div class="col-3" v-for="info in trad" :key="info">
          <div class="text-h6 q-pa-sm" style="border: 1px solid gold; border-radius: 50px;">
            {{ info.num }}
          </div>
        </div>
      </div>
    </div>
  </q-img>
  <!-- ------------------- -->
  <div style="text-align: center; margin-top: 40px">
    <div class="text-h4 q-my-lg">Latest news</div>
    <div class="text-h3 q-my-lg text-primary text-weight-bolder">
      The most recent info
    </div>
  </div>
  <!-- ------------------- -->
  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-xs-12 col-sm-6 col-md-4 q-my-lg" v-for="item in manage" :key="item">
      <q-card class="my-card bg-white text-black text-center bg-transparent no-shadow">
        <q-img :src="item.src" />
        <q-card-section>
          <div class="text-h6 text-grey-6">
            <span class="text-primary">{{ item.title }} </span> {{ item.name }}
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h5 text-weight-light q-mb-md">{{ item.lorem }}</div>
          <q-btn class="bg-primary text-body1 q-mb-sm text-white q-py-sm q-px-lg">Read More</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <!-- ------------------- -->
  <q-img class="q-my-lg gt-xs" src="~assets/home-parallax-02.jpg">
    <div class="absolute-center text-center bg-transparent text-accent">
      <div class="text-h4">Professional legal help</div>
      <div class="text-h3 q-mt-lg text-weight-bold">
        Our attorneys are ready to help you succeed in court!
      </div>
      <q-btn class="bg-primary text-body1 q-mb-md text-weight-bold text-white q-mt-xl q-py-sm q-px-lg">Read More</q-btn>
    </div>
  </q-img>
  <q-img height="150px" class="q-mt-sm lt-sm" src="~assets/home-parallax-02.jpg">
    <div class="absolute-center text-center bg-transparent text-accent">
      <div class="text-body1 text-weight-bold q-mt-sm">Professional legal help</div>
      <div class="text-body2">
        Our attorneys are ready to help you succeed in court!
      </div>
      <q-btn dense unelevated class="bg-primary text-caption q-mb-xs text-weight-bold text-white q-px-sm">Read More
      </q-btn>
    </div>
  </q-img>
  <!-- ------------------- -->
  <div style="text-align: center">
    <div class="text-h5 q-my-lg">Recent testimonials</div>
    <div class="text-h4 text-primary text-weight-bold">
      What our clients say
    </div>
  </div>
  <!-- ------------------- -->
  <div class="row q-col-gutter-sm q-pa-sm">
    <div class="col-xs-12 col-sm-6 col-md-1 q-mt-xl">
      <q-avatar size="110px">
        <img src="~assets/home-04-135x135.jpg" />
      </q-avatar>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="text-h2 text-primary">“</div>
      <div class="text-h6 q-mb-lg text-weight-light text-grey-7">
        {{ team1 }}
      </div>
      <div class="text-subtitle1 text-weight-bold">— David Black</div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-1 q-mt-xl">
      <q-avatar size="110px">
        <img src="~assets/home-05-135x135.jpg" />
      </q-avatar>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="text-h2 text-primary">“</div>
      <div class="text-h6 q-mb-lg text-weight-light text-grey-7">
        {{ team2 }}
      </div>
      <div class="text-subtitle1 text-weight-bold">— David Black</div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-1 q-mt-xl">
      <q-avatar size="110px">
        <img src="~assets/home-06-135x135.jpg" />
      </q-avatar>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="text-h2 text-primary">“</div>
      <div class="text-h6 q-mb-lg text-weight-light text-grey-7">
        {{ team3 }}
      </div>
      <div class="text-subtitle1 text-weight-bold">— David Black</div>
    </div>
  </div>
  <!-- ------------------- -->
  <div class="bg-primary gt-xs q-pa-lg q-mt-xl text-white text-center"
    style="height: 300px; border-radius: 20px 100px 20px 100px">
    <div class="text-h4">Our partners</div>
    <div class="text-h2 text-weight-bold">
      We have worked with lots of corporate clients
    </div>
    <div class="row q-mt-xl">
      <div class="col-xs-12 col-sm-6 col-md-2" v-for="item in image" :key="item">
        <q-img :src="item.src" />
      </div>
    </div>
  </div>

  <div class="bg-primary lt-sm q-mt-xl text-white text-center"
    style="height: 400px; border-radius: 5px 60px 5px 60px">
    <div class="text-h6">Our partners</div>
    <div class="text-h5 text-weight-bold">
      We have worked with lots of corporate clients
    </div>
    <div class="row q-mt-sm">
      <div class="col-xs-6 col-sm-6 col-md-2" v-for="item in image" :key="item">
        <q-img width="180px" :src="item.src" />
      </div>
    </div>
  </div>
  <!-- ------------------- -->
  <LogPage />
  <!-- ------------------- -->
  <down />
  <!-- ------------------- -->
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
      trad: [
        {
          num: "13",
        },
        {
          num: "50",
        },
        {
          num: "29",
        },
        {
          num: "34",
        },
      ],
      slide: ref(1),
      text: ref(""),
      text1: ref(""),
      text2: ref(""),
      team1:
        "Business litigation has always been what our competitors were using to suppress us. But as soon as we've hired this law firm, which by the way had fees 5 times lower than the...",
      team2:
        "As the one who recently suffered from the FELA (Federal Employers’ Liability Act Claims) related issues, I've been desperate to find a firm who could have won my case...",
      team3:
        "Finally, 3 months later the truth and the law prevailed, all thanks to this firm's lawyers diligence! We finally had all the disputes resolved in our favor!...",
      video:
        "Watch this video, where dozens of our former clients tell, how desperate they were to win their respective case and how slim their chances seemed before hiring us as their lawyers! That's right, our law firm has the highest wins ratio percentage among all other Houston, Texas legal practices. With us, there's just no other way but to win!",
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
      image: [
        {
          src: require("assets/clients-inverse-6-200x90.png"),
        },
        {
          src: require("assets/clients-inverse-5-200x90.png"),
        },
        {
          src: require("assets/clients-inverse-4-200x90.png"),
        },
        {
          src: require("assets/clients-inverse-3-200x90.png"),
        },
        {
          src: require("assets/clients-inverse-1-200x90.png"),
        },
        {
          src: require("assets/clients-inverse-2-200x90.png"),
        },
      ],
      heading1:
        "We're proud that our law firm offers top-notch legal services for nationwide affordable pricing! With us you'll never feel like the lawyers are just robbers in suits, besides, we win 98% of all cases",
      heading2:
        "We can help you with any legal issues which you may ever experience in a maritime law field! That’s because we care for people involved in as a multitude of maritime contractors",
      heading3:
        "Whether you are an employee of a construction company, a sub-contractor or a company that builds houses and develops our Houston habitat, we’re here for you.",
    };
  },
};
</script>
