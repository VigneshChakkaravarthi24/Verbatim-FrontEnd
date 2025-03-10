import { RouterProvider, createHashRouter,createBrowserRouter } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import TestInstructionsPage from './Components/TestInstructions/TestInstructions';
import LoginPage from './Components/LoginPage/LoginPage';
import EssayPage from './Components/EssayPage/EssayPage';
import WriteEssayPage from './Components/WriteEssay/WriteEssay';
import SummaryPage from './Components/Summary/Summary';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import InstructionsLayout from './Components/InstructionsLayout/InstructionsLayout';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import NavigatePage from './Components/NavigatePage/NavigatePage';
import { loader as WelcomeLoader } from './Components/WelcomePage/WelcomePage';
import { loader as EssayLoader } from './Components/EssayPage/EssayPage';
import TaiwanInstructions from './Components/TaiwanInstructions/TaiwanInstructions';
import TaiwanEnglishInstructions from "./Components/TaiwanEnglishInstructions/TaiwanInstructions"
const router = createBrowserRouter([
  {path :"/",
    element:<TaiwanInstructions/>,
    errorElement: <NavigatePage buttonText="Back to login" message="An error occurred in Instructions Page" title="Oops!" goToPath="/" />

  },
  {
    path:"/english",
    element:<TaiwanEnglishInstructions/>,
    errorElement: <NavigatePage buttonText="Back to login" message="An error occurred in Instructions Page" title="Oops!" goToPath="/" />

  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <PrivateRoute element={<InstructionsLayout />} />,
    children: [
      {
        path: "/welcome",
        element: <WelcomePage />,
        loader: WelcomeLoader,
        errorElement: <ErrorPage />
      },
    
      {
        path: "/test-instructions",
        element: <TestInstructionsPage />,
        loader: WelcomeLoader,
        errorElement: <NavigatePage buttonText="Back to login" message="An error occurred in Audio Test" title="Oops!!" goToPath="/" />
      },
    ]
  },
  {
    path: "/essay",
    element: <PrivateRoute element={<EssayPage />} />,
    loader: EssayLoader,
    errorElement: <ErrorPage />
  },

  {
    path: "/write-test",
    element: <PrivateRoute element={<WriteEssayPage />} />,
    errorElement: <NavigatePage buttonText="Back to login" message="An error occurred in Write Test" title="Oops!!" goToPath="/" />
  },
  {
    path: "/summary",
    element: <SummaryPage />
  }
]);

function App() {

  



  return <RouterProvider router={router} />;
}

export default App;
