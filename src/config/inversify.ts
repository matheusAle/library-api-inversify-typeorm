import { Container } from "inversify";
import { registerCommonService } from "commom/services";
import { registerAutherServices } from "domain/author";
import { registerBookServices } from "domain/book";

export function bootstrapInversify() {
  const container = new Container();

  registerCommonService(container);
  registerAutherServices(container);
  registerBookServices(container);

  return container;
}
