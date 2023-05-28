// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/fieldSelectorPopup/fieldSelectorPopup.html":'\x3cdiv class\x3d"esriCTPopupNode" data-dojo-attach-point\x3d"popupNode"\x3e\r\n  \x3cfieldset class\x3d"esriCTFieldSet esriCTDownloadTabFieldSet"\x3e\r\n    \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.reportsTab.selectReportFieldTitle}\x3c/legend\x3e\r\n    \x3cdiv class\x3d"esriCTFieldsNode" data-dojo-attach-point\x3d"fieldsNode"\x3e\x3c/div\x3e\r\n  \x3c/fieldset\x3e\r\n  \x3cfieldset class\x3d"esriCTFieldSet esriCTDownloadTabFieldSet"\x3e\r\n    \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.reportsTab.sortingSettingsLegend}\x3c/legend\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"sortFieldSettingsNode"\x3e\r\n      \x3cdiv class\x3d"esriCTRadioBtnContainer esriCTReportSettingsContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTRadioBtn esriCTEllipsis"\x3e\r\n          \x3cinput data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group: \'g1\'" type\x3d"radio" name\x3d"jimuradiobtn"\r\n            checked data-dojo-attach-point\x3d"ascRadioBtn" aria-label\x3d"${nls.reportsTab.ascendingLabel}" id\x3d"ascRadio"\x3e\r\n          \x3clabel class\x3d"esriCTRadioLabel" for\x3d"ascRadio"\x3e\r\n            ${nls.reportsTab.ascendingLabel}\r\n          \x3c/label\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTRadioBtn esriCTEllipsis"\x3e\r\n          \x3cinput data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group: \'g1\'" type\x3d"radio" name\x3d"jimuradiobtn"\r\n            data-dojo-attach-point\x3d"descRadioBtn" aria-label\x3d"${nls.reportsTab.descendingLabel}" id\x3d"descRadio"\x3e\r\n          \x3clabel class\x3d"esriCTRadioLabel" for\x3d"descRadio"\x3e\r\n            ${nls.reportsTab.descendingLabel}\r\n          \x3c/label\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"margin-top: 15px;"\x3e\r\n        \x3cdiv class\x3d"esriCTRadioBtnContainer esriCTReportSettingsContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTSelectLabel esriCTEllipsis" title\x3d"${nls.reportsTab.sortFieldSelectLabel}"\x3e\r\n            ${nls.reportsTab.sortFieldSelectLabel}\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTSortFieldSelect"\x3e\r\n            \x3cselect class\x3d"esriCTDropBox" aria-label\x3d"${nls.reportsTab.sortFieldSelectLabel}"\r\n              data-dojo-type\x3d"jimu/dijit/formSelect" data-dojo-attach-point\x3d"fieldsDropdown"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTHint"\x3e${nls.reportsTab.sortHint}\x3c/div\x3e\r\n  \x3c/fieldset\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./fieldSelectorPopup.html dojo/_base/lang dojo/Evented dojo/dom-construct dojo/_base/html dojo/_base/array dojo/query dojo/on dojo/dom-style jimu/dijit/Popup jimu/dijit/CheckBox dojo/dom-class dijit/form/Select jimu/dijit/RadioBtn jimu/dijit/formSelect dojo/NodeList-data".split(" "),function(p,q,r,t,u,e,v,w,f,k,g,h,l,x,n,y){return p([q,r,t,v],{templateString:u,baseClass:"jimu-widget-screening",
selectedFields:[],fieldsPopup:null,_selectAllCheckBox:null,_selectAllCheckBoxHandle:null,_fieldsCheckBoxChangeHandle:[],constructor:function(a){this.selectedFields=[];this._selectAllCheckBoxHandle=this._selectAllCheckBox=this.fieldsPopup=null;this._fieldsCheckBoxChangeHandle=[];e.mixin(this,a)},postCreate:function(){this.inherited(arguments);this.own(h(this.ascRadioBtn,"change",e.hitch(this,function(){this.sortInfo.sortOrder=this.ascRadioBtn.checked?"Asc":"Desc"})));this.own(h(this.fieldsDropdown,
"change",e.hitch(this,function(b){this.sortInfo.sortingField=b;this._setSortFieldDropdownLabel()})));this.own(h(this.descRadioBtn,"change",e.hitch(this,function(){this.sortInfo.sortOrder=this.ascRadioBtn.checked?"Asc":"Desc"})));if(this.isIOS()){var a=g(".esriCTRadioLabel",this.domNode);a&&0<a.length&&k.forEach(a,e.hitch(this,function(b){y.add(b,"esriCTFontSize")}))}},startup:function(){this._populateConfiguredFields();this._populateSelectedFields();this.onFieldsSelectorClick();this.fieldsDropdown.set("options",
this._getFieldsOptionsObj(this.selectedFields));this._addDefaultOptions();this.sortInfo&&"Asc"===this.sortInfo.sortOrder&&this.ascRadioBtn.set("checked",!0);this.sortInfo&&"Desc"===this.sortInfo.sortOrder&&this.descRadioBtn.set("checked",!0);if(this.sortInfo&&""!==this.sortInfo.sortingField){var a=this._getSortFieldValue();this.fieldsDropdown.set("value",a);this._setSortFieldDropdownLabel()}this.sortInfo={sortOrder:this.sortInfo.sortOrder,sortingField:this.sortInfo.sortingField};h(window,"resize",
e.hitch(this,function(){this._setFieldPopupDimensions()}))},_populateConfiguredFields:function(){for(var a in this.outFields)this.selectedFields.push(a)},_populateSelectedFields:function(){null!==this.retainSelectedFieldsArr&&(this.selectedFields=this.retainSelectedFieldsArr)},_resetSelectAllCheckboxStatus:function(){var a=!0;this._fieldsCheckBox.forEach(function(b){b.checked||(a=!1)});a?(this._selectAllCheckBoxHandle[0].pause(),this._selectAllCheckBox.check()):(this._selectAllCheckBoxHandle[0].pause(),
this._selectAllCheckBox.uncheck(!0));this._selectAllCheckBoxHandle[0].resume()},_attachFieldCheckBoxChangeEvent:function(a){this._fieldsCheckBoxChangeHandle.push(this.own(h.pausable(a,"change",e.hitch(this,function(){this._resetSelectAllCheckboxStatus();this._onFieldsSelectionChange()}))))},_pauseFieldCheckBoxEvent:function(){this._fieldsCheckBoxChangeHandle.forEach(function(a){a[0].pause()})},_resumeFieldCheckBoxEvent:function(){this._fieldsCheckBoxChangeHandle.forEach(function(a){a[0].resume()})},
onFieldsSelectorClick:function(){var a,b=0;var c=f.create("div",{},this.fieldsNode);var d=w.create("div",{"class":"esriCTSelectAllReportLabel"},c);this._selectAllCheckBox=new n({checked:!1,label:this.nls.reportsTab.selectAllLabel});this._selectAllCheckBoxHandle=this.own(h.pausable(this._selectAllCheckBox,"change",e.hitch(this,function(z){this._pauseFieldCheckBoxEvent();z?this._fieldsCheckBox.forEach(function(m){m.check()}):this._fieldsCheckBox.forEach(function(m){m.uncheck(!0)});this._resumeFieldCheckBoxEvent();
this._onFieldsSelectionChange()})));this._selectAllCheckBox.placeAt(d);c=f.create("div",{"class":"esriCTSelectFieldParentContainer",style:{maxHeight:"350px"}},c);this._fieldsCheckBox=[];for(a in this.outFields)d=new n({checked:this._isSearchable(this.outFields[a]),label:this.outFields[a].label||this.outFields[a].alias||a,fieldName:a}),this._attachFieldCheckBoxChangeEvent(d),f.addClass(d.domNode,"esriCTLayerFieldCheckbox"),f.addClass(d.labelNode,"jimu-ellipsis"),f.setAttr(d.domNode,{title:this.outFields[a].label||
this.outFields[a].alias||a}),"DartTheme"===this.appConfig.theme.name&&l.set(d.domNode.children[0],"backgroundColor","#4c4c4c"),0===b%3&&(window.isRTL?f.setStyle(d.domNode,"marginRight",0):f.setStyle(d.domNode,"marginLeft",0)),d.placeAt(c),g(d.domNode).data("fieldName",a),this._fieldsCheckBox.push(d),b++;this.fieldsPopup=new x({titleLabel:this.popupTitle,autoHeight:!0,content:this,class:this.baseClass,width:660,maxHeight:500,autoHeight:!0,buttons:[{label:this.nls.common.ok,onClick:e.hitch(this,"_onSearchFieldsOk")},
{label:this.nls.common.cancel,onClick:e.hitch(this,"_onCancelClick")}],onClose:e.hitch(this,function(){this.fieldsPopup=null})});f.addClass(this.fieldsPopup.domNode,this.appConfig.theme.name+"  "+this.baseClass);this._setFieldPopupDimensions();this._resetSelectAllCheckboxStatus()},_setFieldPopupDimensions:function(){this.fieldsPopup&&(window.appInfo.isRunInMobile?(this.fieldsPopup.set("width",window.innerWidth-100),g(".esriCTLayerFieldCheckbox").addClass("esriCTLayerFieldWithoutMargin"),l.set(g(".esriCTSelectFieldParentContainer")[0],
"height","200px")):(this.fieldsPopup.set("width",660),this.fieldsPopup.set("maxHeight",600),g(".esriCTLayerFieldCheckbox").removeClass("esriCTLayerFieldWithoutMargin")),this._setPopupHeight())},_isSearchable:function(a){return k.some(this.selectedFields,e.hitch(this,function(b){return a.hasOwnProperty("name")?a.name===b:a.hasOwnProperty("fieldName")?a.fieldName===b:!1}))},_onSearchFieldsOk:function(){var a=[];k.forEach(this._fieldsCheckBox,function(c){if(c.getValue()){var d=g(c.domNode).data("fieldName");
a.push(d[0]);g(c.domNode).removeData()}});this.setSearchFields(a);this.fieldsPopup.close();var b={selectedFields:this.selectedFields,sortInfo:this._getSortInfo()};this.emit("onFieldSelectComplete",b)},_onCancelClick:function(){this.fieldsPopup.close();this.emit("onCancel",this.retainSelectedFieldsArr)},_getSearchFields:function(){return this.selectedFields},setSearchFields:function(a){this.selectedFields=a},_getFieldsOptionsObj:function(a){var b=[];k.forEach(a,e.hitch(this,function(c){b.push({label:this.outFields[c].alias||
this.outFields[c].name||c,value:c})}));return b},_getSortInfo:function(){return this.sortInfo},_onFieldsSelectionChange:function(){this.fieldsDropdown.options=[];k.forEach(this._fieldsCheckBox,e.hitch(this,function(a){a.checked?this.fieldsDropdown.addOption({label:this.outFields[a.fieldName].alias||this.outFields[a.fieldName].name||a.fieldName,value:a.fieldName}):this.fieldsDropdown.removeOption(this._getFieldText(this.outFields[a.fieldName],a.fieldName))}));this._addDefaultOptions();this.fieldsDropdown.set("value",
this.sortInfo.sortingField);this._setSortFieldDropdownLabel()},_getFieldText:function(a,b){return a.label?a.label:a.alias?a.alias:b},_setPopupHeight:function(){var a=l.getComputedStyle(this.popupNode).height;this.fieldsPopup.height=parseFloat(a)+75},_addDefaultOptions:function(){"esriGeometryPoint"===this.featureLayer.geometryType&&this.fieldsDropdown.addOption({label:this.nls.reportsTab.statisticsCountLabel,value:"esriCTCountField"});"esriGeometryPolyline"===this.featureLayer.geometryType&&this.fieldsDropdown.addOption({label:this.nls.reportsTab.statisticsTotalLengthLabel,
value:"esriCTTotalLengthField"});"esriGeometryPolygon"===this.featureLayer.geometryType&&this.fieldsDropdown.addOption({label:this.nls.reportsTab.statisticsTotalAreaLabel,value:"esriCTTotalAreaField"})},isIOS:function(){return-1<navigator.userAgent.toLowerCase().indexOf("iphone")},_getSortFieldValue:function(){var a=this.sortInfo.sortingField;if(-1===this.fieldsDropdown.options.map(function(d){return d.value}).indexOf(this.sortInfo.sortingField))for(var b in this.outFields){var c=this.outFields[b];
c=this._getFieldText(c,b);c===this.sortInfo.sortingField&&(a=b)}return a},_setSortFieldDropdownLabel:function(){this.fieldsDropdown.set("title",this.fieldsDropdown.getOptions(this.fieldsDropdown.value).label)}})});