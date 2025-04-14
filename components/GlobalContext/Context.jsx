import React,{useContext,createContext,useState, useEffect} from 'react'

const myContext = createContext()

const GlobalContextProvider = ({children}) => {

    // userState for handleSignup
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // userState for handleSignin
    const [emailSignin, setEmailSignin] = useState('')
    const [passwordSignin, setPasswordSignin] = useState('')

    const [showPopup, setShowPopup] = useState(false);
    const [signupError,setSignupError] = useState('')

    const [showSidebar, setShowSidebar] = useState(false)
    const [showHeader,setShowHeader] = useState(false)

    const [user,setUser]  = useState(null)

    // userState for handleChangePassword
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [changePasswordError,setChangePasswordError] = useState('')


    const [account, setAccount] = useState([])
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 
    useEffect(() => {
         const loadAccount = () => {
            const accountData = localStorage.getItem('account')
            if(accountData){
                setAccount(JSON.parse(accountData))
            }
         }

         const loadUser = () => {
            const userData = localStorage.getItem('user')
            if(userData){
                setUser(JSON.parse(userData))
            }
         }
            loadAccount() 
            loadUser()  
    },[])


    const handleSignup = (e) => {
        e.preventDefault()
        if(!username || !email || !password) {
            setSignupError('Please fill all fields')
        }else if(!emailRegex.test(email)) {
            setSignupError('Please enter a valid email')
        }else if(!(password === confirmPassword)){
            setSignupError('Password is not same')
        } else if(password.length < 6) {
            setSignupError('Password must be at least 6 characters')
        }else if(authUsername(username)){
            setSignupError('Username already exists')
        }else if(authEmail(email)){
            setSignupError('Email already in use')
        }else {
          const updatedAccount = [...account, {"username":username,"email":email,"password":password}]
          setAccount(updatedAccount)
          localStorage.setItem('account', JSON.stringify(updatedAccount))
          setUsername('')
          setEmail('')
          setPassword('')
          setSignupError('')
          setConfirmPassword('')
          setShowPopup(true)
        } 
       }

       const handleSignin = () => {
            const foundUser = account.find(user => user.email === emailSignin && user.password === passwordSignin)
            if(foundUser){
              setUser(foundUser)
              localStorage.setItem('user', JSON.stringify(foundUser))
              return true
            }else{
              return false
            }
       }




    //    Authentication functions for username
       const authUsername = (username) => {
        let is_Exist = false
         account.map((item) => {
               if(item.username === username){
                  is_Exist = true
               }
         })
         return is_Exist
     }


  // Authentication functions for email
     const authEmail = (email) => {
        let is_Exist = false
         account.map((item) => {
               if(item.email === email){
                  is_Exist = true
               }
         })
         return is_Exist
     }



     const changePassword = () => {
        
        if (account && account.length && user) {
            account.map((acc) => {
               if(acc.password !== oldPassword){
                setChangePasswordError("Password not Exist")
                
               }else if(newPassword !== confirmNewPassword){
                 setChangePasswordError("Password is not same")
                 
               }else{
                 acc.password = newPassword
                 user.password = newPassword
                 localStorage.setItem('account',JSON.stringify(account))
                 localStorage.setItem('user',JSON.stringify(user))
                 setChangePasswordError("Password Changed")
               }
            })
        }
     }

  return (
    <myContext.Provider
     value={{showPopup,
        setShowPopup,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSignup,
        handleSignin,
        signupError,
        setEmailSignin,
        setPasswordSignin,
        emailSignin,
        passwordSignin,
        user,
        setUser,
        setOldPassword,
        setNewPassword,
        setConfirmNewPassword,
        oldPassword,
        changePassword,
        changePasswordError,
        showSidebar,
        setShowSidebar,
        showHeader,
        setShowHeader

    }}
     >
        {children}
    </myContext.Provider>
  )
}


export const useGlobalContext = () => {
    return useContext(myContext)
}

export default GlobalContextProvider