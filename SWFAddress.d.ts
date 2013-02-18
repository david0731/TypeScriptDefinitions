//TypeScript definitions for SWFAddress

interface ISWFAddress {
    addEventListener(type: string, listener: any, useCapture: bool, priority: number, useWeakReference: bool): void;
    back(): void;
    dispatchEvent(event: Event): bool;
    forward(): void;
    up(): void;
    getBaseURL(): string;
    getHistory(): bool;
    getParameter(param: string): any;
    getParameterNames(): Array;
    getPath(): string;
    getPathNames(): Array;
    getQueryString(): string;
    getStatus(): string;
    getStrict(): bool;
    getTitle(): string;
    getTracker(): string;
    getValue(): string;
    go(delta: number): void;
    hasEventListener(type: string): bool;
    href(url: string, target: string): void;
    popup(url: string, name: string, options: string, handler: string): void;
    removeEventListener(type: string, listener: any): void;
    resetStatus(): void;
    setHistory(history: bool): void;
    setStatus(status: string): void;
    setStrict(strict: bool): void;
    setTitle(title: string): void;
    setTracker(tracker: string): void;
    setValue(value: string): void;
}

declare var SWFAddress: ISWFAddress;