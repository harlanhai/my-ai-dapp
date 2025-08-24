import { IndexRouteObject, NonIndexRouteObject, Params } from "react-router-dom";
import { QueryKey } from "@tanstack/react-query";

interface PrefetchRoute {
  queryKey: QueryKey;
  loadData?: (params: Params<string>) => Promise<unknown>;
}

interface PrefetchIndexRouteObject extends PrefetchRoute, IndexRouteObject {}

interface PrefetchNonIndexRouteObject extends PrefetchRoute, NonIndexRouteObject {
  children?: PrefetchRouteObject[];
}

export type PrefetchRouteObject = PrefetchIndexRouteObject | PrefetchNonIndexRouteObject;