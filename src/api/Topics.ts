import axios from 'axios';
import api from './ApiService';
import { Topic } from '../components/context/types';

export const fetchAllTopics = async (): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>('topics/');
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

export const fetchTopicById = async (id: number): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>(`topics/${id}`);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchTopicByCategoryId = async (categoryId: number): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>(`topics/topic_category/${categoryId}`);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchTopicByTitle = async (title: string): Promise<Topic[]> => {
    try {
        const res = await api.post<Topic[]>(`topics/${title}`);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchTopicByUserId = async (createdBy: number): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>(`topics/topic_user/${createdBy}`);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const createTopic = async (topicData:Topic): Promise<Topic[]> => {

    try {
        const res = await api.post<Topic[]>(`topics/create`, topicData);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const UpdateTopic = async (id:number, topicData:Topic ): Promise<Topic[]> => {

    try {
        const res = await api.patch<Topic[]>(`topics/${id}/update`, topicData);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const allTopTopicsWithReplyCount = async (): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>('topics/topic_reply/count');
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
