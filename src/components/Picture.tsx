import type { ImageEntry } from "../content";

const srcSets = import.meta.glob<string>("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: { w: "480;800;1200;1600", format: "webp", as: "srcset" },
});

const sources = import.meta.glob<string>("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: { w: "1600", format: "webp" },
});

const placeholders = import.meta.glob<string>("../assets/placeholders/*.svg", {
  eager: true,
  import: "default",
  query: "?url",
});

function findByName(
  map: Record<string, string>,
  file: string,
): string | undefined {
  const path = Object.keys(map).find(
    (key) =>
      key
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "") === file,
  );
  return path ? map[path] : undefined;
}

interface PictureProps {
  image: ImageEntry;
  sizes: string;
  eager?: boolean;
  className?: string;
}

export function Picture({
  image,
  sizes,
  eager = false,
  className = "",
}: PictureProps) {
  const src = findByName(sources, image.file);
  const srcSet = findByName(srcSets, image.file);
  const placeholder = findByName(placeholders, image.file);

  return (
    <img
      src={src ?? placeholder}
      srcSet={src ? srcSet : undefined}
      sizes={src ? sizes : undefined}
      alt={image.alt}
      width={1600}
      height={1067}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "auto" : "async"}
      fetchPriority={eager ? "high" : "auto"}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
