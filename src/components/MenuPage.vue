<template>
     <v-app>
    <v-card
      width="25vh"
      height="100%">
      <v-list v-model:opened="open">
        <v-img
        src="https://pbs.twimg.com/profile_images/649530762971115520/j2f8FcG3_400x400.png">
        </v-img>
        <v-list-item prepend-icon="mdi-home" title="Anasayfa"></v-list-item>
        <v-list-item prepend-icon="mdi-receipt" title="Fatura İşlemleri"></v-list-item>
        <v-list-group value="e-Fatura">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-note"
              title="e-Fatura">
          </v-list-item>
          </template>
          <v-list-item to="GelenKutusu" prepend-icon="mdi-email" title="">Gelen Kutusu</v-list-item>
          <v-list-item prepend-icon="mdi-email" title="Giden Kutusu"></v-list-item>
          <v-list-item prepend-icon="mdi-archive" title="Arşiv"></v-list-item>  
          <v-list-item prepend-icon="mdi-inbox-multiple" title="Eski Faturalar"></v-list-item>
          <v-list-item prepend-icon="mdi-card-account-details" title="Tanımlamalar"></v-list-item>
        </v-list-group>
        <v-list-item prepend-icon="mdi-archive" title="e-Arşiv"></v-list-item>
        <v-list-item prepend-icon="mdi-list-status" title="e-İrsaliye"></v-list-item>
        <v-list-item prepend-icon="mdi-notebook" title="e-Defter"></v-list-item>
        <v-list-item prepend-icon="mdi-script" title="e-SMM"></v-list-item>
        <v-list-item prepend-icon="mdi-script" title="e-MM"></v-list-item>
        <v-list-group value="Tanımlamalar">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-card-account-details"
              title="Tanımlamar">
          </v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-store" title="Stoklar"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Müşteriler"></v-list-item>
        </v-list-group>
        <v-list-item prepend-icon="mdi-chart-box" title="Raporlar"></v-list-item>
      </v-list>
    </v-card>
  </v-app>
    </template>
    <script>
    export default {
      name: 'MenuPage',
      data: () => ({
    open: ['Users'],
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
  }),
    }
    </script>