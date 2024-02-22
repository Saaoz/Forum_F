import axios from 'axios';
import api from './ApiService';
import { Category } from '../components/context/types';


export const fetchAllCategory = async (): Promise<Category[]> => {
    try {
        const res = await api.get<Category[]>(`category/`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllCategory:', error.message);

            throw new Error('An error occured while fetching AllCategory');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchCategoryById = async (id: Number): Promise<Category[]> => {
    try {
        const res = await api.get<Category[]>(`category/${id}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching CategoryById:', error.message);

            throw new Error('An error occured while fetching CategoryById');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchCategoryByName = async (name: String): Promise<Category[]> => {
    try {
        const res = await api.get<Category[]>(`category/${name}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching CategoryByName:', error.message);

            throw new Error('An error occured while fetching CategoryByName');
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
        if (axios.isAxiosError(error)) {
            console.error('Error createCategory:', error.message);

            throw new Error('An error occured while createCategory');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}


export const updateCategory = async (id: Number, categoryData:Category): Promise<Category[]> => {
    try {
        const res = await api.post<Category[]>(`category/${id}/update`, categoryData);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error updateCategory:', error.message);

            throw new Error('An error occured while updateCategory');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}



export const switchActive = async (id: Number): Promise<Category[]> => {
    try {
        const res = await api.patch<Category[]>(`category/${id}/switch`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error switchActive:', error.message);

            throw new Error('An error occured while switchActive');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}
