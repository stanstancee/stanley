import {DiResponsive as pwd} from "react-icons/di"
import {MdHttp as restApi} from 'react-icons/md'
import { FaReact as react } from "react-icons/fa";

const service=[
{
  id:1,title:"Progressive Web App", content:
"Progressive Web Apps are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications. With service workers, I can create reliably fast web pages and offline experiences."
,icon:pwd
},
{
  id:2,title:"RESTful API", content:"RESTful web services are built to work best on the Web.  In the REST architectural style, data and functionality are considered resources and are accessed using Uniform Resource Identifiers (URIs), typically links on the Web. The resources are acted upon by using a set of simple, well-defined operations.",
icon:restApi
},
{
id:3, title:"Single Page Application",content:"I use React for building user interfaces specifically for single-page applications.Also handling the view layer for web and mobile apps. This also allows me to create reusable UI components."
,icon:react
}

]
export default service;