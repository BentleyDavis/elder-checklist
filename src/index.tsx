import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/root';
import ErrorPage from './error-page';
import App, {
  loader as appLoader,
} from './App';
import Weather from './components/weather/Weather';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: ":dateId",
        element: <App />,
        loader: appLoader,
      },
    ],
  }, {
    path: "/weather",
    element: <Weather elementData />,
  }
]);

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    // <App />
    <RouterProvider router={router} />
  );
}
