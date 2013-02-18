//TypeScript definitions for Sharepoint 2013 client renderer

interface ISPClientRenderer {
    ReplaceUrlTokens():void;
    Render(node: HTMLElement, context: IRenderContext):void;
    IsDebugMode():bool;
    RenderReplace(node: HTMLElement, context: IRenderContext):void;
}

interface IRenderContext {
    OnPreRender: any;
    OnPostRender: any;
    ClientContext: any;
    ListData: any;
    DataProvider: any;
    ResolveTemplate: any;
    Errors: Array;
}

declare var SPClientRenderer:ISPClientRenderer