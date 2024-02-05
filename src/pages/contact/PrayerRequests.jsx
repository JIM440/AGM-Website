import React from 'react';
import FormContact from './component/Form';

const PrayerRequests = () => {
  return (
    <>
      {/* <!-- form --> */}
      <FormContact
        header="Prayer Requests"
        text="Our prayer team is ready to stand with you in faith Please keep in mind that due to the high volume of prayer requets we receive, we may not be able to respond immediately. Rest assured that your request will be seen and conveyed to our prayer team."
      />
    </>
  );
};

export default PrayerRequests;
