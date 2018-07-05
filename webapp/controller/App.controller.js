sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller,MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("Walkthrough.controller.App", {
   	  onInit: function () {
         
         var JsonData = {
            recipient : {
               name : "World",
               lastname: "Beautyful"
            }
         };
         
         var jModel = new JSONModel(JsonData);
         
         
         this.getView().setModel(jModel);
         
         var i18nModel = new ResourceModel({
            bundleName: "Walkthrough.i18n.i18n"
         });
         
         this.getView().setModel(i18nModel, "i18n"); 
   	  },
      onShowHello : function () {
         // show a native JavaScript alert
         /*MessageToast.show("Hello World");
         MessageToast.show('What about this!!!');*/
         
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         
         var sMsg = oBundle.getText("helloMsg", [sRecipient,'Ivana']);
         
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
      }
   });
});