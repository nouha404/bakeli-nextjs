import { toast } from 'react-toastify';

const API_BASE_URL = "http://localhost:3007/api";

const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Erreur lors de la récupération des données");
        }

        return data;
    } catch (error) {
        toast.error(error.message || 'Erreur inconnue');
        throw error;
    }
};

const postData = async (endpoint, body) => {
    try {

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Erreur lors de l'envoi des données");
        }
        return data;
    } catch (error) {
        toast.error(error.message || 'Erreur inconnue');
        throw error;
    }
};

export { fetchData, postData };
