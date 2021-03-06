sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("Walkthrough.controller.HelloPanel", {
      onShowHello : function () {
         // show a native JavaScript alert
         /*MessageToast.show("Hello World");
         MessageToast.show('What about this!!!');*/
         
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         
         var sMsg = oBundle.getText("helloMsg", [sRecipient,"Ivana"]);
         
         MessageToast.show(sMsg,{
			    duration: 3000,                  // default
			    width: "15em",                   // default
			    my: "center center",             // default
			    at: "center center",             // default
			    of: window,                      // default
			    offset: "0 0",                   // default
			    collision: "fit fit",            // default
			    onClose: null,                   // default
			    autoClose: true,                 // default
			    animationTimingFunction: "ease", // default
			    animationDuration: 1000,         // default
			    closeOnBrowserNavigation: true   // default
			});
      },
      
      onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
		
		
      /*onOpenDialog : function () {
         var oView = this.getView();
         
         var oDialog = oView.byId("helloDialog");
         // create dialog lazily
         if (!oDialog) {
            // create dialog via fragment factory
            oDialog = sap.ui.xmlfragment(oView.getId(), "Walkthrough.view.HelloDialog",this);
            oView.addDependent(oDialog);
         }
    	
    	alert(app.toString());
    	 oDialog.open();
      },
      
		onCloseDialog : function () {
			this.getView().byId("helloDialog").close();
		}*/
	});
});