export const  Validatemessage=(mail,password)=>{
   const validmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(mail);
   const validpass=/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
   if(!validmail) return "Invalid Mail id";
   if(!validpass) return "Invalid Password";
   return null;
}