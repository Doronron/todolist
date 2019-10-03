import React from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';



const TodoList = (props) => {

	const { inputValue, changeInputValue, handleClick, handleDelete, list } = props;

	return (
			<div>
				<div>
					<input value={inputValue} onChange={changeInputValue}/>
					<button onClick={handleClick}>submit</button>
				</div>
				<ul>
						{
							list.map((item, index) => {
								return <li onClick={handleDelete.bind(this, index)} key={index}>{item}</li>
							})
						}
				</ul>
			</div>
		)
}



const mapStateToProps = (state) => {
	return {
		inputValue:  state.inputValue,
		list: state.list

	}

}
// store.dispatch, props
const mapDispatchToProps  = (dispatch) => {
	return {
		changeInputValue(e) {
			
			const action = getInputChangeAction(e.target.value);
			dispatch(action);
		}, 

		handleClick () {
			
			const action = getAddItemAction();
			dispatch(action);
		},
		handleDelete (index) {
			
			const action = getDeleteItemAction(index);
			dispatch(action);
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);



