const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/hoots`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { index };