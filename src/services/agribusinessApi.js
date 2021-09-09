import axios from 'axios';

const agribusinessApi = axios.create({
  baseURL:
    'https://conteudos.bloxs.com.br/wp-json/wp/v2/posts?_embed=1&categories=76',
});

export default agribusinessApi;
