(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"427a":function(e,a,t){},"4c18":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticStyle:{"max-width":"800px",width:"100%"}},[t("q-calendar",{staticStyle:{height:"200px","max-width":"800px",width:"100%"},attrs:{view:"day-resource",resources:e.resources,"resource-height":50,"resource-width":160,locale:"en-us",sticky:"",bordered:""},scopedSlots:e._u([{key:"resource-label",fn:function(a){var r=a.resource;return[t("div",{staticClass:"col-12"},[t("q-btn",{staticClass:"fit",attrs:{flat:"",icon:e.getResourceImage(r),label:r.label}})],1)]}}]),model:{value:e.selectedDate,callback:function(a){e.selectedDate=a},expression:"selectedDate"}})],1)},o=[],c={data:function(){return{selectedDate:"",resources:[{label:"John",avatar:"https://cdn.quasar.dev/img/avatar4.jpg"},{label:"Mary",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{label:"Susan",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"},{label:"Olivia",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"},{label:"Board Room",icon:"meeting_room"},{label:"Room-1",icon:"meeting_room"},{label:"Room-2",icon:"meeting_room"}]}},methods:{getResourceImage:function(e){return void 0!==e.icon?e.icon:void 0!==e.avatar?"img:"+e.avatar:""}}},n=c,s=(t("89f4"),t("2877")),i=t("9c40"),l=t("0016"),u=t("eebe"),d=t.n(u),v=Object(s["a"])(n,r,o,!1,null,null,null);a["default"]=v.exports;d()(v,"components",{QBtn:i["a"],QIcon:l["a"]})},"89f4":function(e,a,t){"use strict";var r=t("427a"),o=t.n(r);o.a}}]);