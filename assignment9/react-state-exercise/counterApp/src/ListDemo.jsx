import {useState} from "react";



function MemberTable({ members }) {

    const listOfMembers = members.map((member) => 
    
            <tr key={member.id}>
                <td> {member.name}</td>
                <td> {member.age}</td>
            </tr>
        ) 

    return (

        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            
            <tbody>
                {listOfMembers}
            </tbody>

        </table>
  );
}



function MemberDemo({members}) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members = {members}/>
    </div>
  );
}

export default function ListDemo() {

  const initialMembers = [{id : 1, name : "Peter", age: 18},
                          {id : 2, name : "Hanne", age: 35},
                          {id : 3, name : "Janne", age: 25},
                          {id : 4, name : "Holger", age: 22}];

  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}