import { Story } from '@storybook/angular';
import {ButtonComponent} from './button.component';

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args
});

export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
};

export const Default = Template.bind({});

Default.args = {
  label: 'Submit',
  bgColor: '#0085FC',
  fontSize: 13
};

Default.argTypes = {
  label: {
    name: 'Label'
  },
  bgColor: {
    name: 'Background Color',
    control: 'color'
  },
  fontSize: {
    name: 'Font Size',
    control: { type: 'range', min: 8, max: 20 }
  }
};
