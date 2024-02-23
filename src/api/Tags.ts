import axios from 'axios';
import api from './ApiService';
import { Tag } from '../components/context/types';


export const fetchAllTag = async (): Promise<Tag[]> => {
    try {
        const res = await api.get<Tag[]>(`tags/`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllTag:', error.message);

            throw new Error('An error occured while fetching AllTag');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchTagByName = async (name:String): Promise<Tag[]> => {
    try {
        const res = await api.get<Tag[]>(`tags/${name}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching TagByName:', error.message);

            throw new Error('An error occured while fetching TagByName');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchAllTagFromTopicId = async (topicId: Number): Promise<Tag[]> => {
    try {
        const res = await api.get<Tag[]>(`tags/topic/${topicId}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllTagFromTopicId:', error.message);

            throw new Error('An error occured while fetching AllTagFromTopicId');
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
        if (axios.isAxiosError(error)) {
            console.error('Error fetchTop20Tag:', error.message);

            throw new Error('An error occured while fetchTop20Tag');
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
        if (axios.isAxiosError(error)) {
            console.error('Error createTag:', error.message);

            throw new Error('An error occured while createTag');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const addTagToTopic = async (topicId: Number, tagId: Number): Promise<Tag[]> => {
    try {
        const res = await api.post<Tag[]>(`tags/topic/${topicId}/tag/${tagId}/add`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error addTagToTopic:', error.message);

            throw new Error('An error occured while addTagToTopic');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const updateTag = async (): Promise<Tag[]> => {
    try {
        const res = await api.patch<Tag[]>(`tags/`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error updateTag:', error.message);

            throw new Error('An error occured while updateTag');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const deleteTagFromTopic = async (): Promise<Tag[]> => {
    try {
        const res = await api.delete<Tag[]>(`tags/`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error deleteTagFromTopic:', error.message);

            throw new Error('An error occured while deleteTagFromTopic');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}