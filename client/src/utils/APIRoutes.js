const host="http://localhost:5000";
const registerRoute=`${host}/api/auth/register`;
const loginRoute=`${host}/api/auth/login`;
const allusersRoute=`${host}/api/auth/allusers`;

const sendMessageRoute=`${host}/api/messages/addmsg`
const getMessageRoute=`${host}/api/messages/getmsg`
export {registerRoute,loginRoute,allusersRoute,sendMessageRoute,getMessageRoute}