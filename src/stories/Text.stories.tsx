import * as React from 'react';
import Text from '../atoms/Text'

export default {
    component: Text,
    title: 'Text',
  };

const Template = (args:any) => <Text {...args} />;

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