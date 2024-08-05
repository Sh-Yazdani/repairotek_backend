import  bcrypt  from 'bcrypt';
const bcryptPass =async (password:string) => {

  const hashedPassword = await bcrypt.hash(password as string, 10);
  console.log(hashedPassword);
  
  return hashedPassword;
};


bcryptPass("Opt@1234")
