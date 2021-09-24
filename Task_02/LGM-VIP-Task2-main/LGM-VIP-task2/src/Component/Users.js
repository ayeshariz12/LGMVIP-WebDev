import React, { useEffect, useState } from "react";
import "animate.css";

const Users = () => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  //Fetch data
  const fetchUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const result = await response.json();
    console.log(result.data);
    setLoading(false);
    setData(result.data);
  };
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 4000);
  }, []);
  return (
    <div>
      {Loading ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div class="spinner-grow text-info" role="status"></div>
        </div>
      ) : (
        <div className="container mt-3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h2 className="fw-bold pb-3"> Users </h2>
          </div>
          <div className="row pb-5">
            {Data.map((user, index) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 my-3">
                  <div className="card p-3 w-100 shadow" id={index}>
                    <div className="d-flex flex-column align-items-center">
                      <div className="image">
                        <img
                          src={user.avatar}
                          className="rounded-circle"
                          width="150"
                          alt=""
                        />
                      </div>
                      <div className="ml-3 w-100 my-3 text-center">
                        <h4 className="mb-0 mt-0">
                          {user.first_name} {user.last_name}
                        </h4>
                        <span className="text-info"> {user.email} </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
