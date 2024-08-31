exports.id=823,exports.ids=[823],exports.modules={22820:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,12994,23)),Promise.resolve().then(n.t.bind(n,96114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,79671,23)),Promise.resolve().then(n.t.bind(n,41868,23)),Promise.resolve().then(n.t.bind(n,84759,23))},83110:(e,t,n)=>{Promise.resolve().then(n.bind(n,57480))},68282:(e,t,n)=>{"use strict";n.d(t,{n:()=>o,O:()=>u});var i=n(10326),a=n(17577),s=n(10094),p=n(67514);let r=[{inputs:[{internalType:"address",name:"defaultAdmin",type:"address"},{internalType:"address",name:"pauser",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidAmount",type:"error"},{inputs:[],name:"InvalidId",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"by",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"FundsWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"gigId",type:"uint256"}],name:"GigAssigned",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"creator",type:"address"},{indexed:!1,internalType:"string",name:"description",type:"string"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"GigCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"gigId",type:"uint256"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"worker",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"GigPaidOut",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Received",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"GIG_OWNER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"PAUSER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"allGigs",outputs:[{internalType:"uint256",name:"gigId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"assignedApplicant",type:"address"},{internalType:"string",name:"img",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"bounty",type:"uint256"},{internalType:"bool",name:"userSelected",type:"bool"},{internalType:"bool",name:"paid",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"appCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_gigId",type:"uint256"},{internalType:"string",name:"_coverLetter",type:"string"}],name:"applyJob",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_img",type:"string"},{internalType:"string",name:"_description",type:"string"},{internalType:"string[]",name:"_kpis",type:"string[]"}],name:"createGig",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"getAllGigs",outputs:[{components:[{internalType:"uint256",name:"gigId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"assignedApplicant",type:"address"},{internalType:"string",name:"img",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"bounty",type:"uint256"},{internalType:"string[]",name:"kpis",type:"string[]"},{internalType:"bool",name:"userSelected",type:"bool"},{internalType:"bool",name:"paid",type:"bool"}],internalType:"struct GigsHub.Gigs[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_gigId",type:"uint256"}],name:"getGigApplications",outputs:[{components:[{internalType:"uint256",name:"appId",type:"uint256"},{internalType:"uint256",name:"gigId",type:"uint256"},{internalType:"address",name:"applicant",type:"address"},{internalType:"string",name:"coverLetter",type:"string"},{internalType:"bool",name:"selected",type:"bool"}],internalType:"struct GigsHub.Application[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_gigId",type:"uint256"}],name:"getGigById",outputs:[{components:[{internalType:"uint256",name:"gigId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"assignedApplicant",type:"address"},{internalType:"string",name:"img",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"bounty",type:"uint256"},{internalType:"string[]",name:"kpis",type:"string[]"},{internalType:"bool",name:"userSelected",type:"bool"},{internalType:"bool",name:"paid",type:"bool"}],internalType:"struct GigsHub.Gigs",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getUserAppl",outputs:[{components:[{internalType:"uint256",name:"appId",type:"uint256"},{internalType:"uint256",name:"gigId",type:"uint256"},{internalType:"address",name:"applicant",type:"address"},{internalType:"string",name:"coverLetter",type:"string"},{internalType:"bool",name:"selected",type:"bool"}],internalType:"struct GigsHub.Application[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getUsersGig",outputs:[{components:[{internalType:"uint256",name:"gigId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"assignedApplicant",type:"address"},{internalType:"string",name:"img",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"uint256",name:"bounty",type:"uint256"},{internalType:"string[]",name:"kpis",type:"string[]"},{internalType:"bool",name:"userSelected",type:"bool"},{internalType:"bool",name:"paid",type:"bool"}],internalType:"struct GigsHub.Gigs[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"gigsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_gigId",type:"uint256"}],name:"payout",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_gigId",type:"uint256"},{internalType:"uint256",name:"_appId",type:"uint256"}],name:"selectWorker",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],y=new s.BvB;y.registerPlugin(new p.ZKsyncPlugin("https://sepolia.era.zksync.dev")),y.ZKsync;let l=(0,a.createContext)(void 0),u=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useWallet must be used within a WalletProvider");return e},o=({children:e})=>{let[t,n]=(0,a.useState)(null),[p,y]=(0,a.useState)(null),[u,o]=(0,a.useState)(null),[d,m]=(0,a.useState)(!1);(0,a.useEffect)(()=>{window.ethereum?y(new s.BvB(window.ethereum)):console.log("MetaMask is not installed")},[]);let g=async()=>{if(p)try{let e=await window.ethereum.request({method:"eth_requestAccounts"});n(e[0]),m(!0);let i=new p.eth.Contract(r,"0xb9C992eF068a2a7b71e5EaeE22AAc2eB48D98d04");o(i),console.log(t,u)}catch(e){console.log("Error connecting wallet. Please try again."),console.error("Error connecting wallet:",e)}else console.log("MetaMask is not installed. Please install it to use this feature.")},c=async(e,n,i,a)=>{if(u&&t)try{await u.methods.createGig(e,n,i).send({from:t,value:p.utils.toWei(a,"ether")}),console.log("Gig created successfully")}catch(e){console.error("Error creating gig:",e)}};return i.jsx(l.Provider,{value:{account:t,isWalletConnected:d,web3:p,gigsHubContract:u,connectWallet:g,createGig:c},children:e})}},57480:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var i=n(10326),a=n(46465),s=n.n(a);n(23824);var p=n(68282);function r({children:e}){return i.jsx("html",{lang:"en",children:i.jsx(p.n,{children:i.jsx("body",{className:s().className,children:e})})})}},32029:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>p,__esModule:()=>s,default:()=>r});var i=n(68570);let a=(0,i.createProxy)(String.raw`C:\Users\dayo\q\equibloc\src\app\layout.tsx`),{__esModule:s,$$typeof:p}=a;a.default;let r=(0,i.createProxy)(String.raw`C:\Users\dayo\q\equibloc\src\app\layout.tsx#default`)},23824:()=>{}};