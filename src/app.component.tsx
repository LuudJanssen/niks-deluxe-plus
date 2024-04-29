import type { JSX } from "react";
import { tailwind } from "./utils/tailwind.js";

const Body = tailwind.body(
  "min-w-[375px] border-t-8 border-pink-500 bg-stone-100",
);

const Container = tailwind.div("flex  flex-col items-center  px-4 pt-16");

const Comic = tailwind.span(
  "font-comic mb-12 text-center text-4xl text-pink-950",
);
const FancyTop = tailwind.span("font-fancy mb-12 flex text-3xl text-pink-500");
const FancyTopItem = tailwind.div("mx-6");

const List = tailwind.div("relative z-10 mt-12 h-72 w-full");
const ListItem = tailwind.span(
  "font-fancy absolute whitespace-nowrap text-3xl text-[#673c18]",
);

const SchetenLaten = tailwind.span(
  "font-fancy absolute whitespace-nowrap text-xl text-[#bcb8ac]",
);

const ImageContainer = tailwind.div("relative -mt-48");
const Chairs = tailwind.img("");
const Gradient = tailwind.div(
  "absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-stone-100 to-transparent",
);

export function NiksDeluxePlus(): JSX.Element {
  return (
    <html lang="nl">
      <head>
        <link
          rel="preload"
          href="picture-from-2016-do-not-use-for-applications-in-2024-just-because-its-a-nice-picture.jpg"
          as="image"
        />

        <link rel="preload" href="app.css" as="style" />
        <link href="app.css" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" href="favicon.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Niks Deluxe Plus™</title>
      </head>
      <Body>
        <Container>
          <Comic>Ben jij...</Comic>
          <FancyTop>
            Juf<FancyTopItem>/</FancyTopItem>Jarig<FancyTopItem>/</FancyTopItem>
            De beste
          </FancyTop>
          <Comic>Probeer dan nu gratis</Comic>
          <img src="niks-deluxe-plus.svg" />
          <List>
            <ListItem className="left-4 top-16">Even helemaal niks...</ListItem>
            <ListItem className="right-8">Laten verwennen...</ListItem>
            <ListItem className="left-16 top-28">Lekker eten...</ListItem>
            <ListItem className="right-4 top-32">Wijntje...</ListItem>
            <ListItem className="bottom-12 w-full text-center">
              Entertainment...
            </ListItem>
            <SchetenLaten className="bottom-2 left-2">
              Scheten laten...
            </SchetenLaten>
          </List>
        </Container>
        <ImageContainer>
          <Gradient />
          <Chairs src="beach-chairs.jpg" />
        </ImageContainer>
      </Body>
    </html>
  );
}
