import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})


export async function getVoiceActors(keywords, page) {
  const { headers, data } = await client.get('providers/search/', {
    params: {
      page,
      keywords,
      service: 'voice_over',
    }
  })

  return {
    pagination: {
      currentPage: Number(headers['x-list-current-page']),
      totalPages: Number(headers['x-list-total-pages'])
    },
    data: data.providers
  };
}
