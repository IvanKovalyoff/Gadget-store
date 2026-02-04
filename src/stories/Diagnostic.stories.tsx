import type { Meta } from '@storybook/react';

// Simple test component that doesn't need any contexts
const DiagnosticComponent = () => {
  return (
    <div style={{ padding: '2rem', border: '2px solid green', borderRadius: '8px' }}>
      <h1>✅ Storybook is Working!</h1>
      <p>If you can see this, basic rendering works.</p>
      <p>The issue is likely with context providers or component imports.</p>
    </div>
  );
};

const meta = {
  title: 'Test/Diagnostic',
  component: DiagnosticComponent,
  parameters: {
    contexts: [], // No contexts needed for this test
  },
} satisfies Meta<typeof DiagnosticComponent>;

export default meta;

export const Basic = {};
