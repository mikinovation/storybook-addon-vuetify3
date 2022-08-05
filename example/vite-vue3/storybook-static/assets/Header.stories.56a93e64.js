import{M as e}from"./Header.6c9154f7.js";import"./Button.a923eca6.js";import"./vue.esm-bundler.9921587c.js";const l={title:"Example/Header",component:e,parameters:{storySource:{source:`import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyHeader },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:12},endLoc:{col:2,line:22},startBody:{col:17,line:12},endBody:{col:2,line:22}},"logged-out":{startLoc:{col:17,line:12},endLoc:{col:2,line:22},startBody:{col:17,line:12},endBody:{col:2,line:22}}}},layout:"fullscreen"}},n=t=>({components:{MyHeader:e},setup(){return{...t}},template:'<my-header :user="user" />'}),o=n.bind({});o.args={user:{name:"Jane Doe"}};const r=n.bind({});r.args={user:null};const c=["LoggedIn","LoggedOut"];export{o as LoggedIn,r as LoggedOut,c as __namedExportsOrder,l as default};
//# sourceMappingURL=Header.stories.56a93e64.js.map
