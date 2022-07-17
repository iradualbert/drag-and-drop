import { useState } from "react";


const SortableList = () => {

    const [sports, setSports] = useState(["Football", "Basketball", "Baseball", "Soccer", "Hockey", "Running", "Chess", "Karate", "Kungfu"]);
    const [dragItemIndex, setDragItemIndex] = useState();
    const [dragOverItemIndex, setDragOverItemIndex] = useState();

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


    // for the next position
    const handleDragEnter = index => {
        return (event) =>{
            setDragOverItemIndex(index);
            console.log("New Position: ", index, event)
        }
    }

    const handleDragLeave = index => {
        return event => {
            setDragOverItemIndex(undefined)
        }
    };

    const handleDragEnd = (event) => {
        setDragItemIndex(undefined);
        setDragOverItemIndex(undefined);
    };


    return (
        <div>
            <h1>Favorite Sports</h1>
            <div className="list">
                {sports.map((sport, index) => (
                    <li
                        key={index}
                        className={dragOverItemIndex=== index ? "list-item new-position": "list-item"}
                        draggable
                        onDragStart={handleDragStart(index)}
                        onDragOver={handleDragOver(index)}
                        onDrop={handleDrop(index)}
                        onDragEnter = {handleDragEnter(index)}
                        onDragLeave={handleDragLeave(index)}
                        onDragEnd={handleDragEnd}
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