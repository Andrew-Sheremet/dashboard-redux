export const selectAllPosition =state=> state.positions;

export const selectVisiblePositions = (state,filters=[])=>{
    if(filters.length === 0 ) return state.positions;

    return state.positions.filter((item)=>{
         const itemFilters= [].concat(item.role, item.level, ...item.languages, ...item.tools)

         return filters.every(filter=>itemFilters.includes(filter))
    })

}