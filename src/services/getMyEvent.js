const getRegisteredEvents = async () => {
    // const token = localStorage.getItem("token");
    console.log("token inside", token);

    var myHeaders = new Headers();
    myHeaders.append("x-auth-token", token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    await fetch(`${END_POINT.BASE_URL}/users/events`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEvents(result.events);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };