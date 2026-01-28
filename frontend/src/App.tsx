import './App.css';
import { router } from './router.tsx';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
