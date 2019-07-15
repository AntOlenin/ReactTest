import React from 'react';
import { ThemeProvider } from 'react-jss';
import Text from './components/Text';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Text size="s">text</Text>
        <Text size="m">text</Text>
        <Text size="l">text</Text>
        <Text size="xl">text</Text>
      </div>
    </ThemeProvider>
  );
};

export default App;
