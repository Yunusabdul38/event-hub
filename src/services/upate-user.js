import { END_POINT } from "../config/environment"
export async function updateUser (data,token,setIsLoading){
    setIsLoading(true)
    const formData = new FormData();
    //formData.append("fullName","yunus abdulmajid")
    formData.append("bio","gm cairo")
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
      await fetch(`${END_POINT.BASE_URL}/event/create-event`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success === true) {
            console.log("event success", result.data);
          } else {
            console.log("error", result.message);
          }
          setIsLoading(false)
        })
        .catch((error) => {
          console.log("error", error);
          setIsLoading(false)
        });
    }
        try {
            const response = await fetch(`${END_POINT.BASE_URL}/user/update`,{
                method:"PUT",
                headers:{
                    "x-auth-token":token,
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            if(!response.ok){
                throw new Error("Failed to update user")
            }
            setIsLoading(false)
            const result = await response.json()
            console.log(result)            
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
}
