import axios from 'axios';

function MemberAPI () {
  const BASE_URL = 'https://localhost:8080/members';
  const createMember = async () => {
    const response = await axios.post(BASE_URL);
    return response.data;
  }

  const findMemberById = async (memberId) => {
    const response = await axios.get(BASE_URL, {
      params: {
        memberId: memberId
      }
    });
    return response.data;
  }

  const getMemberList = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }

  const modifyMember = async () => {
    const response = await axios.put(BASE_URL);
    return response.data;
  }

  const deleteMember = async () => {
    const response = await axios.delete(BASE_URL);
    return response.data;
  }

}

export default MemberAPI;