import logoUrl from "../assets/logo.svg";
import { images, logo, site } from "../content";
import { Picture } from "./Picture";

export function Hero() {
  const { hero, name } = site;

  return (
    <header className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-brown text-cream">
      <div className="absolute inset-0 -z-20">
        <Picture image={images.hero} sizes="100vw" eager />
      </div>
      <div className="absolute inset-0 -z-10 bg-brown/60" aria-hidden="true" />

      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-32 sm:pb-24">
        <div className="mb-16 flex items-center gap-4">
          <img
            src={logoUrl}
            alt={logo.alt}
            width={80}
            height={80}
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <p className="text-lg uppercase tracking-[0.2em] sm:text-3xl">
            {name}
          </p>{" "}
        </div>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl">
          {hero.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg sm:text-2xl">{hero.subheading}</p>
        <a
          href={hero.ctaHref}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-terracotta px-9 py-4 text-lg font-bold text-cream transition-colors hover:bg-terracotta-dark"
        >
          {hero.ctaLabel}
        </a>
      </div>
    </header>
  );
}
