import React from 'react';
import styled from 'styled-components';

import AddEmployee from './AddEmployee';
import ShowEmployee from './ShowEmployee';

const Main = styled('div')`
    display: flex;
`;

//const basicContext = React.useContext();

const dataArray = [];

function Home() {
    const [data, setData] = React.useState(null);
    
    const callBack = (data) => {
        dataArray.push(data);
        setData(dataArray);
    };

    console.log('data', data);

    return (
        <>
        <Main>
            <AddEmployee callBack={callBack} />
        </Main>
        {
            data ? <ShowEmployee data={data} /> : null
        }
        </>
        
    );
}

export default Home;