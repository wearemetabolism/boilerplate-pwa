<template>
  <div class="v-step v-step--1">
    <h2>{{ __('step_1.get_to_know') }}</h2>
    <small class="mentions">{{ __('step_1.mentions') }}</small>
    <form @submit.prevent="submit()">
      <vue-form-generator class="main_user" :schema="schema.main_user" :model="model.main_user" :options="formOptions"></vue-form-generator>
      <div class="additional_users" v-for="i in model.additional_users">
        <vue-form-generator class="additional_user" :schema="schema.additional_user" :model="model.additional_users[i]" :options="formOptions"></vue-form-generator>
        <a class="button button--delete" @click="remove(i)">{{ __('step_1.delete') }}</a>
      </div>
      <a class="button button--add" @click="add()" v-if="model.additional_users.length < 8">{{ __('step_1.add_a_beneficiary') }}</a>
      <vue-form-generator class="general" :schema="schema.general" :model="model.general" :options="formOptions"></vue-form-generator>
      <small class="specific_regime">{{ __('step_1.specific_regime') }}</small>
      <small class="rgpd">{{ __('step_1.rgpd') }}</small>
      <input type="submit" class="button button--submit" :value="__('step_1.cta')"/>
    </form>
  </div>
</template>

<script>
  import VueFormGenerator from 'vue-form-generator'

  export default {
    name: 'step1',
    methods: {
      add(){
        if( this.model.additional_users.length < 8 ){
          this.model.additional_users.push({
            type: '',
            civility: '',
            firstname: '',
            lastname: '',
            birthday: ''
          });
        }
      },
      remove(position){
        this.model.additional_users.splice(position, 1)
      },
      submit(){
        alert(1)
      }
    },
    data () {
      return {
        model: {
          main_user:{
            civility: '',
            firstname: '',
            lastname: '',
            birthday: '',
            postal_code: '',
            email: '',
            phone: '',
            optin: false
          },
          additional_users:[],
          general:{
            rgpd: false
          }
        },
        schema: {
          user:{},
          additional_user:{}
        },
        formOptions: {
          validateAfterChanged: true
        }
      }
    },
    mounted() {

      var __ = this.__;

      this.schema.main_user =  {
        groups: [
          {
            legend: 'User Details',
            fields: [
              {
                type: 'radios',
                label: __('step_1.you_are'),
                model: "main_user.civility",
                required: true,
                values: [
                  { name: __('step_1.woman'), value:"woman" },
                  { name: __('step_1.men'), value:"man" }
                ]
              },
              {
                type: 'input',
                inputType: 'text',
                required: true,
                label: __('step_1.lastname'),
                model: 'main_user.lastname'
              },
              {
                type: 'input',
                inputType: 'date',
                required: true,
                label: __('step_1.birthday'),
                model: 'main_user.birthday'
              },
              {
                type: 'input',
                inputType: 'text',
                required: true,
                label: __('step_1.firstname'),
                model: 'main_user.firstname'
              },
              {
                type: 'input',
                inputType: 'text',
                required: true,
                label: __('step_1.postal_code'),
                model: 'main_user.postal_code'
              },
              {
                type: 'input',
                inputType: 'email',
                required: true,
                label: __('step_1.email'),
                model: 'main_user.email',
                validator: VueFormGenerator.validators.email
              },
              {
                type: 'input',
                inputType: 'tel',
                required: true,
                label: __('step_1.your_phone'),
                model: 'main_user.phone'
              },
              {
                type: 'checkbox',
                label: __('step_1.i_would_like_to_receive'),
                model: 'main_user.optin'
              }
            ]
          }
        ]
      };

      this.schema.additional_user =  {
        groups: [
          {
            fields: [
              {
                type: 'radios',
                label: __('step_1.i_also_want_to_protect'),
                model: "type",
                required: true,
                values: [
                  { name: __('step_1.my_spouse'), value:"spouse" },
                  { name: __('step_1.my_child'), value:"child" }
                ]
              },
              {
                type: 'radios',
                label: __('step_1.you_are'),
                model: "civility",
                required: true,
                values: [
                  { name: __('step_1.woman'), value:"woman" },
                  { name: __('step_1.men'), value:"man" }
                ]
              },
              {
                type: 'input',
                inputType: 'date',
                required: true,
                label: __('step_1.birthday'),
                model: 'birthday'
              },
              {
                type: 'input',
                inputType: 'text',
                required: true,
                label: __('step_1.lastname'),
                model: 'lastname'
              },
              {
                type: 'input',
                inputType: 'text',
                required: true,
                label: __('step_1.firstname'),
                model: 'firstname'
              }
            ]
          }
        ]
      };

      this.schema.general =  {
        groups: [
          {
            fields: [
              {
                type: 'checkbox',
                label: __('step_1.i_agree'),
                model: 'general.rgpd'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .v-step{
    text-align: left;
    a.button{ text-decoration: underline; cursor: pointer }
    .vue-form-generator{ margin: 20px 0 }
    small{ display: block }
    .required label span:after{ content: '*' }
    .errors{ color: red }
  }
</style>
