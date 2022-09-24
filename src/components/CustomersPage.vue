<template>
    <v-app>
      
    <v-row>
    <v-col
    sm="4"
    md="2"
    lg="2">
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
         <v-list-item to="GidenKutusu"  prepend-icon="mdi-email" title="">Giden Kutusu</v-list-item>
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
         <v-list-item to="StocksPage" prepend-icon="mdi-store" title="Stoklar"></v-list-item>
         <v-list-item  prepend-icon="mdi-account-multiple" title="Müşteriler"></v-list-item>
       </v-list-group>
       <v-list-item prepend-icon="mdi-chart-box" title="Raporlar"></v-list-item>
     </v-list>
   </v-card>
</v-col>

<v-col

   sm="8"
    md="8"
    lg="8">
    
    <div id="app">
        <v-app>
            <v-toolbar
            dense
            floating
          ><v-text-field
              prepend-icon="mdi-magnify"
              class="mt-4 ml-2"
              single-line
            ></v-text-field>
          </v-toolbar>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
          <th class="text-left">
            Carbs
          </th>
          <th class="text-left">
            Fat
          </th>
          <th class="text-left">
            protein
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.carbs }}</td>
          <td>{{ item.fat }}</td>
          <td>{{ item.protein }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-app>
</div>
</v-col>

</v-row>
</v-app>
   </template>
   <script>
   export default {
     name: 'CustomersPage',
     data () {
    return {
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
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
   
    }
  },
   }
   </script>
   