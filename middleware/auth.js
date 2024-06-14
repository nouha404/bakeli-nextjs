import { useRouter } from "next/navigation";

const requireAuth = (handler) => {
    return async (context) => {
        const token = localStorage.getItem("token"); // Récupérer le token depuis le localStorage

        if (!token) {
            // Rediriger l'utilisateur vers la page de connexion s'il n'est pas connecté
            const router = useRouter();
            router.push("/connexion");
            return { props: {} }; // Retourner un objet vide pour interrompre le rendu de la page
        }

        // Si l'utilisateur est connecté, continuer le flux d'exécution
        return await handler(context);
    };
};

export default requireAuth;