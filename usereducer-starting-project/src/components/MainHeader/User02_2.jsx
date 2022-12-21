import React, {useContext} from "react";
import UserContext2 from "../../Store/user2-auth-context";

export default function User02_2() {
  const value = useContext(UserContext2);
  return (
    <React.Fragment>
      <h2>Trying it by passing value from react context with useContext hook</h2>
      <p>
        I am {value.employee} ({value.empId}) and I work for {value.employer}{" "}
        and I have to go to office for {value.workDaysPerMonth} days per month
      </p>
    </React.Fragment>
  );
}
