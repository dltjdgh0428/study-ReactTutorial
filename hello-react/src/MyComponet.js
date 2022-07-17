import React from 'react';
import PropTypes from 'prop-types';

const MyComponet = ({ name, favoriteNumber, children }) => {
    return <div>
        안녕하세요, {name} 입니다.<br/>
        chrildren 값은 {children}
        <br/>
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
};

MyComponet.defaultProps = {
    name : '이성호'
};

MyComponet.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponet;