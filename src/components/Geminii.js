import  { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "./Constants";
console.log("Iam in GEMini"+API_KEY)

const genAI = new GoogleGenerativeAI(API_KEY);
export default genAI;
