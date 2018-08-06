import { Route } from "@angular/router";

export interface NavRoute extends Route {
    navName: string;
}

export type NavRoutes = NavRoute[];