import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        svariant: '#dbefdc'
      },
      dark: {
        svariant: '#243124'
      },
    },
  },
});
