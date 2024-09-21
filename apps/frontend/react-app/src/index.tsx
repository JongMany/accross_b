import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { css, Global } from '@emotion/react';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { rootQueryClient } from './root-query-client';

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <div>
      <QueryClientProvider client={rootQueryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Global styles={css`
        body { margin:0; }
        * {
          font-family: 'Pretendard', sans-serif;
        }
      `}
      />
      <div id="float-elements" />
    </div>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
