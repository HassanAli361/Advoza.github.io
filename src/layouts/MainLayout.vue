<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white">
        <q-toolbar-title class="gt-sm q-py-md" style="text-align: center">
          <q-img src="~assets/logo-default-398x97.png" width="200px" />
        </q-toolbar-title>
        <q-toolbar-title class="lt-sm q-py-md">
          <q-img src="~assets/logo-default-398x97.png" width="130px" />
        </q-toolbar-title>
        <div class="text-primary text-body1">
          <q-icon name="fas fa-envelope" color="primary" size="20px"></q-icon>
          info@gmail.com
        </div>
      </q-toolbar>
      <div class="text-h5 text-weight-light" style="text-align: center">
        <q-tabs
          no-caps
          narrow-indicator
          active-color="primary"
          class="bg-grey-3 text-black"
        >
          <q-route-tab to="/" exact replace label="Home" />
          <q-route-tab to="/About" exact replace label="About Us" />
          <q-route-tab to="/Practice" exact replace label="Practice Area" />
          <q-route-tab to="/Wow" exact replace label="Wow Cases" />
          <q-route-tab to="/News" exact replace label="News" />
          <q-route-tab to="/Pages" exact replace label="Pages" />
          <q-route-tab to="/Contact" exact replace label="Contact" />
        </q-tabs>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
