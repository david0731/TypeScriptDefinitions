//TypeScript definitions for Callout.js in SharePoint 2013


declare class CalloutOptions {
    ID: string;
    launchPoint: HTMLElement;
    beakOrientation: string;
    content: string;
    title: string;    
    contentElement: HTMLElement;
    boundingBox: any;
    contentWidth: number;
    openOptions: CalloutOpenOptions;
    onOpeningCallback: (callout: Callout) => any;
    onOpenedCallback: (callout: Callout) => any;
    onClosingCallback: (callout: Callout) => any;
    onClosedCallback: (callout: Callout) => any;
    positionAlgorithm: any;
}

declare class CalloutOpenOptions {
    event: string;
    closeCalloutOnBlur: bool;
    showCloseButton: bool;
}

declare class Callout {
    set (options: CalloutOptions);
    addEventCallback(eventName: string, callback: any);
    getLaunchPoint(): HTMLElement;
    getID(): string;
    getTitle(): string;
    getContent(): string;
    getContentElement(): HTMLElement;
    getBoundingBox(): HTMLElement;
    getContentWidth(): number;
    getOpenOptions(): CalloutOpenOptions;
    getBeakOrientation(): string;
    getPositionAlgorithm(): any;
    isOpen(): bool;
    isOpening(): bool;
    isOpenOrOpening(): bool;
    isClosing(): bool;
    isClosed(): bool;
    getActionMenu(): any;
    addAction(any);
    refreshActions():void;
    open(useAnimation: bool);
    close(useAnimation: bool);
    toggle(): void;
    destroy(): void;
}


interface ICalloutManager {
    createNew(options: CalloutOptions): Callout;
    createNewIfNecessary(options: CalloutOptions): Callout;
    remove(callout: Callout);
    getFromLaunchPoint(launchPoint: HTMLElement): Callout;
    getFromLaunchPointIfExists(launchPoint: HTMLElement): Callout;
    containsOneCalloutOpen(ancestor: HTMLElement): bool;
    getFromCalloutDescendant(descendant: HTMLElement): Callout;
    forEach(any);
    closeAll():bool;
    isAtLeastOneCalloutOpen(): bool;
    isAtLeastOneCalloutOn(): bool;
}

declare var CalloutManager: ICalloutManager;
