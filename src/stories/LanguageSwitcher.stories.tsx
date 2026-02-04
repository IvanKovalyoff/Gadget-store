import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher';

const meta = {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    // Only needs language context
    contexts: ['language'],
  },
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic language switcher
export const Default: Story = {};

// With demo text showing language changes
export const WithDemo: Story = {
  render: () => (
    <div>
      <LanguageSwitcher />
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid currentColor' }}>
        <h3>Demo Content</h3>
        <p>This content will be translated based on the selected language.</p>
        <p>Switch between English (EN) and Ukrainian (UA) to see the effect.</p>
      </div>
    </div>
  ),
};

// In a navigation bar
export const InNavBar: Story = {
  render: () => (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--nav-bg, #f5f5f5)',
      borderRadius: '8px'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Logo</div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Products</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
        <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '1rem' }}>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  ),
};

// Compact version
export const Compact: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <span>Select Language:</span>
      <LanguageSwitcher />
    </div>
  ),
};
