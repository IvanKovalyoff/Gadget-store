import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { Product } from '../types/Product';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    // Specify which contexts this component needs
    contexts: ['theme', 'language', 'cart', 'favorites'],
  },
  argTypes: {
    product: {
      description: 'Product object with id, name, price, image, etc.',
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample product data
const sampleProduct: Product = {
  id: '1',
  category: 'phones',
  itemId: 'apple-iphone-14-pro-128gb-spaceblack',
  name: 'Apple iPhone 14 Pro 128GB Space Black',
  fullPrice: 1099,
  price: 999,
  screen: "6.1' OLED",
  capacity: '128GB',
  color: 'spaceblack',
  ram: '6GB',
  year: 2022,
  image: 'https://via.placeholder.com/300x200',
};

// Default story with all contexts
export const Default: Story = {
  args: {
    product: sampleProduct,
  },
};

// Story with different product
export const Expensive: Story = {
  args: {
    product: {
      id: '2',
      category: 'phones',
      itemId: 'apple-iphone-14-pro-max-512gb-gold',
      name: 'Apple iPhone 14 Pro Max 512GB Gold',
      fullPrice: 1599,
      price: 1499,
      screen: "6.7' OLED",
      capacity: '512GB',
      color: 'gold',
      ram: '6GB',
      year: 2022,
      image: 'https://via.placeholder.com/300x200/FFD700',
    },
  },
};

// Story without certain contexts (if needed)
export const WithoutFavorites: Story = {
  args: {
    product: sampleProduct,
  },
  parameters: {
    contexts: ['theme', 'language', 'cart'], // Exclude favorites
  },
};

// Story demonstrating multiple products
export const MultipleProducts = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <ProductCard product={sampleProduct} />
      <ProductCard
        product={{
          id: '2',
          category: 'phones',
          itemId: 'samsung-galaxy-s23-256gb-phantom-black',
          name: 'Samsung Galaxy S23 256GB',
          fullPrice: 899,
          price: 799,
          screen: "6.1' AMOLED",
          capacity: '256GB',
          color: 'black',
          ram: '8GB',
          year: 2023,
          image: 'https://via.placeholder.com/300x200/FF0000',
        }}
      />
      <ProductCard
        product={{
          id: '3',
          category: 'tablets',
          itemId: 'apple-ipad-pro-11-256gb-silver',
          name: 'Apple iPad Pro 11" 256GB',
          fullPrice: 899,
          price: 849,
          screen: "11' Liquid Retina",
          capacity: '256GB',
          color: 'silver',
          ram: '8GB',
          year: 2022,
          image: 'https://via.placeholder.com/300x200/00FF00',
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple ProductCard components side by side',
      },
    },
  },
} satisfies Meta<typeof ProductCard>;
