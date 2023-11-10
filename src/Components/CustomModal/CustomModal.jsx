// CustomModal.js
import React from 'react';
import PropTypes from 'prop-types';

const CustomModal = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="custom-modal-overlay" onClick={onClose}>
                    <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={onClose}>
                            &times;
                        </span>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default CustomModal;
