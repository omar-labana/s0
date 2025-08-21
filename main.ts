import { defineCommand, runMain } from "citty";
import consola from "consola";
import { $fetch, $Fetch } from "npm:ofetch";

const main = defineCommand({
  meta: {
    name: "my-cli",
    version: "1.0.0",
    description: "A simple CLI using Citty and Consola with Deno",
  },
  subCommands: {
    greet: {
      meta: {
        description: "Greet a user with a styled message",
      },
      args: {
        name: {
          type: "positional",
          description: "Name of the person to greet",
          required: true,
        },
        loud: {
          type: "flag",
          alias: "l",
          description: "Greet loudly with uppercase text",
        },
      },
      run({ args }) {
        const message = `Hello, ${args.name}!`;
        if (args.loud) {
          consola.success(message.toUpperCase());
        } else {
          consola.info(message);
        }
      },
    },
  },
});

runMain(main);
