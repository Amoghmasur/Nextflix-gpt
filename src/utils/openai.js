import OpenAI from 'openai';
import { Open_api_key } from './constant';


const openai = new OpenAI({
  apiKey: Open_api_key, dangerouslyAllowBrowser: true
});

export default openai