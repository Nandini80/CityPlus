//Like node controller
import publicReq, { privateReq } from "./axios-config";

const signupservice = (data) => {
  console.log("inside sinupservice");
  return publicReq.post("http://localhost:2000/user/Signup", data);
};

const getUserService = () => {
  return privateReq.get("/user/CurrentUser");
};

const DistinctCatService = () => {
  return publicReq.get("/provider/distinct-services");
};

const fetchProviders = (data) => {
  return privateReq.post("/provider/fetchprovider", data);
};

const DistinctCityClient = () => {
  return publicReq.get("/client/distinct-city");
};

const fetchClient = (data) => {
  return privateReq.post("/client/fetchClient", data);
};

export {};

export {
  getUserService,
  signupservice,
  DistinctCatService,
  fetchProviders,
  DistinctCityClient,
  fetchClient,
};
