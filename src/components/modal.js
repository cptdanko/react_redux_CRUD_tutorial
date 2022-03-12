import React from "react";
import PropTypes from 'prop-types';
import "./modal.css";

export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if(!this.props.show) {
            return null;
        }
        return <div className="modal"> 
                Message in a modal
                <div class="actions">
                <div>{this.props.children}</div>
                <button class="toggle-button" onClick={this.onClose}>
                    close
                </button>
                </div>
             </div>;
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};