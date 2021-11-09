import md5 from "md5";
const { REACT_APP_MARVEL_API_PUBLIC_KEY, REACT_APP_MARVEL_API_PRIVATE_KEY } =
  process.env;

const time = Date.now();
const apiKey = `&apikey=${REACT_APP_MARVEL_API_PUBLIC_KEY}&hash=${md5(
  `${time}${REACT_APP_MARVEL_API_PRIVATE_KEY}${REACT_APP_MARVEL_API_PUBLIC_KEY}`
)}&ts=${time}`;

export default apiKey;
