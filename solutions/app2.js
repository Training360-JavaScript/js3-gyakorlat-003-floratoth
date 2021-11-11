const setCookie = (key, value) => {
  /*let expirationTime = 15 * 60 * 1000;
  document.cookie = `${key}=${value};expires=${expirationTime};path=/`;*/
};

setCookie("viewed", 5);
setCookie("uid", 354774631237);
setCookie("ssid", "Bx55OWbHJ0Vt_IGIF");

const cookieHandler = {
  getAll() {
    const cookieObject = {};
    document.cookie.split("; ").forEach((item) => {
      let keyValueList = item.split("=");
      cookieObject[keyValueList[0]] = keyValueList[1];
    });
    return cookieObject;
  },
  toSessionStorage() {
    document.cookie.split("; ").forEach((item) => {
      let keyValueList = item.split("=");
      sessionStorage.setItem(keyValueList[0], keyValueList[1]);
    });
  },
  flush() {
    document.cookie.split(";").forEach((item) => {
      document.cookie =
        item.trim().split("=")[0] +
        "=;" +
        "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    });
  },
};

export { cookieHandler };
