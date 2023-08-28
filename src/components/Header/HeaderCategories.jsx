import React from 'react'
import HeaderCategoriesItem from './HeaderCategoriesItem';

import { Icon } from '@iconify/react';

const HeaderCategories = () => {
  return (
    <div className="categories">
      <ul className="categories__list">
        <HeaderCategoriesItem
          text="Minecraft"
          img={<Icon icon="mdi:minecraft" width='24px' />}
          link='/'
        />

        <HeaderCategoriesItem
          text="ChatGPT"
          img={<Icon icon="arcticons:openai-chatgpt" width='24px' />}
          link='/'
        />

        <HeaderCategoriesItem
          text="Spotify"
          img={<Icon icon="mdi:spotify" width='24px' />}
          link='/'
        />

        <HeaderCategoriesItem
          text="VPN"
          img={<Icon icon="mdi:vpn" width='24px' />}
          link='/'
        />
      </ul>
    </div>
  )
}

export default HeaderCategories