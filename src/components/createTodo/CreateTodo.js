import './createTodo.scss';

import arrow from '../../img/arrow.svg';

const CreateTodo = () => {

    return (
        <div className="createTodo">
            <div className="createTodo__wrapper">
                <button className="createTodo__arrow inactive"><img className='createTodo__img' src={arrow} alt="arrow"/></button>
                <input type="text" className="createTodo__input" />
            </div>
        </div>
    )
}

export default CreateTodo;