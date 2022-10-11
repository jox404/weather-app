import { getData } from "../storageLocal";

const getMainCity = async () => {
  let response;
  try {
    const token = await getData("token");
    await fetch(`http://192.168.0.103:8080/mainCity/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "x-access-token": token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        return (response = res);
      });
  } catch (error) {
    console.log(error);
  }
  return response;
};

export { getMainCity };
