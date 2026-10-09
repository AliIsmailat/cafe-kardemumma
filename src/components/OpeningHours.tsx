import { useState } from "react";
import { site } from "../content";

export function OpeningHours() {
  const { openingHours } = site;

  const [todayIndex] = useState(() => (new Date().getDay() + 6) % 7);

  return (
    <section
      id="oppettider"
      aria-labelledby="oppettider-rubrik"
      className="bg-sand py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id="oppettider-rubrik"
          className="font-display text-5xl font-bold sm:text-6xl"
        >
          {openingHours.heading}
        </h2>

        <table className="mt-10 w-full max-w-xl text-left text-lg sm:text-xl">
          <caption className="sr-only">
            {openingHours.heading} per veckodag
          </caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">Dag</th>
              <th scope="col">Tid</th>
            </tr>
          </thead>
          <tbody>
            {openingHours.days.map((row, index) => {
              const isToday = index === todayIndex;
              return (
                <tr
                  key={row.day}
                  className={`border-b border-brown-muted/30 ${isToday ? "font-bold" : ""}`}
                >
                  <th scope="row" className="py-4 pr-6 font-[inherit]">
                    {row.day}
                    {isToday && (
                      <span className="ml-3 rounded-full bg-terracotta px-3 py-1 align-middle text-xs font-bold text-cream">
                        {openingHours.todayLabel}
                      </span>
                    )}
                  </th>
                  <td className="py-4 text-right tabular-nums">{row.hours}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <p className="mt-6 max-w-xl text-brown-muted">{openingHours.note}</p>
      </div>
    </section>
  );
}
