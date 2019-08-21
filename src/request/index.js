import axios from 'axios'
//全局配置
//axios.defaults.baseURL = 'https://api.example.com';
export const get = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.get(url, {
            params: params,
            baseURL: 'https://www.littleemmayang.com'
        })
        .then(response=>{
//      	console.log(response)
            if(response.status === 200 && response.data.status === 0){
                resolve(response.data);
            }else{
                console.log('请求失败');
            }
        })
        .catch(error=>{
            console.log('请求失败');    
        })
    })
}


export const post = async (url, params = {})=>{
    try {
        let response = await axios.post(url, params, {
            baseURL: 'https://www.littleemmayang.com'
        });
        if(response.status === 200 && response.data.status === 0){
            return response.data;
        }else{
            throw new Error();
        }
    } catch (error) {
        console.log('请求失败');        
    }
}