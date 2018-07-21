sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Walkthrough/model/models",
	"sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
   	"Walkthrough/controller/HelloDialog"
], function(UIComponent, Device, models,  JSONModel, ResourceModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("Walkthrough.Component", {

		 metadata : {
		    manifest: "json",
			rootView: {
				"viewName": "Walkthrough.view.App",
				"type": "XML",
				"async": true,
				"id": "app"
			}
		},

		

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			
			var JsonData = {
	            recipient : {
	               name : "World",
	               lastname: "Beautyful"
	            }
            };
         
        	var jModel = new JSONModel(JsonData);
         
         
        	this.setModel(jModel);
         
	         var i18nModel = new ResourceModel({
	            bundleName: "Walkthrough.i18n.i18n"
	         });
	         
	         this.setModel(i18nModel, "i18n"); 
			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			
			// create the views based on the url/hash
			this.getRouter().initialize();			
			
		},


		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.openOne();
		}
	});
});