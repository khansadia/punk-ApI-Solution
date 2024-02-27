import { MouseEventHandler, useState } from "react";

export function LandingPage(): JSX.Element {
  const [beer, setBeer] = useState<null | string>(null);
  
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers/random");
    const beer = await response.json();

    setBeer(beer[0].name);
  };

  return (
    // An empty element is called af fragment and lets us return multiple "root" elements.
    <>
      <section>
        <h2>You random beer of the day!</h2>
        <article className="random-beer">
          <div className="loader"></div>
          <h1>{beer}</h1>
        </article>
      </section>
      <footer>
        <button onClick={handleOnClick}>Generate new random beer</button>
      </footer>
    </>
  );
}
