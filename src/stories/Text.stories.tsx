import Text from '../components/atoms/Text';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/Header',
  component: Text,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;


export const Default = Template.bind({});
Default.args = {
    text: 'sample text'
};

// export const Pinned = Template.bind({});
// Pinned.args = {
// task: {
//     ...Default.args.task,
//     state: 'TASK_PINNED',
// },
// };

// export const Archived = Template.bind({});
// Archived.args = {
// task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
// },
// };