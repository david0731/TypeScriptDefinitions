//TypeScript Definition for MSAjax
// from http://msdn.microsoft.com/en-us/library/bb397568(v=vs.100).aspx
interface IMSAjaxType {
    callBaseMethod(): number;
    createCallback();
    createDelegate();
    getBaseMethod();
    getBaseType();
    getInterfaces();
    getName();
    getRootNamespace();
    implementsInterface();
    inheritsFrom();
    initializeBase();
    isClass();
    isEnum();
    isFlags();
    isImplementedBy();
    isInterfaceOf();
    isNamespace();
    parse();
    registerClass();
    registerEnum();
    registerInterface();
    registerNamespace(namespacePath: string): void;
    resolveInheritance();
}

interface Function {
    createDelegate(p: any);
}


module Sys {

    class Application {
        constructor();
        static notifyScriptLoaded();
    }

    class Component {

        constructor();
        add_disposing(handler);
        remove_disposing(handler);
        add_propertyChanged(handler);
        remove_propertyChanged(handler);
        beginUpdate();
        create();
        dispose();
        endUpdate();
        initialize();
        raisePropertyChanged(propertyName:string);

        updated;
        events;
        id;
        isInitialized;
        isUpdating;        
    }

    module UI {

        enum VisibilityMode {
            hide,
            collapse
        }

        class Control extends Component {
            constructor(element: HTMLElement);
            addCssClass();
            dispose();
            initialize();
            onBubbleEvent();
            removeCssClass();
            toggleCssClass();

            element: HTMLElement;
            id: string;
            parent: Control;
            role: string;
            visibilityMode: Sys.UI.VisibilityMode;
            visible: bool;

            registerClass();
        }
    }
}

var Type: IMSAjaxType;

