"use client";

import { XCircleIcon } from "@heroicons/react/20/solid";
import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd";

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: import("react-beautiful-dnd").DraggableProvidedDraggableProps;
    dragHandleProps: import("react-beautiful-dnd").DraggableProvidedDragHandleProps | null | undefined;
};

const TodoCard = ({todo, index, id, innerRef, draggableProps, dragHandleProps}:Props) => {
  return <div className="bg-white rounded-md space-y-2 drop-shadow-md"
    {...draggableProps} {...dragHandleProps} ref={innerRef} >
      
    <div className="flex justify-between items-center p-5" >
      <p>
        {todo.title}
      </p>
      <button className="text-red-400 hover:text-red-800" >
        <XCircleIcon className="ml-5 h-6 w-6" />
      </button>
    </div>
    
  </div>;
};

export default TodoCard;
