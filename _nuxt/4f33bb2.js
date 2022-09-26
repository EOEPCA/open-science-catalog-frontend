(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{781:function(t,e,n){"use strict";n.r(e);var r=n(30),o=(n(153),{name:"ContributionsStatus",middleware:"auth",data:function(){return{contributionItems:[],loaded:!1}},head:{title:"Contributions Status"},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$metadataBackend.$get("/item-requests");case 2:t.contributionItems=e.sent,t.loaded=!0;case 4:case"end":return e.stop()}}),e)})))()},methods:{getStatusStyle:function(t){var e={color:"",icon:""};switch(t){case"Pending":e.color="warning",e.icon="mdi-progress-clock";break;case"Merged":e.color="success",e.icon="mdi-progress-check";break;case"Rejected":e.color="error",e.icon="mdi-progress-close"}return e},getChangeIcon:function(t){var e="";switch(t){case"Add":e="mdi-file-plus-outline";break;case"Update":e="mdi-file-edit-outline";break;case"Delete":e="mdi-file-remove-outline"}return e}}}),l=n(162),c=n(214),m=n.n(c),d=n(333),v=n(645),f=n(777),_=n(608),h=n(772),y=n(299),k=n(778),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{class:t.$vuetify.breakpoint.lgAndUp?"px-15 pt-8":"pa-4"},[n("h2",{staticClass:"text-h2 mt-3 mb-5"},[t._v("\n    Contributions status\n  ")]),t._v(" "),n("v-row",{staticClass:"d-flex justify-center text-h6"},[n("v-col",{attrs:{cols:"12"}},[n("v-icon",[t._v("\n        mdi-information-outline\n      ")]),t._v("\n      Note: only your most recent contributions are shown in this list. For a full list of contributions,\n      please refer to the\n      "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://github.com/EOEPCA/open-science-catalog-metadata/pulls",target:"_blank"}},[t._v("\n        Open Science Catalog Metadata GitHub Repository\n      ")]),t._v(".\n    ")],1)],1),t._v(" "),n("v-row",{staticClass:"d-flex justify-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:[{text:"Item type",value:"item_type"},{text:"File name",value:"filename"},{text:"Status",value:"state"},{text:"Creation date",value:"created_at"},{text:"Change type",value:"change_type"},{text:"Pull request",value:"url"}],items:t.contributionItems.items,loading:!t.loaded,dense:"","items-per-page":20,"footer-props":{"items-per-page-options":[10,20,30,40,50]}},scopedSlots:t._u([{key:"item.item_type",fn:function(e){var r=e.item;return[n("v-chip",{staticStyle:{"text-transform":"capitalize"},attrs:{color:t.$typeColor(r.item_type.toLowerCase().slice(0,-1)),small:"",label:"",dark:""}},[t._v("\n            "+t._s(r.item_type.slice(0,-1))+"\n          ")])]}},{key:"item.state",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{color:t.getStatusStyle(r.state).color,small:"",dark:""}},[n("v-icon",{attrs:{small:"",left:""}},[t._v("\n              "+t._s(t.getStatusStyle(r.state).icon)+"\n            ")]),t._v("\n            "+t._s(r.state)+"\n          ")],1)]}},{key:"item.created_at",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.created_at.split("T")[0])+"\n        ")]}},{key:"item.change_type",fn:function(e){var r=e.item;return[n("v-btn",{staticClass:"px-0",attrs:{color:"black",plain:"",small:""}},[n("v-icon",{attrs:{small:"",left:""}},[t._v("\n              "+t._s(t.getChangeIcon(r.change_type))+"\n            ")]),t._v("\n            "+t._s(r.change_type)+"\n          ")],1)]}},{key:"item.url",fn:function(e){var r=e.item;return[n("v-btn",{staticClass:"px-0",attrs:{color:"black",plain:"",small:"",href:r.url,target:"_blank"}},[t._v("\n            #"+t._s(r.url.split("/")[r.url.split("/").length-1])+"\n            "),n("v-icon",{attrs:{small:"",right:""}},[t._v("\n              mdi-open-in-new\n            ")])],1)]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:d.a,VChip:v.a,VCol:f.a,VContainer:_.a,VDataTable:h.a,VIcon:y.a,VRow:k.a})}}]);