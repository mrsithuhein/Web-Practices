import { createSaveBtn } from "./button.js";
import { createCounter } from "./counter.js";
import { createHeading } from "./heading.js";
import { createInput } from "./input.js";
import { createUl } from "./ul.js";

export const titleText = createHeading("Todo app");
export const input = createInput();
export const saveBtn = createSaveBtn("Save");
export const lists = createUl();
export const counter = createCounter("Total",0)