import { useState, useRef, useEffect } from "react";


const SortableList = () => {

    const [sports, setSports] = useState(["Football", "Basketball", "Baseball", "Soccer", "Hockey", "Running", "Chess", "Karate", "Kungfu"]);
    const itemRefs = useRef([]);
    const [dragItemIndex, setDragItemIndex] = useState();
    const [newPosition, setNewPosition] = useState();



    // don't swap, just rearrange the items like it's done on the Github Projects

    function handleDragStart(index) {
        return function (event) {
            setDragItemIndex(index)
        }
    };

    const handleDragOver = index => {
        return function (event) {
            event.preventDefault();
        }
    };

    const handleDrop = index => {
        return function move(event) {
            event.preventDefault();
            console.log(`Move Item ${dragItemIndex} To Position: ${index}`);
            const _sports = [...sports];
            const item =  _sports.splice(dragItemIndex, 1);
            _sports.splice(index, 0, item);
            setSports(_sports);
        }
    };


    // TO BE DELETED
    const handleDragEnter = index => {
        return (event) =>{
            console.log(index, event)
        }
    }


    return (
        <div>
            <h1>Favorite Sports</h1>
            <div className="list">
                {sports.map((sport, index) => (
                    <li
                        key={index}
                        ref={el => itemRefs.current[index] = el}
                        className="list-item"
                        draggable="true"
                        onDragStart={handleDragStart(index)}
                        onDragOver={handleDragOver(index)}
                        onDrop={handleDrop(index)}
                        onDragEnter = {handleDragEnter(index)}
                    >
                        <span>{index}</span>
                        <h4>{sport}</h4>
                    </li>
                ))}
            </div>
        </div>
    )
};

export default SortableList;