import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../src/context/CartContext';
import { FavoriteProvider } from '../src/context/FavouriteContext';
import { LanguageProvider } from '../src/context/LanguageContext';
import { ThemeProvider } from '../src/context/ThemeContext';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },

  decorators: [
    // React Router for Link components
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
    
    // Context providers
    (Story, context) => {
      const { contexts = ['theme', 'language', 'cart', 'favorites'] } = context.parameters;
      
      let WrappedStory = <Story />;

      if (contexts.includes('cart')) {
        WrappedStory = <CartProvider>{WrappedStory}</CartProvider>;
      }
      if (contexts.includes('favorites')) {
        WrappedStory = <FavoriteProvider>{WrappedStory}</FavoriteProvider>;
      }
      if (contexts.includes('language')) {
        WrappedStory = <LanguageProvider>{WrappedStory}</LanguageProvider>;
      }
      if (contexts.includes('theme')) {
        WrappedStory = <ThemeProvider>{WrappedStory}</ThemeProvider>;
      }

      return WrappedStory;
    },
  ],

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
    language: {
      name: 'Language',
      description: 'Global language for components',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ua', title: 'Українська' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;