import { site } from "../content";

export function Location() {
  const { location } = site;
  const { lat, lon } = location.map;

  const DELTA = 0.0045;
  const bbox = [
    lon - DELTA * 2,
    lat - DELTA,
    lon + DELTA * 2,
    lat + DELTA,
  ].join("%2C");
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
  const largeMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`;

  return (
    <section
      id="hitta-hit"
      aria-labelledby="hitta-hit-rubrik"
      className="bg-beige py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2
            id="hitta-hit-rubrik"
            className="font-display text-5xl font-bold sm:text-6xl"
          >
            {location.heading}
          </h2>
          <address className="mt-8 font-display text-3xl font-bold not-italic sm:text-4xl">
            {location.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-6 text-lg text-brown-muted">
            {location.description}
          </p>
          <a
            href={largeMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-bold text-terracotta underline underline-offset-4 hover:text-terracotta-dark"
          >
            {location.mapLinkLabel}
            <span className="sr-only"> (öppnas i ny flik)</span>
          </a>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-sand">
          <iframe
            src={embedUrl}
            title={location.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
