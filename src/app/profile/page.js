async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res2 = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res3 = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res4 = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data1 = await res.json();
    const resBody = await res.json();
    const resStatus = res.status;
    const resHeader = res.headers.get("cache-control");
    // const data2 = await res2.json();
    // const data3 = await res3.json();
    // const data4 = await res4.json();
    // return {data1: data1, data2: data2, data3: data3, data4: data4};
    // return data1;
    return {resBody: resBody, resHeader: resHeader, resStatus: resStatus};
  } catch (error) {
    throw new Error("sometingh went wrong");
  }
}

const ProfilePage = async () => {
  const data = await getData();
  return (
    <div>
      <h1>Thsi is Profile Page</h1>
      <p>Data: 1{JSON.stringify(data['resStatus'])}</p>
      {/* <p>Data: 2{JSON.stringify(data["data2"])}</p>
      <p>Data: 3{JSON.stringify(data["data3"])}</p>
      <p>Data: 4{JSON.stringify(data["data4"])}</p> */}
    </div>
  );
};

export default ProfilePage;
