import { $host } from './index'

export const callback = async (name, phone) => {
    const response = await $host.post('api/callback', { name, phone })
    return response
}

export const feedback = async (name, email, text) => {
    const response = await $host.post('api/feedback', { name, email, text })
    return response
}