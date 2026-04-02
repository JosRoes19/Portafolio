import { useState, useEffect } from "react";
import { projectsService } from "../../services/projectsService";
import type { Project } from "../../types/project";

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await projectsService.getProjects();
                setProjects(response.data);
                setError(null);
            } catch (err) {
                setError('Error to load projects');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);
    return { projects, loading, error }
}