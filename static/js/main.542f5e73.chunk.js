(this["webpackJsonpcolor-me-react"]=this["webpackJsonpcolor-me-react"]||[]).push([[0],[,,function(e,t,n){e.exports={sr_only:"Utility_sr_only__1YItD"}},function(e,t,n){e.exports={main:"Heading_main__3WHUQ",small:"Heading_small__zVvOA",inline:"Heading_inline__3jimz"}},function(e,t,n){e.exports={modal:"Modal_modal__3cs5L",scrim:"Modal_scrim__1ntFf",inner:"Modal_inner__3TjeU",desc:"Modal_desc__39bg6",footer:"Modal_footer__3ZIb3",open:"Modal_open__tYwV2",closed:"Modal_closed__2WW_T"}},,,,,function(e,t,n){e.exports={wrapper:"Game_wrapper__4Ol9f",guesses:"Game_guesses__75iga",title:"Game_title__3oCe4",stat:"Game_stat__1niRy"}},function(e,t,n){e.exports={container:"Grid_container__2e0lC",heading:"Grid_heading__2xXwo",stats:"Grid_stats__-2D4g",form:"Grid_form__2E4p2"}},function(e,t,n){e.exports={input:"Form_input__1vcfR",inset:"Form_inset__29Gru"}},,,function(e){e.exports=JSON.parse('{"a":[{"name":"seafoam","colorMain":"189,255,243","colorTwo":"74,194,154","hint":"This color name is something you\'d walk through at the beach."},{"name":"magenta","colorMain":"249,83,198","colorTwo":"185,29,115","hint":"The color is part of the acronym C M Y K."}]}')},function(e,t,n){e.exports={button:"Button_button__1rzV-",full_width:"Button_full_width__2umJR"}},,function(e,t,n){e.exports={letter:"Letter_letter__3gQIV"}},function(e,t,n){e.exports={wrapper:"App_wrapper__2HSJy",guesses:"App_guesses__JByFV",input:"App_input__1lqRC",title:"App_title__2Epl2",stat:"App_stat__3XN0U"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),o=n.n(a),r=n(16),i=n.n(r),c=(n(25),n(19)),l=n(12),u=n(5),d=n(6),h=n(8),p=n(7),m=n(14),b=n(4),j=n.n(b),f=n(3),_=n.n(f),g=n(15),x=n.n(g),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).setFocus=function(){s.buttonRef.current.focus()},s.buttonRef=o.a.createRef(),s}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("button",{id:this.props.id?this.props.id:null,ref:this.buttonRef,className:"".concat(x.a.button," ").concat(this.props.fullWidth?x.a.full_width:""),onClick:this.props.handler,children:this.props.children})}}]),n}(a.Component),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).openDialog=function(){s.setState({open:!0},(function(){s.buttonRef.current.setFocus(),s.setBodyStyle(!0)}))},s.closeDialog=function(){s.setState({open:!1},(function(){s.props.onClose(),s.setBodyStyle(!1)}))},s.closeHandler=function(e){e.preventDefault(),"scrim"!==e.target.id&&"close"!==e.target.id||s.closeDialog()},s.setBodyStyle=function(e){e?(s.body.style.height="100%",s.body.style.overflow="hidden"):s.body.style=""},s.state={open:!1},s.buttonRef=o.a.createRef(),s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.body=document.getElementsByTagName("body")[0]}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{id:"scrim",className:"".concat(j.a.scrim," ").concat(this.state.open?j.a.open:j.a.closed),onClick:function(t){return e.closeHandler(t)},children:Object(s.jsxs)("div",{id:"dialog",role:"dialog","aria-labelledby":"title","aria-describedby":"description",className:"".concat(j.a.modal," ").concat(this.state.open?j.a.open:j.a.closed),children:[Object(s.jsx)("h2",{id:"title",className:_.a.small,children:this.props.title}),Object(s.jsx)("p",{id:"description",className:j.a.desc,children:this.props.children}),Object(s.jsx)("div",{className:j.a.footer,children:Object(s.jsx)(O,{id:"close",onClick:function(t){return e.closeHandler(t)},ref:this.buttonRef,fullWidth:!0,children:this.props.close})})]})})}}]),n}(a.Component),w=n(17),v=n.n(w);var z=function(e){return Object(s.jsxs)("span",{className:"".concat(_.a.main," ").concat(v.a.letter),"aria-label":e.guessed?null:"blank",children:[e.guessed&&e.letter,!e.guessed&&"_"]})},N=n(9),A=n.n(N),S=n(2),C=n.n(S),T=n(10),G=n.n(T);var M=function(e){return Object(s.jsx)("div",{className:A.a.wrapper,children:Object(s.jsxs)("div",{className:G.a.container,children:[Object(s.jsx)("div",{className:G.a.heading,children:Object(s.jsxs)("h3",{className:_.a.main,style:e.dynamicStyles.heading,"aria-live":"polite",role:"status",children:[Object(s.jsx)("span",{className:A.a.title,children:"Color Me"}),Object(s.jsxs)("span",{className:A.a.title,children:[e.puzzle&&e.puzzle.split("").map((function(t,n){return Object(s.jsx)(z,{letter:t,guessed:e.correctArr.includes(t)},n)})),"."]})]})}),Object(s.jsxs)("div",{className:G.a.form,children:[e.children,Object(s.jsxs)("div",{className:A.a.guesses,children:[Object(s.jsx)("h4",{className:C.a.sr_only,style:{color:e.dynamicStyles.inset.color},children:"Guessed letters:"}),e.incorrectArr.length>0&&e.incorrectArr.join(" ")]})]}),Object(s.jsxs)("div",{className:G.a.stats,style:e.dynamicStyles.inset,children:[Object(s.jsxs)("div",{className:A.a.stat,children:[Object(s.jsx)("h4",{className:"".concat(_.a.small," ").concat(_.a.inline),children:"Guesses: "})," ",e.remaining,"/5"]}),Object(s.jsxs)("div",{className:A.a.stat,children:[Object(s.jsx)("h4",{className:"".concat(_.a.small," ").concat(_.a.inline),children:"Wins: "})," ",e.wins]})]})]})})},R=n(11),k=n.n(R),F=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState({guess:e.target.value.toLowerCase()})},s.onFormSubmit=function(e){e.preventDefault(),s.props.submitHandler(s.state.guess),s.setState({guess:""})},s.state={guess:""},s}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("form",{autoComplete:"off",onSubmit:function(t){return e.onFormSubmit(t)},className:k.a.form,children:[Object(s.jsx)("label",{className:C.a.sr_only,htmlFor:"input",children:"Guess a letter"}),Object(s.jsx)("div",{className:k.a.inset,style:this.props.dynamicStyles.inset,children:Object(s.jsx)("input",{id:"input",className:k.a.input,type:"text",placeholder:"Guess a letter...",maxLength:"1",value:this.state.guess,onChange:this.handleChange})}),Object(s.jsx)("input",{className:C.a.sr_only,type:"submit",value:"Submit guess"})]})}}]),n}(a.Component),B=n(18),D=n.n(B),H=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).newGame=function(e){s.setState(Object(l.a)(Object(l.a)({},s.setPuzzle(e)),{},{remaining:5,incorrectArr:[],correctArr:[],guess:"",win:!1}))},s.setPuzzle=function(e){var t=e[Math.round(Math.random()*(e.length-1))],n=t.name,s=t.hint,a=t.colorMain,o=t.colorTwo,r=n.toLowerCase(),i=Object(c.a)(new Set(r.split(""))),l=e.filter((function(e){return e.name!==r}));return{puzzle:r,puzzleArr:i,puzzlesArr:l,hint:s,colors:{colorMain:a,colorTwo:o}}},s.adjustRGB=function(e,t){var n=e.split(","),s=[];return n.forEach((function(e){s.push(Math.round(parseInt(e)*t))})),"rgb("+s.toString()+")"},s.setUnique=function(e,t){return t.includes(e)?t:t.concat(e)},s.finalWin=function(){s.setState({win:!0},(function(){s.modalRef.current.openDialog()}))},s.win=function(){s.setState({wins:s.state.wins+1}),s.newGame(s.state.puzzlesArr)},s.lose=function(){s.modalRef.current.openDialog()},s.resetGame=function(){s.setState({puzzlesArr:m.a},(function(){s.newGame(s.state.puzzlesArr)}))},s.handleChange=function(e){s.setState({guess:e.target.value.toLowerCase()})},s.onFormSubmit=function(e){if(s.state.puzzleArr.includes(e)){var t=s.setUnique(e,s.state.correctArr);s.setState({correctArr:t}),t.length===s.state.puzzleArr.length&&(0===s.state.puzzlesArr.length?s.finalWin():s.win())}else{var n=s.setUnique(e,s.state.incorrectArr),a=s.state.incorrectArr.includes(e)?s.state.remaining:s.state.remaining-1;-1===a?s.lose():s.setState({remaining:a,incorrectArr:n})}},s.state={hint:"",loaded:!1,loader:"",notification:"You won the round",remaining:5,incorrectArr:[],correctArr:[],wins:0,puzzle:"",colors:{},puzzleArr:[],puzzlesArr:[],win:!1},s.modalRef=o.a.createRef(),s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.newGame(m.a)}},{key:"render",value:function(){var e={background:{background:"linear-gradient(to right, rgb(".concat(this.state.colors.colorMain,"), rgb(").concat(this.state.colors.colorTwo,"))")},heading:{textShadow:"2px 4px 8px ".concat(this.state.colors.colorTwo?this.adjustRGB(this.state.colors.colorTwo,.8):"rgb("+this.state.colors.colorTwo+")")},inset:{boxShadow:"1px 3px 16px rgb(".concat(this.state.colors.colorTwo,") inset, -2px -2px 8px rgb(").concat(this.state.colors.colorMain,"), 2px 1px 2px rgb(").concat(this.state.colors.colorMain,")"),background:"rgba(".concat(this.state.colors.colorTwo,", .25)"),color:this.state.colors.colorTwo?this.adjustRGB(this.state.colors.colorTwo,.5):"rgba(0,0,0,.6)","--dynamic-color-dark":this.state.colors.colorTwo?this.adjustRGB(this.state.colors.colorTwo,.5):"rgba(0,0,0,.6)"},divider:{borderTop:"1.5px solid rgb(".concat(this.state.colors.colorTwo,")")}};return Object(s.jsxs)("div",{children:[Object(s.jsx)("header",{className:C.a.sr_only,children:Object(s.jsx)("h1",{children:"Color me"})}),Object(s.jsxs)("main",{className:D.a.main,style:Object(l.a)({},e.background),children:[Object(s.jsxs)("section",{className:C.a.sr_only,children:[Object(s.jsx)("h2",{children:"About color me"}),Object(s.jsx)("p",{children:"Color me is a word guessing game. The words are all color names. A hint about the color family will be given at the beginning of each round. Use the input box to guess a letter, the blanks will fill as correct guesses are made. After the round is finished a new round will start until there are no puzzles remaining."})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(y,{ref:this.modalRef,onClose:this.resetGame,title:"Modal title",close:"Close modal",children:"Content"}),Object(s.jsx)("h2",{className:C.a.sr_only,children:"The game"}),Object(s.jsx)("div",{className:C.a.sr_only,"aria-live":"polite",role:"status",children:this.state.notification&&"Notification: ".concat(this.state.notification)}),Object(s.jsx)("div",{className:C.a.sr_only,"aria-live":"polite",role:"status",children:this.state.hint&&"Hint: ".concat(this.state.hint)}),Object(s.jsx)(M,{dynamicStyles:e,puzzle:this.state.puzzle,incorrectArr:this.state.incorrectArr,correctArr:this.state.correctArr,wins:this.state.wins,remaining:this.state.remaining,children:Object(s.jsx)(F,{submitHandler:this.onFormSubmit,dynamicStyles:e})})]})]})]})}}]),n}(a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),o(e),r(e)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(H,{})}),document.getElementById("root")),L()}],[[26,1,2]]]);
//# sourceMappingURL=main.542f5e73.chunk.js.map