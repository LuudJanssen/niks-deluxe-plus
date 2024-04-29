import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comic: ["Luckiest Guy"],
        fancy: ["Grand Hotel"],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
