"use client";

import useBoardStore from "@/store/BoardStore";
import getUrl from "@/utils/getUrl";
import { XCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd";

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: import("react-beautiful-dnd").DraggableProvidedDraggableProps;
    dragHandleProps: import("react-beautiful-dnd").DraggableProvidedDragHandleProps | null | undefined;
};

const TodoCard = ({ todo, index, id, innerRef, draggableProps, dragHandleProps }: Props) => {
  
  const [deleteTask] = useBoardStore((state) => [state.deleteTask]);

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (todo.image) {
      const fetchImage = async () => {
        // @ts-ignore
        const url = await getUrl(todo.image!);
        if (url) {
          setImageUrl(url.toString());
        }
      }
      fetchImage();
    }
  },[todo])


  return <div className="bg-white rounded-md space-y-2 drop-shadow-md"
    {...draggableProps} {...dragHandleProps} ref={innerRef} >
      
    <div className="flex justify-between items-center p-5" >
      <p>
        {todo.title}
      </p>
      <button className="text-red-400 hover:text-red-800" onClick={() => deleteTask(index, todo, id)} >
        <XCircleIcon className="ml-5 h-6 w-6" />
      </button>
    </div>
    {imageUrl && (
      <div className="h-full w-full rounded-b-md">
        <Image
        src={imageUrl}
        alt="task image"
        width={400}
        height={200}
        className="w-full object-contain rounded-b-md"
        />
      </div>
    )}
  </div>;
};

export default TodoCard;
