import request from '../util/request';

// 我的收藏
export let collectData = (params: any)=>{
    return  request.get('/api/collect/list',{typeId:params.typeId,size:params.size})
}