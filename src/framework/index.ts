import { TPlugin } from "@spax/core";
import { IOptions } from "@spax/framework";
import FrameworkHook from "@spax/framework-hook";
import options from "./config";

export default class Framework extends FrameworkHook {
  public static plugins: TPlugin[] = [];
  public static options: IOptions = options;
}
