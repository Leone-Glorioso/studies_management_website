import React, {Component} from "react";
import './StudentHome.css'
import Sidebar from "../Navbar_Sidebar/Sidebar";

class StudentHome extends Component {

    render() {
        return (
            <div>
                <Sidebar/>
                <div className="title">Τα μαθηματά μου</div>

                <table>
                    <tr>
                        <th>Κωδικός Μαθήματος</th>
                        <th>Τίτλος Μαθήματος</th>
                    </tr>
                    <tr>
                        <td>000000</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    </tr>
                    <tr>
                        <td>111111</td>
                        <td>ΧΧΧΧΧ ΧΧΧΧΧ</td>
                    </tr>
                </table>

            </div>

        )
    }

}

export default StudentHome