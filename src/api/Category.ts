import axios from 'axios';
import api from './ApiService';
import { Category } from '../components/context/types';


export const fetchAllCategory = async (): Promise<Category[]> => {
    try {
        const res = await api.get<Category[]>(`category/`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchCategoryById = async (id: number): Promise<Category[]> => {
    try {
        const res = await api.get<Category[]>(`category/${id}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchCategoryByName = async (name: string): Promise<Category[]> => {
    try {
        const res = await api.get<Category[]>(`category/${name}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const createCategory = async (categoryData:Category): Promise<Category[]> => {
    try {
        const res = await api.patch<Category[]>(`category/create`, categoryData);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}


export const updateCategory = async (id: number, categoryData:Category): Promise<Category[]> => {
    try {
        const res = await api.post<Category[]>(`category/${id}/update`, categoryData);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}



export const switchActive = async (id: number): Promise<Category[]> => {
    try {
        const res = await api.patch<Category[]>(`category/${id}/switch`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}
