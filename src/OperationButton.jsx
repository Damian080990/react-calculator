import PropTypes from "prop-types";
import { ACTIONS } from "./helpers";

export default function OperationButton({ dispatch, operation }) {
    return (
        //payload - wlasciwa wartosc - dane ktore przekazujemy podczas kliknniecia
        <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
            {operation}
        </button>
    );
}

OperationButton.propTypes = {
    dispatch: PropTypes.func.isRequired,
    operation: PropTypes.string.isRequired,
};