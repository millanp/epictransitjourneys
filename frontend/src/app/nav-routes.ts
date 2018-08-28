import { Route, Routes } from "@angular/router";

export interface NavRoute extends Route {
    data: {
        navName: string
    };
}

export type NavRoutes = NavRoute[];

export function navRoutesOnly(routes: Routes): NavRoutes {
    return routes.filter(route => ('data' in route && 'navName' in route.data)) as NavRoutes;
}
