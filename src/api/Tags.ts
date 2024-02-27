import axios from 'axios';
import api from './ApiService';
import { Tag } from '../components/context/types';


export const fetchAllTag = async (): Promise<Tag[]> => {
    try {
        const res = await api.get<Tag[]>(`tags/`);
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

export const fetchTagByName = async (name:string): Promise<Tag[]> => {
    try {
        const res = await api.get<Tag[]>(`tags/${name}`);
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

export const fetchAllTagFromTopicId = async (topicId: number): Promise<Tag[]> => {
    try {
        const res = await api.get<Tag[]>(`tags/topic/${topicId}`);
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

export const fetchTop20Tag = async (): Promise<Tag[]> => {
    try {
        const res = await api.get<Tag[]>(`tags/rank/top20`);
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

export const createTag = async (tagData:Tag): Promise<Tag[]> => {
    try {
        const res = await api.post<Tag[]>(`tags/create`, tagData);
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

export const addTagToTopic = async (topicId: number, tagId: number): Promise<Tag[]> => {
    try {
        const res = await api.post<Tag[]>(`tags/topic/${topicId}/tag/${tagId}/add`);
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

export const updateTag = async (id:number): Promise<Tag[]> => {
    try {
        const res = await api.patch<Tag[]>(`tags/${id}/update`);
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

export const deleteTagFromTopic = async (topicId:number, tagId:number ): Promise<Tag[]> => {
    try {
        const res = await api.delete<Tag[]>(`tags/topic/${topicId}/tag/${tagId}/delete`);
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