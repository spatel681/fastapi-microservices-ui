import axios from "axios";

export const userApi = axios.create({
    baseURL: "http://localhost:8001",
    headers: {
        "Content-Type": "application/json"
    }
});

export const productApi = axios.create({
    baseURL: "http://localhost:8002",
    headers: {
        "Content-Type": "application/json"
    }
});

export const orderApi = axios.create({
    baseURL: "http://localhost:8003",
    headers: {
        "Content-Type": "application/json"
    }
});