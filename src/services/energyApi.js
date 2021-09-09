import axios from 'axios';

const energyApi = axios.create({
  baseURL:
    'https://conteudos.bloxs.com.br/wp-json/wp/v2/posts?_embed=1&categories=74',
});

export default energyApi;
