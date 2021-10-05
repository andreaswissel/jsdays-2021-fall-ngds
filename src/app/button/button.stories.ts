import { Story } from '@storybook/angular';
import {ButtonComponent} from './button.component';

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args
});

export default {
  title: 'Components/ButtonComponent'
};

export const Default = Template.bind({});

Default.args = {
  label: 'Submit'
};
