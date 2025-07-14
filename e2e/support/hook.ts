import { After } from "@cucumber/cucumber";
import { CustomWorld } from "./world";

After(async function (this: CustomWorld) {
  await this["actor"].stop();
});
