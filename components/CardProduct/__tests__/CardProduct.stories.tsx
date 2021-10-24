import React from 'react'
import CardProduct, { ICardProduct } from '../CardProduct'
import { Story } from '@storybook/react'

/** экспорт истории */
export default {
  component: CardProduct,
  title: 'Cards/CardProduct'
}

/** шаблон */
const Template: Story<ICardProduct> = (args) => (
  <div className='w-1/3'>
  <CardProduct
    {...args}
  />
  </div>
)

/** по умолчанию */
export const Default = Template.bind({})
Default.args = {
  title: 'Название',
  text: 'Текст',
  img: '/images/Phone_perspective_matte.png'
}

/** без пропсов */
export const Empty = Template.bind({})
Empty.args = {}
