import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import { selectAllPosition } from 'store/positions/position-selectors';
import { useSelector,useDispatch } from 'react-redux';
import { addFilter } from 'store/filters/filters-actions';
import {selectVisiblePositions} from '../store/positions/position-selectors'
import { selectFilters } from 'store/filters/filters-selectors';

const JobList = () => {
  const positions = useSelector(selectAllPosition)
  const filter = useSelector(selectFilters)
  const pos = useSelector(state=>selectVisiblePositions(state,filter))
  const dispatch = useDispatch()

  const handleAddFiler =(filter)=>{
    dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {pos.map(item => (
        <JobPosition key={item.id} {...item} handleAddFiler={handleAddFiler}/>
      ))}
    </div>
  )
}

export {JobList};