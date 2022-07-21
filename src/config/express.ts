import { InversifyExpressServer } from "inversify-express-utils";
import express, { NextFunction, Request, Response } from "express";
import { Container } from "inversify";
import morgan from "morgan";

export function bootstrapExpress({
  container,
}: {
  container: Container;
}): express.Application {
  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    app.use(
      morgan(":method :url :status :res[content-length] - :response-time ms")
    );
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  });
  const app = server.build();

  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
      message: error.message,
    });
    next();
  });

  return app;
}
