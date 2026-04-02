export interface Project {
    id: number;
    tite: string;
    description: string;
    technologies: string[];
    image_url?: string;
    demo_url?: string;
    github_url?: string;
    featured?: boolean;
    created_at?: string;
    updated_at?: string;
};

export interface ProjectsResponse {
    data: Project[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
};