import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MemberAPI from '../../api/services/MemberAPI';
import axios from 'axios';

function MyPage () {
    const BASE_URL = 'https://localhost:8081/members';
    const [memberInfo, setMemberInfo] = useState([])

    const getMemberInfo = () => {
        memberInfo = MemberAPI.findMemberById(1);
        console.log(memberInfo);
    };

    const findMemberById = async (memberId) => {
        const response = await axios.get('http://localhost:8081/members?memberId=1');
        return response.data;
      }

    return(
        <>
            <Button as="input" value="Login" onClick={findMemberById} />
        </>
    )
}
export default MyPage;