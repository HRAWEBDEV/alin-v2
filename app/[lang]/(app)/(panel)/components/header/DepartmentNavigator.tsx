'use client';
import { Button } from '@/components/ui/button';
import { usePanelRouterContext } from '../../services/panel-router/panelRouterContext';
import ComputerReportIcon from '../../../components/icons/ComputerReportIcon';
import {
 Tooltip,
 TooltipTrigger,
 TooltipContent,
} from '@/components/ui/tooltip';
import { useShareDictionary } from '../../../services/share-dictionary/shareDictionaryContext';

export default function DepartmentNavigator({
 larger = false,
}: {
 larger?: boolean;
}) {
 const { activeDepartment, onShowDepartmentController } =
  usePanelRouterContext();
 const {
  shareDictionary: {
   components: { departmentController },
  },
 } = useShareDictionary();
 return (
  <Tooltip>
   <TooltipTrigger asChild>
    <Button
     variant='secondary'
     className={`w-full justify-start text-start ${larger && 'h-12'}`}
     onClick={() => onShowDepartmentController(true)}
    >
     <ComputerReportIcon className='size-6' fill='currentColor' />
     <div className='truncate grow'>{activeDepartment.departmentName}</div>
    </Button>
   </TooltipTrigger>
   <TooltipContent>
    <div>
     <span>{departmentController.department}: </span>
     <span>{activeDepartment.departmentName}</span>
    </div>
   </TooltipContent>
  </Tooltip>
 );
}
