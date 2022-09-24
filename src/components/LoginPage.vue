<template>
    <div id="app" class="mt-12">
      <v-app id="inspire">
        <v-container class="mt-12">
          <v-row no-gutters>
            <v-col
              class="ml-md-auto">
              <v-card
               class="mt-12"
                outlined
                tile>
                <v-img 
                height="400px"
                src="https://pbs.twimg.com/profile_images/649530762971115520/j2f8FcG3_400x400.png">
                </v-img>
              </v-card>
            </v-col>
            <v-col
            class="ml-md-auto"
              sm="15"
              md="6">
              <v-card
                max-height="400px"
                class="pa-2 mt-12"
                outlined
                tile>
              <v-form >
          <v-container>
        <v-form>
          <v-text-field
          class="mt-12"
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name22"
            required>
        </v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Password"
            type="password"
            required>
        </v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mt-12"
            >
            <a href="MenuPage">Login</a>
          </v-btn>
        </v-form>
        <v-app >
      </v-app>
          </v-container>
        </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-app>
    </div>
    </template>
    <script>
    export default {
      name: 'LoginPage',
      data: () => ({
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'Password is required',
          v => /.+@.+\..+/.test(v) || 'Password must be valid',
        ],
        select: null,
        
      }),
    
      methods: {
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
      },
    }
    </script>
    <style>
      #inspire{
        margin-top: 12%;
      }
    </style>