import { outputFile } from "fs-extra";
import { join } from "node:path";
import { NiksDeluxePlus } from "../app.component.js";
import { OUTPUT_DIRECTORY } from "./output-directory.constant.js";
import { renderWithDoctype } from "./render-with-doctype.js";

const RENDER_OUTPUT_PATH = join(OUTPUT_DIRECTORY, "index.html");
const output = renderWithDoctype(<NiksDeluxePlus />);

await outputFile(RENDER_OUTPUT_PATH, output);
