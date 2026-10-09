import { images, site } from "../content";
import { Picture } from "./Picture";

export function Menu() {
  const { menu } = site;

  return (
    <section
      id="meny"
      aria-labelledby="meny-rubrik"
      className="bg-beige py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl gap-14 px-6 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <div>
          <h2
            id="meny-rubrik"
            className="font-display text-5xl font-bold sm:text-6xl"
          >
            {menu.heading}
          </h2>
          <p className="mt-4 text-lg text-brown-muted sm:text-xl">
            {menu.intro}
          </p>

          <ul
            role="list"
            className="mt-10 divide-y divide-line border-y border-line"
          >
            {menu.items.map((item) => (
              <li key={item.name} className="py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">
                    {item.name}
                  </h3>
                  <p className="whitespace-nowrap text-lg font-bold text-terracotta">
                    {item.price} kr
                  </p>
                </div>
                <p className="mt-1 text-brown-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-8 lg:grid-cols-1 lg:self-start">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
            <Picture
              image={images.menuPastry}
              sizes="(min-width: 1024px) 40vw, 50vw"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
            <Picture
              image={images.menuCoffee}
              sizes="(min-width: 1024px) 40vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
