import { site } from "../content";

export function Contact() {
  const { contact } = site;

  const linkClass =
    "inline-block py-1 font-display text-2xl font-bold underline decoration-2 underline-offset-8 sm:text-4xl";

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-rubrik"
      className="bg-terracotta py-20 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id="kontakt-rubrik"
          className="font-display text-5xl font-bold sm:text-6xl"
        >
          {contact.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg sm:text-xl">{contact.intro}</p>

        <address className="mt-12 grid gap-8 not-italic sm:gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              {contact.phoneLabel}
            </p>
            <a href={contact.phoneHref} className={linkClass}>
              {contact.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              {contact.emailLabel}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className={`${linkClass} break-all`}
            >
              {contact.email}
            </a>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              {contact.instagramLabel}
            </p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {contact.instagramHandle}
              <span className="sr-only"> (öppnas i ny flik)</span>
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}
