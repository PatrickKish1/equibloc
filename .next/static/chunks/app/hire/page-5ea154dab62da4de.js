(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{40276:function(e,t,s){Promise.resolve().then(s.bind(s,74384))},36037:function(e,t,s){"use strict";var l=s(57437),a=s(66648);t.Z=()=>(0,l.jsx)("footer",{className:"bg-[#1c1e21] text-white text-center py-[70px]",children:(0,l.jsxs)("div",{className:"container mx-auto flex flex-col md:flex-row justify-between items-center px-4",children:[(0,l.jsxs)("div",{className:"text-left mb-4 md:mb-0 md:ml-20",children:[(0,l.jsx)(a.default,{src:"/assets/footer-logo.svg",alt:"EquiBloc Logo",width:150,height:50,className:"mb-2"}),(0,l.jsx)("p",{children:"EquiBloc Copyright \xa9 2024"}),(0,l.jsx)("p",{children:"EquiBloc - All rights Reserved."})]}),(0,l.jsxs)("div",{className:"text-left mb-4 md:mb-0",children:[(0,l.jsx)("h3",{className:"font-bold",children:"Reach us"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(a.default,{src:"/assets/call.svg",alt:"Call Icon",width:20,height:20,className:"mr-2"}),(0,l.jsx)("span",{children:"+234 XXX XXX XXX"})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(a.default,{src:"/assets/email.svg",alt:"Email Icon",width:20,height:20,className:"mr-2"}),(0,l.jsx)("span",{children:"mail@gmail.com"})]})]}),(0,l.jsxs)("div",{className:"text-left mb-4 md:mb-0",children:[(0,l.jsx)("h3",{className:"font-bold",children:"Legal"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Privacy Policy"}),(0,l.jsx)("li",{children:"Terms and Conditions"}),(0,l.jsx)("li",{children:"Return Policy"})]})]}),(0,l.jsxs)("div",{className:"text-left mb-9 md:mr-[90px]",children:[(0,l.jsx)("h3",{className:"font-bold",children:"Follow Us"}),(0,l.jsxs)("div",{className:"flex space-x-2",children:[(0,l.jsx)(a.default,{src:"/assets/linkedin-white.svg",alt:"LinkedIn Icon",width:24,height:24}),(0,l.jsx)(a.default,{src:"/assets/twitterx-white.svg",alt:"Twitter Icon",width:24,height:24}),(0,l.jsx)(a.default,{src:"/assets/instagram-white.svg",alt:"Instagram Icon",width:24,height:24})]})]})]})})},10305:function(e,t,s){"use strict";s.d(t,{default:function(){return d}});var l=s(57437),a=s(2265),r=s(66648),c=s(87138),n=s(47371),i=e=>{let{message:t,show:s,onClose:r}=e;return(0,a.useEffect)(()=>{if(s){let e=setTimeout(()=>{r()},5e3);return()=>clearTimeout(e)}},[s,r]),(0,l.jsx)("div",{className:"fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md transition-opacity duration-300 ".concat(s?"opacity-100":"opacity-0 pointer-events-none"),children:(0,l.jsx)("p",{children:t})})},o=s(93360),d=()=>{let[e,t]=(0,a.useState)(""),[s,d]=(0,a.useState)(!1),[m,x]=(0,a.useState)(null),[u,h]=(0,a.useState)("/"),[f,b]=(0,a.useState)(null),g=(0,a.useRef)(null),{account:j,connectWallet:p,isWalletConnected:y}=(0,o.O)();(0,a.useEffect)(()=>{let e=e=>{g.current&&!g.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,a.useEffect)(()=>{window.ethereum?b(new n.ZPm(window.ethereum)):console.log("MetaMask is not installed")},[]);let N=(e,t)=>{y?h(t):(e.preventDefault(),x("Please connect your wallet to access this page."))};return(0,l.jsxs)("header",{className:"flex items-center justify-between p-5 bg-white border-b border-gray-200",children:[(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)(c.default,{href:"/",children:(0,l.jsx)(r.default,{src:"/assets/equibloc-logo.png",alt:"EquiBloc Logo",height:40,width:160})})}),(0,l.jsx)("nav",{children:(0,l.jsxs)("ul",{className:"flex list-none",children:[(0,l.jsx)("li",{className:"mx-5",children:(0,l.jsx)(c.default,{href:"/",className:"text-gray-800 font-medium ".concat(""),onClick:()=>h("/"),children:"Home"})}),(0,l.jsx)("li",{className:"mx-5",children:(0,l.jsx)(c.default,{href:"/jobs",className:"text-gray-800 font-medium ".concat(""),onClick:e=>N(e,"/jobs"),children:"Jobs"})}),(0,l.jsx)("li",{className:"mx-5",children:(0,l.jsx)(c.default,{href:"/about",className:"text-gray-800 font-medium ".concat(""),onClick:e=>N(e,"/about"),children:"About"})})]})}),(0,l.jsxs)("div",{className:"flex items-center",children:[y&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"bg-white text-[#ff0909] px-5 py-2 rounded font-bold",children:(0,l.jsx)(r.default,{src:"/assets/notification.svg",alt:"Notification Icon",height:20,width:20})}),(0,l.jsx)(c.default,{href:"/hire",children:(0,l.jsx)("button",{className:"bg-white text-[#ff0909] border-2 border-[#ff0909] ml-2 px-5 py-2 rounded font-bold",children:"Hire"})}),(0,l.jsx)("button",{className:"bg-white text-[#ff0909] border-2 border-[#ff0909] ml-2 px-5 py-2 rounded font-bold",children:"Apply"})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("button",{onClick:y?()=>d(!s):p,className:"bg-[#ff0909] text-white px-5 py-2.5 rounded font-bold flex items-center ml-3",children:[(0,l.jsx)(r.default,{src:"/assets/wallet.svg",alt:"Wallet Icon",height:16,width:16}),(0,l.jsx)("span",{className:"ml-2",children:y?j.slice(0,6)+"..."+j.slice(-4):"Connect Wallet"})]}),s&&(0,l.jsx)("div",{ref:g,className:"absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-50",children:(0,l.jsx)("button",{onClick:()=>{t(""),d(!1)},className:"block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100",children:"Disconnect"})})]})]}),(0,l.jsx)(i,{message:m||"",show:!!m,onClose:()=>{x(null)}})]})}},74384:function(e,t,s){"use strict";s.r(t);var l=s(57437),a=s(2265),r=s(10305),c=s(36037),n=s(93360);t.default=()=>{let[e,t]=(0,a.useState)(null),[s,i]=(0,a.useState)(""),[o,d]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[f,b]=(0,a.useState)(""),[g,j]=(0,a.useState)(""),[p,y]=(0,a.useState)(""),[N,v]=(0,a.useState)(""),{createGig:w}=(0,n.O)(),k=async l=>{l.preventDefault(),console.log({companyLogo:e,jobTitle:s,companyName:o,rate:m,duration:u,type:f,aboutCompany:g,jobDescription:p,kpis:N}),await w("companyLogo",p,[""],m),t(null),i(""),d(""),x(""),h(""),b(""),j(""),y(""),v("")};return(0,l.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,l.jsx)(r.default,{}),(0,l.jsx)("main",{className:"flex-grow flex items-center justify-center",children:(0,l.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold mb-6 text-center",children:"Create a New Gig"}),(0,l.jsxs)("form",{onSubmit:k,className:"space-y-4",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"companyLogo",className:"block text-sm font-medium text-gray-700 text-center",children:"Company Logo"}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("input",{type:"file",id:"companyLogo",onChange:e=>{e.target.files&&e.target.files.length>0&&t(e.target.files[0])},className:"hidden",accept:"image/*"}),(0,l.jsx)("button",{type:"button",onClick:()=>{var e;return null===(e=document.getElementById("companyLogo"))||void 0===e?void 0:e.click()},className:"bg-[#ff0909] bg-500 text-white mb-6 px-4 py-2 rounded-md hover:bg-[#ff0909] bg-700",children:"Choose File"}),e&&(0,l.jsx)("span",{className:"ml-2",children:e.name})]})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"jobTitle",className:"block text-sm font-medium text-gray-700 text-center",children:"Job Title"}),(0,l.jsx)("input",{type:"text",id:"jobTitle",value:s,onChange:e=>i(e.target.value),className:"mt-1 block w-[60%] mb-6 border border-gray-300 rounded-md p-2",required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"companyName",className:"block mt-6 text-sm font-medium text-gray-700 text-center",children:"Company Name"}),(0,l.jsx)("input",{type:"text",id:"companyName",value:o,onChange:e=>d(e.target.value),className:"mt-1 block w-[60%] border border-gray-300 rounded-md p-2",required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"rate",className:"block text-sm mt-6 font-medium text-gray-700 text-center",children:"Rate"}),(0,l.jsx)("input",{type:"text",id:"rate",value:m,onChange:e=>x(e.target.value),className:"mt-1 block w-[60%] border border-gray-300 rounded-md p-2",required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"duration",className:"block text-sm mt-6 font-medium text-gray-700 text-center",children:"Duration"}),(0,l.jsx)("input",{type:"text",id:"duration",value:u,onChange:e=>h(e.target.value),className:"mt-1 block w-[60%] border border-gray-300 rounded-md p-2",required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"type",className:"block text-sm mt-6 font-medium text-gray-700 text-center",children:"Type"}),(0,l.jsx)("input",{type:"text",id:"type",value:f,onChange:e=>b(e.target.value),className:"mt-1 block w-[60%] border border-gray-300 rounded-md p-2",required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"aboutCompany",className:"block text-sm mt-6 font-medium text-gray-700 text-center",children:"About the Company"}),(0,l.jsx)("textarea",{id:"aboutCompany",value:g,onChange:e=>j(e.target.value),className:"mt-1 block w-[60%] border border-gray-300 rounded-md p-2",rows:4,required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"jobDescription",className:"block text-sm mt-4 font-medium text-gray-700 text-center",children:"Job Description"}),(0,l.jsx)("textarea",{id:"jobDescription",value:p,onChange:e=>y(e.target.value),className:"mt-1 block w-[60%] mb-6 border border-gray-300 rounded-md p-2",rows:4,required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,l.jsx)("label",{htmlFor:"kpis",className:"block text-sm font-medium text-gray-700 text-center",children:"KPIs"}),(0,l.jsx)("textarea",{id:"kpis",value:N,onChange:e=>v(e.target.value),className:"mt-1 block w-[60%] mb-6 border border-gray-300 rounded-md p-2",rows:4,required:!0})]}),(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)("button",{type:"submit",className:"bg-[#ff0909] mb-2 bg-500 text-white px-4 py-2 rounded-md hover:bg-[#ff0909] bg-700",children:"Post Gig"})})]})]})}),(0,l.jsx)(c.Z,{})]})}}},function(e){e.O(0,[626,974,360,971,23,744],function(){return e(e.s=40276)}),_N_E=e.O()}]);