
export const service ={
    getData:({from,to,data})=>{
        return new Promise((res,rej)=>{  
            if(data){
                const products=data.slice(from,to);
                res({
                    count:data.length,
                    data:products
                })
            }

        })
    }
}