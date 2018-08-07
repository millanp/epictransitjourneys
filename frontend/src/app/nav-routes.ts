import { Route } from "@angular/router";

export interface NavRoute extends Route {
    data: {
        navName: string
    };
}

export type NavRoutes = NavRoute[];