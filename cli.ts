import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.4/command/mod.ts";

await new Command()
  .name("cli")
  .version("0.1.0")
  .description("A CLI app using Cliffy")
  .command("greet <name:string>", "Greet someone")
  .action((options, name) => {
    console.log(`Hello, ${name}!`);
  })
  .parse(Deno.args);
