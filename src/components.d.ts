/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Task } from "./interfaces/task";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface EntryList {
    }
    interface ItensList {
        "tasks": Task[];
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLEntryListElement extends Components.EntryList, HTMLStencilElement {
    }
    var HTMLEntryListElement: {
        prototype: HTMLEntryListElement;
        new (): HTMLEntryListElement;
    };
    interface HTMLItensListElement extends Components.ItensList, HTMLStencilElement {
    }
    var HTMLItensListElement: {
        prototype: HTMLItensListElement;
        new (): HTMLItensListElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "entry-list": HTMLEntryListElement;
        "itens-list": HTMLItensListElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface EntryList {
        "onSendTask"?: (event: CustomEvent<Task>) => void;
    }
    interface ItensList {
        "tasks"?: Task[];
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "entry-list": EntryList;
        "itens-list": ItensList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "entry-list": LocalJSX.EntryList & JSXBase.HTMLAttributes<HTMLEntryListElement>;
            "itens-list": LocalJSX.ItensList & JSXBase.HTMLAttributes<HTMLItensListElement>;
        }
    }
}
