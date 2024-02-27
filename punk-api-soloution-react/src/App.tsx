import { Header } from "./components/Header";
import { IRoute } from "./interfaces";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  const links: IRoute[] = [
    {
      id: 1,
      name: "Random Beer",
      path: "/",
    },
    {
      id: 2,
      name: "Search Page",
      path: "/search",
    },
  ];

  return (
    <>
      <Header links={links} />
      <LandingPage />
    </>
  );
}
