import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector,useDispatch } from 'react-redux';
import { selectFilters } from 'store/filters/filters-selectors';
import { removeFilter,clearFilter } from 'store/filters/filters-actions';

const FilterPanel = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  if(currentFilters.length === 0){
    return null
  } else{
    return (
      <Card className="filter-panel">
        <div className="filter-panel-wrapper">
          <Stack>
            {currentFilters.map((item)=>(
              <Badge key={item} variant="clearable" onClear={()=>dispatch(removeFilter(item))}>{item}</Badge>
            ))}
            
          </Stack>
  
          <button onClick={()=>dispatch(clearFilter)} className='link'>Clear</button>
        </div>
      </Card>
    )

  }
}

export {FilterPanel};