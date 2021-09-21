(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),a=n(8),i=n.n(a),c=(n(14),n(9)),o=n(2),l=n(0);var u=function(t){return Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsx)("span",{onClick:function(){return t.changePage("home")},children:"HOME"}),Object(l.jsx)("span",{onClick:function(){return t.changePage("history")},children:"HISTORY"})]})},g=n(3),j=n.n(g),h=function(t){var e=Math.floor(t/6e4),n=(t%6e4/1e3).toFixed(0);return 60===parseInt(n)?e+1+":00":e+":"+(n<10?"0":"")+n};var d=function(t){var e=s.a.useState(j.a.status.STOPPED),n=Object(o.a)(e,2),r=n[0],a=n[1],i=s.a.useState(),c=Object(o.a)(i,2),u=c[0],g=c[1],d=s.a.useState(0),m=Object(o.a)(d,2),b=m[0],p=m[1],O=function(){r===j.a.status.PLAYING?a(j.a.status.PAUSED):a(j.a.status.PLAYING)};s.a.useEffect((function(){g(r===j.a.status.PLAYING)}),[r]),s.a.useEffect((function(){p(0)}),[t.currentSong]);var y=function(){var e=t.currentPlaylist.songs.findIndex((function(e){return e===t.currentSong}));e<t.currentPlaylist.songs.length-1?t.setCurrentSong(t.currentPlaylist.songs[e+1]):t.setCurrentSong(t.currentPlaylist.songs[0]),a(j.a.status.PLAYING)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"playing-bar",children:[Object(l.jsxs)("div",{className:"playing-bar-content-start",children:[Object(l.jsx)("img",{onClick:function(){var e=t.currentPlaylist.songs.findIndex((function(e){return e===t.currentSong}));e>0?t.setCurrentSong(t.currentPlaylist.songs[e-1]):t.setCurrentSong(t.currentPlaylist.songs[t.currentPlaylist.songs.length-1]),a(j.a.status.PLAYING)},src:"/icons/skip_previous_white_24dp.svg",alt:"skip-previous"}),u?Object(l.jsx)("img",{onClick:O,src:"/icons/pause_white_24dp.svg",alt:"pause"}):Object(l.jsx)("img",{onClick:O,src:"/icons/play_arrow_white_24dp.svg",alt:"play"}),Object(l.jsx)("img",{onClick:y,src:"/icons/skip_next_white_24dp.svg",alt:"skip-next"})]}),Object(l.jsxs)("div",{className:"playing-bar-content",children:[Object(l.jsx)("span",{children:t.currentSong.title}),Object(l.jsx)("span",{className:"hide-on-mobile",children:"\xa0-\xa0"}),Object(l.jsx)("span",{children:t.currentSong.author})]}),Object(l.jsxs)("div",{className:"playing-bar-content-end",children:[Object(l.jsxs)("span",{className:"hide-on-desktop",children:["- ",h(t.currentSong.duration-b)]}),Object(l.jsxs)("span",{className:"hide-on-mobile",children:[h(b)," / ",h(t.currentSong.duration)]})]})]}),Object(l.jsx)(j.a,{url:"/tracks/"+t.currentSong.track+"-128k.mp3",playStatus:r,onPlaying:function(t){var e=t.position;return p(e)},onFinishedPlaying:y})]})};var m=function(t){var e=t.playlists.map((function(e,n){return Object(l.jsxs)("div",{className:"carousel-element "+(t.currentPlaylist&&t.currentPlaylist===e?"selected":""),onClick:function(){return t.changePlaylist(n)},children:[Object(l.jsx)("img",{src:"/images/"+e.img,alt:e.name}),Object(l.jsx)("span",{children:e.name})]},"carousel_"+n)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Lista personaggi"}),Object(l.jsx)("div",{className:"carousel",children:e})]})};var b=function(t){if(!t.currentPlaylist)return null;var e=t.currentPlaylist.map((function(e,n){return Object(l.jsxs)("div",{onClick:function(){return t.setCurrentSong(e)},className:"playlist-element "+(t.currentSong&&t.currentSong===e?"selected":""),children:[Object(l.jsx)("img",{src:"/images/"+(e.img?e.img:"black_placeholder.jpg"),alt:"song icon",className:"song-icon"}),Object(l.jsxs)("div",{className:"song-content",children:[Object(l.jsx)("span",{className:"song-title",children:e.title}),Object(l.jsx)("span",{className:"song-author",children:e.author})]}),Object(l.jsx)("div",{className:"song-content-end",children:Object(l.jsx)("span",{children:h(e.duration)})})]},n)}));return Object(l.jsxs)(l.Fragment,{children:[t.name?Object(l.jsx)("h2",{children:t.name}):null,e]})};var p=function(t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{children:Object(l.jsx)(m,{playlists:t.playlists,currentPlaylist:t.currentPlaylist,changePlaylist:function(e){t.setCurrentPlaylist(t.playlists[e])}})}),Object(l.jsx)("section",{children:Object(l.jsx)(b,{currentPlaylist:t.currentPlaylist.songs,name:t.currentPlaylist.name,setCurrentSong:t.setCurrentSong,currentSong:t.currentSong})})]})};var O=function(t){return Object(l.jsxs)("section",{children:[Object(l.jsxs)("h1",{children:["Cronologia",Object(l.jsx)("img",{src:"/icons/delete_black_24dp.svg",onClick:function(e){t.setHistory([])},alt:"clear history"})]}),Object(l.jsx)(b,{currentPlaylist:t.history,currentSong:t.currentSong,setCurrentSong:t.setCurrentSong,name:"Qui sono mostrate le ultime canzoni che hai ascoltato"})]})},y=n(6);var x=function(){var t=s.a.useState(y[0]),e=Object(o.a)(t,2),n=e[0],r=e[1],a=s.a.useState(y[0].songs[0]),i=Object(o.a)(a,2),g=i[0],j=i[1],h=s.a.useState([]),m=Object(o.a)(h,2),b=m[0],x=m[1],_=s.a.useState("home"),S=Object(o.a)(_,2),f=S[0],v=S[1],k=function(t){j(t),x([t].concat(Object(c.a)(b).filter((function(e){return e!==t}))))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{changePage:v}),Object(l.jsxs)("div",{id:"main",children:["home"===f?Object(l.jsx)(p,{playlists:y,currentSong:g,setCurrentSong:k,currentPlaylist:n,setCurrentPlaylist:r}):null,"history"===f?Object(l.jsx)(O,{history:b,setHistory:x,currentSong:g,setCurrentSong:k}):null]}),Object(l.jsx)(d,{currentSong:g,currentPlaylist:n,setCurrentSong:k})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),s(t),a(t),i(t)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),_()},6:function(t){t.exports=JSON.parse('[{"name":"Tony Stark","img":"tony_stark.jpg","songs":[{"title":"Shoot to Thrill","author":"AC/DC","track":"shoot_to_thrill","img":"shoot_to_thrill.jpg","duration":317472},{"title":"Cherry Pie","author":"Warrant","track":"cherry_pie","img":"cherry_pie.jpg","duration":201144},{"title":"Should I Stay or Should I Go","author":"The Clash","track":"should_i_stay_or_should_i_go","img":"should_i_stay_or_should_i_go.jpg","duration":189504}]},{"name":"Natasha Romanoff","img":"natasha_romanoff.jpg","songs":[{"title":"Killer Queen","author":"Queen","track":"killer_queen","img":"killer_queen.jpg","duration":179400},{"title":"Bubblegum Bitch","author":"Marina","track":"bubblegum_bitch","img":"bubblegum_bitch.jpg","duration":154704},{"title":"Black Widow","author":"Iggy Azalea","track":"black_widow","img":"black_widow.jpg","duration":209664}]},{"name":"Steve Rogers","img":"steve_rogers.jpg","songs":[{"title":"Whatever It Takes","author":"Imagine Dragons","track":"whatever_it_takes","img":"whatever_it_takes.jpg","duration":202032},{"title":"Immortals","author":"Fall Out Boy","track":"immortals","img":"immortals.jpg","duration":195072},{"title":"Man on a Mission","author":"Oh The Larceny","track":"man_on_a_mission","img":"man_on_a_mission.png","duration":211992}]}]')}},[[21,1,2]]]);
//# sourceMappingURL=main.366c9aeb.chunk.js.map