import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from '../components/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { Product } from '../types/Product';

const meta = {
  title: 'Examples/CombinedComponents',
  parameters: {
    // This needs all contexts since it combines all components
    contexts: ['theme', 'language', 'cart', 'favorites'],
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProducts: Product[] = [
  {
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
  },
  {
    id: '2',
    category: 'phones',
    itemId: 'samsung-galaxy-s23-256gb-phantom-black',
    name: 'Samsung Galaxy S23 256GB Phantom Black',
    fullPrice: 899,
    price: 799,
    screen: "6.1' AMOLED",
    capacity: '256GB',
    color: 'black',
    ram: '8GB',
    year: 2023,
    image: 'https://via.placeholder.com/300x200/FF0000',
  },
  {
    id: '3',
    category: 'tablets',
    itemId: 'apple-ipad-pro-11-256gb-silver',
    name: 'Apple iPad Pro 11" 256GB Silver',
    fullPrice: 899,
    price: 849,
    screen: "11' Liquid Retina",
    capacity: '256GB',
    color: 'silver',
    ram: '8GB',
    year: 2022,
    image: 'https://via.placeholder.com/300x200/00FF00',
  },
];

// Full app-like layout with all components
export const FullLayout: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', padding: '1rem' }}>
      {/* Header with switchers */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'var(--header-bg, #f5f5f5)',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h1 style={{ margin: 0 }}>My Store</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </header>

      {/* Product grid */}
      <main>
        <h2>Products</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          {sampleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  ),
};

// Settings panel layout
export const SettingsPanel: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '600px', 
      margin: '2rem auto',
      padding: '2rem',
      border: '1px solid var(--border-color, #ccc)',
      borderRadius: '12px',
      backgroundColor: 'var(--card-bg, #fff)',
    }}>
      <h2 style={{ marginTop: 0 }}>Settings</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Theme</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #666)' }}>
          Choose your preferred color scheme
        </p>
        <ThemeSwitcher />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Language</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #666)' }}>
          Select your language preference
        </p>
        <LanguageSwitcher />
      </div>

      <hr style={{ margin: '2rem 0', borderColor: 'var(--border-color, #e0e0e0)' }} />

      <h3>Preview</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #666)', marginBottom: '1rem' }}>
        See how your settings affect the product display
      </p>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <ProductCard product={sampleProducts[0]} />
      </div>
    </div>
  ),
};

// Minimal header with switchers only
export const HeaderOnly: Story = {
  render: () => (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--header-bg, #f5f5f5)',
      borderRadius: '8px'
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Store</h1>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Products</a>
          <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
        </nav>
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          alignItems: 'center', 
          borderLeft: '1px solid var(--border-color, #ccc)', 
          paddingLeft: '1rem' 
        }}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  ),
};

// Mobile-friendly compact layout
export const CompactLayout: Story = {
  render: () => (
    <div style={{ padding: '1rem', maxWidth: '400px' }}>
      {/* Compact header */}
      <header style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '0.5rem',
        padding: '1rem',
        backgroundColor: 'var(--header-bg, #f5f5f5)',
        borderRadius: '8px',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Store</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Product list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  ),
};
