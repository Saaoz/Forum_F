import axios from 'axios';
import api from './ApiService';
import { User } from '../components/context/types';


export const fetchAllUser = async (): Promise<User[]> => {
    try {
        const res = await api.get<User[]>(`users/`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllUser:', error.message);

            throw new Error('An error occured while fetching AllUser');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchUserById = async (id:number): Promise<User[]> => {
    try {
        const res = await api.get<User[]>(`users/byid/${id}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching UserById:', error.message);

            throw new Error('An error occured while fetching UserById');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchUserByName = async (username:string): Promise<User[]> => {
    try {
        const res = await api.get<User[]>(`users/byname/${username}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching UserByName:', error.message);

            throw new Error('An error occured while fetching UserByName');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const createUser = async (userData:User): Promise<User[]> => {
    try {
        const res = await api.post<User[]>(`auth/create`, userData);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error createUser:', error.message);

            throw new Error('An error occured while createUser');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const loginWithToken = async (loginData:User): Promise<User[]> => {
    try {
        const res = await api.post<User[]>(`auth/login`, loginData);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error  loginWithToken:', error.message);

            throw new Error('An error occured while  loginWithToken');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const banUserById = async (id:number): Promise<User[]> => {
    try {
        const res = await api.get<User[]>(`users/${id}/ban`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error banUserById:', error.message);

            throw new Error('An error occured while banUserById');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const debanUserById = async (id:number): Promise<User[]> => {
    try {
        const res = await api.get<User[]>(`users/${id}/deban`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error debanUserById:', error.message);

            throw new Error('An error occured while debanUserById');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const adminUserById = async (id:number): Promise<User[]> => {
    try {
        const res = await api.get<User[]>(`users/${id}/admin`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllUser:', error.message);

            throw new Error('An error occured while fetching AllUser');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const unadminUserById = async (id:number): Promise<User[]> => {
    try {
        const res = await api.get<User[]>(`users/${id}/unadmin`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error unadminUserById:', error.message);

            throw new Error('An error occured while unadminUserById');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}