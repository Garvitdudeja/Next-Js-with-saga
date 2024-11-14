import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { socialLogin } from '@/redux/slices/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';



const GoogleLogin = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  console.log(Cookies.get("authToken"),"Cookie")
  const login = useGoogleLogin({
    onSuccess: async (data) => {
      try {
        console.log(data,"tana")
        dispatch(socialLogin({...data,cb(res){
          console.log(res?.data?.userDetails)
          if(res?.data?.userDetails?.dob != null){
            router.push("/dashboard")
          }
          else {
            router.push('/verify')
          }
        }}))
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
  });
  return (
    <div className=" login_right_box ">
    <h2 className="login_heading mb-4 text-center">Sign in to your Account</h2>
    <button className="google_btn item_center" onClick={login}>
      <img
        className="me-2 mb-1"
        src="./images/google.svg"
        alt="google-icon"
      />
      LOGIN WITH GOOGLE
    </button>
  </div>
  )
}

export default GoogleLogin