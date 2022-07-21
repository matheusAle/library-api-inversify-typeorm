import "dotenv/config";
import "reflect-metadata";
import { bootstrapExpress } from "./config/express";
import { bootstrapInversify } from "./config/inversify";
import "./controller";
import { DatabaseService } from "./commom/services";

(async () => {
  await DatabaseService.bootstrap();

  const container = bootstrapInversify();
  const server = bootstrapExpress({ container });

  server.listen(3000, () => console.log("ready!"));
})();
