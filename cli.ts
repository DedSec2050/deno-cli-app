import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.4/command/mod.ts";
import {
  Input,
  Select,
  prompt,
} from "https://deno.land/x/cliffy@v1.0.0-rc.4/prompt/mod.ts";

const command = new Command()
  .name("cli")
  .version("0.1.0")
  .description("A CLI app using Cliffy")
  .command("greet <name:string>", "Greet someone")
  .action((options, name) => {
    console.log(`Hello, ${name}!`);
  })
  .command("help", "Display all commands")
  .action(() => {
    console.log("Available commands:");
    console.log("  greet <name>  - Greet the specified person.");
  });

while (true) {
  const value = await Select.prompt({
    message: "Choose a command:",
    options: [
      { name: "Greet Someone", value: "greet" },
      { name: "Show Help", value: "help" },
      { name: "Exit", value: "exit" },
    ],
  });

  if (value === "exit") {
    console.log("Exiting...");
    break; // Exit the loop
  }

  if (value === "greet") {
    const name = await Input.prompt("Enter name: ");
    // Execute the greet command with the provided name
    command.parse(["greet", name]);
  } else {
    // Execute the help command or any other command
    command.parse([value]);
  }

  console.log(); // Add a blank line for better readability
}
