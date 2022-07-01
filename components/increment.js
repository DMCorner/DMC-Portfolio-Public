import { useDispatch } from "react-redux";
import { increment } from "../slices/counterSlice";

function Increment() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())} class="bg-indigo-500">Increment state</button>
        </div>
    )
}

export default Increment