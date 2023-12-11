/**
 * @param data 所有資料清單
 * @param id 指定查詢回傳該筆資料
 * @returns 
 */
export const filterNodeGroup = (data:any,id:number)=>{
    return data.filter((el:any)=>{
        return el.id === id
    })
}
/**
 * 
 * @param data 
 * @param groupName 
 */
export const chosenAllGroup = (data:any,groupName:string)=>{
    return data.filter((el:any)=>{
        console.log(el.group);
        return el.group === groupName
    })
}