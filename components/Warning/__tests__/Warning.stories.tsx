import React from 'react'
import Warning from '../Warning'

export default {
  component: Warning,
  title: 'Warning'
}

const Template = (args) => (
  <div>
  <Warning
    {...args}
  />
  </div>
)

export const Default = Template.bind({})
