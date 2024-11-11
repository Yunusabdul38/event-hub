import toast from "react-hot-toast";
import { END_POINT } from "../config/environment";

export const updatePaswordFn = async (data,token,setIsLoading) => {
  setIsLoading(true)
  toast.loading("Updating Password");
    const formData = new FormData();

    formData.append("oldPassword", data.oldPassword);
    formData.append("password", data.newPassword);
    formData.append("confirmPassword", data.confirmPassword);

    if(token){
      console.log("sending",data)
      console.log(typeof token)
      try{
        const request = await fetch(`${END_POINT.BASE_URL}/users/me/update-password`,{
          body:JSON.stringify(data),
          method:"PUT",
          headers:{
            'Content-Type': 'application/json',
            "x-auth-token":token,
            //Authorization:`Bearer ${token}`,
          }          
        })
        console.log(request)
        if(request.status !== 200){
          throw new Error(request)
        }
        setIsLoading(false)
          const response = request.json()
          console.log(response)
      }catch(error){
        setIsLoading(false)
        console.log(error)
      }
    }
     
    // if (token) {
    //   // Verify token on the backend
    //   var myHeaders = new Headers();
    //   myHeaders.append("Authorization",`Bearer ${token}`)

    //   var requestOptions = {
    //     method: "PUT",
    //     headers: myHeaders,
    //     redirect: "follow",
    //     body: formData,
    //   };

    //   try {
    //     const request =await fetch(`${END_POINT.BASE_URL}/users/me/update-password`, requestOptions)
    //     console.log(request)
    //     if(!request.ok){
    //       throw new Error (request)
    //     }
    //     const response = await request.json()
    //     if (response.success === true) {
    //         toast.success(result.message);
    //       } else {
    //         toast.error(`Password Update Failed check your inputs and try again`);
    //         console.log("error", result);
    //       }
    //   } catch (error) {
    //     console.log("error", "error sening request");
    //       setIsLoading(false)
    //   }
    //  }
  };