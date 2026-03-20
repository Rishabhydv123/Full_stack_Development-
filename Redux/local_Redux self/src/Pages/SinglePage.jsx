/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadData, saveData } from '../Data/localStorage';
// import { singleUserData } from '../Redux/Api/Action';

export const SinglePage = () => {
  const params = useParams();
  console.log('params:', params);

  // const dispatch = useDispatch();

  const { userData } = useSelector((store) => store.user);
  console.log('🚀 ~ userData:', userData);

  let localVal = loadData('single');
  const [singlePage, setSinglePage] = React.useState(localVal || null);

  React.useEffect(() => {
    // dispatch(singleUserData(params.id));
    if (params.id) {
      let findID = userData.find((el) => el.id == params.id);
      if (findID) {
        setSinglePage(findID);
        saveData('single', findID);
      }
    }
  }, [params.id]);

  return (
    <>
      {singlePage && (
        <div
          key={singlePage.id}
          style={{
            border: '1px solid black',
            padding: '0.5rem',
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <img src={singlePage.avatar} alt={singlePage.first_name} />
          <h5>{singlePage.id}</h5>
          <p>
            {singlePage.first_name} - {singlePage.last_name}
          </p>
          <h4>{singlePage.email}</h4>
        </div>
      )}
    </>
  );
};