import{M as t}from"./Button.a923eca6.js";import"./vue.esm-bundler.9921587c.js";const a={parameters:{storySource:{source:`import MyButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button>Button</my-button>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:12},endLoc:{col:2,line:21},startBody:{col:17,line:12},endBody:{col:2,line:21}}}}},title:"Example/Button",component:t,argTypes:{}},n=o=>({components:{MyButton:t},setup(){return{args:o}},template:"<my-button>Button</my-button>"}),e=n.bind({});e.args={primary:!0,label:"Button"};const p=["Primary"];export{e as Primary,p as __namedExportsOrder,a as default};
//# sourceMappingURL=Button.stories.8d9afdec.js.map
