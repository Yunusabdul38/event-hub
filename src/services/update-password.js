import toast from "react-hot-toast";
import { END_POINT } from "../config/environment";

export const updatePaswordFn = async (data,token,setIsLoading) => {
    setIsLoading(true)
  toast.loading("Updating Password");
    const formData = new FormData();

    var body = {
      oldPassword: data.oldPassword,
      newPassWord: data.newPassWord,
      confirmPassword: data.confirmPassword,
    };


    formData.append("oldPassword", body.oldPassword);
    formData.append("password", body.newPassWord);
    formData.append("confirmPassword", body.confirmPassword);

    if (token) {
      // Verify token on the backend
      var myHeaders = new Headers();
      myHeaders.append("x-auth-token", token);

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        redirect: "follow",
        body: formData,
      };

      try {
        const request =await fetch(`${END_POINT.BASE_URL}/users/me/update-password`, requestOptions)
        console.log(request)
        if(!request.ok){
          throw new Error (request)
        }
        const response = await request.json()
        if (response.success === true) {
            toast.success(result.message);
          } else {
            toast.error(`Password Update Failed check your inputs and try again`);
            console.log("error", result);
          }
      } catch (error) {
        console.log("error", error);
          setIsLoading(false)
      }
    }
  };