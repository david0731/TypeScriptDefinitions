//TypeScript definition for SharePoint 2013 SP.UI

interface ISharepoint
{
    UI: ISPUserInterface;
    Ribbon;
    Utilities;
    ListOperation;
    SOD;   
    Guid;
} 

interface ISPUserInterface {
        $create_DialogOptions();
        ModalDialog;
        Notify;     
        Status;
    }

interface ISPPageContextInfo
{   
    webServerRelativeUrl: string;
    webAbsoluteUrl: string;
    siteAbsoluteUrl: string;
    serverRequestPath: string;
    layoutsUrl: string;
    webTitle: string;
    webTemplate: string;
    tenantAppVersion: string;
    webLogoUrl: string;
    webLanguage: number;
    currentLanguage: number;
    currentUICultureName: string;
    currentCultureName: string;
    clientServerTimeDelta: number;
    siteClientTag: string;
    crossDomainPhotosEnabled: bool;
    webUIVersion: number;
    webPermMasks: any;
    pageListId: string;
    pageItemId: number;
    pagePersonalizationScope: number;
    userId: number;
    systemUserKey: string;
    alertsEnabled: bool;
    siteServerRelativeUrl: string;
    allowSilverlightPrompt: string;
};


declare var SP:ISharepoint;
declare var Commands;
declare var CUI;
declare var _spPageContextInfo: ISPPageContextInfo;