(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{8669:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return n}));a("a481");function s(e){var t=document.createElement("textarea");t.className="fixed-top",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function o(e){var t=window.location.origin+window.location.pathname+"#"+e,a=document.getElementById(e);a&&(a.id=""),window.location.hash="#"+e,a&&setTimeout((function(){a.id=e}),300),s(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function n(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},"896f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-markdown"},[a("q-markdown",[e._v("\n::: warning\nThe ability to use Codepen was recently added to the examples. There are differences in the UMD version of QCalendar, some examples won't work without a bit of manual intervention. Be patient while we get the kinks worked out and automate the necessary changes.\n:::\n    ")]),a("example-title",{attrs:{title:"Day View"}}),a("example-viewer",{attrs:{title:"Basic",file:"DayViewBasic","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Dark",file:"DayViewDark","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"3Day",file:"DayView3Day","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Hide Header",file:"DayViewHideHeader","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Interval Height",file:"DayViewIntervalHeight","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\n`interval-height` is available only for one of the available `day` or `week` views.\nThe example below is setting the `interval-height` to `100`, the default is `40`.\n      ")])],1),a("example-viewer",{attrs:{title:"Interval Count",file:"DayViewIntervalCount","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nThe example below is setting the `interval-count` to `4`, the default is `24`. This is the number of intervals to be displayed.\n      ")])],1),a("example-viewer",{attrs:{title:"Interval Minutes (30)",file:"DayViewIntervalMinutes30","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nThe example below is setting the `interval-minutes` to `30`, the default is `60`. This is the number of minutes in an interval. For this example, if you wanted the full 24 hours, you would also need to set `interval-count` to `48` (if you cut `interval-minutes` in half, then you need to double `interval-count`).\n      ")])],1),a("example-viewer",{attrs:{title:"Interval Minutes (15)",file:"DayViewIntervalMinutes15","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nThe example below is setting the `interval-minutes` to `15`, the default is `60`. This is the number of minutes in an interval. For this example, if you wanted the full 24 hours, you would also need to set `interval-count` to `96` (if you cut `interval-minutes` in quarter, then you need to quadruple `interval-count`).\n      ")])],1),a("example-viewer",{attrs:{title:"Interval Start",file:"DayViewIntervalStart","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nThe example below is setting the `interval-start` to `8`, the default is `0`. It is a good idea to also adjust the `interval-count` so that extra intervals are not displayed. In this example, the `interval-count` is set to `10`, so the intervals displayed are from 08:00-18:00.\n      ")])],1),a("example-viewer",{attrs:{title:"Prev/Next",file:"DayViewPrevNext","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Swipe",file:"DayViewSwipe","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nFor swipe support, don't forget to add the `TouchSwipe` directive to your `quasar.conf.js`.\n      ")])],1),a("example-viewer",{attrs:{title:"Column Header",file:"DayViewColumnHeader","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nColumn Headers are scoped slots only. They are turned on with the `column-header-before` and `column-header-after` properties. Once each property is set to `true` the respective slot is availale.\nColumn Headers are only available for the day (includes 2day, 3day, etc), `week` and `scheduler` views.\nThe `timestamp` information is passed to the scoped slot.\n      ")])],1),a("example-viewer",{attrs:{title:"Column Count",file:"DayViewColumnCount","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nColumn Count is only available for `day` view (no other views), with the property `column-count`.\nSetting `column-count` to a value higher than 1 (default) will display the same day in that many columns.\n      ")])],1),a("example-viewer",{attrs:{title:"Column Header Count",file:"DayViewColumnHeaderCount","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nIf you combine `column-header-before` or `column-header-after` you can achieve a vertical schedule.\n      ")])],1),a("example-viewer",{attrs:{title:"Column Header Count (Paged)",file:"DayViewColumnHeaderCountPaging","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nAnd finally, if you wanted the ability to page through a large number of resources, you can set the `column-index-start` to create a paging effect.\n      ")])],1),a("example-viewer",{attrs:{title:"Slots",file:"DayViewSlots","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nFor slots that return `day`, `interval` or `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-mm-dd\n  time: '',       // 00:00:00 (optional)\n  year: 0,        // YYYY\n  month: 0,       // mm (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false,  // if timestamp is in the future (based on `now` property)\n  disabled: false // if timestamp is disabled\n}\n```\n\nYou can use the slots `day-header` and `day-body` to control visual aspects of your event system.\nThe example below is using the `day-header` slot to indicate there are events on that day, in case it is not visible, indicating to the user they should scroll down to see the event.\nThe `day-body` slot is used to get information about the date and time of an event and then to calculate where the absolute position of the event based on passed in functions `timeStartPos` and `timeDurationHeight`.\n      ")])],1),a("example-viewer",{attrs:{title:"Day View (Current Time) - Slot (day-container)",file:"DayViewCurrentTime","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}},[a("q-markdown",[e._v("\nYou can use the scopedSlot `day-container` to set an absolute position for a time tracking bar.\nScroll down if the current time is later for your location to see the example.\n      ")])],1),a("example-viewer",{attrs:{title:"Theme",file:"DayViewTheme","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Locale",file:"DayViewLocale","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}})],1)},o=[],n=a("fe7d"),i=a("8669"),l=a("384e"),r={name:"DayView",components:{ExampleTitle:n["a"]},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(l["m"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@".concat(l["m"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Day View"),this.addToToc("Basic",2),this.addToToc("Dark",2),this.addToToc("3Day",2),this.addToToc("Hide Header",2),this.addToToc("Interval Height",2),this.addToToc("Interval Count",2),this.addToToc("Interval Minutes (30)",2),this.addToToc("Interval Minutes (15)",2),this.addToToc("Interval Start",2),this.addToToc("Prev/Next",2),this.addToToc("Swipe",2),this.addToToc("Column Header",2),this.addToToc("Column Count",2),this.addToToc("Column Header Count",2),this.addToToc("Column Header Count (Paged)",2),this.addToToc("Slots",2),this.addToToc("Day View (Current Time) - Slot (day-container)",2),this.addToToc("Theme",2),this.addToToc("Locale",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e;t>1&&(a="example-"+a);var s=Object(i["b"])(a);this.tempToc.push({children:[],id:s,label:e,level:t})}}},c=r,h=a("2877"),d=Object(h["a"])(c,s,o,!1,null,null,null);t["default"]=d.exports},fe7d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},o=[],n=a("8669"),i={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(n["b"])(this.title)}},methods:{copyHeading:n["a"]}},l=i,r=a("2877"),c=Object(r["a"])(l,s,o,!1,null,null,null);t["a"]=c.exports}}]);