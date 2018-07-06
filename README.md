# README

Very basic rails app that duplicates this issue.

https://github.com/vuetifyjs/vuetify/issues/4068

## To install

`git clone git@github.com:lukebyrne/rails-vuetify-test.git`

`bundle install`

`yarn install`

## To run

Open two terminal tabs:

Run `rails s` in one.

Run `./bin/webpack-dev-server` in another.

The VueJS/Vuetify app lives in `/app/javascript/vuetify-datatable` and is just a vanilla VueJS app using Vuetify.

## To fix

Need to create a `custom.js` in `/config/webpack/`

that contains

```
// config/webpack/custom.js
module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}
```

and then wire it into the `/config/webpack/environment.js` via below

https://github.com/rails/webpacker/blob/master/docs/webpack.md#configuration