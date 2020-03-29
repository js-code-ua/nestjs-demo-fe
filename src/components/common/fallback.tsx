import React from 'react';
import { Spin } from 'antd';

import './styles.scss';

export default function Fallback() {
    return (
        <div className="router-lazy-spin">
            <Spin tip="Loading..." />
        </div>
    )
}
