import type { ProjectsResponse, Project } from "../types/project.tsx";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const projectsService = {
    async getProjects(): Promise<ProjectsResponse> {
        try {
            const response = await fetch(`${API_BASE_URL}/projects`);
            if (!response.ok) {
                throw new Error('Error fetching projects');
            }
            return await response.json();
        } catch (error) {
            console.log('Error fetching projects: ',error)
            throw error;
        }
    },

    async getProjectsById(id: number): Promise<Project>{
        try {
            const respone = await fetch(`${API_BASE_URL}/projects/${id}`);
            if (!respone.ok) {
                throw new Error('Error fetching project by id');
            }
            return await respone.json();
        } catch (error) {
            console.log('Error fetching project: ', error);
            throw error;
        }
    },

    async checkProjectsExist(): Promise<boolean> {
        try {
            const respone = await fetch(`${API_BASE_URL}/projects`);
            const data = await respone.json();
            return data.data && data.data.length > 0;
        } catch (error) {
            console.log('Error cheching projects: ', error);
            return false;
        }
    }

}