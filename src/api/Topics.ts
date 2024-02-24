import axios from 'axios';
import api from './ApiService';
import { Topic } from '../components/context/types';

export const fetchAllTopics = async (): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>('topics/');
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching allTopics:', error.message);

            throw new Error('An error occured while fetching alltopics');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchTopicById = async (id: Number): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>(`topics/${id}`);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching TopicById:', error.message);

            throw new Error('An error occured while fetching TopicById');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchTopicByCategoryId = async (categoryId: Number): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>(`topics/topic_category/${categoryId}`);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching TopicByCategoryId :', error.message);

            throw new Error('An error occured while fetching TopicByCategoryId ');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchTopicByTitle = async (title: String): Promise<Topic[]> => {
    try {
        const res = await api.post<Topic[]>(`topics/${title}`);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching TopicByTitle :', error.message);

            throw new Error('An error occured while fetching TopicByTitle ');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchTopicByUserId = async (createdBy: Number): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>(`topics/topic_user/${createdBy}`);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching TopicByUserId :', error.message);

            throw new Error('An error occured while fetching TopicByUserId ');
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
        if (axios.isAxiosError(error)) {
            console.error('Error createTopic :', error.message);

            throw new Error('An error occured while createTopic ');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const UpdateTopic = async (id:Number, topicData:Topic ): Promise<Topic[]> => {

    try {
        const res = await api.patch<Topic[]>(`topics/${id}/update`, topicData);
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error UpdateTopic :', error.message);

            throw new Error('An error occured while UpdateTopic ');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}