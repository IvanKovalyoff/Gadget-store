import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from '../components/ThemeSwitcher/ThemeSwitcher';

const meta = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    // Only needs theme context
    contexts: ['theme'],
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic theme switcher
export const Default: Story = {};

// With a demo component to show theme changes
export const WithDemo: Story = {
  render: () => (
    <div>
      <ThemeSwitcher />
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid currentColor' }}>
        <h3>Demo Content</h3>
        <p>This content will change based on the selected theme.</p>
        <p>Current theme will affect colors, backgrounds, and overall appearance.</p>
      </div>
    </div>
  ),
};

// In a card layout
export const InCard: Story = {
  render: () => (
    <div style={{ 
      padding: '2rem', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      maxWidth: '400px',
      backgroundColor: 'var(--card-bg, #fff)',
    }}>
      <h2 style={{ marginTop: 0 }}>Settings</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Theme Preference
        </label>
        <ThemeSwitcher />
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted, #666)', marginTop: '0.5rem' }}>
          Choose between light and dark theme
        </p>
      </div>
    </div>
  ),
};
